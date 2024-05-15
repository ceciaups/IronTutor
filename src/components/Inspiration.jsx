import {useState, useEffect} from "react";

export default function Inspiration() {
  return (
    <section id="sec-inspiration">
      <h2>Inspiring Quotes</h2>
      <div className="quotes-wrapper">
        <div className="quotes quotes-left">
          <img src="steve.jpg"/>
          <img src="thomas.png"/>
          <img src="quote.jpg"/>
        </div>
        <div className="quotes quotes-right">
          <img src="albert.jpg"/>
          <img src="alan.jpg"/>
          <img src="ali.jpg"/>
        </div>
      </div>
    </section>
  )
}