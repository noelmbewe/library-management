import { Link } from "react-router-dom";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { Table, Button, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  AreaTop } from "../../components/";
import "./ManageUsers.scss";

const ManageUsers = () => {
  // Sample user data (replace with dynamic data later)

  const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "Librarian" },
    { id: 3, name: "Alice Johnson", email: "alicejohnson@example.com", role: "Member" },
  ];

  return (
    <Container>
         <AreaTop />
      <h2>Manage Users</h2>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/admin/add-user">
          <Button variant="primary">Add New User</Button>
        </Link>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link to={`/admin/edit-user/${user.id}`}>
                    <Button variant="warning" size="sm" className="mr-2">
                      <MdOutlineEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" size="sm">
                    <MdOutlineDelete />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageUsers;
