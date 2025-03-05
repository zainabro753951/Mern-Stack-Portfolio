import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";

// ✅ Sahi tareeke se Quill ka import
ReactQuill.Quill.register("modules/imageResize", ImageResize);

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["lexend-deca", "jost", "arial", "times-new-roman"];
ReactQuill.Quill.register(Font, true);

const RichTextEditor = ({ blogContent, setBlogContent }) => {
  const fonts = ["lexend-deca", "jost"];
  const sizes = ["small", false, "large", "huge"];

  const modules = {
    toolbar: [
      [{ font: fonts }],
      [{ header: [1, 2, 3, false] }],
      [{ size: sizes }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    imageResize: {
      displaySize: true,
      modules: ["Resize", "DisplaySize", "Toolbar"],
      resize: {
        handleStyles: {
          border: "2px solid red",
          backgroundColor: "white",
        },
        keepAspectRatio: false,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 800,
        maxHeight: 600,
      },
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
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

  const handleContentChange = (content) => {
    setBlogContent(content);
  };

  return (
    <>
      <div
        className="w-full  rounded-md overflow-y-auto border border-gray-400"
        style={{ boxShadow: "0 5px 5px #c9c9c9" }}
      >
        <ReactQuill
          className="w-full min-h-full bg-white lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]"
          theme="snow"
          value={blogContent}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="w-full">
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: blogContent }}
        />
      </div>
    </>
  );
};

export default RichTextEditor;
