import React from "react";

export default function About(props) {
  return (
    <div className="container mt-0 text-center" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>
      <h2 >About Us</h2>
      <p>TextUtils is atext analyzer app. You can used to manipulate your text according to your need.</p>
    </div>
  );
}
