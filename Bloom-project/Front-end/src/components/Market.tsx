import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface Listing {
  id: number;
  product: string;
  price: string;
  seller: string;
}

const Marketplace: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([
    { id: 1, product: "Tractor", price: "5000 RWF", seller: "FarmEquip Ltd" },
    {
      id: 2,
      product: "Fertilizer (50kg)",
      price: "200 RWF",
      seller: "AgriChem Co",
    },
    {
      id: 3,
      product: "Maize Seeds (1kg)",
      price: "50 RWF",
      seller: "SeedMaster",
    },
  ]);

  const [newListing, setNewListing] = useState<Omit<Listing, "id">>({
    product: "",
    price: "",
    seller: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setListings([...listings, { id: listings.length + 1, ...newListing }]);
    setNewListing({ product: "", price: "", seller: "" });
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
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id}>
                <td>{listing.product}</td>
                <td>{listing.price}</td>
                <td>{listing.seller}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Listing</h3>
        <form onSubmit={handleSubmit}>
          <input type="image" src="Product image" alt="" />
          <input
            type="text"
            name="product"
            value={newListing.product}
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
