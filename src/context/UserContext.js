import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const AuthUser = createContext();
const initialState = {
  login: false,
  token: "",
  name: "",
  id: "",
};

export const AuthProvider = ({ children }) => {
  // States
  const [IsLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("user"));
    initial ? initial.login && setUser(initial) : setUser(initialState);
  }, []);
  // Functions
  const loginUser = async (userD, navigate) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/users/login", userD);
      console.log(data);
      setIsLoading(false);
      // Now, capture the "ok" property and check if it's true'
      if (data.status === "success") {
        const userLogin = {
          login: true,
          token: data.data.token,
          name: data.data.user.name,
          id: data.data.user._id,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      return Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const registerUser = async (userD, navigate) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/users/", userD);
      setIsLoading(false);
      // Now, capture the "ok" property and check if it's true'
      if (data.status === "success") {
        const userRegistered = {
          login: true,
          token: data.token,
          name: data.data.name,
          id: data.data._id,
        };
        localStorage.setItem("user", JSON.stringify(userRegistered));
        setUser(userRegistered);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const logoutUser = () => {
    setUser(initialState);
    localStorage.removeItem("user");
  };

  const value = {
    isAuthenticated: false,
    loginUser,
    IsLoading,
    user,
    setIsLoading,
    registerUser,
    logoutUser,
    setUser,
  };

  return <AuthUser.Provider value={value}>{children}</AuthUser.Provider>;
};

const useUser = () => {
  const authUser = useContext(AuthUser);
  if (!authUser) throw new Error("useUser must be used within an AuthProvider");
  return authUser;
};
export default useUser;
