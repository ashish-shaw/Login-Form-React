import React, { useState } from "react";

export const Login = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setFullName((previous) => {
      console.log(previous);

      return {
        ...previous,
        [name]: value
      };
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Sumitted Successfully");
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <br />
            <input
              type="number"
              placeholder="Enter Your Number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br />
          </div>
        </form>
      </div>
    </>
  );
};
