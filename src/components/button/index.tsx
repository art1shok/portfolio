import { FC } from "react";

import { SButton } from "./styled";
import type { IButton } from "./types";

const Button: FC<IButton> = ({
  children,
  type,
  ...rest
}) => {
  return (
    <SButton type={type} {...rest} >
      {children}
    </SButton>
  );
};

export default Button;
