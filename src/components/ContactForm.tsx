import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, useToast } from '@chakra-ui/react';
import { useState } from 'react';

export default function ContactForm() {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('https://eo3zszqmp3c2j2m.m.pipedream.net', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });
      toast({ title: 'Mensaje enviado.', status: 'success' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      toast({ title: 'Error al enviar.', status: 'error' });
      console.log(err)
    }
  };

  return (
    <Box  as="section" py={16} px={4} maxW="lg" mx="auto" minH='100vh'>
      <Heading size="lg" mb={6}>Contacto</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input name="name" value={form.name} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" value={form.email} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel>Mensaje</FormLabel>
          <Textarea name="message" value={form.message} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="yellow">
          Enviar
        </Button>
      </form>
    </Box>
  );
}
// import { Box, Button, Input, Textarea } from '@chakra-ui/react';
// import { useFormStore } from '../store/useFormStore';

// export default function ContactForm() {
//   const { name, email, message, setField } = useFormStore();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     await fetch('https://eopx6mfy27k2d10.m.pipedream.net', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, email, message }),
//     });
//   };

//   return (
//     <Box as="form" onSubmit={handleSubmit} maxW="400px" mx="auto" p={4}>
//       <Input placeholder="Nombre" mb={3} value={name} onChange={(e) => setField('name', e.target.value)} />
//       <Input placeholder="Email" mb={3} value={email} onChange={(e) => setField('email', e.target.value)} />
//       <Textarea placeholder="Mensaje" mb={3} value={message} onChange={(e) => setField('message', e.target.value)} />
//       <Button type="submit" colorScheme="purple">Enviar</Button>
//     </Box>
//   );
// }
