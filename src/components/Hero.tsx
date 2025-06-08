import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { texts } from '../utils/texts';

export default function Hero() {
  return (
    <Box
      minH='100vh'
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={4}
      bg="brand.800"
    >
      <Stack spacing={6} maxW="2xl">
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>{texts.hero.title}</Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }}>{texts.hero.subtitle}</Text>
        <Button size="lg" colorScheme="purple" alignSelf="center">
          {texts.hero.button}
        </Button>
      </Stack>
    </Box>
  );
}
