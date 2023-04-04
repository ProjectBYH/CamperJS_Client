import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import Detailpage from "./pages/detailpage/Detailpage";
import axios from "axios";

function App() {
  const [campingData, setCampingData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(campingData);

  const fetchcampingData = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await axios.get(process.env.REACT_APP_CAMPING);
      setCampingData(response.data);
      setFilteredData(response.data.filter((el) => el.lctCl.includes("산")));
    } catch (e) {
      setError(e);
      console.log(Error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchcampingData();
  }, []);

  const onSearch = (searchText) => {
    const filteredCamping = campingData.filter(
      (camping) =>
        camping.campingName.includes(searchText) ||
        camping.lctCl.includes(searchText) ||
        camping.doNm.includes(searchText) ||
        camping.sigunguNm.includes(searchText)
    );

    setFilteredData(filteredCamping);
  };

  const onTag = (searchText) => {
    if (
      searchText === "산" ||
      searchText === "계곡" ||
      searchText === "숲" ||
      searchText === "해변"
    ) {
      const filterLctCl = campingData.filter((camping) =>
        camping.lctCl.includes(searchText)
      );
      setFilteredData(filterLctCl);
    } else if (
      searchText === "autoSiteCo" ||
      searchText === "glampSiteCo" ||
      searchText === "caravSiteCo" ||
      searchText === "indvdlCaravSiteCo" ||
      searchText === "siteBottomCl1" ||
      searchText === "siteBottomCl2" ||
      searchText === "siteBottomCl3" ||
      searchText === "siteBottomCl5"
    ) {
      const filterSite = campingData.filter(
        (camping) => !(camping[searchText] === "0")
      );
      setFilteredData(filterSite);
    } else if (searchText === "animalCmgCl") {
      const filteranimlCmgCl = campingData.filter(
        (camping) => !(camping[searchText] === "불가능")
      );
      setFilteredData(filteranimlCmgCl);
    } else if (
      searchText === "전기" ||
      searchText === "무선인터넷" ||
      searchText === "온수" ||
      searchText === "편의점"
    ) {
      const filterSbrsCl = campingData.filter((camping) =>
        camping.sbrsCl.includes(searchText)
      );
      setFilteredData(filterSbrsCl);
    } else if (searchText === "낚시") {
      const filterposblFcltyCl = campingData.filter((camping) =>
        camping.posblFcltyCl.includes(searchText)
      );
      setFilteredData(filterposblFcltyCl);
    }
  };

  const resetCondition = () => {
    setFilteredData(campingData.filter((el) => el.lctCl.includes("산")));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Mainpage
              filteredData={filteredData}
              isLoading={isLoading}
              resetCondition={resetCondition}
              onSearch={onSearch}
              onTag={onTag}
            />
          }
        />
        <Route
          path="/detailpage/:contentId"
          element={
            <Detailpage resetCondition={resetCondition} onSearch={onSearch} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
