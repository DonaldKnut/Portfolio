import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h2 className="title">Get in touch</h2>
      <section id="contact">
        <div className="contact-container">
          <div className="map-form">
            <div className="map-frame">
              <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.43507073606!2d3.6486040744550583!3d6.466439193525222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf979f2575871%3A0xeffccc5bb195061b!2sSangotedo!5e0!3m2!1sen!2sng!4v1694777614347!5m2!1sen!2sng"
                allowfullscreen=""
                className="map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="form-container">
            <form action="">
              <div className="form-wrap">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-wrap">
                <input type="text" placeholder="Enter your mail" />
              </div>
              <div className="form-wrap">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-wrap">
                <textarea rows="6" placeholder="Write your message"></textarea>
              </div>
              <button type="submit" className="form-btn">
                Send Message <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
