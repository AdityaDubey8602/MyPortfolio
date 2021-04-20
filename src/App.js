import React from 'react';

//Components
import MyNavbar from "./components/my-navbar/mynavbar.component.jsx";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/title-message.component";

import './App.css';


const App = () => {
  return (
    (<div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>)
  );

}

export default App;
