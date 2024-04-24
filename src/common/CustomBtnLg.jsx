const CustomBtnLg = ({ title, text="text-lg" }) => {
  return (
    <button
      className={`capitalize  text-blue-dark font-semibold py-6 px-10 bg-gradient-to-t from-[#F0D785] via-[#9C7049] to-[#F0D785] shadow-xl rounded-lg ${text}`}
    >
      {title}
    </button>
  );
};

export default CustomBtnLg;
