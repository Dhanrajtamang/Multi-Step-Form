import {useRef} from "react";

export default function PersonalInfo() {
  const userNameRef = useRef("");
  const userEmailRef = useRef("");
  const userPhoneNumberRef = useRef("");

  return (
        <section className="personalInfo-section-step">
            <legend className="section-title">Personal info</legend>
            <div>Please provide you name, email address and phone number.</div>
            <div>
              <label htmlFor="user-name">Name</label>
              <input id="user-name" name="username" type="text" placeholder="ex Tristan Blowski" ref={userNameRef}/>
            </div>
            <div>
              <label htmlFor="user-email">Email Address</label>
              <input id="user-email" name="useremail" type="text" ref={userEmailRef} placeholder="e.g stephenking@lorem.com"/>
            </div>
            <div>
              <label htmlFor="user-phonenumber">Phone Number</label>
              <input id="user-phonenumber" name="userphonenumber" type="number" ref={userPhoneNumberRef} placeholder="e.g +1 2366 16566 455"/>
            </div>
        </section>
  )
}
