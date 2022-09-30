import styled from "styled-components";

interface TypographyProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  align?: string;
  lineHeight?: string;
}

const Typography = styled.div<TypographyProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "16px")};
  font-weight: ${({ fontWeight = "400" }) => fontWeight};
  color: ${({ color = "black" }) => color};
  text-align: ${({ align }) => align};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight + "px" : "24px")};
`;

export default Typography;
