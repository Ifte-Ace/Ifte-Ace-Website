import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from '../images/Iftepf.PNG';

const greeting = "Hi nice to meet you, I'm Ifte and welcome to my website";
const bio1 = "Software Engineering and IT Enthusianist";
const bio2 = "Currently a Software Developer Inern at HYEL Inc";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#eea29a"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Profile"
        src={profileImage}
      />
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
