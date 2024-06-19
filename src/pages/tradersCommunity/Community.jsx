import { Link } from "react-router-dom";
import CummunityNavbar from "../../components/tradersCommunity/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../../components/Footer";

const TradersCommunity = () => {
  return (
    <div>
      <CummunityNavbar />
      {/* Hero */}
      <div className="bg-blue-dark relative wrapper pt-[200px] pb-[120px] z-50">
        <div className="">
          <h1 className="text-gold-light_400 font-black text-[40px] pb-3">
            Traders Community
          </h1>

          <p className="text-white w-[35%] mb-10">
            Having real social contacts can sometimes be difficult FUN,
            everything becomes much simpler!
          </p>

          <div className="text-white flex flex-col">
            <p className="text-[40px] font-bold  mb-2">10,95,219</p>
            <span className="text-sm">Connected People</span>
          </div>

          <Link
            className="mt-6 flex items-center  text-white text-base border border-gray-200 rounded-[25px] px-1 py-1 w-max group "
            to="#"
          >
            <span className="group-hover:bg-blue-light pr-2 py-1 rounded-tl-[25px] rounded-bl-[25px] px-2 transition-all">
              Discover Now
            </span>
            <span className="bg-blue-light group-hover:rounded-tl-none group-hover:rounded-bl-none rounded-full transition-all p-2 mt-[1px]">
              <FaLongArrowAltRight size={17} />
            </span>
          </Link>
        </div>

        {/* image right */}
        <div className="absolute  top-1/2 z-10 -translate-y-1/2 right-10">
          <img
            className="w-[400px]"
            src="/assets/community/shape_1.png"
            alt=""
          />
          <img
            className="w-[400px]"
            src="/assets/community/people.png"
            alt=""
          />
        </div>

        {/* imgae bottom  */}

        <div className="absolute top-[49vh] left-0 -z-10">
          <img
            className="overflow-hidden"
            src="/assets/community/map_line.png"
            alt="map"
          />
        </div>
      </div>

      {/* most popular groups */}
      <section className="wrapper bg-[#0F194E] pt-[120px] pb-[120px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-gold-light_400 font-black text-4xl pb-3">
            Most Popular Groups
          </h1>

          <p className="text-gray-500 text-sm max-w-[50%] text-center">
            When an unknown printer took a galley of type and meeting fari
            scrambled it to make a type of specific specimen book.
          </p>
        </div>

        <div className="mt-14 px-20 flex gap-4 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={index}
              className="relative w-[250px] h-[180px] shadow-xl rounded-lg overflow-hidden group"
            >
              <div className="bg-black absolute w-full h-full opacity-20 group-hover:opacity-30 duration-300" />
              <img
                className="w-full h-full object-cover rounded-lg overflow-hidden"
                src="/assets/community/dummy-banner.jpg"
              />

              <div className="absolute top-[50%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                <Link
                  className="text-gray-200 text-xl hover:text-gold-light_400 transition-all"
                  to="#"
                >
                  amir basiri
                </Link>

                <span className="bg-blue-light px-2 py-1 text-white text-xs rounded-[20px] w-max mt-6 translate-y-10 group-hover:translate-y-0 duration-300 font-medium">
                  3 members
                </span>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="mt-20  mx-auto flex items-center  text-white text-base border border-gray-200 rounded-[25px] px-1 py-1 w-max group "
          to="/traders-community/groups"
        >
          <span className="group-hover:bg-blue-light pr-2 py-1 rounded-tl-[25px] rounded-bl-[25px] px-2 transition-all">
            See All Groups
          </span>
          <span className="bg-blue-light group-hover:rounded-tl-none group-hover:rounded-bl-none rounded-full transition-all p-2 mt-[1px]">
            <FaLongArrowAltRight size={17} />
          </span>
        </Link>
      </section>

      {/*  */}
      <Footer />
    </div>
  );
};

export default TradersCommunity;
