import React from "react";
import theme from "src/theme/theme";
import { useNavigate } from "react-router-dom";

import CompanyLogo from "@assets/icons/logo.svg";
import SearchIcon from "@assets/icons/search.svg";
import FilterIcon from "@assets/icons/filter.svg";

import ButtonComponent from "@components/Button";
import FilterComponent from "@components/Filter";

import { useFilter } from "@contexts/FilterContext";
import { useVideos } from "@contexts/VideosContext";

import {
  Container,
  StyledInput,
  SearchContainer,
  LogoWrapper,
  SearchWrapper,
  ButtonContainer,
} from "./styles";

const HeaderComponent: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const { searchParam, setSearchParam } = useFilter();
  const { fetchVideos } = useVideos();

  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");

  return (
    <Container id="header">
      <LogoWrapper>
        <img src={CompanyLogo} alt="Pexels logo" onClick={handleLogoClick} />
        <span>Pexels</span>
      </LogoWrapper>

      <SearchWrapper>
        <SearchContainer isFilterSectionOpen={isFilterVisible}>
          <StyledInput
            type="text"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <FilterComponent visible={isFilterVisible} />
        </SearchContainer>
        <ButtonContainer>
          <ButtonComponent
            icon={SearchIcon}
            bcColor={theme.colors.Green500}
            onClick={() => fetchVideos()}
          />
          <ButtonComponent
            icon={FilterIcon}
            bcColor={theme.colors.Green500}
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          />
        </ButtonContainer>
      </SearchWrapper>
    </Container>
  );
};

export default HeaderComponent;
