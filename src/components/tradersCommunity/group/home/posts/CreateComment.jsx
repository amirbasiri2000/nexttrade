import React, { useEffect, useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { IoImageOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createGroupPost,
  createPostComment,
  getPostComments,route
} from "../../../../../redux/features/postSlice";
import toast from "react-hot-toast";
import CustomBeatLoader from "../../../../../utils/loaders/CustomBeatLoader";

const CreateComment = ({ postId, communitygroupId }) => {
  const { id } = useParams();

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [postIdComment, setPostIdComment] = useState("");

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const { commentLoading, postComments, postCommentsLoading } = useSelector(
    (state) => state.posts
  );

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    messageBody: Yup.string().required("Message body is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(
      createPostComment({
        axiosPrivate,
        data: {
          ...values,
          parentId: postId,
          communitygroupId: communitygroupId,
          categoryid: 1,
        },
        resetForm,
        toast,
      })
    );
  };

  return (
    <div className="w-full">
      {showCommentBox ? (
        <div className="flex justify-between items-start space-x-2">
          <img
            src="/assets/bp-avatar.png"
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <div className="grow relative flex justify-between bg-gray-100 rounded-lg px-3 items-center">
            <Formik
              initialValues={{ title: "", messageBody: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="editor mx-auto w-full max-w-[60vw] flex flex-col text-gray-800 p-4">
                  {/* Title field */}
                  <Field
                    className="title bg-white p-2 mb-4 outline-none"
                    placeholder="Title"
                    type="text"
                    name="title"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-xs mb-2"
                  />

                  {/* Message body textarea */}
                  <div className="w-full- h-20 relative">
                    <Field
                      as="textarea"
                      className="w-full bg-white p-3 h-20 overflow-x-hidden overflow-y-scroll scrollbar-none lg:scrollbar-thin  outline-none placeholder:text-sm resize-none"
                      placeholder="Share what you are thinking ..."
                      name="messageBody"
                    />
                    <span className="absolute bottom-1 right-4 z-[1000]">
                      <CiFaceSmile
                        className="text-gray-500 cursor-pointer"
                        size={24}
                      />
                    </span>
                  </div>
                  <ErrorMessage
                    name="messageBody"
                    component="div"
                    className="text-red-500 text-xs mb-2"
                  />

                  {/* Submit and cancel buttons */}
                  <div className="buttons flex items-center justify-between mt-4">
                    <button className="opacity-85">
                      <IoImageOutline size={24} />
                    </button>
                    <div className="flex items-center gap-2">
                      <div
                        onClick={() => setShowCommentBox(false)}
                        className="border rounded-sm border-gray-300 text-sm p-1 px-4 font-medium cursor-pointer text-gray-500 ml-auto"
                      >
                        Cancel
                      </div>
                      <button
                        onClick={() => setPostIdComment(postId)}
                        type="submit"
                        disabled={isSubmitting}
                        className="btn border rounded-sm border-indigo-500 p-1 px-6 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-700 transition-all text-sm "
                      >
                        {commentLoading ? (
                          <>
                            <CustomBeatLoader />
                          </>
                        ) : (
                          "comment"
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-end text-xs text-gray-600  ">
          <div
            onClick={() => {
              setShowCommentBox(true);
            }}
            className="border border-blue-light px-2 py-1 rounded-lg w-max cursor-pointer hover:bg-blue-light transition hover:text-white"
          >
            Add Comment
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateComment;
