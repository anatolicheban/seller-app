import React, { FC } from "react";
import cn from "classnames";
import "./style.scss";

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: string;
  size?: number;
  color?: string;
}

const Icon: FC<IconProps> = ({
  name,
  color = "white",
  size = 14,
  className,
}) => {
  return (
    <i
      className={cn(`icon-${name}`, className)}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        minWidth: `${size}px`,
        backgroundColor: color,
      }}
    />
  );
};
export default Icon;
