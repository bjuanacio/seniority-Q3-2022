import styled from "styled-components";

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  padding?: string;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  border: none;
  padding: ${({ padding = "auto" }) => padding};
  color: ${({ color = "white" }) => color};
  background-color: ${({ backgroundColor = "#3F3F3F" }) => backgroundColor};
  width: ${({ width = "auto" }) => width};
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
