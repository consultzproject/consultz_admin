import React from "react";
import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Table = ({ titles, data, size, totalPages, count, loading }) => {
  const [page, setPage] = React.useState(1);

  const handlePageChange = (e, value) => {
    setPage(value);
    totalPages?.(value);
  };

  return (
    <>
      {loading ? (
        <Components.Temp.Cirular />
      ) : (
        <Mui.TableContainer
          sx={{
            borderRadius: "inherit",
            display: { xs: "none", md: "block" },
            minHeight: 600,
          }}
        >
          <Mui.Table size={size}>
            <Mui.TableHead
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : "background.default",
                borderColor: (theme) => theme.palette.grey[100],
              }}
            >
              {titles.map((title, index) => (
                <Mui.TableCell key={index}>
                  <Mui.Typography noWrap variant="body2" color="text.secondary">
                    {title}
                  </Mui.Typography>
                </Mui.TableCell>
              ))}
            </Mui.TableHead>
            {data?.length === 0 ? (
              <Mui.TableBody sx={{ p: 2 }}>
                <Mui.TableCell colSpan={titles?.length} sx={{ border: "none" }}>
                  <Mui.Typography
                    textAlign="center"
                    color="text.secondary"
                    variant="h5"
                  >
                    No Records Found
                  </Mui.Typography>
                </Mui.TableCell>
              </Mui.TableBody>
            ) : (
              <Mui.TableBody>
                {data?.map((values, index) => (
                  <TableData1 key={index} {...values} />
                ))}
              </Mui.TableBody>
            )}
          </Mui.Table>
        </Mui.TableContainer>
      )}
      {data?.map((values, index) => (
        <CardView1 key={index} titles={titles} data={values} />
      ))}
      <Mui.Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ m: 2 }}
      >
        <Mui.Typography variant="body1">Total: {data?.length}</Mui.Typography>
        <Mui.Pagination
          variant="outlined"
          shape="rounded"
          color="primary"
          count={count}
          page={page}
          onChange={handlePageChange}
        />
      </Mui.Stack>
    </>
  );
};

const TableData1 = ({ node, ...props }) => {
  const [open, close] = React.useState(false);
  return (
    <>
      <Mui.TableRow
        sx={{ borderColor: (theme) => theme.palette.grey[100] }}
        onClick={() => close(!open)}
      >
        {Object.entries(props).map(([key, value], index) => (
          <Mui.TableCell key={index}>
            <Mui.Typography
              noWrap={
                key === "Slug" ||
                "MetaTitle" ||
                "MetaDescription" ||
                "Values" ||
                "Type"
                  ? false
                  : true
              }
              variant="body2"
            >
              {value}
            </Mui.Typography>
          </Mui.TableCell>
        ))}
      </Mui.TableRow>
      {node && open && (
        <Mui.TableRow>
          <Mui.TableCell colSpan={Object.keys(props).length}>
            {node}
          </Mui.TableCell>
        </Mui.TableRow>
      )}
    </>
  );
};

const CardView1 = ({ titles, data: { node, ...values } }) => {
  const [open, close] = React.useState(false);
  return (
    <Mui.Card
      sx={{
        borderRadius: "inherit",
        display: { xs: "block", md: "none" },
        border: (theme) => `1px solid ${theme.palette.grey[200]}`,
        my: 1,
      }}
    >
      <Mui.Grid
        component={Mui.CardContent}
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        onClick={() => close(!open)}
      >
        {Object.entries(values).map(([key, value], i, a) => (
          <Mui.Grid
            key={i}
            item
            xs={a.length % 2 && a.length === i + 1 ? 12 : 6}
          >
            <Components.Global.StackLabel
              medium
              title={titles[i]}
              label={value}
              node
            />
          </Mui.Grid>
        ))}
      </Mui.Grid>
      {node && open && node}
    </Mui.Card>
  );
};
