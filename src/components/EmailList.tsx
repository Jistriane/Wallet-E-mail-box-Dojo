import React from 'react';
import { VStack, Text, Box } from '@chakra-ui/react';
import EmailItem from './EmailItem';

interface EmailListProps {
  tab: string;
}

const EmailList: React.FC<EmailListProps> = ({ tab }) => {
  // Aqui será feita a busca dos e-mails conforme a aba
  const getTabTitle = () => {
    switch (tab) {
      case 'inbox':
        return 'Caixa de Entrada';
      case 'enviados':
        return 'E-mails Enviados';
      case 'spam':
        return 'Spam';
      default:
        return '';
    }
  };

  return (
    <Box mt={4}>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>
        {getTabTitle()}
      </Text>
      <VStack spacing={2} align="stretch">
        {/* Renderizar lista de e-mails conforme a aba */}
        <EmailItem />
      </VStack>
    </Box>
  );
};

export default EmailList; 