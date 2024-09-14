"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import "../css/home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]); // Track multiple categories

  useEffect(() => {
    const fetchProducts = async () => {
      let apiURL = "https://fakestoreapi.com/products";

      if (selectedCategories.length > 0) {
        // Fetch products for selected categories
        const promises = selectedCategories.map(category => 
          fetch(`https://fakestoreapi.com/products/category/${category}`).then(res => res.json())
        );
        const results = await Promise.all(promises);
        // Flatten and combine all results into a single array
        const combinedProducts = results.flat();
        setProducts(combinedProducts);
      } else {
        // Fetch all products when no category is selected
        const res = await fetch(apiURL);
        const data = await res.json();
        setProducts(data);
      }
    };
    fetchProducts();
  }, [selectedCategories]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleAddFavorite = (productId) => {
    console.log(`Product ${productId} added to favorites`);
  };

  const toggleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleUnselectAll = () => {
    setSelectedCategories([]);
  };

  const totalProductCount = products.length;

  const filterOptions = {
    "IDEAL FOR": [
      { label: "Men", category: "men's clothing" },
      { label: "Women", category: "women's clothing" },
      { label: "Jewelery", category: "jewelery" },
      { label: "Electronics", category: "electronics" },
    ] ,
    "OCCASION": ["Work", "Casual", "Party"],
    "FABRIC": ["Cotton", "Wool", "Silk"],
    "SEGMENT": ["Formal", "Casual", "Sports"],
    "SUITABLE FOR": ["Winter", "Summer", "All Season"],
    "MATERIAL": ["Leather", "Denim", "Polyester"],
    "PATTERNS": ["Solid", "Striped", "Checked"],
  };

  return (
    <div>
      <div className="home-text">
        <span className="home-text-primary">DISCOVER OUR PRODUCTS</span>
        <h4 className="home-text-secound">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h4>
      </div>
      <div className="top-bar">
        <div className="filter-section">
          <span className="filter-text">
            <span className="product-count">
              {`${totalProductCount} ITEMS `}
            </span>
            <span
              className={`filter-arrow ${sidebarOpen ? 'open' : ''}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? ' ← HIDE FILTER' : ' SHOW FILTER →'}
            </span>
          </span>
        </div>
        <div className="recommended">
          <select id="recommendations">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">Newest First</option>
            <option value="popular">Popular</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="content-wrapper">
        <aside className={`filter-sidebar ${sidebarOpen ? 'open' : ''}`}>
        
        <p className="custom"><input type="checkbox" value=""/>CUSTOMIZEBLE</p>

        {selectedCategories.length > 0 && (
            <h4 className="unselect-all" onClick={handleUnselectAll}>
              Unselect All
            </h4>
          )}

          {Object.keys(filterOptions).map((category) => (
            <div key={category} className="filter-category">
              <div
                className="filter-category-title"
                onClick={() => setActiveFilter(activeFilter === category ? null : category)}
              >
                {category}
                <span className={`arrow-icon ${activeFilter === category ? 'up' : 'down'}`}></span>
              </div><span className="option-all">All</span>
              {activeFilter === category && (
                <div className="filter-options">
                  {filterOptions[category].map((option) => (
                    <label key={option.label || option} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(option.category)}
                        onChange={() => toggleCategorySelection(option.category)}
                      />
                      {option.label || option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Unselect All Button */}
          
        </aside>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <h2 className="product-title">{product.title}</h2>
              {isLoggedIn ? (
                <div className="product-info">
                  <p>Price: ${product.price}</p>
                  <p>Rating: {product.rating.rate}</p>
                </div>
              ) : (
                <div className="login-message">
                  <p>
                    <span onClick={handleLogin}>Sign in</span> or create an
                    account to see the price
                  </p>
                  <span
                    className="favorite-icon"
                    onClick={() => handleAddFavorite(product.id)}
                  ></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
