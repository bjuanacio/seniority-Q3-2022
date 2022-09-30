import styled from 'styled-components'

export const BtnContainer = styled.div`
  .btn {
    color: #fff;
    border-color: var(--main-bg-color);
    background: var(--main-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 160px;
  }

  .btn:hover {
    opacity: 0.7;
  }

  .btn svg {
    margin-right: 5px;
  }

  .btn--text {
    background-color: transparent;
    color: var(--main-bg-color);
    border: none;
  }

  .btn--disabled {
    background-color: var(--main-bg-color-disabled);
    border-color: var(--main-bg-color-disabled);
  }
`
