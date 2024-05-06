import { useParams } from "react-router-dom";
import MainBannerTitle from "../../common/MainBannerTitle";
import HeroTemp from "../../components/HeroTemp";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputError from "../../components/InputError";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Register = () => {
  const params = useParams();
  const subRoute = params["*"];

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // formik
  const registerValidation = Yup.object({
    first_name: Yup.string("Name must be string.")
      .required("Name is required.")
      .min(4, "Must be at least 4 characters."),
    last_name: Yup.string("Last Name must be string.")
      .required("Last Name is required.")
      .min(4, "Must be at least 4 characters."),
    nick_name: Yup.string("Nick Name must be string."),
    username: Yup.string()
      .required("User name is required.")
      .min(4, "Must be at least 4 characters."),
    mobile: Yup.string()
      .required("Mobile number is required.")
      .matches(
        /^(\+\d{1,3}[- ]?)?\d{1,14}$/,
        "Please enter a valid phone number."
      ),
    email: Yup.string()
      .required("Email is required.")
      .email("Invalid email adddress!"),
    password: Yup.string()
      .required(
        "Enter a combination of alt least eight numbers, letters and punctuation marks (such as ! and &,@)"
      )
      .min(8, "Password is too short")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password must contain uppercase, lowercase, number and  special character"
      ),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    refferal_code: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      nick_name: "",
      username: "",
      mobile: "",
      email: "",
      password: "",
      confirm_password: "",
      referral_code: "",
    },
    validationSchema: registerValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="text-white">
      <div>
        <HeroTemp>
          <MainBannerTitle title="Register" subRoute={subRoute} />
        </HeroTemp>
      </div>

      <div className="my-16 wrapper flex justify-center ">
        <div className="bg-blue-light w-full sm:w-[510px] z-[50] rounded-2xl p-5 shadow-2xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-4">
              {/* first name, last name */}
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <label className="space-y-2">
                  <span className="text-gray-400 text-sm">First Name *</span>
                  <input
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    type="text"
                    className="formInputText"
                    placeholder="First Name"
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <InputError title={formik.errors.first_name} />
                  ) : null}
                </label>

                <label className="space-y-2">
                  <span className="text-gray-400 text-sm">Last Name *</span>
                  <input
                    name="last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    type="text"
                    className="formInputText"
                    placeholder="Last Name"
                  />

                  {formik.touched.last_name && formik.errors.last_name ? (
                    <InputError title={formik.errors.last_name} />
                  ) : null}
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-gray-400 text-sm">Nick Name</span>
                <input
                  name="nick_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nick_name}
                  type="text"
                  className="formInputText"
                  placeholder="Nick Name"
                />

                {formik.touched.nick_name && formik.errors.nick_name ? (
                  <InputError title={formik.errors.nick_name} />
                ) : null}
              </label>

              <label className="space-y-2">
                <span className="text-gray-400 text-sm">Username *</span>
                <input
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  type="text"
                  className="formInputText"
                  placeholder="Username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <InputError title={formik.errors.username} />
                ) : null}
              </label>

              <label className="space-y-2">
                <span className="text-gray-400 text-sm">Mobile *</span>
                <input
                  name="mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  type="text"
                  className="formInputText"
                  placeholder="Mobile"
                />

                {formik.touched.mobile && formik.errors.mobile ? (
                  <InputError title={formik.errors.mobile} />
                ) : null}
              </label>

              <label className="space-y-2">
                <span className="text-gray-400 text-sm">Email *</span>
                <input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  type="email"
                  className="formInputText"
                  placeholder="Email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <InputError title={formik.errors.email} />
                ) : null}
              </label>

              <label className="space-y-2">
                <span className="text-gray-400 text-sm">Password *</span>
                <div className="w-full relative">
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type={showPass ? "text" : "password"}
                    className="formInputText"
                    placeholder="Password"
                  />

                  {showPass ? (
                    <EyeSlashIcon
                      onClick={() => setShowPass(!showPass)}
                      className="w-6 h-6 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    />
                  ) : (
                    <EyeIcon
                      onClick={() => setShowPass(!showPass)}
                      className="w-6 h-6 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    />
                  )}
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <InputError title={formik.errors.password} />
                ) : null}
              </label>

              <label className="space-y-2">
                <span className="text-gray-400 text-sm">
                  Confirm Password *
                </span>
                <div className="w-full h-full relative">
                  <input
                    name="confirm_password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirm_password}
                    type={showConfirmPass ? "text" : "password"}
                    className="formInputText"
                    placeholder="Confirm Password"
                  />
                  {showConfirmPass ? (
                    <EyeSlashIcon
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="w-6 h-6 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    />
                  ) : (
                    <EyeIcon
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="w-6 h-6 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    />
                  )}
                </div>

                {formik.touched.confirm_password &&
                formik.errors.confirm_password ? (
                  <InputError title={formik.errors.confirm_password} />
                ) : null}
              </label>

              <label className="space-y-2">
                <span className="text-gray-400 text-sm">Referral Code</span>
                <input
                  name="referral_code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.referral_code}
                  type="text"
                  className="formInputText"
                  placeholder="Referral Code"
                />

                {formik.touched.referral_code && formik.errors.referral_code ? (
                  <InputError title={formik.errors.referral_code} />
                ) : null}
              </label>
            </div>
            <button
              className="mt-8 bg-gradient-to-t from-[#F0D785] via-[#9C7049] to-[#F0D785] shadow-md rounded-full px-8 py-2 text-blue-dark font-semibold uppercase hover:shadow-none transition-all shadow-gold-light_400"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-16 mb-4 w-full  text-white flex justify-between items-center text-sm">
            <a href="/login" className="mx-auto">
              Already have an account?{" "}
              <span className="text-gold-light_400">Sign In</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
