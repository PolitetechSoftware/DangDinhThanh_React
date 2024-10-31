import styled from "styled-components";

const S_WeatherPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

const S_Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: unset;
    grid-template-rows: 1fr auto;
  }
`;

export { S_WeatherPage, S_Container };
