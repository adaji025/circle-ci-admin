import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import '@mantine/notifications/styles.css';
import { Notifications } from "@mantine/notifications";


export default function App() {
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
      </Routes>
    </MantineProvider>
  );
}
