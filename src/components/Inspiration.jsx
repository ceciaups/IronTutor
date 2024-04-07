import {useState, useEffect} from "react";

export default function Inspiration() {
  return (
    <section id="sec-inspiration">
      <h2>Inspiring Quotes</h2>
      <div className="quotes-wrapper">
        <div className="quotes quotes-left">
          <img src="public/steve.jpg"/>
          <img src="public/tom.png"/>
          <img src="public/quote.jpg"/>
        </div>
        <div className="quotes quotes-right">
          <img src="public/albert.jpg"/>
          <img src="public/alan.jpg"/>
          <img src="public/ali.jpg"/>
        </div>
      </div>
    </section>
  )
}