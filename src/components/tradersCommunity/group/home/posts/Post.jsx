import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactsPopup from "./ReactsPopup";
import CreateComment from "./CreateComment";
import PostMenu from "./PostMenu";
import { RiMoreLine } from "react-icons/ri";
import { useRef } from "react";
import Moment from "react-moment";
import { getPostComments } from "../../../../../redux/features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
// import useClickOutside from "../../hooks/useClickOutside";

const Post = React.forwardRef(({ post }, ref) => {
  const params = useParams();

  const {
    id,
    parentId,
    creatorusername,
    registerdatetime,
    fromregisterdatetime,
    toregisterdatetime,
    title,
    messagebody,
  } = post;

  const [reactsVisible, setReactsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const { commentLoading, postComments, postComment, postCommentsLoading } =
    useSelector((state) => state.posts);

  useEffect(() => {
    console.log({ parentId });
    console.log({ postComment });
    dispatch(
      getPostComments({
        axiosPrivate,
        data: { parentId: parentId, communitygroupid: params?.id },
      })
    );
  }, []);
  return (
    <>
      {parentId === null ? (
        <div ref={ref} className="bg-white rounded-lg shadow-md">
          <div className="p-3 flex justify-between items-center">
            <Link
              to={`/user-profile`}
              className="flex space-x-2 items-center text-gray-600 font-semibold"
            >
              <img
                src="/assets/bp-avatar.png"
                alt=""
                className="rounded-full shrink-0 h-8 w-8 object-cover"
              />
              <div className="flex flex-col leading-4">
                <span className="text-sm">{creatorusername || "unKnown"}</span>
                <span className="flex items-center justify-start text-xs font-normal">
                  {/* <Moment className="text-sm" fromNow interval={30}>
                {post?.createdAt}
              </Moment> */}
                  <Moment
                    className="text-xs text-gray-400"
                    interval={30}
                    fromNow
                  >
                    {registerdatetime}
                  </Moment>
                </span>
              </div>
            </Link>
            <div ref={menuRef} className="relative">
              <div onClick={() => setShowMenu((prev) => !prev)}>
                <RiMoreLine className="text-gray-500" size={23} />
              </div>
              {/* {showMenu && (
            <div className="absolute top-8 right-6 z-20">
              <PostMenu post={post} />
            </div>
          )} */}
            </div>
          </div>
          {/* post content */}
          {/* {post?.background ? (
        <div
          style={{ backgroundImage: `url("${post?.background}")` }}
          className="xl:h-[600px] md:h-[400px] sm:h-[350px] h-[300px] bg-cover bg-center flex justify-center items-center"
        >
          <span
            style={{ backgroundImage: `url("${post?.background}")` }}
            className="text-xl relative break-all rounded-lg overflow-y-scroll scrollbar-none inline-block w-auto max-w-[85%] max-h-[60%] bg-gray-100 bg-blend-overlay bg-opacity-50"
          >
            <span className="h-full  backdrop-blur-sm select-none backdrop-opacity-70 font-semibold text-gray-700 p-4 block">
              {post?.text}
            </span>
          </span>
        </div>
      ) : (
        <>
          <div className="text-lg select-none text-gray-700 px-4 py-2 border-y-gray-100 border-y">
            {post?.text}
          </div>
          {post?.images?.length > 0 && (
            <>
              <div className="h-[200px] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-100 relative bg-gray-100">
                <div>
                  {post?.images.map((img, index) => (
                    <div
                      key={index}
                      className="relatvie h-[200px] w-full overflow-hidden"
                    >
                      <div className="w-full h-full lazyImage">
                        <LazyLoadImage src={img?.url} effect="blur" alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )} */}

          <div className="xl:h-[200px] overflow-hidden relative bg-gray-100">
            <div className="w-full h-full bg-cover object-cover">
              <LazyLoadImage
                src="/assets/community/dummy-banner.jpg"
                effect="blur"
                alt="post background"
              />
            </div>
          </div>
          {/* text */}

          <div className="px-2 py-2 text-gray-500 text-sm">
            <span>{messagebody}</span>
          </div>

          {/* comment */}
          <div className="py-2 px-4">
            <CreateComment postId={id} />
          </div>

          <div>
            {postComments?.length ? (
              postComments.map((item, index) => (
                <>
                  {item.parentId !== null ? (
                    <div key={index}>{item?.messagebody}</div>
                  ) : null}
                </>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
});

export default Post;
