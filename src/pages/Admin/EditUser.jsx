import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const EditUser = () => {
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // Simulating data fetch for editing
  useEffect(() => {
    // Normally, you would fetch the user details from the API
    setName("John Doe");
    setEmail("johndoe@example.com");
    setRole("Admin");
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send the updated data to the API here
    alert("User updated successfully!");
  };

  return (
    <Container className="mt-4">
      <h2>Edit User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formRole" className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="admin">Admin</option>
            <option value="librarian">Librarian</option>
            <option value="member">Member</option>
          </Form.Control>
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          <Link to="/admin/manage-users">
            <Button variant="secondary">Back to User List</Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default EditUser;
