import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface Listing {
  id: number;
  name: string; // Change this to 'name' to match AllProducts.tsx
  price: number;
  seller: string;
  image: string | null;
  category: string;
}

const Marketplace: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>(() => {
    const savedListings = localStorage.getItem("listings");
    return savedListings ? JSON.parse(savedListings) : [];
  });

  const [newListing, setNewListing] = useState<Omit<Listing, "id" | "image">>({
    name: "", // Change this to 'name' to match AllProducts.tsx
    price: 0,
    seller: "",
    category: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProduct = {
          id: listings.length + 1,
          ...newListing,
          image: reader.result as string,
        };
        const updatedListings = [...listings, newProduct];
        setListings(updatedListings);
        localStorage.setItem("listings", JSON.stringify(updatedListings));
        setNewListing({ name: "", price: 0, seller: "", category: "" });
        setImage(null);
      };
      reader.readAsDataURL(image);
    } else {
      const newProduct = {
        id: listings.length + 1,
        ...newListing,
        image: null,
      };
      const updatedListings = [...listings, newProduct];
      setListings(updatedListings);
      localStorage.setItem("listings", JSON.stringify(updatedListings));
      setNewListing({ name: "", price: 0, seller: "", category: "" });
    }
  };

  const handleRemove = (id: number) => {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
    localStorage.setItem("listings", JSON.stringify(updatedListings));
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

      <h2 className="text-3xl font-bold mb-6">Marketplace</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Current Listings</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th className="text-left">Price</th>
              <th className="text-left">Seller</th>
              <th className="text-left">Category</th>
              <th className="text-left">Image</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id}>
                <td>{listing.name}</td> {/* Change this to 'name' */}
                <td>{listing.price}</td>
                <td>{listing.seller}</td>
                <td>{listing.category}</td>
                <td>
                  {listing.image ? (
                    <img
                      src={listing.image}
                      alt={listing.name} // Change this to 'name'
                      className="w-16 h-16 object-cover"
                    />
                  ) : (
                    "No image"
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleRemove(listing.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Listing</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="name" // Change this to 'name'
            value={newListing.name} // Change this to 'name'
            onChange={handleInputChange}
            placeholder="Product"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={newListing.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="seller"
            value={newListing.seller}
            onChange={handleInputChange}
            placeholder="Seller"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <select
            name="category"
            value={newListing.category}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="fertilizers">Fertilizers</option>
            <option value="seeds">Seeds</option>
            <option value="pesticides">Pesticides</option>
            <option value="farming tools">Farming Tools</option>
            <option value="irrigation tools">Irrigation Tools</option>
            <option value="test kits">Test Kits</option>
            <option value="farm produce">Farm Produce</option>
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default Marketplace;
