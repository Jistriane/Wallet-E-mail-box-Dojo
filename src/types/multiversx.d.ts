interface MultiversXProvider {
  // Adicione aqui os tipos específicos da extensão MultiversX
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  getAddress(): Promise<string>;
  signTransaction(transaction: any): Promise<any>;
  signMessage(message: string): Promise<string>;
}

declare global {
  interface Window {
    MultiversX?: MultiversXProvider;
  }
}

export {}; 