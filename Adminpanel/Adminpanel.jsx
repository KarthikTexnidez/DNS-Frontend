import { useState } from "react";
import "./Adminpanel.css";
import axios from "axios";

const Adminpanel = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [category, setCategory] = useState("");

  const dataSubmit = (e) => {
    e.preventDefault();

    const TotalValue = {
      category,
      food: [
        {
          name,
          price: parseFloat(price),
          description: des,
        },
      ],
    };

    console.log("Data Sent:", TotalValue);

    axios
      .post("https://dns-backend-1.onrender.com/admin", TotalValue)
      .then((result) => {
        console.log("Response from backend:", result.data);
        alert("Data added , Please Refresh Web Page");
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="main-container">
      <div className="container-2">
        <div className="form">
          <input
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            type="text"
            className="inputfield"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            className="inputfield"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            type="number"
            className="inputfield"
          />
          <input
            onChange={(e) => setDes(e.target.value)}
            placeholder="Description"
            type="text"
            className="inputfield"
          />
          <button className="loginbtn" onClick={dataSubmit}>
            Add Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminpanel;
