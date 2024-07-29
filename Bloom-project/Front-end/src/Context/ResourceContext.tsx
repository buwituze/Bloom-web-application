import React, { createContext, useState, ReactNode } from "react";

interface Resource {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ResourceContextProps {
  resources: Resource[];
  addResource: (resource: Omit<Resource, "id">) => void;
}

export const ResourceContext = createContext<ResourceContextProps | undefined>(
  undefined
);

export const ResourceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 1,
      title: "Integrated Pest Management",
      description:
        "Explore the principles of Integrated Pest Management (IPM) tailored for Rwandan crops to effectively control pests while minimizing environmental impact. This article explains IPM strategies, including the use of local biological control agents, crop rotation practices, and natural predators, to maintain a healthy and productive farm ecosystem.",
      image: "/ipm.jpeg",
      link: "https://www.everydayhealth.com",
    },
    {
      id: 2,
      title: "Efficient Irrigation Techniques",
      description:
        "Learn about efficient irrigation techniques suited for the diverse topography and climate of Rwanda. This resource provides insights into using drip irrigation, small-scale sprinklers, and rainwater harvesting systems, with practical advice on implementation and maintenance for smallholder farmers.",
      image: "/irrigationtechniques.webp",
      link: "https://www.everydayhealth.com",
    },
  ]);

  const addResource = (resource: Omit<Resource, "id">) => {
    setResources([...resources, { id: resources.length + 1, ...resource }]);
  };

  return (
    <ResourceContext.Provider value={{ resources, addResource }}>
      {children}
    </ResourceContext.Provider>
  );
};
