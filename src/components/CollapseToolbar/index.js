import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const CollapseToolbar = ({ children, output, initialValue }) => {
  const [headerSpacing, setHeaderSpacing] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTo(0, initialValue);
  }, [initialValue]);

  const _handleScrolling = e => {
    const scrollTopContainer = e.currentTarget.scrollTop;
    const result = scrollTopContainer < 100 ? scrollTopContainer : 100;
    setHeaderSpacing(result);
    output(result);
  };

  return (
    <div
      className={styles.scrollContainer}
      onScroll={_handleScrolling}
      ref={containerRef}
      style={{
        paddingTop: `${Math.abs(headerSpacing)}px`
      }}
    >
      {children}
    </div>
  );
};

export default CollapseToolbar;
