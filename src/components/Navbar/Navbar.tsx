import DesktopNav from "./DesktopNav";
import TabletNav from "./TabletNav";

const Navbar: React.FC = () => {
  return (
    <>
      {/* DesktopNav: show on large screens and up */}
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      {/* TabletNav: show on small and medium screens */}
      <div className="block lg:hidden">
        <TabletNav />
      </div>
    </>
  );
};

export default Navbar;
