import React from "react";

import { Container } from "./styles";

import GridListIcon from "@assets/icons/grid-list.svg?react";
import SingleListIcon from "@assets/icons/single-list.svg?react";

import ButtonComponent from "@components/Button";
import theme from "src/theme/theme";

interface IViewToggleProps {
  viewMode: "grid" | "list";
  setViewMode: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}

const ViewToggle: React.FC<IViewToggleProps> = ({ viewMode, setViewMode }) => {
  return (
    <Container>
      <ButtonComponent
        icon={
          <GridListIcon
            style={{
              color:
                viewMode === "grid"
                  ? theme.colors.Green500
                  : theme.colors.Neutrals0,
            }}
          />
        }
        onClick={() => setViewMode("grid")}
        bcColor={theme.colors.Transparent}
      />
      <ButtonComponent
        icon={
          <SingleListIcon
            style={{
              color:
                viewMode === "list"
                  ? theme.colors.Green500
                  : theme.colors.Neutrals0,
            }}
          />
        }
        onClick={() => setViewMode("list")}
        bcColor={theme.colors.Transparent}
      />
    </Container>
  );
};

export default ViewToggle;
