import React from "react";

export default function Info() {
  return (
    <div className="cont">
      <h1 className="name">Random Guy</h1>
      <h3 className="work">Front-End Developer</h3>
      <p className="website">random-Guys.website</p>
      <div className="btns-cont">
        <button className="email-btn btn">
          <span class="material-symbols-outlined">mail</span>
          Email
        </button>
        <button className="github-btn btn">
          <span class="material-symbols-outlined">code</span>
          GitHub
        </button>
      </div>
    </div>
  )
}