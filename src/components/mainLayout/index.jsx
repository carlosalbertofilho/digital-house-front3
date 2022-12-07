import { Outlet } from "react-router-dom";
import "./style.scss";

export const MainLayout = () => {
  return (
    <div>
      Teste
      {<Outlet />}
    </div>
  );
};
