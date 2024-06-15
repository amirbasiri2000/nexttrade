import React, { useCallback, useEffect, useRef, useState } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { getGroupPosts } from "../../../../../redux/features/postSlice";
import { useParams } from "react-router-dom";
import CustomBeatLoader from "../../../../../utils/loaders/CustomBeatLoader";

const Posts = ({ id }) => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { posts, isLoading, creatPostLoading } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(
      getGroupPosts({
        axiosPrivate,
        data: {
          communitygroupid: id,
        },
      })
    );
  }, [dispatch, axiosPrivate, id, creatPostLoading]);

  return (
    <div className="mt-3 mb-8">
      {isLoading ? (
        <div className="flex items-center text-center justify-center mt-20 mb-10">
          <CustomBeatLoader />
        </div>
      ) : null}
      <div className="space-y-6">
        {posts?.length
          ? posts.map((item, index) => <Post key={index} post={item} />)
          : null}
      </div>
    </div>
  );
};

export default Posts;
