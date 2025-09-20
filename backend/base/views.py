from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status

from rest_framework.permissions import IsAuthenticated 
from rest_framework_simplejwt.tokens import RefreshToken 




from .models import Product, CartUser, PaymentMethod, ShippingAddress, OrderItem
from .serializer import ProductSerializer, RegisterSerializer, UserSerializer, CartItemSerializer, CheckoutSerializer, ShippingAddressSerializer, OrderItemSerializer, OrderSerializer

".models"
# Create your views here.


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def get_product_details(request, pk):
    product = get_object_or_404(Product, pk=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User Registered Succesfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def logout_user(request):
    refresh_token = request.data.get('refresh')
    if not refresh_token:
        return Response({'error': 'Refrseh Token is rquired'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        token = RefreshToken(refresh_token)
        token.blacklist()
    except Exception:
        return Response({'error': 'Invalid Refresh Token'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def profile_view(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

#create cart
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request):
    serializer = CartItemSerializer(data=request.data)
    if serializer.is_valid():
        product = serializer.validated_data['product']
        qty = serializer.validated_data['qty']
        cart_item, created = CartUser.objects.get_or_create(
            user = request.user,
            product = product,
            defaults={'qty': qty}
        )
        if not created:
            cart_item.qty += qty
            cart_item.save()
        return Response(CartItemSerializer(cart_item).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Read cart
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_cart_items(request):
    items = CartUser.objects.filter(user=request.user)
    serializer = CartItemSerializer(items, many=True)
    return Response(serializer.data)

#Update cart
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_cart_items(request, cart_id):
    cart_item = get_object_or_404(CartUser, pk=cart_id, user=request.user)
    serializer = CartItemSerializer(cart_item, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Delete Cart
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_cart_item(request, cart_id):
    cart_item = get_object_or_404(request, cart_id)
    cart_item.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)