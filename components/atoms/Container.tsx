import styled from "../styledComponents";

interface ContainerProps {
  flex?: boolean;
}

const SCContainer = styled.div<ContainerProps>``;

export const Container = styled(SCContainer)`
  max-width: ${props => props.theme.containerWidth}px;
  margin: 0 auto;
  padding: 16px;
  display: ${props => (props.flex ? "flex" : "inherit")};

  @media (max-width: 820px) {
    .hide-tablet {
      display: none;
    }
  }

  @media (max-width: 820px) {
    .hide-mobile {
      display: none;
    }
  }
`;
