import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  useClipboard,
  useToast,
  Box,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';

interface SeedPhraseModalProps {
  seed: string;
  onClose: () => void;
}

const SeedPhraseModal: React.FC<SeedPhraseModalProps> = ({ seed, onClose }) => {
  const { hasCopied, onCopy } = useClipboard(seed);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Copiado!",
      description: "Seed phrase copiada para a área de transferência",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="background" color="text">
        <ModalHeader color="success.500">
          Carteira criada com sucesso!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold" mb={2}>
              Sua seed phrase é:
            </Text>
            <InputGroup size="lg">
              <Input
                value={seed}
                isReadOnly
                bg="gray.700"
                color="white"
                borderColor="gray.600"
                _hover={{ borderColor: "gray.500" }}
                _focus={{ borderColor: "primary.500" }}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleCopy}
                  colorScheme="primary"
                  mr={2}
                >
                  {hasCopied ? 'Copiado!' : 'Copiar'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text color="error.500" fontWeight="semibold" fontSize="sm">
              IMPORTANTE: Guarde essa seed phrase em um lugar seguro! Ela é a única forma de recuperar sua carteira.
            </Text>
            <Button
              variant="outline"
              colorScheme="primary"
              onClick={onClose}
              size="lg"
              mt={4}
            >
              Fechar
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SeedPhraseModal; 