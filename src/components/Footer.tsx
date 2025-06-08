import {
  Box,
  Link,
  IconButton,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="brand.700" color="text.light" py={8} px={4}>
      <VStack spacing={4} textAlign="center">
        {/* Redes Sociales */}
        <HStack spacing={4}>
          <SocialIcon href="https://facebook.com/tuPerfil" label="Facebook" icon={FaFacebookF} />
          <SocialIcon href="https://twitter.com/tuPerfil" label="Twitter" icon={FaTwitter} />
          <SocialIcon href="https://instagram.com/tuPerfil" label="Instagram" icon={FaInstagram} />
          <SocialIcon href="https://linkedin.com/in/tuPerfil" label="LinkedIn" icon={FaLinkedinIn} />
          <SocialIcon href="mailto:tucorreo@ejemplo.com" label="Email" icon={FaEnvelope} />
        </HStack>

        {/* Dirección */}
        <Text>Dirección: Calle Falsa 123, Ciudad, País</Text>

        {/* Navegación */}
        <HStack spacing={6}>
          <Link href="#home" _hover={{ textDecoration: 'underline', color: 'accent.500' }}>
            Inicio
          </Link>
          <Link href="#about" _hover={{ textDecoration: 'underline', color: 'accent.500' }}>
            Sobre mí
          </Link>
          <Link href="#services" _hover={{ textDecoration: 'underline', color: 'accent.500' }}>
            Servicios
          </Link>
          <Link href="#contact" _hover={{ textDecoration: 'underline', color: 'accent.500' }}>
            Contacto
          </Link>
        </HStack>

        {/* Copyright */}
        <Text fontSize="sm" color="whiteAlpha.700">
          © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
        </Text>
      </VStack>
    </Box>
  );
};

const SocialIcon = ({ href, label, icon }: { href: string; label: string; icon: IconType }) => (
  <IconButton
    as="a"
    href={href}
    aria-label={label}
    icon={<Box as={icon} />}
    variant="ghost"
    color="text.light"
    _hover={{ color: 'accent.500' }}
    isRound
  />
);

export default Footer;
