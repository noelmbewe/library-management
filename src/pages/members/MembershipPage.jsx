import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MembershipPage = () => {
  // Dummy data for members
  const [members, setMembers] = useState([
    {
      id: "LIB123456",
      name: "John Doe",
      email: "johndoe@email.com",
      phone: "0987-123-456",
      address: "123 Main St, Lilongwe",
      status: "Active",
      enrolledDate: "2023-01-15",
      lendingBehavior: "Likes software books, 2 overdue books",
    },
    {
      id: "LIB654321",
      name: "Jane Smith",
      email: "janesmith@email.com",
      phone: "0998-654-321",
      address: "456 Side St, Blantyre",
      status: "Inactive",
      enrolledDate: "2022-09-10",
      lendingBehavior: "Prefers research publications",
    },
  ]);

  return (
    <Container>
      <h2 className="my-3">Membership Records</h2>

      {/* Add Member Button */}
      <Button as={Link} to="/add-member" variant="primary" className="mb-3">
        Add Member
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Membership ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Enrolled Date</th>
            <th>Lending Behavior</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.address}</td>
              <td>{member.status}</td>
              <td>{member.enrolledDate}</td>
              <td>{member.lendingBehavior}</td>
              <td>
                {/* Edit Button */}
                <Button as={Link} to={`/edit-member/${member.id}`} variant="info" size="sm" className="me-2">
                  Edit
                </Button>
                {/* Remove Button */}
                <Button variant="danger" size="sm">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MembershipPage;
