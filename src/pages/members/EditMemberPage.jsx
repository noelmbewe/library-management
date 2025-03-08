import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditMemberPage = () => {
  const { id } = useParams(); // Get member ID from URL
  const navigate = useNavigate();

  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    // Fetch member data (Replace with API call)
    const dummyData = {
      name: "John Doe",
      email: "johndoe@email.com",
      phone: "0987-123-456",
      address: "123 Main St, Lilongwe",
    };
    setMember(dummyData);
  }, [id]);

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Member:", member);
    alert("Member updated successfully!");
    navigate("/membership"); // Redirect to membership list
  };

  return (
    <Container>
      <h2 className="my-3">Edit Member</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={member.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={member.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" value={member.phone} onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={member.address} onChange={handleChange} required />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-3">Update Member</Button>
      </Form>
    </Container>
  );
};

export default EditMemberPage;
