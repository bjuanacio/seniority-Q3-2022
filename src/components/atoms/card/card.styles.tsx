import styled from 'styled-components'

export const ImgContainer = styled.img`
  width: 20rem;
  border-radius: 8px;
  margin-top: -2rem;
  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }
`

export const CardContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin-top: 16px;
  margin-bottom: 2rem;
  /* margin: 0.3rem; */
  border: 1px solid #efefef;
  border-radius: 0.5rem;
  min-width: 100px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  height: 420px;
  width: 25rem;

  .name {
    color: white;
    margin-top: 10px;
    font-size: 1.3rem;
  }

  .button-secundary {
    background-color: white;
    border: none;
    border-radius: 4px;
    color: black;
    padding: 14px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    height: 16px;
  }
`
