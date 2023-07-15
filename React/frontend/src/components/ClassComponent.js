import React from "react";

// import hellowolrd component
import HelloWorld from "./HelloWorld";

// import style
import "./ClassComponent.css";

let user = {
  name: "Swam Htet",
};

let photo = {
  className: "photo",
  alt: "photo in react",
  width: "1000px",
  height: "auto",
  url: "",
};

export default class ClassComponent extends React.Component {
  render() {
    return (
      <div className={"class-component"}>
        <h1>Class Components</h1>
        <p>This is user name {user.name}</p>
        {/* <HelloWorld /> */}
        <img
          className={photo.className}
          alt={photo.alt}
          src="zhttps://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpgs"
          // first {} of JSX, second {} for object 
          style={{ width: photo.width, height: photo.height }}
        ></img>
      </div>
    );
  }
}
