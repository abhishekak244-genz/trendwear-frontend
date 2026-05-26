import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {

  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Product Data
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },

    {
      _id: "2",
      name: "Casual Sweater",
      price: 80,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Casual Sweater",
        },
      ],
    },

    {
      _id: "3",
      name: "Modern Hoodie",
      price: 95,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Modern Hoodie",
        },
      ],
    },

    {
      _id: "4",
      name: "Classic Outfit",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Classic Outfit",
        },
      ],
    },

    {
      _id: "5",
      name: "Winter Collection",
      price: 170,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Winter Collection",
        },
      ],
    },
  ];

  // Scroll Function
  const scroll = (direction) => {

    const scrollAmount = direction === "left" ? -350 : 350;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Update Buttons
  const updateScrollButtons = () => {

    const container = scrollRef.current;

    if (container) {

      const leftScroll = container.scrollLeft;

      const rightScrollable =
        container.scrollWidth >
        leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  // Scroll Listener
  useEffect(() => {

    const container = scrollRef.current;

    if (container) {

      container.addEventListener("scroll", updateScrollButtons);

      updateScrollButtons();

      return () =>
        container.removeEventListener(
          "scroll",
          updateScrollButtons
        );
    }

  }, []);

  return (
    <section className="container mx-auto py-14 px-4 relative">

      {/* Heading */}
      <div className="text-center mb-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore New Arrivals
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
          Discover the latest styles straight off the runway,
          freshly added to keep your wardrobe on the cutting
          edge of fashion.
        </p>

      </div>

      {/* Buttons */}
      <div className="absolute right-4 top-10 flex space-x-2 z-10">

        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`p-2 rounded-full border bg-white shadow transition
          ${!canScrollLeft
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-black hover:text-white text-black"
            }`}
        >
          <FiChevronLeft className="text-2xl" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`p-2 rounded-full border bg-white shadow transition
          ${!canScrollRight
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-black hover:text-white text-black"
            }`}
        >
          <FiChevronRight className="text-2xl" />
        </button>

      </div>

      {/* Scrollable Products */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
      >

        {newArrivals.map((product) => (

          <div
            key={product._id}
            className="min-w-full sm:min-w-[48%] lg:min-w-[30%] relative overflow-hidden rounded-xl group cursor-pointer"
          >

            {/* Product Image */}
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-125 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

            {/* Product Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm text-white p-5 rounded-b-xl transition-all duration-500 group-hover:bottom-4">

              <Link to={`/product/${product._id}`}>

                <h4 className="font-semibold text-xl transform transition duration-500 group-hover:translate-x-2">
                  {product.name}
                </h4>

                <p className="mt-2 text-sm transform transition duration-500 group-hover:translate-x-2">
                  ${product.price}
                </p>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default NewArrivals;