import React from "react";
import { Container } from "./styles";

import FilterGroup from "@components/FilterGroup";

interface FilterComponentProps {
  visible: boolean;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ visible }) => {
  const locales = ["Espanha", "Itália", "Japão"];
  const resolutions = ["small", "medium", "large"];

  const resolutionsMap = {
    small: "HD",
    medium: "Full HD",
    large: "4K",
  };

  if (!visible) return null;

  return (
    <Container>
      <FilterGroup title="Localidades" groupKey="locales" options={locales} />

      <FilterGroup
        title="Resoluções"
        groupKey="resolutions"
        options={resolutions}
        displayMap={resolutionsMap}
      />
    </Container>
  );
};

export default FilterComponent;
