import React, { useState } from "react";

import Header from "./Header";
import HeroSection from "./HeroSection";
import PracticeQuestions from "./PracticeQuestions";
import SearchFilter from "./SearchFilter";
import ProblemsTable from "./ProblemsTable";
import Pagination from "./Pagination";

const CodeMaster = () => {
  const [darkMode] = useState(true);

  const problems = [
    {
      id: 1,
      title: "Two Sum",
      company: "Accenture",
      difficulty: "Easy",
      topics: ["Array", "Hash Table"],
      acceptance: "45.1%",
      frequency: "84.8%",
      premium: false,
    },
    {
      id: 2,
      title: "Longest Substring Without Repeating Characters",
      company: "Accenture",
      difficulty: "Medium",
      topics: ["Hash Table", "String", "Sliding Window"],
      acceptance: "33.8%",
      frequency: "29.23%",
      premium: false,
    },
    {
      id: 3,
      title: "Roman to Integer",
      company: "Accenture",
      difficulty: "Easy",
      topics: ["Hash Table", "Math", "String"],
      acceptance: "58.2%",
      frequency: "14.70%",
      premium: false,
    },
    {
      id: 4,
      title: "Longest Common Prefix",
      company: "Accenture",
      difficulty: "Easy",
      topics: ["String", "Trie"],
      acceptance: "40.8%",
      frequency: "18.56%",
      premium: false,
    },
    {
      id: 5,
      title: "Bulb Switcher",
      company: "Accenture",
      difficulty: "Medium",
      topics: ["Math", "Brainteaser"],
      acceptance: "48.1%",
      frequency: "100.00%",
      premium: false,
    },
    {
      id: 6,
      title: "Contain Virus",
      company: "Accolite",
      difficulty: "Hard",
      topics: [
        "Array",
        "Depth-First Search",
        "Breadth-First Search",
        "Matrix",
        "Simulation",
      ],
      acceptance: "50.9%",
      frequency: "100.00%",
      premium: false,
    },
    {
      id: 7,
      title: "Replace the Substring for Balanced String",
      company: "Accolite",
      difficulty: "Medium",
      topics: ["String", "Sliding Window"],
      acceptance: "33.2%",
      frequency: "0.00%",
      premium: false,
    },
    {
      id: 8,
      title: "Number of Operations to Make Network Connected",
      company: "Activision",
      difficulty: "Medium",
      topics: [
        "Depth-First Search",
        "Breadth-First Search",
        "Union Find",
        "Graph",
      ],
      acceptance: "58.5%",
      frequency: "100.00%",
      premium: false,
    },
    {
      id: 9,
      title: "Two Sum",
      company: "Adobe",
      difficulty: "Easy",
      topics: ["Array", "Hash Table"],
      acceptance: "49.7%",
      frequency: "90.26%",
      premium: false,
    },
    {
      id: 10,
      title: "Add Two Numbers",
      company: "Adobe",
      difficulty: "Medium",
      topics: ["Linked List", "Math", "Recursion"],
      acceptance: "39.8%",
      frequency: "40.33%",
      premium: false,
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
      }`}
    >
      <Header />
      <HeroSection />
      <PracticeQuestions />
      <SearchFilter />
      <ProblemsTable problems={problems} />
      <Pagination />
    </div>
  );
};

export default CodeMaster;
