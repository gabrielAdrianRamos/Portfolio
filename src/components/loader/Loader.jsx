import { useEffect, useRef } from "react";
import "./loader.css";

export const Loader = ({ exiting = false, onExitComplete }) => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    if (!exiting || !onExitComplete) return;

    const spinner = spinnerRef.current;
    if (!spinner) return;

    const handleAnimationEnd = (event) => {
      if (event.animationName === "face-out-6") {
        onExitComplete();
      }
    };

    spinner.addEventListener("animationend", handleAnimationEnd);
    return () => spinner.removeEventListener("animationend", handleAnimationEnd);
  }, [exiting, onExitComplete]);

  return (
    <div className={`loader-container${exiting ? " loader-container--exiting" : ""}`}>
      <div
        ref={spinnerRef}
        className={`spinner${exiting ? " disassemble" : ""}`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
