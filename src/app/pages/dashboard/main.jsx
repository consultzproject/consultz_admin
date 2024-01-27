import React from "react";
import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";
import * as Router from "react-router-dom";
import axios from "axios";
import * as Constants from "src/constants";
import { Routes } from "../../../api/server/request-routes";

export const Main = () => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [filter, setFilter] = React.useState(["All"]);

  const fetchData = async () => {
    setLoading(true);
    const url = Constants.API_CONFIG.baseURL + Routes?.userList?.url;

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: { designation: filter.includes("All") ? "" : filter },
      });

      console.log(response.data, "check response");
      setList(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [filter]);

  return (
    <>
      <Mui.Box>
        {loading ? (
          <Components.Temp.Loader />
        ) : (
          filter.length > 0 && (
            <Pages.Dashboard.Table
              list={list}
              filter={filter}
              setFilter={setFilter}
            />
          )
        )}
      </Mui.Box>
      <Router.Outlet />
    </>
  );
};
