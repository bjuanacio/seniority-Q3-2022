import styled from 'styled-components'

export const Styles = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background-color: var(--black-color);
  width: 300px;
  display: relative;

  .playerCard__image {
    display: relative;
    img {
      border-radius: 1rem;
      height: 300px;
      width: 300px;
      backdrop-filter: blur(10px);
    }
  }

  .playerCard__name {
    position: absolute;
    text-align: center;
    z-index: 1;
  }

  .playerCard__stats {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin: 1rem 0;
  }

  .playerCard__icons {
    display: flex;
    justify-content: space-evenly;
    max-width: 200px;
    margin: 0 auto;

    img {
      cursor: pointer;
    }
  }
`
