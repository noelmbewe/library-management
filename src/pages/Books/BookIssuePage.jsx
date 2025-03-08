import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const BookIssuePage = () => {
  const [memberId, setMemberId] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [availableBooks] = useState([
    { id: 1, title: "Book One" },
    { id: 2, title: "Book Two" },
    { id: 3, title: "Book Three" },
  ]); // Replace with API data

  const handleIssue = () => {
    if (!memberId) {
      alert("Please enter a valid membership number.");
      return;
    }
    if (selectedBooks.length === 0) {
      alert("Please select at least one book.");
      return;
    }

    console.log("Issuing books:", selectedBooks, "to Member ID:", memberId);
    alert("Books issued successfully!");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Issue Books</h2>

      <Form className="p-4 shadow-sm bg-light rounded">
        {/* Membership Number */}
        <Form.Group className="mb-3">
          <Form.Label>Membership Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Membership ID"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
          />
        </Form.Group>

        {/* Book Selection */}
        <Form.Group className="mb-3">
          <Form.Label>Select Books</Form.Label>
          <Form.Select
            multiple
            value={selectedBooks}
            onChange={(e) =>
              setSelectedBooks([...e.target.selectedOptions].map((o) => o.value))
            }
          >
            {availableBooks.map((book) => (
              <option key={book.id} value={book.title}>
                {book.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Issue Button */}
        <Button variant="primary" className="w-100" onClick={handleIssue}>
          Issue Books
        </Button>
      </Form>
    </Container>
  );
};

export default BookIssuePage;
