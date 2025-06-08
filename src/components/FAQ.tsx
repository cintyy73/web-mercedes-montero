// import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

import {  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, } from "@chakra-ui/react";

// const faqs = [
//   { question: '¿Dónde das clases?', answer: 'Trabajo en diversas instituciones públicas y ONGs.' },
//   { question: '¿Qué tecnologías usás?', answer: 'React, TypeScript, Node.js, Python y más.' },
// ];

// export default function FAQ() {
//   return (
//     <Box as="section" py={16} px={4} maxW="4xl" mx="auto">
//       <Heading size="lg" mb={6}>Preguntas Frecuentes</Heading>
//       <Accordion allowToggle>
//         {faqs.map((faq, idx) => (
//           <AccordionItem key={idx}>
//             <h2>
//               <AccordionButton>
//                 <Box flex="1" textAlign="left">{faq.question}</Box>
//                 <AccordionIcon />
//               </AccordionButton>
//             </h2>
//             <AccordionPanel>{faq.answer}</AccordionPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </Box>
//   );
// }
// 
// import {



const FAQ = () => {
  return (
    <Box as="section"  minH='100vh' py={10} px={4}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                ¿Qué servicios ofrece Mercedes Montero?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Ofrecemos asesoría legal en derechos de personas con discapacidad, derecho civil, laboral y familiar.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                ¿Atiende casos de pensiones por discapacidad?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Sí, brindamos acompañamiento completo en trámites para obtener pensiones por discapacidad ante organismos estatales.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                ¿Cómo puedo solicitar una consulta legal?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Puedes agendar una cita completando el formulario de contacto o escribiendo directamente por WhatsApp.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                ¿Ofrece asesoramiento a organizaciones o instituciones?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Sí, brindamos capacitaciones y asesoría legal a instituciones que trabajan con personas con discapacidad.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                ¿Mercedes Montero representa casos de discriminación?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Sí, intervenimos en casos legales de discriminación por motivos de discapacidad, tanto en el ámbito laboral como educativo y social.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
