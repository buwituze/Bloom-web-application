import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  author: string;
  content: string;
}

const ExpertAdvice: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Best Practices for Maize Cultivation",
      author: "Dr. Jane Smith",
      content: "Lorem ipsum...",
    },
    {
      id: 2,
      title: "Pest Control in Organic Farming",
      author: "Prof. John Doe",
      content: "Lorem ipsum...",
    },
  ]);

  const [newArticle, setNewArticle] = useState<Omit<Article, "id">>({
    title: "",
    author: "",
    content: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArticles([...articles, { id: articles.length + 1, ...newArticle }]);
    setNewArticle({ title: "", author: "", content: "" });
  };

  return (
    <div>
      <div className="navbar">
        <aside className="w-64 bg-green-700 text-white p-4 h-screen">
          <h1 className="text-2xl font-bold mb-4">Bloom</h1>
          <nav>
            <ul>
              <li className="mb-2">
                <Link
                  to="/dashboard-content"
                  className="block p-2 hover:bg-green-600 rounded"
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/market-prices"
                  className="block p-2 hover:bg-green-600 rounded"
                >
                  Market Prices
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/weather-forecast"
                  className="block p-2 hover:bg-green-600 rounded"
                >
                  Weather Forecast
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/marketplace"
                  className="block p-2 hover:bg-green-600 rounded"
                >
                  Marketplace
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/expert-advice"
                  className="block p-2 hover:bg-green-600 rounded"
                >
                  Expert Advice
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/community-forum"
                  className="block p-2 hover:bg-green-600 rounded"
                >
                  Community Forum
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>

      <h2 className="text-3xl font-bold mb-6">Expert Advice</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>
        {articles.map((article) => (
          <div key={article.id} className="mb-4">
            <h4 className="text-lg font-semibold">{article.title}</h4>
            <p className="text-sm text-gray-600">By {article.author}</p>
            <p className="mt-2">{article.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Article</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newArticle.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="author"
            value={newArticle.author}
            onChange={handleInputChange}
            placeholder="Author"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            name="content"
            value={newArticle.content}
            onChange={handleInputChange}
            placeholder="Content"
            className="w-full p-2 mb-4 border rounded"
            rows={4}
            required
          ></textarea>
          <input type="text" placeholder="Link to full article" />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertAdvice;
