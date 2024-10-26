import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialProfiles() {
  const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    // background: linear-gradient(135deg, #1d2671, #c33764);
    height: 100vh;
    color: #ffffff;
    font-family: "Arial", sans-serif;
  `;

  const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #6eacda;
  `;

  const ProfileLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 500px;
  `;

  const ProfileLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ffffff;
    background: #03346e;
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    transition: background 0.3s ease, transform 0.2s ease;
    font-size: 1.2rem;
    font-weight: 500;

    &:hover {
      background: #6eacda;
      transform: scale(1.05);
    }

    svg {
      margin-right: 10px;
      font-size: 1.5rem;
    }

    span {
      flex-grow: 1;
      text-align: left;
    }
  `;

  return (
    <div>
      <SocialContainer>
        <Title>Connect with Me</Title>
        <ProfileLinks>
          <ProfileLink href="https://github.com/" target="_blank">
            <FaGithub />
            <span>GitHub</span>
          </ProfileLink>
          <ProfileLink href="https://linkedin.com/" target="_blank">
            <FaLinkedin />
            <span>LinkedIn</span>
          </ProfileLink>
          <ProfileLink href="https://twitter.com/" target="_blank">
            <FaTwitter />
            <span>Twitter</span>
          </ProfileLink>
          <ProfileLink href="https://instagram.com/" target="_blank">
            <FaInstagram />
            <span>Instagram</span>
          </ProfileLink>
          <ProfileLink href="mailto:your-email@example.com" target="_blank">
            <FaEnvelope />
            <span>Email</span>
          </ProfileLink>
        </ProfileLinks>
      </SocialContainer>
    </div>
  );
}
