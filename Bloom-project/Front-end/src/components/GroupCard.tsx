import React from "react";
import { Link } from "react-router-dom";

interface GroupCardProps {
  title: string;
  image: string;
}

const GroupCard: React.FC<GroupCardProps> = ({ title, image }) => (
  <div className="bg-white p-4 rounded shadow">
    <img src={image} alt={title} className="h-40 w-full object-cover rounded" />
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <Link to="/CommunityPage">
      <button className="mt-2 p-2 bg-green-500 text-white rounded">
        Join Group
      </button>
    </Link>
  </div>
);

export default GroupCard;
