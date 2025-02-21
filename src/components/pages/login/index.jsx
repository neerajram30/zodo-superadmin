import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login02, loginlogo } from "../../imagepath";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/auth/useAuth";
import FullscreenLoader from "../../loadings/FullscreenLoader";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [email, setEmail] = useState("");
  // const { mutate: login, isLoading } = useLogin();
  const { login, user, validationError, isLoading } = useAuth();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (data) => {
    // e.preventDefault();
    console.log("Login !", data);
    login(data, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
    // login({ email, password });
  };
  console.log("Auth user", user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      {isLoading && <FullscreenLoader />}
      {/* {isLoading && <div>Loading</div>} */}
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img">
                  <img className="img-fluid" src={login02} alt="#" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 login-wrap-bg">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-right">
                    <div className="login-right-wrap">
                      <div className="account-logo">
                        <Link to="/admin-dashboard">
                          <img src={loginlogo} alt="#" width={150} />
                        </Link>
                      </div>
                      <h2>Login</h2>
                      {/* Form */}
                      <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-group">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              errors !== undefined && errors["email"]
                                ? "is-invalid"
                                : ""
                            }`}
                            {...register("email", {
                              required: "Email is required",
                            })}
                          />

                          {errors !== undefined && errors["email"] && (
                            <div className="invalid-feedback">
                              {errors !== undefined && errors["email"].message}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>
                            Password <span className="login-danger">*</span>
                          </label>
                          <input
                            type={!passwordVisible ? "password" : ""}
                            className={`form-control pass-input ${
                              errors !== undefined && errors["password"]
                                ? "is-invalid"
                                : ""
                            }`}
                            {...register("password", {
                              required: "Password is required",
                            })}
                            // className="form-control pass-input"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors !== undefined && errors["password"] ? null : (
                            <span
                              className="toggle-password"
                              onClick={togglePasswordVisibility}
                            >
                              {!passwordVisible ? (
                                <EyeOff className="react-feather-custom" />
                              ) : (
                                <Eye className="react-feather-custom" />
                              )}
                            </span>
                          )}

                          {errors !== undefined && errors["password"] && (
                            <div className="invalid-feedback">
                              {errors !== undefined &&
                                errors["password"].message}
                            </div>
                          )}
                        </div>
                        {validationError && (
                          <div
                            className="pb-2 text-danger"
                            style={{ fontSize: "15px" }}
                          >
                            {validationError}
                          </div>
                        )}

                        <div className="forgotpass">
                          <div className="remember-me">
                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                              {" "}
                              Remember me
                              <input type="checkbox" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>
                        <div className="form-group login-btn">
                          <button
                            to
                            className="btn btn-primary btn-block"
                            // onClick={handleLogin}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
