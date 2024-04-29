import { React, useState, useRef } from 'react';
import {APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps';

export default function Home() {
  const apiGOOGLE = import.meta.env.VITE_GOOGLE;
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  console.log(apiGOOGLE);
  
  const scarLoc = {
    center: {
      lat: 43.803672790527344,
      lng: -79.28881072998047
    },
    zoom: 14
  };
  const markLoc = {
    center: {
      lat: 43.853912353515625,
      lng: -79.33819580078125
    },
    zoom: 14
  };

  const sendMail = (e) => {
    e.preventDefault();
    const contactForm = e.target;
    let formData = new FormData();

    formData.append("fname", contactForm.fname.value);
    formData.append("femail", contactForm.femail.value);
    formData.append("fphone", contactForm.fphone.value);
    formData.append("fsubject", contactForm.fsubject.value);
    formData.append("fschool", contactForm.fschool.value);
    formData.append("fmsg", contactForm.fmsg.value);

    fetch("https://iron-tutor.vercel.app/api/send", {
      method: "post",
      mode: 'cors',
      body: formData
    })
      .then(res => {
        if (res.status === 200)
          console.log("Email sent!");
        else if (res.status === 500)
          console.log("Failed to send email!");
      })
      .catch(error => {
        console.log("Failed to call server!");
      });

    return false;
  };

  return (
    <section id="sec-home">
      {/* <div className="hero-wrapper"> */}
      {/* </div> */}
      <div className="hero-text">
        <img className="hero-image" src="home.jpg"/>
        <div>
          <h1>IRON TUTOR</h1>
          <button>Learn More</button>
        </div>
      </div>
      <div id="home-wrapper">
        <div id="home-benefit">
          <h2>BENEFITS OF STUDYING AT IRON TUTOR</h2>
          <p>Since 2002, Iron Tutor has served the community of Scarborough, Markham, Richmond Hill and surrounding areas,<br/>helping Junior and High School students from Gr 2 to 12 to excel in Mathematics, Science and English.</p>
        </div>
        <div id="home-pros-wrapper">
          <div className="home-pros home-pros1">
            <img src="home1.jpg" alt="Improved Results"/>
            <div>
              <h4>Improved Results</h4>
              <p>The Alumni of our Academy not only<br/>go to major renowned<br/>Universities/Colleges in North<br/>America, they're more prepared and<br/>transitioned better into the next level<br/>due to the solid foundation they have<br/>built through us.</p>
            </div>
          </div>
          <div className="home-pros home-pros2">
            <img src="home2.jpg" alt="Friendly Staff"/>
            <div>
              <h4>Friendly Staff</h4>
              <p>All of our staff are academically<br/>strong and caring. We are excited to<br/>help with any questions, so feel free<br/>to seek assistance.</p>
            </div>
          </div>
          <div className="home-pros home-pros3">
            <img src="home3.jpg" alt="Trusted Teaching Methods"/>
            <div>
              <h4>Trusted Teaching Methods</h4>
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
            <div style={{ height: '326px', width: '326px' }}>
              <APIProvider apiKey={apiGOOGLE}>
                <Map zoom={scarLoc.zoom} center={{lat: scarLoc.center.lat, lng: scarLoc.center.lng}} mapId={"108996cce625c7cf"}>
                  {/* <AdvancedMarker position={{lat: scarLoc.center.lat, lng: scarLoc.center.lng}}>
                  </AdvancedMarker> */}
                  <AdvancedMarker position={{lat: scarLoc.center.lat, lng: scarLoc.center.lng}}></AdvancedMarker>
                </Map>
              </APIProvider>
            </div>
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
            <div style={{ height: '326px', width: '326px' }}>
              <APIProvider apiKey={apiGOOGLE}>
                <Map zoom={markLoc.zoom} center={{lat: markLoc.center.lat, lng: markLoc.center.lng}} mapId={"108996cce625c7cf"}>
                  {/* <AdvancedMarker position={{lat: markLoc.center.lat, lng: markLoc.center.lng}}>
                  </AdvancedMarker> */}
                  <AdvancedMarker position={{lat: markLoc.center.lat, lng: markLoc.center.lng}}></AdvancedMarker>
                </Map>
              </APIProvider>
              {/* <GoogleMapReact bootstrapURLKeys={{ key: apiGOOGLE }} defaultCenter={markLoc.center} defaultZoom={markLoc.zoom}>
              </GoogleMapReact> */}
            </div>
          </div>
          <div className="home-location home-location-3">
            <h2>CONTACT US</h2>
            <form onSubmit={sendMail} className="home-form">
              <div className="home-form-first">
                <div>
                  <label htmlFor="fname">Name *</label><br/>
                  <input type="text" id="fname" name="fname" placeholder="Enter your name" require="true"/>
                </div>
                <div>
                  <label htmlFor="femail">Email *</label><br/>
                  <input type="text" id="femail" name="femail" placeholder="Enter your email" require="true"/>
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
              <button id="fsubmit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}