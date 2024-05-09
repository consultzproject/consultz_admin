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
  const [designation, setDesignation] = React.useState(["All"]);
  const [roles, setRoles] = React.useState(["All"]);
  const [exp, setExp] = React.useState(["All"]);
  const [location, setLocation] = React.useState(["Belgium"]);
  const [fromDate, setFromDate]  = React.useState("");
  const [toDate, setToDate]  = React.useState("");



  const fetchData = async () => {
    setLoading(true);
    const url = Constants.API_CONFIG.baseURL + Routes?.userList?.url;

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: { designation: designation.includes("All") ? "" : designation,exp:exp.includes("All") ?"" : exp,roles:roles.includes("All") ?"" : roles,location:location.includes("All") ?"" : location,fromDate:fromDate,toDate:toDate},
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
  }, [designation,location,toDate,roles,exp]);

  return (
    <>
      <Mui.Box>
        {loading ? (
          <Components.Temp.Loader />
        ) : (
          designation.length > 0  && (
            <Pages.Dashboard.Table
              list={list}
              designation={designation}
              setDesignation={setDesignation}
              location={location}
              roles={roles}
              setRoles={setRoles}
              setLocation={setLocation}
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
              exp={exp}
              setExp={setExp}

            />
          )
        )}
      </Mui.Box>
      <Router.Outlet />
    </>
  );
};
