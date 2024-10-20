import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [

  {
    title: "Medical Booking Website",
    description:
      "Developed a full-stack web application that allows users to book appointments with medical professionals and leave reviews. A dynamic back-end was implemented using Python and Flask, securely integrating with a MongoDB or SQL database to store patient and appointment data. APIs were built and consumed to manage bookings, and security features such as user authentication were introduced to protect sensitive medical information",
    getImageSrc: () => require("../images/mb.PNG"),
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "Designed and developed a fully responsive website for a fictional Mediterranean restaurant, Little Lemon. A user-friendly reservation form was implemented, along with a confirmation page to display booking details. The website also integrated sections for restaurant specials, testimonials, and an about page to deliver a comprehensive user experience",
    getImageSrc: () => require("../images/ll.PNG"),
  },
  {
    title: "Cloud Computing",
    description:
      "Was project lead for a project using AWS and tools such as SaaS, API, VM, Cloud Storage, EC2, S3, NextCloud, Ubuntu, HTML, LaaS, and RDP. We succesfully created a Virtual Machine using EC2 and Microsoft Windows Server Base 2022 with Remote Desktop access. Set up cloud storage for data backup using Ubuntu and NextCloud. Additionally, designed and deployed a website about the project using S3.",
    getImageSrc: () => require("../images/cc.PNG"),
  },
  {
    title: "Arduino City",
    description:
      "Designed four different circuits using Arduino UNO3, Mega, and Nano, programmed in Arduino's C/C++-based language, and controlled by various sensors. These circuits were integrated to create a mini-city, where each circuit interacted with the others. The setup included a traffic light system, a toll booth, and two cars. The traffic light controlled vehicle flow, while the toll booth operated in sync with the cars, allowing them to pass based on signals from the sensors. The interaction between the components simulated a small-scale city environment with functional automation.",
    getImageSrc: () => require("../images/ac.PNG"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#880000"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8} 
      > 
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
