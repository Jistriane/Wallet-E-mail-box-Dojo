import React, { useState, useEffect } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Wallet from './components/Wallet';
import EmailSystem from './components/EmailSystem';
import SeedPhraseModal from './components/SeedPhraseModal';
import Loader from './components/Loader';
import Toast from './components/Toast';
import { chakraTheme } from './theme/chakraTheme';
import './styles/index.css';

const App: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');
  const [seedPhrase, setSeedPhrase] = useState('');
  const [showSeed, setShowSeed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error' | 'warning'} | null>(null);

  // Simular atualização do saldo
  useEffect(() => {
    if (address) {
      // Aqui você deve implementar a chamada real à API do MultiversX
      // Por enquanto, vamos simular um saldo
      const mockBalance = '1.234567';
      setBalance(mockBalance);
    } else {
      setBalance('0');
    }
  }, [address]);

  // Handlers fictícios para exemplo
  const handleConnect = () => {
    setLoading(true);
    // Simular delay de conexão
    setTimeout(() => {
      setAddress('erd1...982m');
      setLoading(false);
      setToast({message: 'Carteira conectada com sucesso!', type: 'success'});
    }, 1000);
  };

  const handleDisconnect = () => {
    setAddress(null);
    setBalance('0');
    setToast({message: 'Carteira desconectada', type: 'warning'});
  };

  const handleCreateWallet = () => {
    setLoading(true);
    // Simular delay de criação
    setTimeout(() => {
      setSeedPhrase('merit hospital question ... liar');
      setShowSeed(true);
      setAddress('erd1...982m');
      setLoading(false);
      setToast({message: 'Carteira criada com sucesso!', type: 'success'});
    }, 1000);
  };

  const handleImportWallet = (seed: string) => {
    setLoading(true);
    // Simular delay de importação
    setTimeout(() => {
      setSeedPhrase(seed);
      setShowSeed(true);
      setAddress('erd1...982m');
      setLoading(false);
      setToast({message: 'Carteira importada com sucesso!', type: 'success'});
    }, 1000);
  };

  return (
    <ChakraProvider theme={chakraTheme}>
      <CSSReset />
      <div className="min-h-screen bg-background text-text">
        {loading && <Loader />}
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <Wallet
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
          address={address}
          balance={balance}
          onCreateWallet={handleCreateWallet}
          onImportWallet={handleImportWallet}
          showSeedPhrase={() => setShowSeed(true)}
        />
        {address && <EmailSystem />}
        {showSeed && <SeedPhraseModal seed={seedPhrase} onClose={() => setShowSeed(false)} />}
      </div>
    </ChakraProvider>
  );
};

export default App; 