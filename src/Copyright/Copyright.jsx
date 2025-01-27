import { useState, useEffect } from 'react';
import './Copyright.css';

const Copyright = () => {
  const [data, setData] = useState("© 2024 Deepnetsoft Solutions. All rights reserved.");

  const updateHeading = () => {
    if (window.innerWidth <= 1000) {
      setData("© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.");
    } else {
      setData("© 2024 Deepnetsoft Solutions. All rights reserved.");
    }
  };

  useEffect(() => {

updateHeading();


    window.addEventListener("resize", updateHeading);


    return () => {
      window.removeEventListener("resize", updateHeading);
    };
  }, []);

  return (
    <div className="copy-right">
      <div className="left">
        <h1>{data}</h1>
      </div>
      <div className="right">
        <h2>Terms & Conditions</h2>
        <h3>Privacy Policy</h3>
      </div>
    </div>
  );
};

export default Copyright;