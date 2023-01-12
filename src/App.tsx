import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    console.log("app 경로 : ", location.pathname);
  }, [location.pathname]);
  return (
    <div>
      <main>이거 보임?</main>
    </div>
  );
};

export default App;
