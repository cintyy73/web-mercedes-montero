import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
} from '@chakra-ui/react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobremi' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  return (
    <Box as="header" py={4} px={6} bg="brand.700">
      <Flex align="center">
        <Flex align="center" gap={2}>
          <Image src="/logo.jpg" alt="Logo Mercedes Montero" boxSize="40px" />
          <Heading as="h1" size="md" color="white">
            Mercedes Montero
          </Heading>
        </Flex>
        <Spacer />
        <HStack spacing={6} as="nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              fontWeight="medium"
              color="white"
              _hover={{ textDecoration: 'underline' }}
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
