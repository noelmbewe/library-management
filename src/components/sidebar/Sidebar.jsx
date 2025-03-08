import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">Nalib.</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
           
           
            
            

            {/* User & Role Management */}
            <li className="menu-item">
  <Link to="/admin/manage-users" className="menu-link">
    <span className="menu-link-icon">
      <MdOutlinePeople size={20} />
    </span>
    <span className="menu-link-text">Manage Users</span>
  </Link>
</li>

            {/* Library Resources */}
            <li className="menu-item">
              <Link to="/library" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Library Catalogue</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/add-resource" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Add New Resource</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/cataloging" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Cataloging Activities</span>
              </Link>
            </li>

            {/* Membership Management */}

            <li className="menu-item">
         <Link to="/members/membership" className="menu-link">
         <span className="menu-link-icon">
        <MdOutlinePeople size={20} />
         </span>
        <span className="menu-link-text">Manage Members</span>
       </Link>
     </li>

            {/* Notifications & Reports */}
            <li className="menu-item">
              <Link to="/notifications" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Notifications</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/analytics" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Reports & Analytics</span>
              </Link>
            </li>


             {/* Librarian-Specific Functions */}
             <li className="menu-item">
              <Link to="/Books/book-issue" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Issue Books</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Books/return-books" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Return Books</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/search-books" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Search Books</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/book-reports" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Book Reports</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/overdue-books" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Overdue Books</span>
              </Link>
            </li>


            
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
