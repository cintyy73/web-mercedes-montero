// src/App.tsx
import { Box } from '@chakra-ui/react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonWhatsApp from './components/ButtonWhatsApp';
import LegalAidSection from './components/LegalAidSection';

export default function App() {
  return (
    <Box bg="brand.500" color="white">
      <Header />
      <Hero />
      <About />
      <Services />
      <LegalAidSection />
      <FAQ />
      <ContactForm />
       <Footer />
      <ButtonWhatsApp  />
    </Box>
  );
}
