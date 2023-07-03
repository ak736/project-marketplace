// CHANGES START FROM HERE -
import React, { useEffect } from "react";
import "./Scroll.css";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  // HANDLER -
  const btnHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toScroll = () => {
    let height = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toScroll);
  }, []);

  return (
    <>
      {visible && (
        <div className="wrapper">
          <div className="top__btn" onClick={btnHandler}>
            <FaArrowUp className="arrow__icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
