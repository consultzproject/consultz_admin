import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import { CountryList } from "./country";

export const Table = ({ list, setDesignation, designation, fetchData,location,setLocation,fromDate,setFromDate,toDate,setToDate }) => {
  const [personName, setPersonName] = React.useState([]);

  const Technology = ["Java", "Dot Net", "Testing","Sap","Business Analyst","Share Point","Others","All"];

  const ItemsPerPage = 10;


  const handleDownload = async (resume) => {
    console.log(resume,"check resume")
    try {
      const response = await fetch(resume);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Logo.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const data = list?.map((text, index) => {
    const startIndex = (1 - 1) * ItemsPerPage;
    const dateParts = text?.createdDate.split('-');
  const year = dateParts[0]||"";
  const month = dateParts[1]||"";
  const day = dateParts[2]||"";
    return {
      id: text?.id,
      Id: startIndex + index + 1,
      name: text?.name,
      email: text?.email,
      mobile: text?.mobile,
      technology: text?.designation,
      location: text?.location,
      // updated:`${new Date(text.updatedAt).toLocaleDateString('en-GB', {
      //   day: '2-digit',
      //   month: '2-digit',
      //   year: 'numeric',
      // })}`,
      updated:`${day}-${month}-${year}`,

      Action: (
        <Mui.IconButton>
          <MuiIcons.PictureAsPdf
            onClick={() =>handleDownload(text?.resume_url)}
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
          <Mui.FormControl sx={{ m: 1, minWidth: 200 }}>
                  <Mui.InputLabel id="demo-simple-select-helper-label">
                    Technology
                  </Mui.InputLabel>

            <Mui.Select
              value={designation}
              label="Technology"
              onChange={(e) => {
                setDesignation(e.target.value);
                fetchData();
              }}
            >
              {Technology.map((item) => (
                <Mui.MenuItem value={item}>{item}</Mui.MenuItem>
              ))}
            </Mui.Select>
     
            </Mui.FormControl>
            <Mui.Stack direction="row" spacing={2} mb={2}>
          <Mui.FormControl sx={{ m: 1, minWidth: 200 }}>
                  <Mui.InputLabel id="demo-simple-select-helper-label">
                    Location
                  </Mui.InputLabel>

            <Mui.Select
              value={location}
              label="Location"
              onChange={(e) => {
                setLocation(e.target.value);
                fetchData();
              }}
            >
              {CountryList.map((item) => (
                <Mui.MenuItem value={item?.name}>{item?.name}</Mui.MenuItem>
              ))}
            </Mui.Select>
     
            </Mui.FormControl>
          
          </Mui.Stack>
          <Mui.Stack direction="row" spacing={2} mb={2}>
          <Mui.FormControl sx={{ m: 1, minWidth: 200 }}>
                
<Mui.TextField  id="date"
      label="From"
      type="date"
      value={fromDate}
      onChange={(e) => {
        setFromDate(e.target.value);
        fetchData();
      }}
  
      InputLabelProps={{
        shrink: true,
      }}></Mui.TextField>
           
     
            </Mui.FormControl>
          
          </Mui.Stack>
          <Mui.Stack direction="row" spacing={2} mb={2}>
          <Mui.FormControl sx={{ m: 1, minWidth: 200 }}>
                
<Mui.TextField  id="date"
      label="To"
      type="date"
      value={toDate}
      onChange={(e) => {
        setToDate(e.target.value);
        fetchData();
      }}
  
      InputLabelProps={{
        shrink: true,
      }}></Mui.TextField>
           
     
            </Mui.FormControl>
          
          </Mui.Stack>
          
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
              "Technology",
              "Location",
              "Uploaded At",
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
