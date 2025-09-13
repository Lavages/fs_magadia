from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.CharField(max_length=255)
    description = models.TextField()
    countInStock =models.IntegerField()
    image = models.ImageField(upload_to="products_images/")
    createdAt = models.DateTimeField(auto_now_add=True)

class CartUser(models.Model):
    cart_id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    qty = models.IntegerField()
    createdAt = models.DateTimeField(auto_now_add=True)


class PaymentMethod(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(blank=True, null=True)
    paymongo_payment_id = models.CharField(max_length=255, blank=True, null=True)
    paymongo_status = models.CharField(max_length=255, blank=True, null=True)

class ShippingAddress(models.Model):
    payment = models.OneToOneField(PaymentMethod, on_delete=models.CASCADE, related_name='shipping_address')
    full_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=255)


class OrderItem(models.Model):
    payment = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_items')
    qty = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)


