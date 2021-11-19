import React from "react"
import ContactItem from "../Components/ContactItem"
import phone from "../img/svgs/phone.svg"
import email from "../img/svgs/emailme.svg"
import location from "../img/svgs/location.svg"
import Title from "../Components/Title"

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
            text={"otto.ouali@gmail.com"}
          />
          <ContactItem icon={location} title={"Address"} text={"Brisbane"} />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
