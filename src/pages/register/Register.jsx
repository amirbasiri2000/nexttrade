import { useParams } from "react-router-dom";
import MainBannerTitle from "../../common/MainBannerTitle";
import HeroTemp from "../../components/HeroTemp";

const Register = () => {
  const params = useParams();
  const subRoute = params["*"];
  return (
    <div className="text-white">
      <div>
        <HeroTemp>
          <MainBannerTitle title="Register" subRoute={subRoute} />
        </HeroTemp>
      </div>
    </div>
  );
};

export default Register;
