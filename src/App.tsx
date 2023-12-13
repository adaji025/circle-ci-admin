import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
        fontFamily: "Rubik, sans-serif",
        defaultRadius: 8,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </MantineProvider>
  );
}
