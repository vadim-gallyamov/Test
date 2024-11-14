import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MainPage } from "../MainPage";

describe ('Тест компонента MainPage', () => {
  test ('Проверка рендера компонента MainPage', () =>{
    const {asFragment} = render ( <MainPage />);
    expect (asFragment()).toMatchSnapshot();
  });
});

