const PATH = {
  // send to API Server
  URL: import.meta.env.VITE_API_BASE_URL,

  // UnAuth API routes
  AUTH: "auth",

  // protected API routes
  TODO: "todos",
};

export default PATH;
