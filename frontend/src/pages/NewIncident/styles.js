import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: block;
    align-self: flex-start;
  }
`;
export const Content = styled.div`
  background: #f0f0f5;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h1 {
      margin: 15px 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
    width: 80vh;

    button {
      height: 60px;
      background: #e02041;
      border-radius: 8px;

      display: inline-block;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      transition: filter 0.2s;
      :hover {
        filter: brightness(90%);
      }
      input {
        border-radius: 8px;
        height: 60px;
        flex-shrink: 0;
      }
    }
  }
`;
