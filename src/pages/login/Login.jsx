import { useNavigate, useParams } from "react-router-dom";
import MainBannerTitle from "../../common/MainBannerTitle";
import HeroTemp from "../../components/HeroTemp";
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginAction } from "../../redux/features/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCookie, setCookie } from "../../utils/cookie";
import { userDataAction } from "../../redux/features/userDataSlice";
import CustomCircleLoader from "../../utils/loaders/CustomCircleLoader";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Login = () => {
  const params = useParams();
  const subRoute = params["*"];

  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  // redux
  const dispatch = useDispatch();
  const { userData, isLoading } = useSelector((state) => state.login);

  useEffect(() => {
    if (userData?.messageCode === 200) {
      dispatch(userDataAction({ axiosPrivate }));
      setCookie("loginToken", userData, 10);
      navigate("/");
    }
    console.log(userData);
  }, [userData]);

  // formik init
  const loginValidation = Yup.object({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required."),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      dispatch(loginAction({ values }));
    },
  });
  return (
    <>
      {isLoading && (
        <div className="w-full h-screen fixed inset-0 z-[1001] flex justify-center items-center">
          <div className="w-full h-full absolute bg-black opacity-65"></div>
          <div className="z-[1002]">
            <CustomCircleLoader />
          </div>
        </div>
      )}

      <div className="text-white bg-blue-dark">
        <div>
          <HeroTemp>
            <MainBannerTitle title="Login" subRoute={subRoute} />
          </HeroTemp>
        </div>
        <div className="mt-10 pb-20 md:mt-16 lg:mt-20 flex justify-center wrapper">
          <div className="bg-blue-light z-50 w-full sm:w-[510px] rounded-2xl p-5 shadow-2xl">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-start gap-7"
            >
              <input
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="formInputText"
                type="text"
                placeholder="Username, Mobile, or Email *"
              />

              <input
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="formInputText"
                type="password"
                placeholder="Password"
              />

              <label
                htmlFor="rememberMe"
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

            <div className="mt-20 pb-4 text-gold-light_400 flex justify-between items-center text-sm">
              <a href="/register">Create account</a>
              <a href="/reset-password">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
