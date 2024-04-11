import { Outlet } from "react-router-dom";

import "./MainLayout.css";
import { Header } from "../components";

export const MainLayout = () => {
    return (
        <div className="main">
            <div className="main__header">
                <Header />
            </div>
            <div className="main__body">
                <Outlet />
            </div>
        </div>
    );
};
