import React from "react";

interface SidebarProps {
  setGroupType: (group: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setGroupType }) => {
  const groups = [
    "Kimironko Suppliers",
    "Crop Farming",
    "Vegetable Farming",
    "Livestock Farmers",
    "Cattle Farmers",
    "Aquaculture",
    "Agroforestry",
    "Support",
  ];
  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <ul>
        {groups.map((group) => (
          <li key={group} className="mb-2">
            <button
              onClick={() => setGroupType(group)}
              className="text-left w-full p-2 bg-white rounded hover:bg-green-500 hover:text-white"
            >
              {group}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
