import { Outlet } from "react-router-dom";

const MainLayouts = () => {
      return (
            <div>
                  navbar
                  <Outlet />
            </div>
      );
};

export default MainLayouts;