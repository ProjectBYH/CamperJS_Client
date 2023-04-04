import React from "react";
import AircoverModal from "../aircoverModal/AircoverModal";
import MoreInfoModal from "../moreInfoModal/MoreInfoModal";
import styled from "styled-components";
import { GiButterflyFlower, GiMountains, GiRiver } from "react-icons/gi";
import { TbToolsKitchen, TbWifi } from "react-icons/tb";
import { MdPets } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  border: none;
  display: flex;
`;

export const Description = styled.div`
  margin: 5rem 0 0 0;
  padding: 1rem 0 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  /* border: 5px solid blue; */
`;

export const TitleContainer = styled.div`
  width: 70%;
  margin-left: 10rem;
  & > div > h1 {
    font-family: "MaplestoryOTFBold";
    font-size: x-large;
  }
  & > div > h2 {
    font-family: "MaplestoryOTFBold";
    font-size: large;
  }
`;

export const PotoContainer = styled.div`
  width: 73%;
  margin-left: 10rem;
  margin-bottom: 2rem;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  & > img {
    width: 40%;
  }
`;

export const AirCoverContainer = styled.div`
  width: 70%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-left: 10rem;

  & > div {
    font-size: large;
  }

  & > nav > h1 {
    font-family: "MaplestoryOTFBold";
    color: red;
  }

  & > h1 {
    font-family: "MaplestoryOTFBold";
  }
  & > h2 {
    font-family: "MaplestoryOTFBold";
  }
  & > h3 {
    font-family: "MaplestoryOTFBold";
  }
`;

export const TagContainer = styled.div`
  width: 70%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-left: 10rem;
  & > button {
    margin-right: 1rem;
    font-size: medium;
    background-color: #ffffff;
    border-style: solid;
    outline: 0;
    border-radius: 10% / 50%;
  }
  & > h2 {
    font-family: "MaplestoryOTFBold";
  }
`;

const DetailMain = ({ aircoverModalHandler, moreInfoModalHandler }) => {
  const { state } = useLocation();
  const {
    campingName,
    imageUrl,
    doNm,
    sigunguNm,
    lineIntro,
    intro,
    addr1,
    animalCmgCl,
    homepage,
    tel,
    posblFcltyCl,
  } = state;

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

  let posblFcltyClThing = "";
  if (posblFcltyCl !== "") {
    posblFcltyClThing = posblFcltyCl + "구비되어 있음";
  } else {
    posblFcltyClThing = "-";
  }

  return (
    <Wrapper>
      <Description>
        <TitleContainer>
          <div>
            <h1>{campingName}</h1>
          </div>
          <div>
            <h2> ⭐ 4.68 . 후기 28개 . {addr1}</h2>
          </div>
        </TitleContainer>
        <PotoContainer>
          <img src={image1} className="image1" alt="image1" />
          <img src={image2} className="image2" alt="image2" />
          <img src={image3} className="image3" alt="image3" />
          <img src={image4} className="image4" alt="image4" />
        </PotoContainer>
        <AirCoverContainer>
          <div>
            흔치 않은 기회입니다! {campingName}님의 숙소는 보통 예약이 가득 차
            있습니다.
          </div>
        </AirCoverContainer>
        <AirCoverContainer>
          <div>
            <VscKey size={25} /> 순조로운 체크인 과정
          </div>
          <br></br>
          <div>
            <MdPets size={25} /> 반려동물 가능여부 : {animalCmgCl}
          </div>
        </AirCoverContainer>
        <AirCoverContainer>
          <nav className="navigation-bar">
            <h1 className="aircover-logo">소비자 권익보호</h1>
            <div>
              모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
              경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
              포함됩니다.
            </div>
            <ul className="menu-bar">
              <li className="menu-list">예약 지원 보장</li>
              <li className="menu-list">체크인 지원 보장</li>
              <li className="menu-list">숙소 정확도 보장</li>
              <li className="menu-list">24시간 안전 지원 라인</li>
            </ul>
          </nav>
          <AircoverModal aircoverModalHandler={aircoverModalHandler} />
        </AirCoverContainer>
        <AirCoverContainer>
          <h2>숙소 한 줄 설명</h2>
          <div>{lineIntro}</div>
          <br></br>
          <div>{intro}</div>
          <MoreInfoModal
            aircoverModalHandler={moreInfoModalHandler}
            intro={intro}
          />
        </AirCoverContainer>
        {/* <AirCoverContainer>
          <h2>숙박장소</h2>
          <img className="image1" alt="image1" src="img/image1.webp" />
          <div>
            침실 <br></br> 퀸사이즈 침대 1개, 소파 1개
          </div>
        </AirCoverContainer> */}
        <AirCoverContainer>
          <h2>숙소 편의시설</h2>
          <h3>기본</h3>
          <div>
            <GiButterflyFlower size={30} />
            정원 전망
          </div>
          <div>
            <GiMountains size={30} />산 전망
          </div>
          <div>
            <GiRiver size={30} />
            호수나 강과 인접
          </div>
          <div>
            <TbToolsKitchen size={30} />
            주방
          </div>
          <div>
            <TbWifi size={30} />
            무선 인터넷
          </div>
          <h3>다른 숙소와는 다른 차이점 </h3>
          <div>{posblFcltyClThing}</div>
        </AirCoverContainer>
        <AirCoverContainer>
          <h2>홈페이지</h2>
          <a href={homepage} target="_blank" rel="noreferrer">
            {homepage}
          </a>
        </AirCoverContainer>
        <AirCoverContainer>
          <h2>문의사항</h2>
          <a href="tel:{tel}">{tel}</a>
        </AirCoverContainer>
        <TagContainer>
          <h2>지역 태그</h2>
          <button>{doNm}</button>
          <button>{sigunguNm}</button>
        </TagContainer>
      </Description>
      {/* <img src="https://gocamping.or.kr/upload/camp/4/thumb/thumb_720_4548WQ5JCsRSkbHrBAaZylrQ.jpg"></img> */}
    </Wrapper>
  );
};

export default DetailMain;
