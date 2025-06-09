import React from 'react';
import { HStack, Button } from '@chakra-ui/react';

interface EmailTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const EmailTabs: React.FC<EmailTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <HStack spacing={0} w="full">
      <Button
        flex={1}
        variant={activeTab === 'inbox' ? 'solid' : 'ghost'}
        colorScheme="primary"
        onClick={() => setActiveTab('inbox')}
        borderTopRadius="md"
        borderBottomRadius={0}
        borderBottom={activeTab !== 'inbox' ? '2px solid' : 'none'}
        borderColor="primary"
      >
        Caixa de Entrada
      </Button>
      <Button
        flex={1}
        variant={activeTab === 'enviados' ? 'solid' : 'ghost'}
        colorScheme="primary"
        onClick={() => setActiveTab('enviados')}
        borderTopRadius="md"
        borderBottomRadius={0}
        borderBottom={activeTab !== 'enviados' ? '2px solid' : 'none'}
        borderColor="primary"
      >
        Enviados
      </Button>
      <Button
        flex={1}
        variant={activeTab === 'novo' ? 'solid' : 'ghost'}
        colorScheme="primary"
        onClick={() => setActiveTab('novo')}
        borderTopRadius="md"
        borderBottomRadius={0}
        borderBottom={activeTab !== 'novo' ? '2px solid' : 'none'}
        borderColor="primary"
      >
        Novo E-mail
      </Button>
      <Button
        flex={1}
        variant={activeTab === 'spam' ? 'solid' : 'ghost'}
        colorScheme="primary"
        onClick={() => setActiveTab('spam')}
        borderTopRadius="md"
        borderBottomRadius={0}
        borderBottom={activeTab !== 'spam' ? '2px solid' : 'none'}
        borderColor="primary"
      >
        Spam
      </Button>
    </HStack>
  );
};

export default EmailTabs; 