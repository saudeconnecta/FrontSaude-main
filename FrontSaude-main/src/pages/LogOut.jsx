import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/login");
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div>
      <h1>Saúde Connect</h1>
      <p>Logging out...</p>
    </div>
  );
};

export default LogOut;
