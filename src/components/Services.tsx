// src/components/Services.tsx
import { Box, Grid, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { texts } from '../utils/texts';

export default function Services() {
  return (
    <Box 
    minH="80vh"
     py={16} px={6}>
      <Heading mb={8} textAlign="center" fontSize="3xl">
        {texts.services.title}
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
        {texts.services.list.map((service, index) => (
          <Box
            key={index}
            bg="brand.800"
            p={6}
            borderRadius="2xl"
            textAlign="center"
            shadow="md"
            _hover={{ bg: 'brand.700' }}
          >
            <VStack spacing={4}>
              <Icon as={service.icon} boxSize={10} color="gold" />
              <Text fontSize="xl" fontWeight="bold">
                {service.title}
              </Text>
              <Text>{service.description}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
