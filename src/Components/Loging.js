import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Login.css";

function Loging() {
  return (
    <div className="LoginC">
      <div className="imageS">
        <div>
          <img
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Book"
          ></img>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt="man in field"
          ></img>
        </div>
        <div>
          <img
            src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif"
            alt="sitting on riff"
          ></img>
        </div>
      </div>
      <div className="floating-label">
        <input
          id="email"
          type="Email"
          className="form-mail"
          autoComplete="off"
          autoFocus
          required
        ></input>
        <label className="floating-label1">Email</label>
      </div>
      <div className="floating-label">
        <input
          type="Password"
          className="form-password"
          autoComplete="off"
          autoFocus
          required
        ></input>
        <label className="floating-label1">Password</label>
      </div>
      <button>Login</button>
      
      <ul>
        <BrowserRouter>
      <Link to="/forgotpassword">Forgot Password ?</Link>
      <Link to="/register">SignUp / Register</Link>
      </BrowserRouter>
      </ul>
    </div>
  );
}

export default Loging;
