// Home.js
import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const HomePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vw;
    color: #6eacda;
    font-family: "Arial", sans-serif;
  `;

  const HeroSection = styled.div`
    text-align: left;
    max-width: 600px;
  `;

  const Greeting = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
    color: #6eacda;
    margin-bottom: 0.5rem;
  `;

  const Name = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
  `;

  const Subtitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
    color: #6eacda;
    margin-bottom: 1rem;
  `;

  const IntroText = styled.p`
    font-size: 1rem;
    line-height: 150%;
    color: #6eacda;
    margin-bottom: 2rem;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 2rem;
  `;

  const Button = styled.button`
    background: #021526;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease;

    &:hover {
      background: #033152;
    }
  `;

  const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 1.5rem;
    margin-top: 1rem;

    a {
      color: #6eacda;
      transition: color 0.3s ease;

      &:hover {
        color: #ff6363;
      }
    }
  `;

  return (
    <div>
      <HomePageContainer>
        <HeroSection>
          <Greeting>Hello, I'm</Greeting>
          <Name>Padmanaabha Sayee</Name>
          <Subtitle>Frontend Developer | Blogger | Student</Subtitle>
          <IntroText>
            I create beautiful and functional web experiences. Welcome to my
            portfolio, where you can explore my work and learn more about my
            journey as a developer.
          </IntroText>
          <ButtonContainer>
            <Button onClick={() => navigate("/projects")}>My Work</Button>
            <Button onClick={() => navigate("/about-me")}>About Me</Button>
          </ButtonContainer>
          <SocialLinks>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </SocialLinks>
        </HeroSection>
      </HomePageContainer>
    </div>
  );
}
