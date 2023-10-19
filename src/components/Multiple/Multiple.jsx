import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const initialFormData = {
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedEducationLevels, setSelectedEducationLevels] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedEducationLevels([...selectedEducationLevels, value]);
    } else {
      setSelectedEducationLevels(
        selectedEducationLevels.filter((level) => level !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.firstname.length < 5) {
      alert("First name must have at least 5 letters");
    } else if (!isNumeric(formData.mobilenumber)) {
      alert("Mobile number must contain only numbers");
    } else {
      const educationLevels = selectedEducationLevels.join(", ");
      alert(
        `Name: ${formData.firstname} ${formData.lastname}, Email: ${formData.email}, Mobile number: ${formData.mobilenumber}, Education Levels: ${educationLevels}`
      );
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSelectedEducationLevels([]);
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="firstname">
        First Name:
      </label>
      <input
        type="text"
        id="firstname"
        className="multiple__input"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
      />
      <label className="multiple__text" htmlFor="lastname">
        Last Name:
      </label>
      <input
        type="text"
        id="lastname"
        className="multiple__input"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        id="email"
        className="multiple__input"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="mobilenumber">
        Mobile Number:
      </label>
      <input
        type="text"
        id="mobilenumber"
        className="multiple__input"
        name="mobilenumber"
        value={formData.mobilenumber}
        onChange={handleChange}
      />

      <label className="multiple__text">Qualifications:</label>
      <label className="multiple__checkbox">
        High School (10th)
        <input
          type="checkbox"
          value="High School (10th)"
          checked={selectedEducationLevels.includes("High School (10th)")}
          onChange={handleCheckboxChange}
        />
      </label>
      <label className="multiple__checkbox">
        Higher Secondary (12th)
        <input
          type="checkbox"
          value="Higher Secondary (12th)"
          checked={selectedEducationLevels.includes("Higher Secondary (12th)")}
          onChange={handleCheckboxChange}
        />
      </label>
      <label className="multiple__checkbox">
        Graduation (Bachelors)
        <input
          type="checkbox"
          value="Graduation (Bachelors)"
          checked={selectedEducationLevels.includes("Graduation (Bachelors)")}
          onChange={handleCheckboxChange}
        />
      </label>
      <label className="multiple__checkbox">
        Post Graduation (Masters)
        <input
          type="checkbox"
          value="Post Graduation (Masters)"
          checked={selectedEducationLevels.includes("Post Graduation (Masters)")}
          onChange={handleCheckboxChange}
        />
      </label>
      <label className="multiple__checkbox">
        Other
        <input
          type="checkbox"
          value="Other"
          checked={selectedEducationLevels.includes("Other")}
          onChange={handleCheckboxChange}
        />
      </label>

      <div>
        <button className="multiple__button" type="submit">
          Submit
        </button>
        <button className="multiple__button" type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}