import React from 'react';
import {
  Center,
  Spinner,
  Text,
  VStack
} from '@chakra-ui/react';

const Loader: React.FC = () => (
  <Center position="fixed" top={0} left={0} right={0} bottom={0} bg="blackAlpha.700" zIndex={9999}>
    <VStack spacing={4}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
      />
      <Text color="primary.500" fontWeight="semibold">
        Carregando...
      </Text>
    </VStack>
  </Center>
);

export default Loader; 