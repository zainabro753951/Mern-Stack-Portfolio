import React from "react";

const Button = ({
  text,
  icon,
  quantity,
  setIsCommentOpen,
  setLike,
  addLike,
}) => {
  const handleCommentOpen = () => {
    if (setIsCommentOpen) {
      setIsCommentOpen(true);
    } else if (setLike && addLike) {
      setLike((prev) => !prev);
      addLike();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCommentOpen}
        className={`lg:py-[0.5vw] md:py-[1vw] xs:py-[1.5vw] lg:px-[2vw] md:px-[3vw] xs:px-[4vw] flex items-center gap-2 rounded-[0.5vw] border-gray-200 border font-lexend_deca bg-white lg:text-[1.2vw] relative transition-all duration-500 cursor-pointer md:text-[2.2vw] xs:text-[3.4vw] ${
          quantity ? "quantity-present" : ""
        }`}
      >
        {icon && icon} {text && text}{" "}
        {quantity && (
          <span
            className={`transition-all duration-500 ${
              quantity ? "scale-100" : "scale-0"
            }`}
          >
            {quantity}
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
