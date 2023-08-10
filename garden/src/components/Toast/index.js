import React, { useState, useEffect } from "react";
import style from "./style.module.css"; 

export const Toast = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${style.toast} ${isVisible ? style.show : style.hide}`}>
      <span>{message}</span>
    </div>
  );
};