import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styles from "./App.module.scss";
import CollapseToolbar from "./components/CollapseToolbar";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";

function App() {
  const [headerSpacing, setHeaderSpacing] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    window.addEventListener("scroll", _scrollBodyToTop);
    return () => {
      window.addEventListener("scroll", _scrollBodyToTop);
    };
  }, []);

  const _scrollBodyToTop = () => {
    window.scrollTo(0, 0);
  };

  const _setImageMargin = value => {
    setHeaderSpacing(value);
  };

  return (
    <div className={styles.app}>
      <div
        className={styles.fixed}
        style={{
          opacity: headerSpacing > 0 ? (1 - Math.abs(headerSpacing) / 100) : 1
        }}
      >
        <img
          src="https://phongvu.vn/lmht/wp-content/uploads/2018/08/Yasuo_0.jpg"
          alt="yasuo"
        />
      </div>
      <div
        className={styles.header}
        style={{
          marginTop: -headerSpacing,
          height: 96
        }}
      />
      <SwipeableViews
        enableMouseEvents
        style={{
          backgroundColor: "#fff",
          zIndex: 9999,
          position: "relative"
        }}
      >
        <CollapseToolbar output={_setImageMargin} initialValue={headerSpacing}>
          <Slide1 />
        </CollapseToolbar>
        <CollapseToolbar output={_setImageMargin} initialValue={headerSpacing}>
          <Slide2 />
        </CollapseToolbar>
        <CollapseToolbar output={_setImageMargin} initialValue={headerSpacing}>
          <Slide3 />
        </CollapseToolbar>
      </SwipeableViews>
    </div>
  );
}

export default App;
