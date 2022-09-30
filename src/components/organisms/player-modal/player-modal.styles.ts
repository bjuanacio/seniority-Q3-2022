import styled from 'styled-components'

export const Styles = styled.div`
  .playerModal__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000aa;
    z-index: 100;
  }

  .playerModal__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 200;
    padding: 2rem;
    min-width: 800px;
  }

  .playerModal__bar {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      color: var(--main-color);
    }
  }

  .playerModal__form {
    display: flex;
    margin-top: 1rem;

    &__img {
      display: flex;
      width: 400px;
      height: 400px;
      background-color: #999;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      overflow: hidden;
      margin-right: 1rem;
    }
  }

  .playerModal__inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .playerModal__sliders {
  }
`
