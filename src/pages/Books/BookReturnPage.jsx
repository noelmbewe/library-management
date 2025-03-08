import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const BookReturnPage = () => {
  const [memberId, setMemberId] = useState("");
  const [bookId, setBookId] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState(null);

  const handleReturn = () => {
    if (!memberId || !bookId || !condition) {
      setMessage({ type: "danger", text: "Please fill in all fields!" });
      return;
    }

    // Determine status based on condition
    let updatedStatus = "Available";
    if (condition === "Damaged") {
      updatedStatus = "Damaged - Requires Review";
    } else if (condition === "Lost") {
      updatedStatus = "Lost - Replacement Needed";
    }

    setStatus(updatedStatus);
    setMessage({ type: "success", text: "Book return recorded successfully!" });

    console.log("Book Return Details:", {
      memberId,
      bookId,
      condition,
      updatedStatus,
    });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Return Books</h2>

      {message && <Alert variant={message.type}>{message.text}</Alert>}

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

        {/* Book ID */}
        <Form.Group className="mb-3">
          <Form.Label>Book ID / Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book ID or Title"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </Form.Group>

        {/* Book Condition */}
        <Form.Group className="mb-3">
          <Form.Label>Book Condition</Form.Label>
          <Form.Select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="">Select Condition</option>
            <option value="Good">Good</option>
            <option value="Damaged">Damaged</option>
            <option value="Lost">Lost</option>
          </Form.Select>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" className="w-100" onClick={handleReturn}>
          Record Return
        </Button>
      </Form>

      {status && (
        <div className="mt-3 text-center">
          <strong>Updated Status:</strong> <span className="text-primary">{status}</span>
        </div>
      )}
    </Container>
  );
};

export default BookReturnPage;
