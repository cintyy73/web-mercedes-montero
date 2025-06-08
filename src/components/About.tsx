// src/components/About.tsx
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { texts } from '../utils/texts';

export default function About() {
  return (
    <Box py={16} px={6} bg="brand.900">
      <VStack spacing={6} maxW="3xl" mx="auto">
        <Heading fontSize="3xl" textAlign="center">
          {texts.about.title}
        </Heading>
        <Text fontSize="lg" textAlign="center">
          {texts.about.description}
        </Text>
  
      </VStack>
    </Box>
  );
}
