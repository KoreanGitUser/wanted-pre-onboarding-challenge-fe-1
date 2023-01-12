import Auth from "@components/auth/Auth";
import PATH from "@utils/routes/PATH";
import { Routes, Route } from "react-router-dom";

const UnAuthRoutes = () => {
  const { AUTH } = PATH;
  return (
    <Routes>
      <Route path={AUTH} element={<Auth />} />
    </Routes>
  );
};

export default UnAuthRoutes;
