import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdList, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import LoginModal from "../modal/LoginModal";
import axios from "axios";
import InfoModal from "../modal/InfoModal";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap"
const CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_URL = process.env.REACT_APP_GOOGLE_CLIENT_CALLBACK_URL;

export const HeaderItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0 5% 0 5%;
  background-color: white;
  position: absolute;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const Logo = styled.button`
  border: 0px solid black;
  background: white;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (max-width: 0px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (max-width: 0px) {
    width: 100%;
  }
`;

export const UserContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (max-width: 0px) {
    display: none;
  }
  a {
    margin: 0.5rem;
  }
  div {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 5px;
    height: 30px;
    white-space: nowrap;
    @media screen and (max-width: 1200px) {
    }
    @media screen and (max-width: 992px) { 
      display: none;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 576px) {
      display: none;
    }
    @media screen and (max-width: 0px) {
      display: none;
    }
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 4.5rem;
  display: none;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const LogoImg2 = styled.img`
  display: block;
  width: 4.5rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const LogoTitle = styled.img`
  display: block;
  width: 4.5rem;
  margin-left: 0.5rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  width: 300px;
  height: 2.3rem;
  display: flex;
  background: white;
  justify-content: space-around;
  align-items: center;
  border: 0px solid gray;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  cursor: pointer;
  input {
    width: 230px;
    border: 1px;
    text-align: center;
    cursor: pointer;
    color: #505050;
  }
  input:focus {
    outline: none;
  }
  image {
    border: 0px;
  }
  button {
    border: 0px;
    background: white;
  }
  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #505050;
  }

  input:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #505050;
  }

  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #505050;
  }

  input:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #505050;
  }
`;

export const UserLogin = styled.button`
  display: flex;
  width: 5.5rem;
  background: white;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 0px solid;
  padding: 1px;
  border-radius: 15px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  &:hover {
    box-shadow: 2px 2px gray;
    transition: 0.2s;
  }
`;

export const UserInfo = styled.button`
    font-family: 'GothicA1-Regular';
    background-color: white;
    border: 0px;
    &:hover {
    box-shadow: 0px 2px gray;
    transition: 0.2s;
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (max-width: 0px) {
    display: none;
  }
`;


function Header({ resetCondition, onSearch }) {
  
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [InfoModalOn, setInfoModalOn] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loginState, setLoginState] = useState({});
  const [username, setUserName] = useState(null);
  
  if (!localStorage.getItem("search")) {
    localStorage.setItem("search", "언제나 어디서든 즐겁게!");
  }

  let navigate = useNavigate();
  
  const mainpage = () => {
    // 새창으로 띄우기
    // window.open("http://localhost:3000/")
    // 기존창 홈페이지로 보내기
    resetCondition();
    window.location.assign(process.env.REACT_APP_CAMPER_HOME);
    localStorage.clear("search");
  };

  function logout() {
    axios.post(`${process.env.REACT_APP_CAMPER_SERVER}/auth/logout`, {
      headers: localStorage.user,
    });
    delete localStorage.user;
    setLoginState(null);
    window.location.assign(process.env.REACT_APP_CAMPER_HOME);
  }



  const loginData = (loginState) => {
    setLoginState(loginState)
  }

  function logkeep() {
    axios
      .get(`${process.env.REACT_APP_CAMPER_SERVER}/auth/`)
      .then(function (res) {
        setLoginState(res.data);
        if(res.data==="로그인이 필요합니다."){}else{setUserName(res.data.name)}
      })
  }
  useEffect(() => {
    logkeep();
  }, []);
  const onClickSearch = () => {
    onSearch(searchText);
    localStorage.setItem("search", searchText);
    navigate(`/`, { state: searchText });
  };
  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
      localStorage.setItem("search", searchText);
      navigate(`/`, { state: searchText });
    }
  };

  return (
    <>
      <LoginModal show={signInModalOn} onHide={() => setSignInModalOn(false)} />
      <HeaderItemContainer>
        <Logo onClick={mainpage}>
          <LogoImg src="../별보러가자.ico" alt="logo" />
          <LogoImg2 src="../별보러가자2.ico" alt="logo" />
          <LogoTitle src="../logotitle.ico" alt="LogoTitle" />
        </Logo>
        <SearchContainer>
          <SearchBar>
            <input
              onKeyPress={onKeyPress}
              onChange={onChangeHandler}
              placeholder={localStorage.getItem("search")}
              value={searchText}
            />
            <button onClick={onClickSearch}>
              <BiSearchAlt size={30} alt="search" />
            </button>
          </SearchBar>
        </SearchContainer>
        {loginState === "로그인이 필요합니다." ? (
          <UserContainer>
            <a id="kakao" href={KAKAO_URL} className="kakaka">
              <img
                height="35"
                width="35"
                src="https://blog.kakaocdn.net/dn/clSAyO/btrOtG0YDP9/iOkNOf2B2Wmh5vnRA0jlsK/img.png"
                alt="카카오 로그인"
              />
            </a>
            <a id="google" href={GOOGLE_URL} className="gogogo">
              <img
                height="35"
                width="35"
                src="https://blog.kakaocdn.net/dn/bPlC9h/btrOwjRLzDR/9086k1qvpgYqZ3WS3TJzSk/img.png"
                alt="구글 로그인"
              />
            </a>
            <UserLogin onClick={() => setSignInModalOn(true)}>
              <MdList size="30" color="gray" />
              <MdAccountCircle size="40" color="gray" />
            </UserLogin>
          </UserContainer>
        ) : (
          <UserContainer>
            <InfoModal show={InfoModalOn} onHide={() => setInfoModalOn(false) } loginData={loginData} UserInfo={loginState}/>
            <UserInfo onClick={()=> setInfoModalOn(true)}><b>{username}</b>님 반갑습니다</UserInfo>
            <Button variant='warning' onClick={logout}>로그아웃</Button>
          </UserContainer>
        )}
      </HeaderItemContainer>
    </>
  );
  
}

export default Header;
