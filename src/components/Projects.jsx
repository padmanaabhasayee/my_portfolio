import React, { useState } from "react";
import styled from "styled-components";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React.",
      details:
        "Developed a responsive and interactive portfolio website to showcase my skills, projects, and achievements. Integrated animations for smooth transitions, used CSS and styled-components for custom styling, and optimized for both desktop and mobile views.",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application.",
      details:
        "Created a scalable e-commerce platform with user authentication, product catalog, shopping cart, and order management. Integrated payment gateway for secure transactions and implemented role-based access control for admin and customer users.",
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecasting app using OpenWeather API.",
      details:
        "Built a mobile-friendly app displaying real-time weather data and forecasts. Implemented location-based features, error handling, and data caching for efficient loading. Designed with an intuitive UI to enhance user experience.",
    },
    {
      title: "Blog Platform",
      description: "A blogging platform for publishing articles.",
      details:
        "Developed a blog platform where users can register, write, edit, and delete their posts. Included features for categorizing articles, commenting, and liking. Focused on SEO optimization and clean code structure for easy maintenance.",
    },
    {
      title: "Task Management App",
      description: "A productivity tool for managing tasks.",
      details:
        "Built a task manager with to-do lists, reminders, and due dates. Integrated priority setting, filtering, and sorting options. Used local storage for offline support, and the app adapts responsively for both desktop and mobile.",
    },
    {
      title: "Chat Application",
      description: "A real-time chat application using WebSocket.",
      details:
        "Implemented a live chat app with features like group chat, typing indicators, and message notifications. Employed WebSocket for real-time communication, and Firebase for message storage and user authentication.",
    },
    {
      title: "Expense Tracker",
      description: "An app to track expenses and manage budgets.",
      details:
        "Created an app to log expenses and track budgets. Implemented features for adding, editing, and deleting expenses with category-based filtering. Designed a dashboard displaying spending patterns through visual charts.",
    },
    {
      title: "Portfolio Analysis Tool",
      description: "A tool for tracking and analyzing investment portfolios.",
      details:
        "Developed a tool to monitor investment portfolios with real-time stock price updates. Integrated third-party API for data fetching and created a dashboard showing performance trends. Used data visualization libraries for insights.",
    },
    {
      title: "Online Quiz App",
      description: "An online quiz platform with timed tests.",
      details:
        "Built a quiz app with a timer, multiple question categories, and scoring system. Enabled user registration and history tracking. Focused on UX with random question shuffling and smooth animations.",
    },
    {
      title: "Recipe App",
      description: "A recipe app for browsing and saving recipes.",
      details:
        "Designed an app for recipe discovery with search, save, and filter options. Added functionality for users to upload their recipes. Integrated API for ingredient lookup, making it easy for users to find recipe suggestions.",
    },
    {
      title: "Fitness Tracker",
      description: "An app to log workouts and track fitness goals.",
      details:
        "Developed a fitness tracker with logging, goal setting, and progress monitoring features. Users can track exercises, calories, and weekly goals. Integrated charts for visual progress and used Firebase for data management.",
    },
    {
      title: "Event Management System",
      description: "A system for managing events and registrations.",
      details:
        "Built an event management app with features for creating events, managing attendees, and sending notifications. Incorporated admin access for event management and a responsive design for accessibility across devices.",
    },
  ];

  const PageContainer = styled.div`
    padding: 50px;
    color: #6eacda;
    height: 78.7vh;
  `;

  const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 2vh));
    gap: 20px;
  `;

  const ProjectCard = styled.div`
    background-color: #6eacda;
    color: beige;
    padding: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  `;

  const ProjectTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 1.5rem;
  `;

  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ModalContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    text-align: center;
  `;

  const CloseButton = styled.button`
    background-color: #ff6363;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff4949;
    }
  `;

  return (
    <PageContainer>
      <h1 color="#6EACDA">Projects</h1>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} onClick={() => setSelectedProject(project)}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectGrid>

      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <CloseButton onClick={() => setSelectedProject(null)}>
              Close
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}
