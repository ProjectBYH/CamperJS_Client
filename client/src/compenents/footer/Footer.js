import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import axios from "axios";
import LoginModal from "../modal/LoginModal";

const CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_URL = process.env.REACT_APP_GOOGLE_CLIENT_CALLBACK_URL;

export const FooterItemContainer = styled.div`
  width: 30rem;
  height: 3.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Gmarket Sans TTF";
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const FooterTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
  line-height: 22px;
  .contact {
    box-sizing: border-box;
    height: 24px;
    line-height: 22px;
    color: #2d2d2d;
    font-size: 1rem;
    cursor: pointer;
    :hover {
      border-bottom: 0.313rem solid #fede8a;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const GitHubContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
  }
  a {
    margin-left: 0.625rem;
    color: #2d2d2d;
    font-size: 1rem;
    cursor: pointer;
    height: 24px;
    text-decoration: none;
    color: #2d2d2d;
    box-sizing: border-box;
    :hover {
      border-bottom: 0.313rem solid #fede8a;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const TeamMemberContainer = styled.div`
  border: 2px soild;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const TeamMember = styled.span`
  a {
    font-weight: 100;
    font-size: 0.875rem;
    cursor: pointer;
    text-decoration: none;
    color: #2d2d2d;
    :hover {
      border-bottom: 0.313rem solid #fede8a;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const KakaoButton = styled.button`
  width: 5rem;
  display: none;
  cursor: pointer;
  background: white;
  border: 0px solid;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
  &:hover {
    box-shadow: 2px 2px gray;
    transition: 0.2s;
  }
`;

export const GoogleButton = styled.button`
  width: 5rem;
  display: none;
  cursor: pointer;
  background: white;
  border: 0px solid;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
  &:hover {
    box-shadow: 2px 2px gray;
    transition: 0.2s;
  }
`;

export const Login = styled.button`
  width: 5rem;
  display: none;
  cursor: pointer;
  background: white;
  border: 0px solid;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
  &:hover {
    box-shadow: 2px 2px gray;
    transition: 0.2s;
  }
`;

export const LogOut = styled.button`
  border: 0px;
  background-color: white;
  color: grey;
  display: none;
  &:hover {
    box-shadow: 2px 2px gray;
    transition: 0.2s;
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

/////////////////////////////////////////////////////////////////////////////////

function Footer() {
  function logout() {
    axios.post("https://localhost:8080/auth/logout", {
      headers: localStorage.user,
    });
    delete localStorage.user;
    window.location.assign(process.env.REACT_APP_CAMPER_HOME);
  }

  const [signInModalOn, setSignInModalOn] = useState(false);

  return (
    <FooterItemContainer>
      <FooterTitle>
        <GitHubContainer>
          <Link to="/" style={{ textDecoration: "none", borderBottom: "none" }}>
            <img
              src="https://blog.kakaocdn.net/dn/bvLVRb/btrOwA0lAZN/SqfEuRyk0l1eQ7kpmZ9RR1/img.png"
              alt="GitImg"
            />
          </Link>
          <a
            href="https://github.com/ProjectBYH/CamperJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Camper
          </a>
          <a
            href="https://github.com/ProjectBYH/CamperJS/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            정배홍이
          </a>
        </GitHubContainer>
      </FooterTitle>
      <TeamMemberContainer>
        <TeamMember>
          <a
            href="https://github.com/ProjectBYH"
            target="_blank"
            rel="noopener noreferrer"
          >
            배윤호
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/code920309"
            target="_blank"
            rel="noopener noreferrer"
          >
            이동규
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/bonnibel200"
            target="_blank"
            rel="noopener noreferrer"
          >
            이창석
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/sowookim"
            target="_blank"
            rel="noopener noreferrer"
          >
            정다희
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/plutio1592"
            target="_blank"
            rel="noopener noreferrer"
          >
            정무공
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/hongsuwon"
            target="_blank"
            rel="noopener noreferrer"
          >
            홍은지
          </a>
        </TeamMember>
      </TeamMemberContainer>

      {localStorage.user === "로그인이 필요합니다." ? (
        <LogOut onClick={logout}>
          <GoSignOut size="30" color="gray" />
          <div>로그아웃</div>
        </LogOut>
      ) : (
        <>
          <LoginModal
            show={signInModalOn}
            onHide={() => setSignInModalOn(false)}
          />
          <KakaoButton onClick={() => KAKAO_URL}>
            <img
              height="35"
              width="35"
              src="https://blog.kakaocdn.net/dn/clSAyO/btrOtG0YDP9/iOkNOf2B2Wmh5vnRA0jlsK/img.png"
              alt="카카오 로그인"
            />
            <div>카카오</div>
          </KakaoButton>
          <GoogleButton onClick={() => GOOGLE_URL}>
            <img
              height="35"
              width="35"
              src="https://blog.kakaocdn.net/dn/bPlC9h/btrOwjRLzDR/9086k1qvpgYqZ3WS3TJzSk/img.png"
              alt="구글 로그인"
            />
            <div>구글</div>
          </GoogleButton>
          <Login onClick={() => setSignInModalOn(true)}>
            <MdAccountCircle size="35" color="gray" />
            <div>로그인</div>
          </Login>
        </>
      )}
    </FooterItemContainer>
  );
}

export default Footer;
