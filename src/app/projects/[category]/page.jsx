"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AllProjectsPage from "@/components/AllProductsPage";
import {
  htmlCssProjects,
  bootstrapProjects,
  jsProjects,
  reactProjects,
  nextProjects,
  urraan,
  urraanjs,
} from "@/components/AllProjectsData";

const Page = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);

  const displayCategoryMap = {
    html: "HTML & CSS",
    bootstrap: "BOOTSTRAP",
    javascript: "JAVASCRIPT",
    react: "REACT JS",
    next: "NEXT JS",
    urraan: "URRAAN HTML PROJECTS",
    urraan: "URRAAN JS PROJECTS",
  };

  useEffect(() => {
    switch (category) {
      case "html":
        setProjects(htmlCssProjects);
        break;
      case "bootstrap":
        setProjects(bootstrapProjects);
        break;
      case "javascript":
        setProjects(jsProjects);
        break;
      case "reactjs":
        setProjects(reactProjects);
        break;
      case "nextProjects":
        setProjects(nextProjects);
        break;
      case "urraan":
        setProjects(urraan);
        break;
      case "urraanjs":
        setProjects(urraanjs);
        break;
      default:
        setProjects([]);
    }
  }, [category]);

  if (!projects.length) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">No Projects Found</h1>
      </div>
    );
  }

  return (
    <AllProjectsPage
      category={displayCategoryMap[category] || category.toUpperCase()}
      projects={projects}
      showProjectName={false}
    />
  );
};

export default Page;
