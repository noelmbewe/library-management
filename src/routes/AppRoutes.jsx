import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import LibrarianDashboard from "../pages/Librarian/LibrarianDashboard";
import PatronDashboard from "../pages/Patron/PatronDashboard";
import ManageUsers from "../pages/Admin/ManageUsers"; // Import the Manage Users page
import AddUser from "../pages/Admin/AddUser"; // Import Add User page
import EditUser from "../pages/Admin/EditUser"; // Import Edit User page
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import BookIssuePage from "../pages/Books/BookIssuePage";
import BookReturnPage from "../pages/Books/BookReturnPage";
import AddMemberPage from "../pages/members/AddMemberPage";
import EditMemberPage from "../pages/members/EditMemberPage";
import MembershipPage from "../pages/members/MembershipPage"; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<BaseLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/librarian" element={<LibrarianDashboard />} />
          <Route path="/patron" element={<PatronDashboard />} />

          <Route path="/admin/manage-users" element={<ManageUsers />} /> {/* Manage Users route */}
          <Route path="/admin/add-user" element={<AddUser />} /> {/* Add User route */}
          <Route path="/admin/edit-user/:userId" element={<EditUser />} /> {/* Edit User route */}
          <Route path="/Books/book-issue" element={<BookIssuePage />} />
          <Route path="/Books/return-books" element={<BookReturnPage />} />
          <Route path="/members/membership" element={<MembershipPage />} />
          
          <Route path="/members/add-member" element={<AddMemberPage />} />
          <Route path="/members/edit-member/:id" element={<EditMemberPage />} />

          
        </Route>
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
