import { Box, Icon } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ButtonWhatsApp() {
  return (
    <Box
      as="a"
      href="https://wa.me/5491112345678" // <-- reemplazá con tu número
      position="fixed"
      bottom="4"
      right="4"
      bg="accent.500"
      color="white"
      borderRadius="full"
      w="14"
      h="14"
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
      zIndex="overlay"
      cursor="pointer"
      _hover={{ opacity: 0.9 }}
    >
      <Icon as={FaWhatsapp} boxSize={6} />
    </Box>
  );
}
