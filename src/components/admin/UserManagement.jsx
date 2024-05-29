import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersListAction } from "../../redux/features/admin/usersListSlice";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { userDataAction } from "../../redux/features/userDataSlice";
import CustomCircleLoader from "../../utils/loaders/CustomCircleLoader";
import CustomBeatLoader from "../../utils/loaders/CustomBeatLoader";

const UserManagement = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const { usersList, isLoading, errorMsg } = useSelector(
    (state) => state.usersList
  );

  useEffect(() => {
    dispatch(usersListAction({ axiosPrivate }));
  }, []);

  return (
    <div className="w-full min-h-screen p-4">
      <div className="mt-10 w-full">
        <div className="bg-blue-light p-4 rounded-lg shadow-lg text-white">
          <h2 className="text-gold-light_400 text-2xl font-bold">Users List</h2>
          {usersList && console.log(usersList)}
          <div className="mt-10 overflow-y-scroll h-[80vh] overflow-x-scroll text-[#5a5c69] mx-auto">
            <table className="bg-gray-100 text-gray-900 w-full">
              <thead className="bg-gray-100 text-gray-900">
                <tr className="bg-gray-300 text-sm">
                  <th className="p-3"> select</th>
                  <th className="p-3"> row</th>
                  <th className="p-3 px-6">First Name</th>
                  <th className="p-3"> Last Name </th>
                  <th className="p-3"> Username </th>
                  <th className="p-3"> Organize Name </th>
                  <th className="p-3"> User Type </th>
                  <th className="p-3"> National Code </th>
                  <th className="p-3"> Status </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 text-[#5a5c69]">
                {usersList.length ? (
                  usersList.map((user, index) => (
                    <tr key={index} className="bg-gray-200 shadow-sm">
                      <td className="p-3 border border-gray-300 text-center ">
                        <input type="checkbox" />
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {index + 1}
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {user.fname || "unknown"}
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {user.lname || "unknown"}
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {user.username}
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {user.organizename === null ? "***" : user.organizename}
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {user.userTypeId === "1" ? "Master" : "Student"}
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {user.nationalcode || "***"}
                      </td>
                      <td className="p-3 border border-gray-300 text-center ">
                        {user.isActive ? (
                          <span className="text-green-600 font-semibold">
                            Active
                          </span>
                        ) : (
                          <span className="text-red-600 font-semibold">
                            In Active
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : isLoading == true ? (
                  <tr className="text-center">
                    <td
                      colSpan={11}
                      className="pt-10 border border-gray-300 pb-10 "
                    >
                      <div className="flex items-center justify-center w-full gap-3">
                        <span className="text-blue-light text-lg">Fetching data ... </span>
                        <CustomBeatLoader />
                      </div>
                    </td>
                  </tr>
                ) : errorMsg ? (
                  <tr className="text-center">
                    <td
                      colSpan={11}
                      className="pt-10 border border-gray-300 pb-10"
                    >
                      <span className="text-sm text-red-600">
                        Server not responded!. please try again later
                      </span>
                    </td>
                  </tr>
                ) : (
                  <tr className="text-center">
                    <td
                      colSpan={11}
                      className="pt-10 border border-gray-300 pb-10"
                    >
                      <span>Data Not Found!</span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
