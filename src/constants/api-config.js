// export const API_CONFIG = {
//   baseURL: `${import.meta.env.VITE_API_ENCRYPTION}://${
//     import.meta.env.VITE_API_IP
//   }`,

//   // PORT2: "http://188.166.228.50:8081",  
// };
 export const API_CONFIG = {
  baseURL: `${import.meta.env.VITE_API_ENCRYPTION}://${
    import.meta.env.VITE_API_IP
  }:${import.meta.env.VITE_API_PORT}`,
 
  // PORT2: "http://188.166.228.50:3002",
};
