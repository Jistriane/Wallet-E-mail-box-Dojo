import React, { useState } from 'react';
import {
  Box,
  Card,
  CardBody,
  Heading,
  VStack
} from '@chakra-ui/react';
import EmailTabs from './EmailTabs';
import EmailForm from './EmailForm';
import EmailList from './EmailList';

const EmailSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('inbox');

  return (
    <Box w="full" maxW="3xl" mx="auto" mt={10}>
      <Card>
        <CardBody>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="xl" textAlign="center" color="primary">
              Sistema de E-mail Descentralizado
            </Heading>
            <EmailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'novo' && <EmailForm />}
            {(activeTab === 'inbox' || activeTab === 'enviados' || activeTab === 'spam') && (
              <EmailList tab={activeTab} />
            )}
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default EmailSystem; 