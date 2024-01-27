import React from "react";
import * as Api from "src/api";
export const userList = () => {

  const { data: userList, isFetching: loading,refetch } = Api.Server.useRequest(
    ["userList","Front End Developer"],
    "userList",
    {
      designation:"Front End Developer"
    }
  );
  const handlePageNo = (number) => setPageNo(number);
  return { userList, loading, handlePageNo,refetch };
};