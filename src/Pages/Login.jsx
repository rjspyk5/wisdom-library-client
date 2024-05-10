import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../Hooks/useAuth";
import { useEffect } from "react";

export const Login = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { logIn, googleLogIn, user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = e.target.pass.value;
    logIn(email, password)
      .then(() => {
        navigate(state ? state : "/");
      })
      .catch((err) => alert(err.message));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((r) => {
        navigate(state ? state : "/");
      })
      .catch((err) => console.log(err));
  };

  if (user && loading) {
    return;
  }
  return (
    <div className=" mx-3 my-5">
      <div className="hero   min-h-screen bg-contain bg-no-repeat">
        <div className="flex-col w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 p-6 w-full md:w-3/6 mx-auto shadow-2xl bg-[#3f3e3e34] backdrop-blur-md">
            <h1 className="text-5xl font-bold text-center text-[white]">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[white]">Email</span>
                </label>
                <input
                  name="email"
                  type="Type your email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[white]">Password</span>
                </label>
                <input
                  name="pass"
                  type="password"
                  placeholder="Type your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-lime-500 text-[white]">Login</button>
              </div>
            </form>
            <h1 className="text-[white] text-center font-semibold">
              New Here?{" "}
              <Link to="/register" className="text-[#48ed48]">
                Register now
              </Link>
            </h1>
            <div className="flex items-center my-3  justify-center">
              <div className="border-t border-1 opacity-70 flex-grow"></div>
              <span className="mx-4  text-white">Or Login With</span>
              <div className="border-t border-1 opacity-70  flex-grow"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button onClick={handleGoogleLogIn}>
                <FcGoogle size={30} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
