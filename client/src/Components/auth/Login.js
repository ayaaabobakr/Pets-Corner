import React, { Fragment, Component, useState } from "react";
import { withRouter, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    console.log("SUCCESS");
  };

  

  return (
    <div className="Register">
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <label for="inputEmail4">Email</label>
          <input
            name="email"
            type="email"
            class="form-control"
            placeholder="Email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <label for="inputPassword4">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            placeholder="Password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register"> Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
