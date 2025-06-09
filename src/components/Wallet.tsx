import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  Input,
  VStack,
  HStack,
  useToast
} from '@chakra-ui/react';

interface WalletProps {
  onConnect: (address: string) => void;
  onDisconnect: () => void;
  address: string | null;
  balance: string;
  onCreateWallet: () => void;
  onImportWallet: (seed: string) => void;
  showSeedPhrase: () => void;
}

const Wallet: React.FC<WalletProps> = ({
  onConnect,
  onDisconnect,
  address,
  balance,
  onCreateWallet,
  onImportWallet,
  showSeedPhrase
}) => {
  const [seedInput, setSeedInput] = useState('');
  const toast = useToast();

  const handleImportWallet = () => {
    if (!seedInput.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira uma seed phrase válida",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onImportWallet(seedInput);
  };

  return (
    <Box w="full" maxW="xl" mx="auto" mt={10}>
      <Card>
        <CardBody>
          <VStack spacing={6} align="stretch">
            <Heading as="h1" size="xl" textAlign="center" color="primary">
              MultiversX Wallet
            </Heading>

            {address ? (
              <>
                <Text fontSize="lg">
                  Endereço: <Text as="span" fontFamily="mono">{address}</Text>
                </Text>
                <Button
                  colorScheme="primary"
                  onClick={onDisconnect}
                  size="lg"
                >
                  Desconectar Carteira
                </Button>
                <Text fontSize="lg">
                  Saldo: <Text as="span" fontWeight="semibold">{balance} EGLD</Text>
                </Text>
              </>
            ) : (
              <>
                <Button
                  colorScheme="primary"
                  onClick={() => onConnect('')}
                  size="lg"
                >
                  Conectar Carteira
                </Button>
                <Button
                  colorScheme="secondary"
                  onClick={onCreateWallet}
                  size="lg"
                >
                  Criar Nova Carteira
                </Button>
                <VStack spacing={4} align="stretch">
                  <Text>Importar de Seed Phrase:</Text>
                  <Input
                    placeholder="Digite sua seed phrase (12-24 palavras)"
                    value={seedInput}
                    onChange={e => setSeedInput(e.target.value)}
                    size="lg"
                  />
                  <Button
                    colorScheme="primary"
                    onClick={handleImportWallet}
                    size="lg"
                  >
                    Importar
                  </Button>
                </VStack>
              </>
            )}
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Wallet; 