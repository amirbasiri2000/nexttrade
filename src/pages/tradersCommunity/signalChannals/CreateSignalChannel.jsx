import { useState } from "react";
import Footer from "../../../components/Footer";
import CummunityNavbar from "../../../components/tradersCommunity/Navbar";

const CreateSignalChannel = () => {
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const [channelType, setChannelType] = useState("0");

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    channelType,
  });

  const handleChannelType = (e) => {
    setChannelType(e.target.value);
  };
  return (
    <div>
      <CummunityNavbar />
      <section className="relative w-full h-[40vh]">
        <img
          className="w-full h-full absolute inset-0 -z-10"
          src="/assets/slider-bg.png"
          alt=""
        />

        <div className="z-50 flex justify-between items-center p-2 h-full">
          <div className="flex justify-center w-full">
            <h4 className="text-4xl text-white">Create Signal Channel</h4>
          </div>

          <div className="h-full w-full">
            <img
              className="size-full object-cover"
              src="/assets/breadcrumb_img.png"
              alt="breadcrumb"
            />
          </div>
        </div>
      </section>
      <div className="bg-blue-light py-10 w-full">
        <div className="bg-blue-dark w-1/2 mx-auto p-4 rounded-lg">
          <form>
            <label className="flex flex-col justify-start w-full">
              <span className="text-gray-300 text-base mb-2 ">
                Channel Name:{" "}
              </span>
              <input
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="px-4 py-3 rounded-lg border w-full outline-blue-light"
                type="text"
                placeholder="Channel name"
              />
              <span className="text-red-600 text-sm py-1">{errors.name}</span>
            </label>

            <label className="flex flex-col justify-start w-full mt-3">
              <span className="text-gray-300 text-base mb-2 ">
                Description:
              </span>
              <textarea
                value={channelDescription}
                onChange={(e) => setChannelDescription(e.target.value)}
                rows={3}
                placeholder="Channel Description"
                className="w-full mt-1 rounded-lg border p-2 outline-blue-light"
              />
            </label>

            <div className="flex flex-col gap-3 my-6 text-gray-300">
              <h4 className="text-gray-300">Channel Type: </h4>
              <label
                htmlFor="free"
                className="flex items-center cursor-pointer space-x-3 "
              >
                <span>Free</span>
                <input
                  value="0"
                  checked={channelType === "0"}
                  onChange={handleChannelType}
                  name="channelType"
                  id="free"
                  type="radio"
                  className="accent-gold-light_300"
                />{" "}
              </label>

              <label
                htmlFor="paid"
                className="flex items-center cursor-pointer space-x-3 "
              >
                <span>Paid</span>
                <input
                  value="1"
                  checked={channelType === "1"}
                  onChange={handleChannelType}
                  name="channelType"
                  id="paid"
                  type="radio"
                  className="accent-gold-light_400"
                />
              </label>
            </div>


            <div>
              <button className="text-blue-light px-6 py-3 rounded-lg bg-gold-light_300 hover:bg-gold-light_400 transition-all font-semibold shadow-lg">Create Channel</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateSignalChannel;
