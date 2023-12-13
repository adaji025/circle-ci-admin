import {
  Button,
  PasswordInput,
  TextInput,
  LoadingOverlay,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Logo from "../../assets/svgs/circle-ci.svg";
import { Fragment, useState } from "react";
import { adminLogin } from "../../services/auth";
import { AdminLoginTypes } from "../../types/auth";
import useNotification from "../../hooks/useNotification";
import { toast } from "react-toastify";
import { showNotification } from "@mantine/notifications";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { handleError } = useNotification();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (values: AdminLoginTypes) => {
    setLoading(true);

    adminLogin(values)
      .then((res) => {
        console.log(res);
        toast.error("login success")
         showNotification({
          message: "Login failed",
        });
      })
      .catch((err) => {
        handleError(err);
        console.log(err);
        toast.error("Failed to login")
        showNotification({
          message: "Login failed",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <div className="flex h-screen justify-center items-center p-5 sm:p-10 bg-circle-bg">
        <div className="max-w-[700px] w-full mx-auto p-5 sm:p-10 ci-shadow">
          <div className="max-w-[500px] w-full mx-auto flex flex-col justify-center items-center">
            <img src={Logo} alt="" />
            <div className="mt-10 font-bold text-2xl">Login</div>
            <form
              onSubmit={form.onSubmit((values) => handleLogin(values))}
              className="w-full"
            >
              <TextInput
                required
                type="email"
                size="lg"
                mt={16}
                placeholder="Enter your email"
                className="w-full"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                size="lg"
                mt={32}
                placeholder="Enter your password"
                className="w-full"
                {...form.getInputProps("password")}
              />

              <Button
                type="submit"
                size="lg"
                mt={54}
                className="w-full bg-circle-blue-two"
              >
                Login
              </Button>

              <div className="flex justify-center mt-7">
                <Button className="text-circle-blue-two font-bold text-2xl text-center">
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
