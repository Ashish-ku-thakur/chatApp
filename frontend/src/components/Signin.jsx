import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API } from "./constant/variables";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthuser } from "../redux/userSlicer";

const Signin = () => {
  let [signin, setSignin] = useState(true);
  let [userDetails, setUserDetails] = useState({
    fullname: null,
    email: null,
    password: null,
    gender: null,
  });

  let dispatch = useDispatch();

  let navigate = useNavigate();

  let loginPageHandler = () => {
    setSignin(false);
  };

  let signinPageHandler = () => {
    setSignin(true);
  };

  //   form submit & create or login an account
  let formSubmitHandler = async (e) => {
    e?.preventDefault();

    // sign & login
    try {
      if (signin) {
        // sign
        axios.defaults.withCredentials = true;
        let res = await axios.post(`${USER_API}/register`, userDetails);

        if (res?.data?.success) {
          navigate("/");
          toast?.success(res?.data?.massage);
        }
        // dispatch
        dispatch(setAuthuser(res?.data));
      } else {
        // login
        axios.defaults.withCredentials = true;
        let res = await axios.post(`${USER_API}/login`, userDetails);

        if (res?.data?.success) {
          navigate("/");
          toast?.success(res?.data?.massage);
        }
        // dispatch
        dispatch(setAuthuser(res?.data?.checkUser));
      }
    } catch (error) {
      toast?.error(error?.response?.data?.massage);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-black text-white shadow-2xl rounded-2xl">
        <form action="" className="m-3" onSubmit={formSubmitHandler}>
          <div className="w-full text-center text-xl font-semibold mb-5 ">
            {signin ? " Welcome to Signin Page" : " Welcome to Login Page"}
          </div>

          {/* form fields */}
          <div className="text-violet-600">
            {signin ? (
              // signin
              <div>
                {/* fullname */}
                <div className="mb-4">
                  <label htmlFor="" className="font-semibold">
                    Fullname:
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    value={userDetails?.fullname}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        fullname: e?.target?.value,
                      })
                    }
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>

                {/* email */}
                <div className="mb-4">
                  <label htmlFor="" className="font-semibold ">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    value={userDetails?.email}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        email: e?.target?.value,
                      })
                    }
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>

                {/* password */}
                <div className="mb-4">
                  <label htmlFor="" className="font-semibold">
                    Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    value={userDetails?.password}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e?.target?.value,
                      })
                    }
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>

                {/* radio */}
                <div className="mb-4 flex gap-4">
                  <div className="flex items-center">
                    <label className="" htmlFor="">
                      Mail:
                    </label>
                    <input
                      type="radio"
                      name="radio-2"
                      value={"mail"}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          gender: e?.target?.value,
                        })
                      }
                      className="radio radio-primary"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="" htmlFor="">
                      Femail:
                    </label>

                    <input
                      type="radio"
                      name="radio-2"
                      value={"femail"}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          gender: e?.target?.value,
                        })
                      }
                      className="radio radio-primary"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // login
              <div>
                {/* email */}
                <div className="mb-4">
                  <label htmlFor="" className="font-semibold">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    value={userDetails?.email}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        email: e?.target?.value,
                      })
                    }
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>

                {/* password */}
                <div className="mb-4">
                  <label htmlFor="" className="font-semibold">
                    Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    value={userDetails?.password}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e?.target?.value,
                      })
                    }
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
              </div>
            )}

            {/* link to login */}
            <div className="w-full text-center mb-4 cursor-pointer">
              {signin ? (
                <p>
                  Already Have an account?{" "}
                  <span
                    className="text-blue-400 font-semibold"
                    onClick={loginPageHandler}
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Do not Have an account? please{" "}
                  <span
                    className="text-blue-400 font-semibold"
                    onClick={signinPageHandler}
                  >
                    Signin
                  </span>
                </p>
              )}
            </div>

            {/* submit btn */}
            <div>
              <button className="btn btn-block btn-primary">
                {signin ? "Signin" : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
