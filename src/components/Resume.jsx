import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

function ResumeComponent() {
  const ResumeContainer = styled.div`
    padding: 20vh 0;
    text-align: center;
    color: #6eacda;
    height: 45vh;
  `;

  const ResumeLink = styled.a`
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

  return (
    <ResumeContainer>
      <h1>Resume</h1>
      Unlock the details of my journey and achievements, download my resume here
      and let's explore how I can contribute to your team!
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
      <ResumeLink
        href="https://drive.google.com/file/d/1ObO-nb45gcFvgXC8gWNW_Nr8v8CqmT16/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download My Resume
      </ResumeLink>
    </ResumeContainer>
  );
}

export default ResumeComponent;
