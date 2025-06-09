import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';

interface EmailItemProps {
  from?: string;
  subject?: string;
  content?: string;
  date?: string;
  isRead?: boolean;
}

const EmailItem: React.FC<EmailItemProps> = ({
  from = 'erd1...',
  subject = 'Exemplo',
  content = 'Conteúdo do e-mail de exemplo.',
  date = '2024-03-24',
  isRead = false
}) => {
  const borderColor = useColorModeValue('primary.500', 'primary.200');
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      bg={bgColor}
      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      transition="all 0.2s"
    >
      <VStack align="stretch" spacing={2}>
        <HStack justify="space-between" color="primary.500" fontWeight="semibold">
          <Text>De: {from}</Text>
          <Text>{date}</Text>
        </HStack>
        <Text fontWeight="semibold" color={isRead ? 'gray.500' : 'text'}>
          Assunto: {subject}
        </Text>
        <Text color={isRead ? 'gray.500' : 'text'}>
          {content}
        </Text>
      </VStack>
    </Box>
  );
};

export default EmailItem; 