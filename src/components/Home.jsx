import React from 'react';

export default function Home() {
  return (
    <section id="sec-home">
      {/* <div id="hero-wrapper"> */}
        <div id="hero-3d">
          <img className="hero-image" src="public/home.jpg"/>
        </div>
        <div className="hero-text">
          <h1>IRON TUTOR</h1>
          <button>Learn More</button>
        </div>
      {/* </div> */}
      <div id="home-wrapper">
        <div id="home-benefit">
          <h2>BENEFITS OF STUDYING AT IRON TUTOR</h2>
          <p>Since 2002, Iron Tutor has served the community of Scarborough, Markham, Richmond Hill and surrounding areas,<br/>helping Junior and High School students from Gr 2 to 12 to excel in Mathematics, Science and English.</p>
        </div>
        <div id="home-pros-wrapper">
          <div className="home-pros home-pros1">
            <img src="public/home1.jpg" alt="Improved Results"/>
            <div>
              <h3>Improved Results</h3>
              <p>The Alumni of our Academy not only<br/>go to major renowned<br/>Universities/Colleges in North<br/>America, they're more prepared and<br/>transitioned better into the next level<br/>due to the solid foundation they have<br/>built through us.</p>
            </div>
          </div>
          <div className="home-pros home-pros2">
            <img src="public/home2.jpg" alt="Friendly Staff"/>
            <div>
              <h3>Friendly Staff</h3>
              <p>All of our staff are academically<br/>strong and caring. We are excited to<br/>help with any questions, so feel free<br/>to seek assistance.</p>
            </div>
          </div>
          <div className="home-pros home-pros3">
            <img src="public/home3.jpg" alt="Trusted Teaching Methods"/>
            <div>
              <h3>Trusted Teaching Methods</h3>
              <p>Our mission is to provide simplified<br/>but efficient lessons that maintain all<br/>the necessary detail of every course.<br/>We build a customized plan to best<br/>fit the learning curve htmlFor every<br/>student. WE BELIEVE NO ONE IS<br/>EXACTLY THE SAME.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 id="home-location-heading">LOCATIONS</h2>
        <div id="home-location-wrapper">
          <div className="home-location home-location-1">
            <h2>Scarborough</h2>
            <p>4168 Finch Ave East, Suite PH75/76,<br/>Scarborough, ON M1S 5H6, Canada</p>
            <p>
              Hours<br/>
              Monday: 1:30pm-8:00pm<br/>
              Tuesday: 1:30pm-8:00pm<br/>
              Wednesday: 1:30pm-8:00pm<br/>
              Thursday: 1:30pm-8:00pm<br/>
              Friday: 1:30pm-8:00pm<br/>
              Saturday: 9:30pm-6:00pm<br/>
              Sunday: CLOSED
            </p>
            <p>
              info@irontutor.com<br/>
              416-299-9769
            </p>
            {/* <gmp-map center="43.803672790527344,-79.28881072998047" zoom="14" map-id="DEMO_MAP_ID">
              <gmp-advanced-marker position="43.803672790527344,-79.28881072998047" title="My location"></gmp-advanced-marker>
            </gmp-map> */}
          </div>
          <div className="home-location home-location-2">
            <h2>Markham</h2>
            <p>Unit 1103, 3601 Hwy 7 East, Markham, ON<br/>L3R 0M3, Canada</p>
            <p>
              Hours<br/>
              Monday: 3:00pm-8:00pm<br/>
              Tuesday: 3:00pm-8:00pm<br/>
              Wednesday: 3:00pm-8:00pm<br/>
              Thursday: 3:00pm-8:00pm<br/>
              Friday: CLOSED<br/>
              Saturday: 10:00am-4:00pm<br/>
              Sunday: CLOSED
            </p>
            <p>
              info@irontutor.com<br/>
              416-299-9769
            </p>
            {/* <gmp-map center="43.853912353515625,-79.33819580078125" zoom="14" map-id="DEMO_MAP_ID">
              <gmp-advanced-marker position="43.853912353515625,-79.33819580078125" title="My location"></gmp-advanced-marker>
            </gmp-map> */}
          </div>
          <div className="home-location home-location-3">
            <h2>CONTACT US</h2>
            <form className="home-form">
              <div className="home-form-first">
                <div>
                  <label htmlFor="fname">Name *</label><br/>
                  <input type="text" id="fname" name="fname" placeholder="Enter your name" required/>
                </div>
                <div>
                  <label htmlFor="femail">Email *</label><br/>
                  <input type="text" id="femail" name="femail" placeholder="Enter your email" required/>
                </div>
              </div>
              <div>
                <label htmlFor="fphone">Phone</label><br/>
                <input type="text" id="fphone" name="fphone" placeholder="Enter your phone name"/>
              </div>
              <div>
                <label htmlFor="fsubject">Subject and Grade</label><br/>
                <input type="text" id="fsubject" name="fsubject" placeholder="Type the subject and grade interested"/>
              </div>
              <div>
                <label htmlFor="fschool">Your School</label><br/>
                <input type="text" id="fschool" name="fschool" placeholder="Enter the name of your school"/>
              </div>
              <div>
                <label htmlFor="fmsg">Message</label><br/>
                <textarea id="fmsg" name="fmsg" placeholder="Type your message here..."></textarea>
              </div>
              <input id="fsubmit" type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}