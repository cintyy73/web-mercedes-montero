import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Button,
} from '@chakra-ui/react';
import {
  FaFileSignature,
  FaHandHoldingMedical,
  FaGavel,
  FaQuestionCircle,
} from 'react-icons/fa';

export default function LegalAidSection() {
  return (
    <Box py={20} px={6} bg="brand.100" color="text.dark">
      {/* Título principal */}
      <VStack spacing={6} textAlign="center" mb={16}>
        <Heading size="xl" color="brand.800">
          ¿Tu obra social o prepaga se niega a cubrir un tratamiento?
        </Heading>
        <Text fontSize="lg" maxW="3xl">
          No estás sola. Te acompaño legalmente para garantizar el acceso a tus derechos en salud, fertilidad y discapacidad.
        </Text>
      </VStack>

      {/* Grid de pasos legales */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={20}>
        {[
          {
            icon: FaFileSignature,
            title: '1. Reclamo administrativo',
            text: 'Presentamos la solicitud formal ante la obra social o prepaga.',
          },
          {
            icon: FaHandHoldingMedical,
            title: '2. Documentación médica',
            text: 'Reunimos evidencia clínica para respaldar tu reclamo.',
          },
          {
            icon: FaGavel,
            title: '3. Acción judicial',
            text: 'Si es necesario, iniciamos acciones legales urgentes.',
          },
        ].map((step, i) => (
          <Box
            key={i}
            p={6}
            bg="white"
            borderRadius="2xl"
            shadow="md"
            textAlign="center"
            transition="all 0.3s"
            _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
          >
            <Icon as={step.icon} boxSize={10} color="accent.500" mb={4} />
            <Heading size="md" mb={2}>{step.title}</Heading>
            <Text>{step.text}</Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Preguntas frecuentes */}
      <VStack spacing={10} align="stretch" maxW="4xl" mx="auto" mb={20}>
        <Heading size="lg" textAlign="center" color="brand.800">
          Preguntas Frecuentes
        </Heading>

        {[
          {
            q: '¿Puedo acceder si soy soltera o estoy en una pareja del mismo sexo?',
            a: 'Sí. La ley 26.862 garantiza el acceso sin discriminación alguna.',
          },
          {
            q: '¿Qué hacer si niegan la cobertura?',
            a: 'Se presenta primero un reclamo administrativo. Si no hay respuesta, iniciamos una acción judicial.',
          },
          {
            q: '¿Qué cubre la ley de fertilidad?',
            a: 'Diagnóstico, tratamientos, procedimientos, consultas médicas y la medicación con cobertura total.',
          },
        ].map((item, i) => (
          <Box key={i} p={6} bg="white" borderRadius="xl" shadow="sm">
            <Text fontWeight="bold" mb={2}>
              <Icon as={FaQuestionCircle} color="accent.500" mr={2} />
              {item.q}
            </Text>
            <Text>{item.a}</Text>
          </Box>
        ))}
      </VStack>

      {/* CTA final */}
      <Box
        bg="brand.800"
        py={10}
        px={6}
        textAlign="center"
        borderRadius="xl"
        maxW="3xl"
        mx="auto"
        color="text.light"
      >
        <Heading size="md" mb={4}>
          ¿Querés que evalúe tu caso?
        </Heading>
        <Text fontSize="md" mb={6}>
          Contactame por WhatsApp o coordinemos una entrevista inicial gratuita.
        </Text>
        <Button
          size="lg"
          bg="accent.500"
          color="white"
          _hover={{ opacity: 0.9 }}
        >
          Escribime ahora
        </Button>
      </Box>
    </Box>
  );
}
