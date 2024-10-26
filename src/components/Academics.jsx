import React, { useState } from "react";
import styled from "styled-components";

export default function Academics() {
  const [visibleSection, setVisibleSection] = useState("Education");

  const Introduction = styled.div`
    text-align: center;
    margin-bottom: 50px;
    gap: 0;

    h1 {
      font-size: 2.8rem;
      color: #2d2e55;
      margin-bottom: 10px;
      font-weight: bold;
    }

    p {
      font-size: 1.1rem;
      color: #666;
    }
  `;
  const PageContainer = styled.div`
    color: #333;
    max-width: 850px;
    margin: 0 auto;
    height: 36.1vw;
    font-family: "Segoe UI", sans-serif;
    background-color: #6eacda;
    border-radius: 10px;
    padding: 30px;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 4%;
  `;

  const SectionButton = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: #2d2e55;
    color: white;
    height: auto;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: #566792;
    }
  `;

  const Section = styled.div`
    padding: 20px;
    background: #6eacda;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
  `;

  const SectionTitle = styled.h2`
    font-size: 1.9rem;
    color: #2d2e55;
    text-transform: uppercase;
    border-bottom: 3px solid #2d2e55;
    padding-bottom: 5px;
    margin-bottom: 20px;
  `;

  return (
    <PageContainer>
      <Introduction>
        <h1>Computer Science Student</h1>
        <p>App Development Enthusiast | Aspiring Entrepreneur | Word Lover</p>
      </Introduction>

      <ButtonContainer>
        <SectionButton onClick={() => setVisibleSection("Education")}>
          Education
        </SectionButton>
        <SectionButton onClick={() => setVisibleSection("Top Skills")}>
          Top Skills
        </SectionButton>
        <SectionButton onClick={() => setVisibleSection("Internships")}>
          Internships
        </SectionButton>
        <SectionButton onClick={() => setVisibleSection("Professional Skills")}>
          Professional Skills
        </SectionButton>
      </ButtonContainer>

      {visibleSection === "Education" && (
        <Section>
          <SectionTitle>Education</SectionTitle>
          <div>
            <h3>Sri Sathya Sai Institute of Higher Learning</h3>
            <p>Bachelor of Science (BSc) in Computer Science (Hons)</p>
            <p>July 2022 - May 2025</p>
          </div>
          <div>
            <h3>Jeevana School - India</h3>
            <p>June 2008 - May 2022</p>
          </div>
        </Section>
      )}

      {visibleSection === "Top Skills" && (
        <Section>
          <SectionTitle>Top Skills</SectionTitle>
          <div>
            <h3>Programming & Development:</h3>
            <ul>
              <li>Prompt Engineering</li>
              <li>GPT-4 Applications</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Data Visualization</li>
              <li>Data Modeling</li>
              <li>Web Development & Design</li>
              <li>Object-Oriented Programming (OOP)</li>
            </ul>
          </div>
        </Section>
      )}

      {visibleSection === "Internships" && (
        <Section>
          <SectionTitle>Internships</SectionTitle>
          <p>
            Hands-on experience in data science roles, with a focus on data
            analysis, visualization, and machine learning techniques.
          </p>
        </Section>
      )}

      {visibleSection === "Professional Skills" && (
        <Section>
          <SectionTitle>Professional Skills</SectionTitle>
          <ul>
            <li>Time Management</li>
            <li>Flexible Schedule Adaptability</li>
            <li>Tenacious Work Ethic</li>
            <li>Photography & Creativity</li>
            <li>Debugging and Code Optimization</li>
          </ul>
        </Section>
      )}
    </PageContainer>
  );
}
