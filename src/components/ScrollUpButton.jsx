import { RiArrowUpLine } from "react-icons/ri";
import "./ScrollUpButton.css";
import { useEffect, useState } from "react";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState("");

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY >= 100 ? setShowButton("show-button") : setShowButton("");
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [showButton]);

  return (
    <>
      <a href="#" id="scroll-up" className={`scroll-up-button ${showButton}`}>
        <RiArrowUpLine />
      </a>
    </>
  );
};

export default ScrollUpButton;
