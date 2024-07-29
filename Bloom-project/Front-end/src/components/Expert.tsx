import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface Article {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ExpertAdvice: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(() => {
    const storedArticles = localStorage.getItem("articles");
    return storedArticles ? JSON.parse(storedArticles) : [];
  });

  // const [newArticle, setNewArticle] = useState<Omit<Article, "image">>({
  //   title: "",
  //   description: "",
  //   link: "",
  //   image: "",
  // });

  const [newArticle, setNewArticle] = useState<Article>({
    title: "",
    description: "",
    link: "",
    image: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewArticle((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };

      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedArticles = [
      ...articles,
      { ...newArticle, image: newArticle.image },
    ];
    setArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    setNewArticle({ title: "", description: "", link: "", image: "" });
    setImageFile(null);
  };

  const handleRemoveArticle = (index: number) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
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
        {articles.map((article, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold">{article.title}</h4>
            <p className="text-sm text-gray-600">
              {article.description.substring(0, 100)}...
            </p>
            <button
              onClick={() => handleRemoveArticle(index)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Remove Article
            </button>
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
          <textarea
            name="description"
            value={newArticle.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 mb-4 border rounded"
            rows={4}
            required
          ></textarea>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          {imageFile && (
            <div className="mb-4">
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Selected"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
          <input
            type="text"
            name="link"
            value={newArticle.link}
            onChange={handleInputChange}
            placeholder="Link to full article"
            className="w-full p-2 mb-4 border rounded"
            required
          />
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
