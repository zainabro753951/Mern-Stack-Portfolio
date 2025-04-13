import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../../assets/Css/TinyMce.css"

const RichTextEditor = ({ blogContent, setBlogContent }) => {
  const editorRef = useRef(null);
  const api_key = import.meta.env.VITE_TINYMCE_EDITOR;
  const [editorInitialized, setEditorInitialized] = useState(false);

  useEffect(() => {
    if (editorInitialized) {
      editorRef.current.execCommand(
        "mceFocus",
        false,
        editorRef.current.getBody()
      );
    }
  }, [editorInitialized]);

  return (
    <>
      <Editor
        apiKey={api_key}
        value={blogContent}
        onEditorChange={(newContent) => setBlogContent(newContent)}
        onInit={(_evt, editor) => {
          editorRef.current = editor;
          setEditorInitialized(true);
        }}
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
            "imagetools", // Added for image resizing
          ],
          toolbar:
            "undo redo spellcheckdialog | blocks | fontselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | removeformat | help",

          font_family_formats:
            "Lexend=Lexend, sans-serif; Jost=Jost, sans-serif; Arial=arial,helvetica,sans-serif; Times New Roman=times new roman,times;",

          style_formats: [
            {
              title: "Text",
              items: [
                {
                  title: "Small",
                  inline: "span",
                  styles: { fontSize: "1vw" },
                  classes: "small-text",
                },
                {
                  title: "Medium",
                  inline: "span",
                  styles: { fontSize: "1.5vw" },
                  classes: "medium-text",
                },
                {
                  title: "Large",
                  inline: "span",
                  styles: { fontSize: "2vw" },
                  classes: "large-text",
                },
                {
                  title: "Extra Large",
                  inline: "span",
                  styles: { fontSize: "3vw" },
                  classes: "xlarge-text",
                },
              ],
            },
          ],

          fontsize_formats: "1vw 1.2vw 1.5vw 2vw 2.5vw 3vw 4vw",
          default_font_size: "1.5vw",

          setup: function (editor) {
            editor.on("init", function () {
              this.getDoc().body.style.fontSize = "1.5vw";
            });
            editor.on("ExecCommand", function (e) {
              if (e.command === "FontSize") {
                const fontSize = e.value + "vw";
                editor.formatter.apply("fontSize", { value: fontSize });
                editor.fire("change");
                return false;
              }
            });
          },

          // Image configuration
          image_dimensions: true,
          image_caption: true,
          image_title: true,
          automatic_uploads: true,
          file_picker_types: "image",
          images_upload_handler: (blobInfo, progress) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => {
                resolve(reader.result);
              };
              reader.onerror = () => {
                reject("Image upload failed");
              };
              reader.readAsDataURL(blobInfo.blob());
            }),

          // Enable image resizing
          image_resize: true,
          image_advtab: true, // Shows advanced image options
          imagetools_toolbar:
            "rotateleft rotateright | flipv fliph | editimage imageoptions",

          content_style: `
            body, p, div {
              font-size: 1.1vw !important;
            }
            h1 { font-size: 3vw !important; }
            h2 { font-size: 2.5vw !important; }
            h3 { font-size: 2vw !important; }
            h4 { font-size: 1.8vw !important; }
            h5 { font-size: 1.6vw !important; }
            h6 { font-size: 1.4vw !important; }

            @media (max-width: 1024px) {
              body, p, div {
                font-size: 2.1vw !important;
              }
              h1 { font-size: 4vw !important; }
              h2 { font-size: 3.5vw !important; }
              h3 { font-size: 3vw !important; }
              h4 { font-size: 2.8vw !important; }
            h5 { font-size: 2.6vw !important; }
            h6 { font-size: 2.4vw !important; }
            }

            img {
              max-width: 100%;
              height: auto;
            }

            .small-text { font-size: 1vw !important; }
            .medium-text { font-size: 1.5vw !important; }
            .large-text { font-size: 2vw !important; }
            .xlarge-text { font-size: 3vw !important; }
          `,
        }}
      />

      {/* Rest of your component remains the same */}
      <div
        className="w-full mt-4 p-4 border rounded bg-gray-100"
        style={{
          fontSize: "1.5vw",
          lineHeight: "1.6",
        }}
      >
        <h2 className="font-semibold mb-2" style={{ fontSize: "2.5vw" }}>
          Preview:
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: blogContent }}
          style={{
            fontSize: "inherit",
            lineHeight: "inherit",
          }}
          className="preview-content"
        />
      </div>

      {/* <style jsx="true">{`
        .preview-content {
          font-size: inherit;
        }
        .preview-content p,
        .preview-content div {
          font-size: 1.1vw !important;
        }
        .preview-content h1 {
          font-size: 4vw !important;
        }

        .preview-content h2 {
          font-size: 2.5vw !important;
        }
        .preview-content h3 {
          font-size: 2vw !important;
        }
        .preview-content img {
          max-width: 100% !important;
          width: 100% !important;
          height: auto !important;
        }
        .preview-content h4 {
          font-size: 1.8vw !important;
        }
        .preview-content h5 {
          font-size: 1.6vw !important;
        }
        .preview-content h6 {
          font-size: 1.4vw !important;
        }

        .preview-content .small-text {
          font-size: 1vw !important;
        }
        .preview-content .medium-text {
          font-size: 1.5vw !important;
        }
        .preview-content .large-text {
          font-size: 2vw !important;
        }
        .preview-content .xlarge-text {
          font-size: 3vw !important;
        }

        @media (max-width: 1024px) {
          .preview-content p,
          .preview-content div {
            font-size: 1.1vw !important;
          }
          .preview-content h2 {
            font-size: 2.5vw !important;
          }
          .preview-content h1 {
            font-size: 4vw !important;
          }
          .preview-content h2 {
            font-size: 3.5vw !important;
          }
          .preview-content h3 {
            font-size: 3vw !important;
          }
        }
      `}</style> */}
    </>
  );
};

export default RichTextEditor;
