import React, { useState, ChangeEvent, FormEvent } from "react";
import { MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";

// Define the type for a Post
interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  likes: number;
}

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Benitha Uwituze",
      title: "Pest Control Techniques",
      content:
        "Struggling with pests? Check out our community forum for effective, eco-friendly pest control techniques shared by experienced farmers. Your crops will thank you!",
      likes: 4,
    },
    {
      id: 2,
      author: "Christophe Gakwaya",
      title: "Maximizing Yield with Organic Fertilizers",
      content:
        "Discover how organic fertilizers can boost your farm's productivity. Our latest article explores the benefits and application methods for organic farming.",
      likes: 4,
    },
    {
      id: 3,
      author: "Benitha Uwituze",
      title: "Upcoming Agricultural Workshop",
      content:
        "Join us for a workshop on sustainable farming practices next week! Learn from experts and connect with fellow farmers. Sign up now to secure your spot.",
      likes: 4,
    },
  ]);

  // Define the type for newPost state
  const [newPost, setNewPost] = useState<{
    author: string;
    title: string;
    content: string;
  }>({
    author: "",
    title: "",
    content: "",
  });
  //ts ignore

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      newPost.author.trim() &&
      newPost.title.trim() &&
      newPost.content.trim()
    ) {
      const post: Post = {
        id: Date.now(),
        ...newPost,
        likes: 0,
      };
      setPosts([post, ...posts]);
      setNewPost({ author: "", title: "", content: "" });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <img
            src="/api/placeholder/100/50"
            alt="Bloom Logo"
            className="mb-6"
          />
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">My Garden</div>
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Crop Farming</div>
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Vegetable Farming</div>
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Livestock Farmers</div>
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Cattle Farmers</div>
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Aquaculture</div>
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Agroforestry</div>
          <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Support</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div
          className="bg-green-600 text-white p-8 rounded-t-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/800/200')" }}
        >
          <h1 className="text-4xl font-bold mb-2">Welcome to My Garden</h1>
          <p className="text-xl">We talk about everything garden related!</p>
        </div>

        <div className="bg-white rounded-b-lg shadow-md">
          <div className="p-4">
            <form onSubmit={handleSubmit} className="mb-6">
              <input
                type="text"
                name="author"
                value={newPost.author}
                onChange={handleChange}
                placeholder="Author Name"
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full p-2 mb-2 border rounded"
              />
              <textarea
                name="content"
                value={newPost.content}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full p-2 mb-2 border rounded"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Post
              </button>
            </form>

            {posts.map((post) => (
              <div key={post.id} className="mb-6 border-b pb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {post.author[0]}
                  </div>
                  <span className="font-semibold">{post.author}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="mb-2 whitespace-pre-wrap">{post.content}</p>
                <div className="flex items-center text-gray-500">
                  <button className="flex items-center mr-4">
                    <ThumbsUp className="w-5 h-5 mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center mr-4">
                    <ThumbsDown className="w-5 h-5 mr-1" />
                  </button>
                  <button className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span>Comment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
