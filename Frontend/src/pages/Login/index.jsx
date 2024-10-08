import React from "react";
import { JUMBOTRON_IMAGE } from "../../constants/listAsset";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { emailAtom, tokenAtom } from "../../jotai/atoms";
import { useState } from "react";
import { auth } from "../../utils/firebase";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { emailStorageAtom } from "../../jotai/atoms";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { apiInstanceExpress } from "../../utils/apiInstance";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useAtom(emailAtom);
  const [emailStorage, setEmailStorage] = useAtom(emailStorageAtom);
  const [password, setPassword] = useState(null);
  const [token, setToken] = useAtom(tokenAtom);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const login = await signInWithEmailAndPassword(auth, email, password);
      if (!login) return toast("Wrong Password");

      const firebaseToken = await getIdToken(login.user);
      if (!firebaseToken) return toast("Wrong Password");
      const addToken = await apiInstanceExpress.post("my-token", {
        email,
        password,
        token: firebaseToken,
      });

      if (addToken.status !== 200) return toast("Something went wrong");

      toast("Login Success");
      setToken(firebaseToken);
      setEmailStorage(login.user.email);

      setTimeout(() => {
        setIsLoading(false);
        navigate("/browse");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast(error.message);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer position="top-center" theme="dark" />
      <img
        src={JUMBOTRON_IMAGE}
        className="image-full w-full h-[100vh] object-cover opacity-70"
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-black/80 px-8 py-8 rounded-xl max-w-xl w-full">
        <form className="flex flex-col gap-4">
          <div className="flex items-center text-white text-xl font-semibold mb-2 gap-2">
            <GoChevronLeft
              size={24}
              className="hover:text-white cursor-pointer text-slate-200"
              onClick={() => navigate("/")}
            />
            <h3 className="text-white text-xl font-semibold">Login</h3>
          </div>
          <div className="relative">
            <input
              placeholder="Email"
              type="email"
              value={email ? email : ""}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent focus:outline-none"
            />
            <label className="absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10">
              Email
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent"
            />
            <label className="absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10">
              Password
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="bg-red-500 py-3 w-full text-white font-bold rounded-md disabled:bg-red-400 disabled:cursor-wait"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
            <p>
              Don't have an account?
              <span
                className="text-blue-500 underline cursor-pointer ml-2"
                onClick={() => navigate("/register")}
              >
                Sign up here
              </span>
            </p>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Login;
