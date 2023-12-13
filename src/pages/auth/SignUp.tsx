import { Button, PasswordInput, LoadingOverlay } from "@mantine/core";
import { useForm } from "@mantine/form";
import Logo from "../../assets/svgs/circle-ci.svg";
import { Fragment, useState } from "react";
import { adminLogin } from "../../services/auth";
import { AdminLoginTypes } from "../../types/auth";
import useNotification from "../../hooks/useNotification";
import { showNotification } from "@mantine/notifications";

const SignUp = () => {
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
      })
      .catch((err) => {
        handleError(err);
        console.log(err);
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
            <div className="mt-10 font-bold text-2xl">Sign Up</div>
            <div className="mt-5 mx-auto text-center">
              Welcome <span className="font-bold">Kendrick Lamar</span>, you
              have been profiled on this admin tool as a{" "}
              <span className="font-bold">Support Officer</span>
            </div>
            <div className="mt-3 text-center text-sm">
              Please complete your signup by securing your profile with a
              password
            </div>
            <form
              onSubmit={form.onSubmit((values) => handleLogin(values))}
              className="w-full"
            >
              <PasswordInput
                size="lg"
                mt={32}
                placeholder="Set password "
                className="w-full"
                {...form.getInputProps("password")}
              />

              <PasswordInput
                size="lg"
                mt={32}
                placeholder="Confirm password"
                className="w-full"
                {...form.getInputProps("password")}
              />

              <div className="flex items-center gap-2 mt-3">
                <div className="text-xs">Password strength</div>
              </div>

              <Button size="lg" mt={54} className="w-full bg-circle-blue-two">
                Complete Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
