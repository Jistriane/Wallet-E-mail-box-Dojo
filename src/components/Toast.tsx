import React from 'react';
import {
  Box,
  Text,
  IconButton,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const bgColor = useColorModeValue(
    type === 'success' ? 'success.500' : type === 'error' ? 'error.500' : 'warning.500',
    type === 'success' ? 'success.200' : type === 'error' ? 'error.200' : 'warning.200'
  );
  const textColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      position="fixed"
      bottom={4}
      right={4}
      px={6}
      py={3}
      borderRadius="md"
      bg={bgColor}
      color={textColor}
      shadow="lg"
      zIndex={9999}
    >
      <HStack spacing={2}>
        <Text>{message}</Text>
        <IconButton
          aria-label="Fechar"
          icon={<CloseIcon />}
          size="sm"
          variant="ghost"
          color={textColor}
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={onClose}
        />
      </HStack>
    </Box>
  );
};

export default Toast; 