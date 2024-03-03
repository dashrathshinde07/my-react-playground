import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler (event){
  //   console.log("first Name")
  //   console.log(event.target.value)
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   console.log("Last Name")
  //   console.log(event.target.value)
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  // console.log(formData.email);
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={changeHandler}
          value={formData.firstName}
        ></input>

        <br></br>
        <br></br>
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={changeHandler}
          value={formData.lastName}
        ></input>

        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={formData.email}
        ></input>

        <br></br>
        <br></br>
        <textarea
          placeholder="Enter Your Comments here..."
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        ></textarea>

        <br></br>
        <br></br>

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        ></input>

        <label htmlFor="isVisible">Am I Visble ?</label>

        <br></br>
        <br></br>
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
            checked={formData.mode === "Online-Mode"}
          ></input>
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me your favourite car</label>
        <select
          name="favCar"
          onChange={changeHandler}
          id="favCar"
          value={formData.favCar}
        >
          <option value={"scorpio"}>scorpio</option>
          <option value={"fortuner"}>fortuner</option>
          <option value={"thar"}>thar</option>
          <option value={"legender"}>legender</option>
          <option value={"defender"}>defender</option>
        </select>

        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default App;
