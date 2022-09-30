import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
  padding?: string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 1rem;
  border: 1px solid #dee3ed;
  background-color: ${({ backgroundColor = "transpatent" }) => backgroundColor};
  padding: ${({ padding = "auto" }) => padding};
`;
