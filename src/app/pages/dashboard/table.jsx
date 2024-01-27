import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";

export const Table = ({ list, setFilter, filter, fetchData }) => {
  const [personName, setPersonName] = React.useState([]);

  const filters = ["Front End Developer", "FullStack Developer", "All"];

  const ItemsPerPage = 10;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleFilter = (e) => {
    console.log(personName, "check");
    setSearch({ filter: personName });
    setPage(1);
  };
  const downloadFile = async (url) => {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;
    const pathParts = pathname.split("/");
    const filename = pathParts[pathParts.length - 1];
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a link element
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);

      // Set the filename for the downloaded file
      downloadLink.download = filename; // Change the filename as needed

      // Append the link to the body and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Remove the link from the body
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const data = list?.map((text, index) => {
    const startIndex = (1 - 1) * ItemsPerPage;
    return {
      id: text.id,
      Id: startIndex + index + 1,
      name: text.name,
      email: text.email,
      mobile: text.mobile,
      designation: text.designation,

      Action: (
        <Mui.IconButton>
          <MuiIcons.PictureAsPdf
            onClick={() => downloadFile(text.resume_url)}
          />
        </Mui.IconButton>
      ),
    };
  });

  return (
    <>
      <Components.Global.Container sx={{ mt: 2 }}>
        <Mui.Stack
          sx={{ pt: 2 }}
          direction="row"
          justifyContent="space-between"
        >
          <Mui.Stack direction="row" spacing={2} mb={2}>
            <Mui.Select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                fetchData();
              }}
            >
              {filters.map((item) => (
                <Mui.MenuItem value={item}>{item}</Mui.MenuItem>
              ))}
            </Mui.Select>
          </Mui.Stack>
        </Mui.Stack>
        <Mui.Stack sx={{ td: { padding: 1 } }}>
          <Components.Global.ResponsiveTable
            data={data}
            titles={[
              "S.No",
              "Name",
              "Email",
              "Mobile",
              "Designation",
              "Action",
            ]}
          // count={userList?.totalCount?.totalCount || 0}
          // pageNo={page}
          // setPageNo={handlePageNo}
          />
        </Mui.Stack>
      </Components.Global.Container>
    </>
  );
};
