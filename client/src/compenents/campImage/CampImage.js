import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 73%;
  margin-left: 10rem;
  margin-bottom: 2rem;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 5px solid blue;
  & > img {
    width: 40%;
  }
`;

const CampImage = ({ imageUrl }) => {
  let image1 = "";
  if (imageUrl !== "undefined") {
    image1 = imageUrl.split(",")[0];
  } else {
    image1 = null;
  }

  let image2 = "";
  if (imageUrl !== "undefined") {
    image2 = imageUrl.split(",")[1];
  } else {
    image2 = null;
  }

  let image3 = "";
  if (imageUrl !== "undefined") {
    image3 = imageUrl.split(",")[2];
  } else {
    image3 = null;
  }

  let image4 = "";
  if (imageUrl !== "undefined") {
    image4 = imageUrl.split(",")[3];
  } else {
    image4 = null;
  }
  return (
    <ImgContainer>
      <img src={image1} alt="image1" />
      <img src={image2} alt="image2" />
      <img src={image3} alt="image3" />
      <img src={image4} alt="image4" />
    </ImgContainer>
  );
};

export default CampImage;
