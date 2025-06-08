// src/utils/texts.ts
import { FaGavel, FaBalanceScale, FaRegHandshake } from 'react-icons/fa';

export const texts = {
 
   hero: {
    title: 'Mercedes Montero',
    subtitle:
      'Abogada especializada en salud y discapacidad, migraciones y propiedad intelectual. Te ayudo a conocer y ejercer tus derechos con claridad y empatía.',
    button: 'Conocé más',
  },
  about: {
    title: 'Sobre mí',
    description: `¡Hola! Soy Mercedes Montero, abogada egresada de la Universidad de Buenos Aires (UBA) en 2021. 

Inicié mi camino profesional en el Derecho Laboral, pero una experiencia personal me llevó a especializarme en Derecho de la Salud y Discapacidad. También me he formado en Derecho Migratorio y en Propiedad Intelectual. Hoy concentro mis servicios en estas tres áreas, ofreciendo asesoramiento jurídico personalizado con una mirada empática y comprometida.`,
  },

  services: {
    title: 'Servicios',
    list: [
      {
        title: 'Derecho Civil',
        description: 'Asesoría en conflictos de familia, contratos, propiedad.',
        icon: FaGavel,
      },
      {
        title: 'Derecho Comercial',
        description: 'Constitución de sociedades, contratos mercantiles.',
        icon: FaBalanceScale,
      },
      {
        title: 'Negociaciones',
        description: 'Resolución de conflictos extrajudiciales.',
        icon: FaRegHandshake,
      },
    ],
  },
  faq: {
    title: 'Preguntas Frecuentes',
    list: [
      '¿Cuánto cuesta una consulta inicial?',
      '¿Qué documentación necesito presentar?',
      '¿Cuánto dura un juicio civil?',
    ],
  },
  contact: {
    title: 'Contacto',
    name: 'Nombre',
    email: 'Correo electrónico',
    message: 'Mensaje',
    button: 'Enviar',
  },
};
