import DashboardLayout from "../../layouts/DashboardLayout";

const BookList = () => {
  // Sample books
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
    { id: 2, title: "1984", author: "George Orwell", available: false },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", available: true },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      <table className="w-full bg-white border shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-t">
              <td className="p-3">{book.title}</td>
              <td className="p-3">{book.author}</td>
              <td className="p-3">{book.available ? "Available" : "Checked Out"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default BookList;
