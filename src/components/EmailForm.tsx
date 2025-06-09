import React, { useState } from 'react';
import {
  VStack,
  Input,
  Textarea,
  Button,
  useToast
} from '@chakra-ui/react';

const EmailForm: React.FC = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!to.trim() || !subject.trim() || !content.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // TODO: Implementar lógica de envio
    toast({
      title: "Sucesso",
      description: "E-mail enviado com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Limpar formulário
    setTo('');
    setSubject('');
    setContent('');
  };

  return (
    <VStack
      as="form"
      spacing={4}
      w="full"
      maxW="lg"
      mx="auto"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Endereço do destinatário"
        value={to}
        onChange={e => setTo(e.target.value)}
        size="lg"
      />
      <Input
        placeholder="Assunto"
        value={subject}
        onChange={e => setSubject(e.target.value)}
        size="lg"
      />
      <Textarea
        placeholder="Conteúdo do e-mail"
        value={content}
        onChange={e => setContent(e.target.value)}
        size="lg"
        minH="100px"
      />
      <Button
        type="submit"
        colorScheme="primary"
        size="lg"
        w="full"
      >
        Enviar E-mail
      </Button>
    </VStack>
  );
};

export default EmailForm; 