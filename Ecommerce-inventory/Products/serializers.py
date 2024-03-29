
from rest_framework import serializers
from Products.models import *

class CategoriesSerializers(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=False, use_url=True, required=False)
    class Meta:
        model = Categories
        #fields = ('category_name','slug','image','category_code','is_active')
        fields="__all__"
        depth = 2


class SubCategoriesSerializers(serializers.ModelSerializer):
    #url = serializers.HyperlinkedIdentityField(view_name="Categories:categories-detail")
    image = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=False, use_url=True, required=False)
    categories = CategoriesSerializers(many=True, read_only=True)
    class Meta:
        model = Sub_Categories
        #fields = ( 'category','sub_category_name', 'slug', 'image', 'description', 'is_active',)
        fields="__all__"
        depth = 1

# class ProductImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product_images
#         fields = "__all__"




# class DiscountSerial(serializers.ModelSerializer):
#     class Meta:
#         model = discount
#         fields = "__all__"


class SupplierSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Supplier
        fields = '__all__'
       


class BrandSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Brand
        fields = '__all__'

class CountriesSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Countreies
        fields = '__all__'
        

class StockSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Stock
        fields = '__all__'


class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta: 
        model= ProductType
        fields = '__all__'
       
class Product_imagesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product_images
        fields = ('image', )


class ProductsSerializers(serializers.ModelSerializer):
   
    # same name as related_name field
    product_image = Product_imagesSerializer(many=True, read_only=True)
    class Meta:
        model= Products
        fields = "__all__"

    # def create(self, validated_data):
    #     print(validated_data)
    #     p_img = validated_data.pop('product_image')
    #     print('find picture',p_img)
    #     product = Products.objects.create(**validated_data)
    #     print('find picture',product)
    #     for img in p_img:
    #         Product_images.objects.create(product=product, **img)
    #     return product
  

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"
        depth = 1

class CartProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartProduct
        fields = "__all__"
        depth = 1

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"
        depth = 1

