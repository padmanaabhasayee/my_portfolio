import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

// Styled components for heading and paragraph
const Heading = styled.h1`
  font-size: 3rem;
  color: #6eacda;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem; /* Adjusted for medium readability */
  color: #6eacda;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.5;
  text-align: center;
`;

// Container for the main resume section
const ResumeContainer = styled.div`
  padding: 20vh 0;
  text-align: center;
  color: #6eacda;
  height: 40vh;
`;

// Styled button for download link
const DownloadButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #6eacda;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 2rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #549dbf;
  }
`;

function ResumeComponent() {
  return (
    <ResumeContainer>
      <Heading>Resume</Heading>
      <Description>
        Unlock the details of my journey and achievements! Download my resume
        here, and let’s explore how I can contribute to your team.
      </Description>

      <Typewriter
        options={{
          strings: [
            "Hello World",
            "Detail Oriented",
            "Focused on Performance Optimization",
            "Passionate about Learning",
            "Clean and Efficient Code",
            "Strong Problem Solver",
            "Proficient in JavaScript & React",
          ],
          autoStart: true,
          loop: true,
          changeDeleteSpeed: 1,
        }}
      />

      <DownloadButton
        href="https://drive.google.com/file/d/1ObO-nb45gcFvgXC8gWNW_Nr8v8CqmT16/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download My Resume
      </DownloadButton>
    </ResumeContainer>
  );
}

export default ResumeComponent;
