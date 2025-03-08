import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddMemberPage = () => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Member:", member);
    alert("Member added successfully!");
    navigate("/membership"); // Redirect to membership list
  };

  return (
    <Container>
      <h2 className="my-3">Add New Member</h2>
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

        <Button variant="primary" type="submit" className="mt-3">Add Member</Button>
      </Form>
    </Container>
  );
};

export default AddMemberPage;
