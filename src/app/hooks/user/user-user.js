import * as Api from "src/api";

export const useUser = (state = false) => {
  const { data: user, isFetching: loading } = Api.Server.useRequest(
    [localStorage.getItem("MEFToken") || "", state],
    "getAdminDetail"
  );
  return { user, loading };
};
