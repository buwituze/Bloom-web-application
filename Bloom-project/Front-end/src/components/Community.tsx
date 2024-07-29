import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  replies: Reply[];
  timestamp: string;
}

interface Reply {
  id: number;
  content: string;
  author: string;
  timestamp: string;
}

const CommunityForum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<{ title: string; content: string }>({ title: '', content: '' });
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newReply, setNewReply] = useState<string>('');

  // Simulating fetching posts from an API
  useEffect(() => {
    const fetchPosts = async () => {
      // In a real application, this would be an API call
      const fakePosts: Post[] = [
        {
          id: 1,
          title: 'Best fertilizer for maize',
          author: 'JohnF',
          content: "I've been trying different fertilizers for my maize crop. Any recommendations?",
          replies: [],
          timestamp: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: 2,
          title: 'Dealing with tomato blight',
          author: 'MariaK',
          content: 'My tomato plants are showing signs of blight. How can I treat this?',
          replies: [],
          timestamp: new Date(Date.now() - 172800000).toISOString(),
        },
      ];
      setPosts(fakePosts);
    };

    fetchPosts();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPostWithDetails: Post = {
      id: posts.length + 1,
      ...newPost,
      author: 'CurrentUser',
      replies: [],
      timestamp: new Date().toISOString(),
    };
    setPosts([newPostWithDetails, ...posts]);
    setNewPost({ title: '', content: '' });
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleReplySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedPost && newReply.trim() !== '') {
      const updatedPosts = posts.map((post) =>
        post.id === selectedPost.id
          ? {
              ...post,
              replies: [
                ...post.replies,
                {
                  id: post.replies.length + 1,
                  content: newReply,
                  author: 'CurrentUser',
                  timestamp: new Date().toISOString(),
                },
              ],
            }
          : post
      );
      setPosts(updatedPosts);
      setSelectedPost({
        ...selectedPost,
        replies: [
          ...selectedPost.replies,
          { id: selectedPost.replies.length + 1, content: newReply, author: 'CurrentUser', timestamp: new Date().toISOString() },
        ],
      });
      setNewReply('');
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Community Forum</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Start a New Discussion</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            placeholder="What's on your mind?"
            className="w-full p-2 border rounded"
            rows={4}
            required
          ></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Post Discussion
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Recent Discussions</h3>
        {posts.map((post) => (
          <div key={post.id} className="mb-4 p-4 border rounded cursor-pointer hover:bg-gray-50" onClick={() => handlePostClick(post)}>
            <h4 className="text-lg font-semibold">{post.title}</h4>
            <p className="text-sm text-gray-600">By {post.author} | Posted on: {formatDate(post.timestamp)}</p>
            <p className="mt-2">{post.content.substring(0, 100)}...</p>
            <p className="text-sm text-gray-600 mt-2">Replies: {post.replies.length}</p>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">{selectedPost.title}</h3>
          <p className="text-sm text-gray-600 mb-2">By {selectedPost.author} | Posted on: {formatDate(selectedPost.timestamp)}</p>
          <p className="mb-4">{selectedPost.content}</p>
          
          <h4 className="text-lg font-semibold mb-2">Replies</h4>
          {selectedPost.replies.map((reply) => (
            <div key={reply.id} className="mb-2 p-2 bg-gray-100 rounded">
              <p>{reply.content}</p>
              <p className="text-sm text-gray-600">By {reply.author} | Posted on: {formatDate(reply.timestamp)}</p>
            </div>
          ))}
          
          <form onSubmit={handleReplySubmit} className="mt-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Write a reply..."
              className="w-full p-2 border rounded"
              rows={3}
              required
            ></textarea>
            <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Post Reply
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommunityForum;
