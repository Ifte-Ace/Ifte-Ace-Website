import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Iron Man Helmet",
    description:
      "Modifying an Iron Man helmet to allow users to change the LEDs to custom colors and add additional voice commands for controlling the helmet, such as 'Jarvis, enter night vision mode.' Also modifying the speeds of the motors. This project will require developing software and integrating components to enhance the helmet's functionality and user experience.",
    getImageSrc: () => require("../images/iron.jpg"),
  },
  {
    title: "Photographer Portfolio",
    description:
      "Developing a website for a photographer/videographer to showcase their portfolio. The site will be designed to display high-quality images and videos, offering a smooth user experience that highlights their creative work. This project will focus on creating a visually appealing and functional platform for presenting artistic content",
    getImageSrc: () => require("../images/cloud.jpg"),
  },
 
];

const UpProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#030059"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="upprojects-section">
        Upcoming Projects
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

export default UpProjectsSection;
