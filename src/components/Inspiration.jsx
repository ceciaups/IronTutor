import {useState, useEffect} from "react";

export default function Inspiration() {
  return (
    <section id="sec-inspiration">
      <h2>Inspiring Quotes</h2>
      <div class="quotes-wrapper">
        <div class="quotes quotes-left">
          <img src="public/steve.jpg"/>
          <img src="public/tom.png"/>
          <img src="public/quote.jpg"/>
        </div>
        <div class="quotes quotes-right">
          <img src="public/albert.jpg"/>
          <img src="public/alan.jpg"/>
          <img src="public/ali.jpg"/>
        </div>
      </div>
    </section>
  )
}