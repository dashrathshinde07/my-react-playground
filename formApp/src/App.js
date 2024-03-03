import { useState } from "react";
import "./App.css";

function App() {
  // Using state to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  // Function to handle changes in form inputs
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value === "checkbox" ? checked : value,
      };
    });
  }

  // Function to handle form submission
  function submitHandler(event){
    event.preventDefault();
    // Print the final form data
    console.log("Finally printing the entire form data.......");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        {/* Input field for first name */}
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={changeHandler}
          value={formData.firstName}
        ></input>

        <br></br>
        <br></br>
        {/* Input field for last name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={changeHandler}
          value={formData.lastName}
        ></input>

        <br></br>
        <br></br>
        {/* Input field for email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={formData.email}
        ></input>

        <br></br>
        <br></br>
        {/* Textarea for comments */}
        <textarea
          placeholder="Enter Your Comments here..."
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        ></textarea>

        <br></br>
        <br></br>

        {/* Checkbox for visibility */}
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        ></input>
        <label htmlFor="isVisible">Am I Visible ?</label>

        <br></br>
        <br></br>
        {/* Radio buttons for mode selection */}
        <fieldset>
          <legend> Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value={"Online Mode"}
            id="Online-Mode"
          ></input>
          <label
            htmlFor="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          >
            Online Mode
          </label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value={"Offline Mode"}
            id="Offline-Mode"
            checked={formData.mode === "Offline Mode"}
          ></input>
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        {/* Select field for favorite car */}
        <label htmlFor="favCar">Tell me your favourite car</label>
        <select
          name="favCar"
          onChange={changeHandler}
          id="favCar"
          value={formData.favCar}
        >
          <option value={"scorpio"}>Scorpio</option>
          <option value={"fortuner"}>Fortuner</option>
          <option value={"thar"}>Thar</option>
          <option value={"legender"}>Legender</option>
          <option value={"defender"}>Defender</option>
        </select>

        <br></br>
        <br></br>

        {/* Submit button */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
