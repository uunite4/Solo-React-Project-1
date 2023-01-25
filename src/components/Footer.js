import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <button className="footer-btns red">
        <span class="material-symbols-outlined">favorite</span>
      </button>
      <button className="footer-btns green">
        <span class="material-symbols-outlined">add_circle</span>
      </button>
      <button className="footer-btns blue">
        <span class="material-symbols-outlined">sms</span>
      </button>
    </div>
  )
}