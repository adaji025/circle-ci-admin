import Logo from "../../assets/svgs/circle-ci.svg";
const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center p-10">
      <div className="max-w-[700px] w-full mx-auto  p-10 ci-shadow">
        <div className="max-w-[500px] mx-auto flex flex-col justify-center items-center">
          <img src={Logo} alt="" />
          <div className="mt-10 font-bold text-2xl">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
