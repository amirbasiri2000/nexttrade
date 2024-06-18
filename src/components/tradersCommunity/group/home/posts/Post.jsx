import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CreateComment from "./CreateComment";
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
  const comments = useSelector(
    (state) => state.posts.commentsByPostId[post.id] || []
  );

  const { commentLoading, postComments, postComment, postCommentsLoading } =
    useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(
      getPostComments({
        axiosPrivate,
        data: { parentId: post?.id, communitygroupid: params?.id },
      })
    );
  }, []);
  return (
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
            <span className="text-sm">{post.creatorusername || "unKnown"}</span>
            <span className="flex items-center justify-start text-xs font-normal">
              <Moment className="text-xs text-gray-400" fromNow>
                {post.registerdatetime}
              </Moment>
            </span>
          </div>
        </Link>
        <div>
          <RiMoreLine className="text-gray-500" size={23} />
        </div>
      </div>

      <div className="xl:h-[200px] overflow-hidden relative bg-gray-100">
        <div className="w-full h-full bg-cover object-cover">
          <LazyLoadImage
            src="/assets/community/dummy-banner.jpg"
            effect="blur"
            alt="post background"
          />
        </div>
      </div>

      <div className="px-2 py-2 text-gray-500 text-sm">
        <span>{post.messagebody}</span>
      </div>

      <div className="py-2 px-4">
        <CreateComment postId={post.id} communitygroupId={params.id} />
      </div>

      <div>
        {comments.length ? (
          comments.map((comment, index) => (
            <div className="text-gray-500 px-4 py-2 text-sm" key={index}>
              {comment.messagebody}
            </div>
          ))
        ) : (
          <div className="text-gray-500 px-4 py-2 text-sm">
            No comments yet.
          </div>
        )}
      </div>
    </div>
  );
});

export default Post;
