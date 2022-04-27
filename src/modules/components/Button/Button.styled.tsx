import styled from 'styled-components';

export const ButtonContainer = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: #EEEEEE;
  color: #222222;
  cursor: pointer;

  &:hover {
    background-color: #DDDDDD;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: var(--blue);
    color: white;
  }

  .red {
    background-color: red;
    color: white;
  }

  .small {
    font-size: 10px;
    padding: 10px 15px;
  }

  .medium {
    font-size: 15px;
    padding: 15px 20px;
  }

  .large {
    font-size: 20px;
    padding: 20px 25px;
  }
`;
