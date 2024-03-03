import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing the value of form data");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName" className="mb-2">
          First Name
        </label>
        <br></br>
        <input
          type="text"
          name="firstName"
          placeholder="John"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        ></input>

        <br></br>
        <label htmlFor="lastName" className="mb-2">
          Last Name
        </label>
        <br></br>
        <input
          type="text"
          name="lastName"
          placeholder="Doe"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        ></input>

        <br></br>
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <br></br>
        <input
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        ></input>

        <br></br>

        <label htmlFor="country">Country</label>

        <br></br>

        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>Indian</option>
          <option>Canada</option>
          <option>United States</option>
          <option>Russia</option>
        </select>

        <br></br>

        <label htmlFor="streetAddress" className="mb-2">
          Street Address
        </label>
        <br></br>
        <input
          type="text"
          name="streetAddress"
          placeholder="Decatur, Illinois, USA."
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        ></input>

        <br></br>
        <label htmlFor="city" className="mb-2">
          City
        </label>
        <br></br>
        <input
          type="text"
          name="city"
          placeholder="Decatur, Illinois, USA."
          id="city"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        ></input>

        <br></br>
        <label htmlFor="state" className="mb-2">
          State/Province
        </label>
        <br></br>
        <input
          type="text"
          name="state"
          placeholder="California"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        ></input>

        <br></br>

        <label htmlFor="postalCode" className="mb-2">
          ZIP /Postal Code
        </label>
        <br></br>
        <input
          type="number"
          name="postalCode"
          placeholder="004455"
          id="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        ></input>

        <br></br>

        <fieldset>
          <legend className="font-bold">By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            ></input>

            <div>
              <label htmlFor="comments" className="font-bold">
                Comments
              </label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            ></input>

            <div>
              <label htmlFor="candidates" className="font-bold">
                Candidates
              </label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            ></input>

            <div>
              <label htmlFor="offers" className="font-bold">
                Offers
              </label>
              <p>Get notified when a candidate acceppts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-bold">Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value={"Everything"}
            onChange={changeHandler}
          ></input>

          <label htmlFor="pushEverything">Everything</label>

          <br></br>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value={"Same as email"}
            onChange={changeHandler}
          ></input>

          <label htmlFor="pushEmail">Same as Email</label>

          <br></br>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value={"No Push Notifications"}
            onChange={changeHandler}
          ></input>

          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded-sm py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
