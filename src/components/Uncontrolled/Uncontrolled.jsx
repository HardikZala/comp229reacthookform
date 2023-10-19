import React, { useRef } from "react";
import "./uncontrolled.css";

export default function Uncontrolled() {
  const checkboxRefs = {
    highSchool: useRef(false),
    higherSecondary: useRef(false),
    graduation: useRef(false),
    postGraduation: useRef(false),
    other: useRef(false),
  };

  function handleSubmit(event) {
    event.preventDefault();

    const selectedEducationLevels = Object.keys(checkboxRefs).filter(
      (level) => checkboxRefs[level].current.checked
    );

    console.log("Selected Education Levels:", selectedEducationLevels);
  }

  return (
    <form className="uncontrolled" onSubmit={handleSubmit}>
      <label className="uncontrolled__checkbox">
        High School (10th)
        <input type="checkbox" ref={checkboxRefs.highSchool} />
      </label>
      <label className="uncontrolled__checkbox">
        Higher Secondary (12th)
        <input type="checkbox" ref={checkboxRefs.higherSecondary} />
      </label>
      <label className="uncontrolled__checkbox">
        Graduation (Bachelors)
        <input type="checkbox" ref={checkboxRefs.graduation} />
      </label>
      <label className="uncontrolled__checkbox">
        Post Graduation (Masters)
        <input type="checkbox" ref={checkboxRefs.postGraduation} />
      </label>
      <label className="uncontrolled__checkbox">
        Other
        <input type="checkbox" ref={checkboxRefs.other} />
      </label>
      <button className="uncontrolled__button" type="submit">
        Submit
      </button>
    </form>
  );
}
