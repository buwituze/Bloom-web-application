import React from "react";
import GroupCard from "./GroupCard";

interface GroupListProps {
  groupType: string;
}

const GroupList: React.FC<GroupListProps> = ({ groupType }) => {
  const groups: { [key: string]: { title: string; image: string }[] } = {
    "Kimironko Suppliers": [
      { title: "My Garden", image: "/garden.jpg" },
      { title: "Kimironko Farming Suppliers", image: "/Farmer-homepage.jpeg" },
      // { title: "Kimironko Suppliers", image: "/vegetables.jpg" },
      // { title: "Kimironko Suppliers", image: "/vegetables.jpg" },
      // { title: "Kimironko Suppliers", image: "/vegetables.jpg" },
      // { title: "Kimironko Suppliers", image: "/vegetables.jpg" },
    ],
    "Crop Farming": [
      {
        title: "Crop Farmers",
        image: "/FARMER.jpg",
      },
      { title: "Crop Farmers", image: "/agro.jpg" },
      // { title: "Crop Farmers", image: "/image2.jpg" },
      // { title: "Crop Farmers", image: "/image2.jpg" },
      // { title: "Crop Farmers", image: "/image2.jpg" },
      // { title: "Crop Farmers", image: "/image2.jpg" },
    ],
    "Vegetable Farming": [
      { title: "Vegetable Farmers", image: "/vegetables.jpg" },
      {
        title: "Vegetable Domestic Farmers",
        image: "/FARMER.jpg",
      },
      // { title: "Vegetable Farmers", image: "/image3.jpg" },
      // { title: "Vegetable Farmers", image: "/image3.jpg" },
      // { title: "Vegetable Farmers", image: "/image3.jpg" },
    ],
    "Livestock Farmers": [
      { title: "Livestock Farmers", image: "/image4.jpg" },
      { title: "Livestock Farmers", image: "/image4.jpg" },
      { title: "Livestock Farmers", image: "/image4.jpg" },
      { title: "Livestock Farmers", image: "/image4.jpg" },
      { title: "Livestock Farmers", image: "/image4.jpg" },
      { title: "Livestock Farmers", image: "/image4.jpg" },
    ],
    "Cattle Farmers": [
      { title: "Cattle Farmers", image: "/image5.jpg" },
      { title: "Cattle Farmers", image: "/image5.jpg" },
      { title: "Cattle Farmers", image: "/image5.jpg" },
      { title: "Cattle Farmers", image: "/image5.jpg" },
      { title: "Cattle Farmers", image: "/image5.jpg" },
    ],
    Aquaculture: [
      { title: "Aquaculture", image: "/image6.jpg" },
      { title: "Aquaculture", image: "/image6.jpg" },
      { title: "Aquaculture", image: "/image6.jpg" },
      { title: "Aquaculture", image: "/image6.jpg" },
      { title: "Aquaculture", image: "/image6.jpg" },
    ],
    Agroforestry: [
      { title: "Agroforestry", image: "/image7.jpg" },
      { title: "Agroforestry", image: "/image7.jpg" },
      { title: "Agroforestry", image: "/image7.jpg" },
      { title: "Agroforestry", image: "/image7.jpg" },
      { title: "Agroforestry", image: "/image7.jpg" },
      { title: "Agroforestry", image: "/image7.jpg" },
    ],
    // Support: [
    //   { title: "Support", image: "/image8.jpg" },
    //   { title: "Support", image: "/image8.jpg" },
    //   { title: "Support", image: "/image8.jpg" },
    //   { title: "Support", image: "/image8.jpg" },
    //   { title: "Support", image: "/image8.jpg" },
    //   { title: "Support", image: "/image8.jpg" },
    // ],
  };

  const selectedGroups = groups[groupType];

  if (!selectedGroups) {
    return <div>No groups found for {groupType}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {selectedGroups.map((group) => (
        <GroupCard key={group.title} {...group} />
      ))}
    </div>
  );
};

export default GroupList;
