import { useState } from "react";
import { Plus, Search, BookOpen } from "lucide-react";

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
};

const sampleBooks: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    description:
      "A novel about the decline of the American Dream in the 1920s.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    description:
      "A dystopian story about totalitarianism and surveillance.",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    description:
      "A classic romance exploring manners and societal expectations.",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    description:
      "A novel about racial injustice and moral growth in the Deep South.",
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    description:
      "The epic tale of Captain Ahab's obsession with the white whale.",
  },
];

const DashboardPage: React.FC = () => {
  const [books] = useState<Book[]>(sampleBooks);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="pt-20 max-w-7xl mx-auto px-4 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BookOpen size={24} />
          My Books
        </h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute top-2.5 left-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search books..."
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium">
            <Plus size={16} />
            Add Book
          </button>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="text-gray-500 text-center mt-10">
          No books found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-gray-200 rounded p-4 shadow hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  by {book.author} &middot; {book.year}
                </p>
                <p className="text-sm text-gray-500">
                  {book.description}
                </p>
              </div>
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default DashboardPage;
