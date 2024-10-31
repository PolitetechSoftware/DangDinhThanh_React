import Header from "../components/Header.tsx";
import WeatherFilter from "./WeatherFilter.tsx";
import WeatherSection from "./WeatherSection.tsx";
import { S_Container, S_WeatherPage } from "../styles/WeatherPage.module.ts";

export default function WeatherPage() {
  return (
    <>
      <S_WeatherPage>
        <Header />
        <S_Container>
          <WeatherSection />
          <WeatherFilter />
        </S_Container>
      </S_WeatherPage>
    </>
  );
}
