import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

const useNotification = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    showNotification({
      title: "Logout success",
      message: `User logged out Login in to continue 😑`,
      color: "yellow",
    });
    localStorage.clear();
    navigate("/");
  };

  const handleError = (error: any) => {
    if (!error.response) {
      return showNotification({
        title: "Error",
        message: "Network Error, Please check your connection",
        color: "red",
      });
    }
    if (error.response.status === 404) {
      return showNotification({
        title: "Error",
        message: "Route not found",
        color: "red",
      });
    }
    if (error.response.data.error === "Invalid Token") {
      logoutUser();
      return showNotification({
        title: "Error",
        message: "Route not found",
        color: "red",
      });
    }

    if (error) {
      return showNotification({
        title: "Error",
        message: error.response.data.message,
        color: "red",
      });
    }

    if (error?.response?.status === 401 || error?.response?.status === 403) {
      toast.error("Unauthorized");
      return logoutUser();
    }

    if (error?.response?.status === 500) {
      return showNotification({
        title: "Error",
        message: `${
          error?.response?.data?.message ?? "An error occured, please try again"
        } 🤥`,
        color: "red",
      });
    }

    if (typeof error?.response?.data === "object" && error !== null) {
      for (const [_, value] of Object?.entries(error?.response?.data)) {
        if (typeof value === "string") {
          showNotification({
            title: "Error",
            message: `${value} 🤥`,
            color: "red",
          });
        }
      }
    } else {
      showNotification({
        title: "Error",
        message: `${error?.response?.data?.error} 🤥`,
        color: "red",
      });
    }
  };
  return {
    handleError,
    logoutUser,
  };
};

export default useNotification;
