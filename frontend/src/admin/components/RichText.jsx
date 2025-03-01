import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Quill ke font whitelist ko update karein
const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["lexend-deca", "jost", "arial", "times-new-roman"]; // Font names (lowercase)
ReactQuill.Quill.register(Font, true);

const RichTextEditor = ({ blogContent, setBlogContent }) => {
  // Define custom fonts
  const fonts = ["lexend-deca", "jost"];
  const modules = {
    toolbar: [
      [{ font: fonts }], // Font dropdown
      [{ header: [1, 2, 3, false] }], // Headers
      ["bold", "semibold", "italic", "underline", "strike"], // Basic formatting
      [{ color: [] }, { background: [] }], // Text color and background
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      ["link", "image"], // Links and images
      ["clean"], // Remove formatting
    ],
  };

  // Register custom fonts
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "semibold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div
      className="w-full max-h-[20vw] lg:min-h-[20vw] rounded-md md:min-h-[20vw] xs:min-h-[45vw] overflow-y-auto border border-gray-400"
      style={{ boxShadow: "0 5px 5px #c9c9c9" }}
    >
      <ReactQuill
        className="w-full min-h-full bg-white lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]"
        theme="snow"
        value={blogContent}
        onChange={setBlogContent}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default RichTextEditor;
