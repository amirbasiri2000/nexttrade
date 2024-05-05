import { useParams } from "react-router-dom";
import MainBannerTitle from "../../common/MainBannerTitle";
import HeroTemp from "../../components/HeroTemp";
import CustomBtnLg from "../../common/CustomBtnLg";

const Login = () => {
  const params = useParams();
  const subRoute = params["*"];
  return (
    <div className="text-white">
      <div>
        <HeroTemp>
          <MainBannerTitle title="Login" subRoute={subRoute} />
        </HeroTemp>
      </div>
      <div className="my-20 flex justify-center">
        <div className="bg-blue-light w-[510px] rounded-2xl p-5 shadow-2xl">
          <form className="flex flex-col items-start gap-7">
            <input
              className="bg-transparent border border-gray-400 px-2 py-3 rounded-lg w-full outline-none placeholder:text-gray-500 placeholder:text-sm text-sm"
              type="text"
              placeholder="Username, Mobile, or Email *"
            />

            <input
              className="bg-transparent border border-gray-400 px-2 py-3 rounded-lg w-full outline-none placeholder:text-gray-500 placeholder:text-sm text-sm"
              type="password"
              placeholder="Password"
            />

            <label
              for="rememberMe"
              className="cursor-pointer flex items-center gap-2 text-gold-light_400"
            >
              <input
                className="accent-gold-light_400 scale-125 active:shadow-xl"
                type="checkbox"
                id="rememberMe"
              />
              Rememeber Me
            </label>

            <button
              className=" bg-gradient-to-t from-[#F0D785] via-[#9C7049] to-[#F0D785] shadow-xl rounded-full px-8 py-2 text-blue-dark font-semibold uppercase"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="mt-20 mb-4 text-gold-light_400 flex justify-between items-center text-sm">
            <a href="/register">Create account</a>
            <a href="/reset-password">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
