import React, { useState } from 'react';
import "../App.scss";
import Header from "./Header";
import Button from "./Button";
import Search from "./Search";
import FoodItem from "./FoodItem";

const handleClick = () => console.log("Clicked");

function App() {

  const [pageState, setPageState] = useState("Dashboard");

  const handlePageStateChange = (newPageState) => {
    setPageState(newPageState);
  }

  return (
    <div className="container">
      <Header
      pageState={pageState}
      onPageStateChange={handlePageStateChange}
      />
      <Search />
      <Button
        onClick={handleClick}
        text="Create a Food"
        className="fullw-btn"
      />
      <h2>Created Foods</h2>
      <FoodItem
        foodName="Apple"
        calorieValue={52}
        fatValue={3}
        carbValue={96}
        proteinValue={1}
        foodMeasurement="Apple"
        foodImgPath="src/assets/apple.webp"
      />
    </div>
  );
}

export default App;
