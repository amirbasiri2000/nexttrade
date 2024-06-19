import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGroupSignalChannels } from "../../../redux/features/signals/signalChannelsSlice";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useEffect } from "react";
import {
  getSignals,
  setSignalChannelId,
} from "../../../redux/features/signals/SignalSlice";

const SignalChannelsAside = ({ id }) => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const { signalChannels } = useSelector((state) => state.signalChannel);

  useEffect(() => {
    dispatch(
      getGroupSignalChannels({ axiosPrivate, data: { communitygroupId: id } })
    );
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  };

  const showSignalChannelHandler = (signalChannel) => {
    dispatch(
      getSignals({
        axiosPrivate,
        data: { signalchannelId: signalChannel.id, id: null },
      })
    );
  };
  return (
    <div className="p-6">
      <div className="w-full flex flex-row items-start gap-3 lg:flex-col lg:items-start lg:gap-3 xl:flex-row justify-between">
        <h3 className="text-lg pb-3 font-bold text-gray-900 border-b-2 border-blue-500 w-max ">
          Signal Channels
        </h3>

        <Link
          to={`/traders-community/create-signal-channel/${id}`}
          className="text-sm border rounded-lg border-blue-main px-2 py-1 text-blue-main"
        >
          New Channel
        </Link>
      </div>
      <div className="my-4 flex items-center flex-wrap gap-3 text-xs font-medium text-gray-500">
        <span className="bg-blue-main text-gray-100 border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Newest
        </span>
        <span className="border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Active
        </span>
        <span className="border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Popular
        </span>
        <span className="border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Alphabetical
        </span>
      </div>

      <ul className="flex flex-col gap-6 mt-6 pb-6">
        {signalChannels.length ? (
          signalChannels.map((item, index) => (
            <li
              onClick={() => showSignalChannelHandler(item)}
              key={index}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div>
                <img
                  className="rounded-full shrink-0 size-[50px] border-2 border-white shadow-sm p-[1px] object-fill"
                  src="/assets/community/mystery-group-50 .png"
                  alt="Group Avatar"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-gray-600 text-base hover:text-gray-800 transition-all font-medium">
                  {item?.title}
                </div>
                <span className="text-xs text-gray-500">
                  {formatDate(item?.createdatetime)}
                </span>
              </div>
            </li>
          ))
        ) : (
          <span>Loading ...</span>
        )}
      </ul>
    </div>
  );
};

export default SignalChannelsAside;
