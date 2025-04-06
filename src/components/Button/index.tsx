import React from "react";

import { Container } from "./styles";
interface ButtonComponentProps {
  icon?: string | React.ReactNode;
  text?: string;
  bcColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  icon,
  text,
  bcColor,
  textColor,
  onClick,
}) => {
  return (
    <Container
      bcColor={bcColor}
      hasIcon={!!icon}
      onClick={onClick}
      textColor={textColor}
      role="button"
    >
      {icon &&
        (typeof icon === "string" ? <img src={icon} alt="Icon" /> : icon)}
      {text}
    </Container>
  );
};

export default ButtonComponent;
