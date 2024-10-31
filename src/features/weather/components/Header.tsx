import { Input } from "@/components/ui/Input";
import { S_Header, S_List } from "./Header.module";
import { useEffect, useState } from "react";
import { City } from "../utils/interfaces";
import { searchCity } from "../services/SearchCity";
import { changeCity } from "../slices/citySlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [listCities, setListCities] = useState<City[]>([]);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 300);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  useEffect(() => {
    async function getSearchCities() {
      const cities = await searchCity(debouncedInputValue);
      setListCities(cities);
    }
    if (debouncedInputValue) {
      getSearchCities();
    } else {
      setListCities([]);
    }
  }, [debouncedInputValue]);

  const suggestionsList = () => {
    if (listCities.length) {
      return (
        <>
          <S_List>
            {listCities.map((city) => {
              let className;

              return (
                <li
                  className={className}
                  key={`${city.name}${city.lon}`}
                  onClick={() => {
                    setListCities([]);
                    setInputValue("");
                    dispatch(changeCity(city));
                  }}
                >
                  {city.name}
                </li>
              );
            })}
          </S_List>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <S_Header>
        <span>Weather App</span>
        <div>
          <Input
            onChange={handleInputChange}
            className="input"
            type="input"
            value={inputValue}
            placeholder="Search"
          />
          {suggestionsList()}
        </div>
      </S_Header>
    </>
  );
}
