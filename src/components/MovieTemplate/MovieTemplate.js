import { useCallback, useState } from "react";
import Check from "./Auth/Check";
import Menu from "./Menu/Menu";
import "./MovieTemplate.scss";

const MovieTemplate = ({ children }) => {

  return (
    <div className="MovieTemplate">
      <Check />
      <Menu />
      <div className="content">{children}</div>
    </div>
  );
};

export default MovieTemplate;
