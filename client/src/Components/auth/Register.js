import React, { Component, useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {register} from '../../actions/auth'
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passwords don't match");
    } else {
      const newUser = {
        name,
        email,
        password
      };
      try {
        const config = {
          headers: { "Content-Type": "application/json" }
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("/api/users", body, config);
        console.log(res.data);
      } catch (err) {
        
        console.error(err.response.data);
      }
    }
      
  };

  return (
    <div className="Register">
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <label for="inputAddress">Name</label>
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="Name"
            value={name}
            onChange={e => onChange(e)}
          />
        </div>

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
        <div class="form-row">
          <div class="form-group col-md-6">
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
          <div class="form-group col-md-6">
            <label for="inputPassword4">Confirm Password</label>
            <input
              name="password2"
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              minLength="6"
              value={password2}
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Sign up" />
      </form>
    </div>
  );
};

export default Register;
