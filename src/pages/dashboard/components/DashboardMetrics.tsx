import WalletMoneyIcon from "../../../assets/svgs/dasboard/wallet-money.svg";
import PositiveTrends from "../../../assets/svgs/positive-trends.svg";
import NegativeTrends from "../../../assets/svgs/negative-trends.svg";
import ProfileUser from "../../../assets/svgs/profile-2user.svg";
import StartUpIcon from "../../../assets/svgs/status-up.svg";

type IProps = {
  image: string;
  icon: string;
  currency: string;
  amount: string;
  desc: string;
};

const Card = ({ amount, currency, image, icon, desc }: IProps) => {
  return (
    <div className="bg-[#F9F8F3] flex px-6 py-6 justify-between w-full mb-8 rounded-[10px]">
      <div className="flex flex-col justify-center  items-center">
        <span className="rounded-full bg-[#E3DFD4] p-2">
          <img src={image} alt="wallet money" />
        </span>
        <span className="my-2">
          <img src={icon} />
        </span>
        <p className="text-sm font-light">{desc}</p>
        <h1 className="font-bold my-2">
          <span className="text-base">{currency}</span>
          <span className="text-lg sm:text-2xl 2xl:text-3xl">{amount}</span>
        </h1>
        <p className="text-sm font-light">704 Circles</p>
      </div>
    </div>
  );
};

const DashboardMetrics = () => {
  //   const [trends, setTrends] = useState(false);
  return (
    <div className="bg-[#F9F8F3] grid grid-cols-2  md:grid-cols-4 px-6 py-6 justify-between w-full mb-8 rounded-[10px]">
      <Card
        amount="N987m"
        currency="N"
        icon={PositiveTrends}
        image={WalletMoneyIcon}
        desc="Circle Savings"
      />
      <Card
        amount="N987m"
        currency="N"
        icon={PositiveTrends}
        image={WalletMoneyIcon}
        desc="Circle FX Savings"
      />
      <Card
        amount="N987m"
        currency="N"
        icon={NegativeTrends}
        image={StartUpIcon}
        desc="Investments"
      />
      <Card
        amount="N987m"
        currency="N"
        icon={PositiveTrends}
        image={ProfileUser}
        desc="Circle Users"
      />
    </div>
  );
};

export default DashboardMetrics;
