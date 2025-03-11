import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import img1 from "./viratkohliimgwinter.jpg";
import img2 from "./WhatsApp Image 2025-01-27 at 09.57.43.jpeg";
import img3 from "./accesories.jpeg";
import img4 from "./house's plant.webp";
import img5 from "./dome-deco-pax-chair22.jpg";
import img6 from "./fridge.webp";
import img7 from "./sam3.jpg";
import img8 from "./homeapp.jpg";
import img9 from "./mattheram_wearingaA158WA-1DFcasio.jpg";

const ShopEra = () => {
  const products = [
    { id: 1, name: "Refrigerator", price: 16500, img: img6 },
    { id: 2, name: "Samsung S24 Ultra", price: 81000, img: img7 },
    { id: 3, name: "Household Items", price: 8500, img: img8 },
    { id: 4, name: "Casio", price: 3800, img: img9 },
  ];

  const [cart, setCart] = useState(
    products.map((product) => ({ ...product, total: 0, quantity: 0 }))
  );
  const [grandTotal, setGrandTotal] = useState(0);

  const addPrice = (id) => {
    setCart((prevCart) => {
      let newGrandTotal = grandTotal;
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          const newTotal = item.total + item.price;
          const newQuantity = item.quantity + 1;
          newGrandTotal += item.price;
          return { ...item, total: newTotal, quantity: newQuantity };
        }
        return item;
      });
      setGrandTotal(newGrandTotal);
      return updatedCart;
    });
  };

  const subtractPrice = (id) => {
    setCart((prevCart) => {
      let newGrandTotal = grandTotal;
      const updatedCart = prevCart.map((item) => {
        if (item.id === id && item.quantity > 0) {
          const newTotal = item.total - item.price;
          const newQuantity = item.quantity - 1;
          newGrandTotal -= item.price;
          return { ...item, total: newTotal, quantity: newQuantity };
        }
        return item;
      });
      setGrandTotal(newGrandTotal);
      return updatedCart;
    });
  };

  return (
    <div className="contner">
      <header>
        <div className="nvbr">
          <div className="shplog">
            <div className="log"></div>
          </div>
          <div className="se-bar">
            <select>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="clothes">Clothes</option>
              <option value="jewellery">Jewellery</option>
            </select>
            <input type="text" placeholder="Search Shopera.in" />
            <div className="se-con">
              <div className="se">
                <FaSearch />
              </div>
            </div>
          </div>

          <div className="na-liks">
            <a href="/">Login</a>
            <a href="/">Sign-up</a>
            <a href="/">Explore</a>
            <a href="/">New</a>
          </div>
        </div>
      </header>

      <div className="m-container">
        <div className="main-container">
          <div className="offer-text">
            <p className="pulse-text">
              EXTRA 15% OFF ON ORDERS ABOVE ₹3999* FOR HIM | FOR HER | FOR KIDS
              Auto-applied at checkout | *Exclusions apply
            </p>
          </div>

          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={img1} className="d-block w-100" alt="First Slide" id="carousel-img" />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={img2} className="d-block w-100" alt="Second Slide" id="carousel-img" />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="Third Slide" id="carousel-img" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container">
        <div className="leftside">
          <span>Editors Picks</span>
          <h2>Discover Original Items</h2>
          <h2>from Shopera and</h2>
          <h2>Save Up to 60%!</h2>
          <button>Shop Now</button>
        </div>

        <div className="rightside">
          <div className="rightside-container">
            <div className="card">
              <img src={img4} alt="Buy Bed Sheets" className="rightsideimg" />
              <div className="card-text">
                <h3>Buy Plants</h3>
              </div>
            </div>
            <div className="card">
              <img src={img5} alt="Buy Plants" className="rightsideimg" />
              <div className="card-text">
                <h3>Buy Chairs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="imgcardbox">
          <div className="card-container">
            {cart.map((item) => (
              <div key={item.id} className="cards">
                <img src={item.img} alt={item.name} />
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total for this item: ₹{item.total}</p>
                  <button onClick={() => addPrice(item.id)}>Add To Cart</button>
                  <button onClick={() => subtractPrice(item.id)} disabled={item.quantity === 0}>
                    Reduce
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="grand-total">Grand Total: ₹{grandTotal}</h2>
      </div>
      {/* <h2 className="grand-total">Grand Total: ₹{grandTotal}</h2> */}
      <div className="footer">
      <div className="section">
        <h3>Support</h3>
        <ul>
          <li><a href="#contact">Contact us</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#promotions">Promotions & Sale</a></li>
          <li><a href="#account">My Account</a></li>
          <li><a href="#track-order">Track Order</a></li>
          <li><a href="#exchange">Exchange & Return Policy</a></li>
        </ul>
      </div>
      <div className="section">
        <h3>About</h3>
        <ul>
          <li><a href="#company">Company</a></li>
          <li><a href="#news">Corporate News</a></li>
          <li><a href="#press">Press Center</a></li>
          <li><a href="#investors">Investors</a></li>
        </ul>
      </div>
      <div className="section">
        <h3>Stay up to date</h3>
        <div className="social-icons">
          <a href="#youtube">YouTube</a>
          <a href="#twitter">Twitter</a>
          <a href="#pinterest">Pinterest</a>
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Shopera. All rights reserved.
      </div>
    </div>
    </div>
  );
};

export default ShopEra;
