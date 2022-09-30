import styled from 'styled-components'
import { ModalProps } from './modal'
export const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  background: rgba(74, 74, 80, 0.8);
  height: 100%;
  width: 100%;
  bottom: 0;
  z-index: 10;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${({ mobileOnly }) => (mobileOnly ? 'none' : 'inline-block')};
  }

  .terms {
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      max-width: 900px;
    }
  }

  .modal_backdrop {
    position: absolute;
    bottom: 0;
    width: 100%;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: flex;
      justify-content: center;
      position: relative;
      flex-shrink: 0;
      align-items: center;
      height: 100%;
    }
  }

  .modal_backdrop_center {
    display: flex;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
    align-items: center;
    height: 100%;
  }
`
