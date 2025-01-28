import menuoptions from "./assets/Rectangle 107.png";
import fooditembanner from "./assets/food-items-banner.png";
import { useEffect, useState } from "react";
import leftimg from "./assets/image 39 (1) 1.png";
import rightimg from "./assets/cocktail1 1.png";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner"; // Import the loader

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");
  const [menuItems, setMenuItems] = useState({
    food: [],
    drinks: [],
    brunch: [],
  });
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get("https://dns-backend-1.onrender.com/data")
      .then((result) => {
        setMenuItems((prevState) => ({
          ...prevState,
          food: result.data[0]?.food || [],
          drinks: result.data[0]?.drinks || [],
          brunch: result.data[0]?.brunch || [],
        }));
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <>
      <div className="menu-options">
        <div className="menu-buttons">
          <button
            onClick={() => {
              setSelectedOption(menuItems.food);
              setSelectedButton("FOOD");
            }}
            style={{
              backgroundColor: selectedButton === "FOOD" ? "#0796EF" : "",
            }}
          >
            FOOD
          </button>
          <button
            onClick={() => {
              setSelectedOption(menuItems.drinks);
              setSelectedButton("DRINKS");
            }}
            style={{
              backgroundColor: selectedButton === "DRINKS" ? "#0796EF" : "",
            }}
          >
            DRINKS
          </button>
          <button
            onClick={() => {
              setSelectedOption(menuItems.brunch);
              setSelectedButton("BRUNCH");
            }}
            style={{
              backgroundColor: selectedButton === "BRUNCH" ? "#0796EF" : "",
            }}
          >
            BRUNCH
          </button>
        </div>
        <img src={menuoptions} alt="" />
      </div>

      <div className="food-items">
        <div className="food-list">
          <div className="food-heading">
            <div className="foood-heading">
              <h3>TODAY'S SPECIALS</h3>
            </div>
            <div className="foood-lists">
              {loading ? ( 
                <div className="loader-container">
                  <RotatingLines
                    strokeColor="#0796EF"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                  />
                </div>
              ) : selectedOption.length > 0 ? (
                <ul>
                  {selectedOption.map((item, index) => (
                    <li key={index}>
                      <h4>
                        {item.name}.........$ {item.price}
                      </h4>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Click Menu Options for View Today,s Specials</p>
              )}
            </div>
          </div>
          <img src={leftimg} id="leftimg" alt="" />
          <img src={rightimg} id="rightimg" alt="" />
        </div>
        <img src={fooditembanner} alt="" />
      </div>
    </>
  );
};

export default Menu;
