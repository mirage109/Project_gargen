import React from "react";
import NotFoundImage from "../../images/not-found.svg";
import style from "./style.module.css";

export const NotFound = () => {
  return (
    <div className={style.notFound }>
      <img src={NotFoundImage} alt="404" />
    </div>
  );
};
