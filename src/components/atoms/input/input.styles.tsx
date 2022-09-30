import styled from 'styled-components'

export const InputContainer = styled.div`
  .search {
    display: flex;
    padding: 2px;
    border: 2px solid var(--border-color);
    background: #fff;
    border-radius: 10px;
  }
  .search__input {
    border: none;
    background: transparent;
    margin: 0;
    padding: 7px 8px;
    font-size: 16px;
    color: inherit;
    border: 1px solid transparent;
    width: 100%;
  }

  .search__input::placeholder {
    color: #bbb;
  }
`
