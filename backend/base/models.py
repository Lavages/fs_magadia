from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Product(models.Model):
    """
    Represents a product in the store.
    """
    # Django automatically creates an 'id' field as the primary key.
    # We will let Django handle the primary key.
    product_name = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.CharField(max_length=255)
    description = models.TextField()
    countInStock = models.IntegerField(default=0)
    image = models.ImageField(upload_to="products_images/", blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name

class CartItem(models.Model):
    """
    Represents a single item in a user's shopping cart.
    This model handles the many-to-many relationship between User and Product with an extra 'qty' field.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cart_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items')
    qty = models.IntegerField(default=1)

    class Meta:
        # Ensures that a user can only have one of a specific product in their cart.
        unique_together = ('user', 'product')

    def __str__(self):
        return f'{self.qty} x {self.product.product_name} for {self.user.username}'

class PaymentMethod(models.Model):
    """
    Represents an order or a payment transaction.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(blank=True, null=True)
    paymongo_payment_id = models.CharField(max_length=255, blank=True, null=True)
    paymongo_status = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f'Payment {self.id} by {self.user.username}'

class ShippingAddress(models.Model):
    """
    Stores the shipping address for a specific payment/order.
    """
    payment = models.OneToOneField(PaymentMethod, on_delete=models.CASCADE, related_name='shipping_address')
    full_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.full_name}, {self.address}'

class OrderItem(models.Model):
    """
    Represents an item within a specific order (payment).
    """
    payment = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_items')
    qty = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.qty} x {self.product.product_name} in order {self.payment.id}'
