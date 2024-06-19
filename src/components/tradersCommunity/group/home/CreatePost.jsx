import { IoImageOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import { useParams } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createGroupPost } from "../../../../redux/features/postSlice";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
import CustomBeatLoader from "../../../../utils/loaders/CustomBeatLoader";

const CreatePost = () => {
  const { id } = useParams();
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    messageBody: Yup.string().required("Message body is required"),
  });

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const { creatPostLoading } = useSelector(
    (state) => state.posts
  );

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(
      createGroupPost({
        axiosPrivate,
        data: {
          ...values,
          parentId: null,
          communitygroupId: id,
          categoryid: 1,
        },
        resetForm,
        toast,
      })
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-6 w-full">
      <div className="text-center font-bold text-2xl py-2 text-gray-800 w-full">
        New Post
      </div>

      <Formik
        initialValues={{ title: "", messageBody: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="editor mx-auto w-[90%] flex flex-col text-gray-800 border border-gray-300 p-4 ">
            {/* Title field */}
            <Field
              className="title bg-gray-100 p-2 mb-4 outline-none"
              placeholder="Title"
              type="text"
              name="title"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mb-2"
            />

            {/* Message body textarea */}
            <div className="w-full- h-20 relative">
              <Field
                as="textarea"
                className="w-full bg-gray-100 sec p-3 h-20 overflow-x-hidden overflow-y-scroll scrollbar-none lg:scrollbar-thin  outline-none placeholder:text-sm resize-none"
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
              className="text-red-500 text-sm mb-2"
            />

            {/* Additional buttons or features */}
            <div className="flex items-center gap-4 mt-4">
              <button className="opacity-85">
                <IoImageOutline size={24} />
              </button>
            </div>

            {/* Submit and cancel buttons */}
            <div className="buttons flex items-center mt-4">
              <div className="border border-gray-300 text-sm p-1 px-4 font-medium cursor-pointer text-gray-500 ml-auto">
                Cancel
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-700 transition-all text-sm"
              >
                {creatPostLoading ? (
                  <>
                    <CustomBeatLoader />
                  </>
                ) : (
                  "Post"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePost;
