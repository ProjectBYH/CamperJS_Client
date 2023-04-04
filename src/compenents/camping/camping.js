import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Wrapper = styled.div`
  width: 20em;
  height: 25em;
  padding: 0.2em;
  margin: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out;

  &:hover {
    .title > b {
      color: black;
    }
    transform: scale(1.01);
    & > div:nth-child(2) {
      color: black;
    }
  }
  & > img {
    object-fit: fill;
    width: 100%;
    height: 90%;
    border-radius: 3.5px 3.5px 0 0;
    box-shadow: 1px 0 2px gray;
  }
`;

export const Description = styled.div`
  text-align: start;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  background-color: #ffffff;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  & > div {
    width: 100%;
    text-align: start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
  & > b {
      color: #000000;
      font-size: large;
    }
    &>div{
      font-size: medium;
      font-family: MaplestoryOTFLight;
      color: gray;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
function Camping({ camping, campingImg }) {
  let navigate = useNavigate();

  const onClickMoveDVP = (contentId) => {
    navigate(`/Detailpage/${contentId}`, { state: camping });

  };

  return (
    <Wrapper
      key={camping.contentId}
      onClick={() => {
        onClickMoveDVP(camping.contentId);
      }}
    >
      <img
        src={`${campingImg.split(",")[0]}`}
        loading="lazy"
        alt={camping.campingName}
      />
      <Description>
        <div className="title">
          <b>{camping.campingName}</b>
        </div>
        <div>
        {camping.operPdCl ?<div>{camping.operPdCl}</div>: <div>봄,여름,가을,겨울</div>}
          <div>{camping.addr1}</div>
        </div>
      </Description>
    </Wrapper>
  );
}

export default Camping;
