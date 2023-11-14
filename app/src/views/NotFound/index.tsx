import "./index.scss";
import { FC } from "react";

type Props = {
  msg?: string;
};
export const NotFound: FC<Props> = ({ msg }) => {
  return (
    <div className={"notfound-page"}>
      <div className={"notfound-page-content"}>
        {" "}
        <h2>404</h2>
        <p>{msg || "No content found"}</p>
      </div>
    </div>
  );
};
