import React, { useState } from "react";
import GroupList from "./GroupList";
import Sidebar from "./Sidebar";
import FarmerNavbar from "./farmernav";
import FarmerFooter from "./farmerfooter";

const SuppComm: React.FC = () => {
  const [groupType, setGroupType] = useState("Kimironko Suppliers");

  return (
    <div>
      <FarmerNavbar />
      <div className="flex">
        <Sidebar setGroupType={setGroupType} />
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Find Your Kin!</h1>
          <input
            type="text"
            placeholder="Search Seeds"
            className="p-2 mb-4 border rounded w-full"
          />
          <button className="p-2 mb-4 bg-green-500 text-white rounded">
            Create Community
          </button>
          <GroupList groupType={groupType} />
        </div>
      </div>
      <FarmerFooter />
    </div>
  );
};

export default ;
