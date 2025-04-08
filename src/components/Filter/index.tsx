import React from "react";
import { Container } from "./styles";

import FilterGroup from "@components/FilterGroup";

interface FilterComponentProps {
  visible: boolean;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ visible }) => {
  const locales = ["es-ES", "fr-FR", "pt-PT"];
  const resolutions = ["small", "medium", "large"];

  const resolutionsMap = {
    small: "HD",
    medium: "Full HD",
    large: "4K",
  };

  const localesMap = {
    "es-ES": "Espanha",
    "fr-FR": "França",
    "pt-PT": "Portugal",
  };

  if (!visible) return null;

  return (
    <Container>
      <FilterGroup
        title="Localidades"
        groupKey="locales"
        options={locales}
        displayMap={localesMap}
      />

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
