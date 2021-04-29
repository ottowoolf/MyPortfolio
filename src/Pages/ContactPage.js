import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/svgs/phone.svg";
import email from "../img/svgs/emailme.svg";
import location from "../img/svgs/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            title={"Phone"}
            text={"+61 (0)-4111-35-800"}
          />
          <ContactItem
            icon={email}
            title={"Email"}
            text={"otto.woolf@gmail.com"}
          />
          <ContactItem
            icon={location}
            title={"Address"}
            text={"173 Lilyfield Rd Sydney 2040"}
          />
        </div>
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53007.672248486604!2d151.1257072712127!3d-33.86441878867419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e0!3m2!1sen!2sau!4v1618916704129!5m2!1sen!2sau"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="gmap"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
