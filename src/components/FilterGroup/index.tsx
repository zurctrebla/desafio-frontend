import React from "react";

import {
  Category,
  Label,
  Option,
  Checkbox,
  Checkmark,
  CheckboxText,
} from "./styles";

import CheckMarkIcon from "@assets/icons/check-mark.svg?react";
import theme from "src/theme/theme";
import { useFilter } from "../../contexts/FilterContext";

type FilterGroupKey = "resolutions" | "locales";

interface FilterGroupProps {
  title: string;
  groupKey: FilterGroupKey;
  options: string[];
  displayMap?: Record<string, string>;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  groupKey,
  options,
  displayMap = {},
}) => {
  const { filters: selected, toggleSelection } = useFilter();
  const selectedValues = selected[groupKey];

  return (
    <Category>
      <Label>{title}</Label>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option);
        const shouldDisable = selectedValues.length > 0 && !isSelected;

        return (
          <Option
            key={option}
            onClick={() => {
              if (!shouldDisable) toggleSelection(groupKey, option);
            }}
            style={{
              opacity: shouldDisable ? 0.5 : 1,
              cursor: shouldDisable ? "not-allowed" : "pointer",
            }}
          >
            <Checkbox>
              {isSelected && (
                <Checkmark>
                  <CheckMarkIcon
                    color={theme.colors.Neutrals0}
                    height={14}
                    width={14}
                  />
                </Checkmark>
              )}
            </Checkbox>
            <CheckboxText>{displayMap[option] || option}</CheckboxText>
          </Option>
        );
      })}
    </Category>
  );
};

export default FilterGroup;
