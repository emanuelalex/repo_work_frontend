import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />

      <div className="layout-main">
        <Header />

        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
/*CARLOS*/