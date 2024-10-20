import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const ContactCard = () => {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#034101"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact Me
        </Heading>
        <Box p={6} rounded="md" w="100%" bg="white" color="black" shadow="md">
          <VStack alignItems="flex-start" spacing={4}>
            <Text fontSize="xl">
              <strong>Name:</strong> John Doe
            </Text>
            <Text fontSize="xl">
              <strong>Email:</strong> john.doe@example.com
            </Text>
            <Text fontSize="xl">
              <strong>Phone:</strong> +1 (123) 456-7890
            </Text>
            <Text fontSize="lg" pt={4}>
              Feel free to reach out to me regarding freelance projects, open source consultancy sessions, or any other inquiries. I’m always happy to connect and collaborate!
            </Text>
          </VStack>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactCard;
