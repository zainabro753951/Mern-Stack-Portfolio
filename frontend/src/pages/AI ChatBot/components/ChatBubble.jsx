import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkBreaks from "remark-breaks";
import PropTypes from "prop-types";
import classNames from "classnames";

const ChatBubble = ({ message, isRight }) => {
  const bubbleClasses = classNames(
    "max-w-[70%] overflow-hidden whitespace-normal lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] p-3 rounded-lg",
    {
      "bg-themePurple text-white rounded-br-none": isRight,
      "bg-themeBlue text-gray-200 rounded-bl-none": !isRight,
    }
  );

  return (
    <div
      className={`flex ${
        isRight ? "justify-end" : "justify-start"
      } w-full my-2 gap-2`}
    >
      <div className="lg:w-[3vw] md:w-[5vw] xs:w-[8vw] lg:h-[3vw] md:h-[5vw] xs:h-[8vw] rounded-full overflow-hidden">
        <img
          src="/imgs/projects/p3.jpg"
          alt={`${isRight ? "User" : "AI"} Profile`}
        />
      </div>
      <div className={bubbleClasses}>
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

ChatBubble.propTypes = {
  message: PropTypes.string.isRequired,
  isRight: PropTypes.bool.isRequired,
};

export default ChatBubble;
