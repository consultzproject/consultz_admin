import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as Constants from "src/constants";
import {Routes} from "./request-routes";
export const Main = ({ children }) => {
  const queryClient = new ReactQuery.QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};

export const Client = Axios.default.create();

const formOptions = [
  "editCourse",
  "addMaterials",
  "editProfile",
  "fileUpload",
  "editCourseMaterials",
  "addSyllabus",
];

const client = Axios.default.create({
  baseURL: `${Constants.API_CONFIG.baseURL}`,
});

export const Request = async (options, data,params) => {
  console.log(params,"params")
  const startAt = performance.now();
  if (import.meta.env.MODE === "development")
    console.info(`${options} Request`, data);

  const res = await client({
    ...Routes[options],
    url: params
    ? replaceParams(Routes[options].url, params)
    : Routes[options]?.url,
    headers: {
      "Content-Type":
        formOptions.indexOf(options) > -1
          ? "multipart/form-data"
          : "application/json",

      Authorization: localStorage.getItem("Token") || "",
  
    },
    data,
  });
  import.meta.env.MODE === "development" &&
    console.info(
      `${options} Response Timing ${performance.now() - startAt}ms`,
      res.data
    );
  if (options.includes("login")) {
    localStorage.setItem("Token", res?.data?.token);
  }
  return res.data;
};
export const useRequest = (queryOptions, options, data, queryArgs) => {
  return ReactQuery.useQuery(queryOptions, () => Request(options, data), (queryArgs || {}));
};
// function replaceParams(url, params){
//   let replacedUrl = url;
//   for (const param in params) {
//     replacedUrl = replacedUrl.replace(`{${param}}`, params[param].toString());
//   }
//   console.log(replacedUrl,"replacedUrl")
//   return replacedUrl;
// }
// export const useRequest = (queryOptions, options, data,params) => {
//   return ReactQuery.useQuery(queryOptions, () => Request(options, data,params));
// };

// export const useRequest = (
//   queryOptions: (string | number | string[] | boolean)[],
//   options: string,
//   data?: object,
//   params?: { [key: string]: any },
//   success?: (data: any) => void,
//   error?: (err: any) => void
// ) => {
//   return ReactQuery.useQuery(
//     queryOptions,
//     () => Request(options, data, params),
//     {
//       keepPreviousData: true,
//       onSuccess: success ? (data) => success(data) : undefined,
//       onError: error ? (err) => error(err) : undefined,
//     }
//   );
// };