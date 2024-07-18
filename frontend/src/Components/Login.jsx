import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("https://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/login/", {
        username: formData.userName,
        password: formData.password,
        email: "demo@gmail.com",
        phone_number: "1234567890",
        input_code: 0,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data.message === "Successfully Logged in") {
          navigate("/dashboard");
        } else {
          alert("Enter correct credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="row loginmaincontainer" >
          <div className="col-md-6 offset-md-3 mt-1">
            <div className="signup-form">
              <div className="mt-3 border p-4 shadow logincontainer" style={{ borderRadius: '20px' ,backgroundColor: "lightgrey" }}>
                <h1 className="mb-5 text-black font-bold text-center" style={{ fontSize: '36px' }}>Login Account</h1>
                <div className="row">
                  <div className="mb-4 col-md-12">
                    <label>
                      <b>Username</b><span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      className="form-control"
                      placeholder="Enter User Name"
                      onChange={(event) =>
                        setFormData({ ...formData, userName: event.target.value })
                      }
                      style={{ borderRadius: '8px' }}
                      required
                    />
                  </div>

                  <div className="mb-3 col-md-12">
                    <label>
                      <b>Password</b><span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(event) =>
                        setFormData({ ...formData, password: event.target.value })
                      }
                      style={{ borderRadius: '8px' }}
                      required
                    />
                  </div>

                  <div className="col-md-12 text-center">
                    <button onClick={handleSubmit} className="btn btn-primary login-btn" style={{ borderRadius: '8px', width: '100%',height:'40px', marginTop: '20px' ,marginBottom:'20px'}}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
