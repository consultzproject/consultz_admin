import React from "react";
import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";
import * as Formik from "formik";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";
import * as Providers from "src/app/providers";
import * as Router from "react-router-dom";
import axios from "axios";
import * as Constants from "src/constants";
import { Routes } from "../../../api/server/request-routes";

export const Main = () => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [filter, setFilter] = React.useState(["All"]);

  const fetchData = async () => {
    const url = Constants.API_CONFIG.baseURL + Routes?.userList?.url;
    const data = { designation:filter};
  
    try {
      const response = await axios.request({
        method: 'GET',
        url: url,
        data: data, // Request body data
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log(response.data,"check response");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // const fetchData = () => {
  //   setLoading(true);
  //   axios
  //     .get(Constants.API_CONFIG.baseURL + Routes?.userList?.url,{designation:filter})
  //     .then((response) => {
  //       setList(response?.data?.data);
  //       setLoading(false);
  //     });
  // };

  React.useEffect(() => {
    fetchData();
  }, [filter]);

  return (
    <>
      <Mui.Box>
        {loading ? (
          <Components.Temp.Loader />
        ) : (
          <Pages.Dashboard.Table
            list={list}
           
            filter={filter}
            setFilter={setFilter}
          />
        )}
      </Mui.Box>
      <Router.Outlet />
    </>
  );
};
