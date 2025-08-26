import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ExampleWriteup = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/example.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ExampleWriteup;
