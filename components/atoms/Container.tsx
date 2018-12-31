import styled from "../styledComponents";

interface ContainerProps {
  flex?: boolean;
}

const SCContainer = styled.div<ContainerProps>``;

export const Container = styled(SCContainer)`
  max-width: ${props => props.theme.containerWidth}px;
  margin: 0 auto;
  padding: 10px;
  display: ${props => (props.flex ? "flex" : "inherit")};
`;
