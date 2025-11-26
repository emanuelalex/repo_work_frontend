import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: any; // ← evita el error sin ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;