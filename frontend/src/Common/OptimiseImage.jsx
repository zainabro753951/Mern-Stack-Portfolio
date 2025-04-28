import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";

const OptimizedImage = forwardRef(
  (
    {
      src,
      alt,
      width,
      height,
      className,
      loading = "lazy",
      decoding = "async",
      placeholderSrc,
      style,
      ...props
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const generateSrcSet = () => {
      if (!src) return null;
      const breakpoints = [480, 768, 1024, 1280];
      return breakpoints.map((bp) => `${src}?width=${bp} ${bp}w`).join(", ");
    };

    const handleError = () => {
      setError(true);
    };

    return (
      <>
        {placeholderSrc && !loaded && !error && (
          <img src={placeholderSrc} alt="" aria-hidden="true" {...props} />
        )}
        <img
          ref={ref}
          src={src}
          alt={alt || ""}
          className={className}
          loading={loading}
          decoding={decoding}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          srcSet={generateSrcSet()}
          {...props}
        />
      </>
    );
  }
);

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  decoding: PropTypes.oneOf(["async", "sync", "auto"]),
  placeholderSrc: PropTypes.string,
  style: PropTypes.object,
};

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
