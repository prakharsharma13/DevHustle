import { CheckCircle, Code } from "lucide-react";
import React from "react";

const ProblemsTable = ({ problems }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-600";
      case "Medium":
        return "bg-yellow-600";
      case "Hard":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const getTopicClass = (topic) => {
    const topicColors = {
      Array: "bg-blue-800",
      "Hash Table": "bg-blue-700",
      String: "bg-blue-600",
      Math: "bg-blue-500",
      "Sliding Window": "bg-blue-400",
      "Depth-First Search": "bg-purple-700",
      "Breadth-First Search": "bg-purple-600",
      Matrix: "bg-purple-500",
      Simulation: "bg-purple-400",
      "Linked List": "bg-indigo-600",
      Trie: "bg-indigo-500",
      Brainteaser: "bg-indigo-400",
      "Union Find": "bg-indigo-700",
      Graph: "bg-indigo-800",
      Recursion: "bg-indigo-300",
    };

    return topicColors[topic] || "bg-gray-700";
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="py-3 px-4">&nbsp;</th>
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Company</th>
            <th className="py-3 px-4">Difficulty</th>
            <th className="py-3 px-4">Topics</th>
            <th className="py-3 px-4">Acceptance</th>
            <th className="py-3 px-4">Frequency</th>
            <th className="py-3 px-4">Premium</th>
            <th className="py-3 px-4">Solution</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr
              key={problem.id}
              className="border-b border-gray-800 hover:bg-gray-800"
            >
              <td className="py-3 px-4">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="py-3 px-4">
                <a href="#" className="text-blue-400 hover:underline">
                  {problem.title}
                </a>
              </td>
              <td className="py-3 px-4">{problem.company}</td>
              <td className="py-3 px-4">
                <span
                  className={`${getDifficultyClass(
                    problem.difficulty
                  )} text-white text-xs px-2 py-1 rounded-md`}
                >
                  {problem.difficulty}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex flex-wrap gap-1">
                  {problem.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className={`${getTopicClass(
                        topic
                      )} text-white text-xs px-2 py-1 rounded-md`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-3 px-4">{problem.acceptance}</td>
              <td className="py-3 px-4">{problem.frequency}</td>
              <td className="py-3 px-4">
                {problem.premium ? (
                  <span className="text-yellow-500">✓</span>
                ) : (
                  <span className="text-red-500">✗</span>
                )}
              </td>
              <td className="py-3 px-4 flex gap-2">
                <button className="p-1 rounded hover:bg-gray-700">
                  <Code size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-700">
                  <CheckCircle size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemsTable;
