import styled from "styled-components";
import Camping from "../camping/camping";
import Skeleton from "../Skeleton/Skeleton";

const Wrapper = styled.div`
  width: 100%;
  height: 45rem;
  padding: 0;
  /* background-color: #f2d29b; */

  /* padding: 0.5em; */
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  top: 10rem;
  overflow-y: auto;
  overflow-x: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */


`;


function Main({ isLoading, filteredData }) {
  if (!filteredData) {
    return (
      <Wrapper>
        {new Array(60).fill(1).map((_, i) => {
          return <Skeleton key={i} />;
        })}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {!isLoading
          ? new Array(60).fill(1).map((_, i) => {
              return <Skeleton key={i} />;
            })
          : filteredData.map(
              (camping) =>
                camping.imageUrl && (
                  <Camping
                    key={camping.contentId}
                    camping={camping}
                    campingImg={camping.imageUrl}
                  />
                )
            )}
      </Wrapper>
    );
  }
}
export default Main;
