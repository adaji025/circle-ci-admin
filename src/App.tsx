import { useEffect } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import SignUp from "./pages/auth/SignUp";
import Authenticated from "./components/authenticaticated";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("circle_ci_admin") ?? "";

  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate("/dashboard");
    }
  }, []);

  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
        fontFamily: "Rubik, sans-serif",
        defaultRadius: 8,
      }}
    >
      <Notifications position="top-right" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Authenticated />} />
      </Routes>
    </MantineProvider>
  );
}
