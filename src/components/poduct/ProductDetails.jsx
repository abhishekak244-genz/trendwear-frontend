import React, { useState, useEffect } from 'react'
import { toast } from "sonner";
import ProductGrid from './ProductGrid';

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion.",
    brand: "FashionBrand",
    material: "Leather",

    sizes: ["S", "M", "L", "XL"],

    colors: ["Red", "Black"],

    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1"
        },

        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 2"
        },

        {
            url: "https://picsum.photos/500/500?random=3",
            altText: "Stylish Jacket 3"
        }
    ]
};
const similarProducts = [
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=7" }],
    },
]
const ProductDetails = () => {

    const [mainImage, setMainImage] = useState(null);

    const [selectedSize, setSelectedSize] = useState("");

    const [selectedColor, setSelectedColor] = useState("");

    const [quantity, setQuantity] = useState(1);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // Set Default Main Image
    useEffect(() => {

        if (selectedProduct?.images?.length > 0) {

            setMainImage(selectedProduct.images[0].url);

        }

    }, []);

    // Quantity Handler
    const handleQuantityChange = (action) => {

        if (action === "plus") {

            setQuantity((prev) => prev + 1);

        }

        if (action === "minus" && quantity > 1) {

            setQuantity((prev) => prev - 1);

        }
    };

    // Add To Cart
    const handleAddToCart = () => {

        if (!selectedSize || !selectedColor) {

            toast.error(
                "Please select a size and color before adding to cart.",
                {
                    duration: 1000,
                }
            );

            return;
        }

        // Disable Button
        setIsButtonDisabled(true);

        // Success Toast
        setTimeout(() => {

            toast.success(
                "Product added to cart successfully!",
                {
                    duration: 1000,
                }
            );

            // Enable Again
            setIsButtonDisabled(false);

        }, 1000);
    };

    return (

        <div className="py-10 px-4">

            <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-xl">

                <div className="flex flex-col md:flex-row gap-10">

                    {/* Left Side */}
                    <div className="md:w-1/2 flex gap-4">

                        {/* Desktop Thumbnails */}
                        <div className="hidden md:flex flex-col space-y-4">

                            {selectedProduct.images.map((image, index) => (

                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.altText || `Thumbnail ${index}`}
                                    onClick={() => setMainImage(image.url)}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition
                                    
                                    ${mainImage === image.url
                                            ? "border-black"
                                            : "border-gray-300"
                                        }`}
                                />

                            ))}

                        </div>

                        {/* Main Image */}
                        <div className="flex-1">
                            {mainImage && (
                                <img
                                    src={mainImage}
                                    alt="Main Product"
                                    className="w-full h-150 object-cover rounded-xl transition duration-500 hover:scale-[1.02]"
                                />
                            )}

                            {/* Mobile Thumbnails */}
                            <div className="md:hidden flex overflow-x-scroll space-x-4 mt-4">

                                {selectedProduct.images.map((image, index) => (

                                    <img
                                        key={index}
                                        src={image.url}
                                        alt={image.altText || `Thumbnail ${index}`}
                                        onClick={() => setMainImage(image.url)}
                                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2
                                        
                                        ${mainImage === image.url
                                                ? "border-black"
                                                : "border-gray-300"
                                            }`}
                                    />

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2">

                        {/* Product Name */}
                        <h1 className="text-3xl font-bold mb-3">
                            {selectedProduct.name}
                        </h1>

                        {/* Price */}
                        <div className="flex items-center gap-4 mb-5">

                            <p className="text-2xl font-semibold text-black">
                                ${selectedProduct.price}
                            </p>

                            <p className="text-lg text-gray-400 line-through">
                                ${selectedProduct.originalPrice}
                            </p>

                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {selectedProduct.description}
                        </p>

                        {/* Colors */}
                        <div className="mb-6">

                            <p className="text-gray-700 font-medium mb-3">
                                Color:
                            </p>

                            <div className="flex gap-3">

                                {selectedProduct.colors.map((color) => (

                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 transition
                                        
                                        ${selectedColor === color
                                                ? "border-black scale-110"
                                                : "border-gray-300"
                                            }`}
                                        style={{
                                            backgroundColor:
                                                color.toLowerCase(),
                                        }}
                                    />

                                ))}

                            </div>

                        </div>

                        {/* Sizes */}
                        <div className="mb-6">

                            <p className="text-gray-700 font-medium mb-3">
                                Size:
                            </p>

                            <div className="flex gap-3">

                                {selectedProduct.sizes.map((size) => (

                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2 border rounded-lg transition
                                        
                                        ${selectedSize === size
                                                ? "bg-black text-white border-black"
                                                : "border-gray-300 hover:border-black"
                                            }`}
                                    >
                                        {size}
                                    </button>

                                ))}

                            </div>

                        </div>

                        {/* Quantity */}
                        <div className="mb-6">

                            <p className="text-gray-700 font-medium">
                                Quantity:
                            </p>

                            <div className="flex items-center space-x-4 mt-2">

                                <button
                                    onClick={() => handleQuantityChange("minus")}
                                    className="px-3 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300 transition"
                                >
                                    -
                                </button>

                                <span className="text-lg font-medium">
                                    {quantity}
                                </span>

                                <button
                                    onClick={() => handleQuantityChange("plus")}
                                    className="px-3 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300 transition"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                        {/* Add To Cart */}
                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`py-3 px-6 rounded w-full mb-4 transition
                            
                            ${isButtonDisabled
                                    ? "bg-gray-400 cursor-not-allowed text-white"
                                    : "bg-black hover:bg-gray-800 text-white"
                                }`}
                        >
                            {isButtonDisabled ? "ADDING..." : "ADD TO CART"}
                        </button>

                        {/* Buy Now
                        <button className="border border-black py-3 px-6 rounded w-full hover:bg-black hover:text-white transition">
                            BUY NOW
                        </button> */}

                        {/* Product Info */}
                        <div className="border-t mt-8 pt-6 space-y-3 text-gray-600">

                            <p>
                                <span className="font-medium text-black">
                                    Brand:
                                </span>{" "}
                                {selectedProduct.brand}
                            </p>

                            <p>
                                <span className="font-medium text-black">
                                    Material:
                                </span>{" "}
                                {selectedProduct.material}
                            </p>

                        </div>

                    </div>
                </div>

                {/* You May Also Like */}
                <div className='mt-20'>

                    <h2 className='text-3xl text-center font-bold mb-10'>
                        You May Also Like
                    </h2>
                    <ProductGrid products={similarProducts} />


                </div>

            </div>

        </div>
    )
}

export default ProductDetails