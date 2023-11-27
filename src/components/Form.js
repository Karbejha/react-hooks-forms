import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked);
  }
  return (
    <form>
      <input type="text"onChange={handleFirstNameChange} value={firstName} />
      <input type="text"onChange={handleLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
