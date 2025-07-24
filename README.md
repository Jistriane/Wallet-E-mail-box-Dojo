# MultiversX Wallet

Uma carteira web para a rede MultiversX (antiga Elrond) com sistema de e-mail descentralizado integrado via smart contract.

🌐 **[Acesse a Aplicação](https://wallet-email-box-dojo-w6un86bnb-jistrianes-projects.vercel.app)**

## Status do Deploy

O deploy foi concluído com sucesso! A aplicação está disponível nos seguintes ambientes:

### URLs de Acesso
- **Preview:** [https://wallet-email-box-dojo-iml3u25zw-jistrianes-projects.vercel.app](https://wallet-email-box-dojo-iml3u25zw-jistrianes-projects.vercel.app)
- **Produção:** [https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app](https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app)

### Configurações Automáticas
- ✅ Build automático com Node.js 18.x
- ✅ Variáveis de ambiente da testnet MultiversX
- ✅ Headers de segurança
- ✅ Otimização de cache para assets
- ✅ Configurações de rotas
- ✅ SSL/HTTPS

### Status do Projeto
- ✅ Conectado à testnet da MultiversX
- ✅ Deploy automático configurado
- ✅ HTTPS habilitado
- ✅ Cache otimizado
- ✅ Headers de segurança configurados

### Gerenciamento via Vercel
Acesse o painel de controle da Vercel para monitorar:
- 📊 Logs de build
- 📈 Analytics
- ⚙️ Configurações do projeto
- 🔐 Variáveis de ambiente
- 🌐 Domínios personalizados

**Nota:** Para futuros deploys, não é necessário fazer nada manualmente. A Vercel detecta automaticamente pushes na branch principal e realiza o deploy.

## Funcionalidades

### Carteira MultiversX
- Conectar e desconectar carteira MultiversX via extensão oficial
- Criação de nova carteira (seed phrase)
- Importação de carteira existente por seed phrase
- Exibição do endereço da carteira conectada
- Verificação de saldo em EGLD
- Envio de transações para outros endereços
- Assinatura de mensagens
- Interface responsiva e intuitiva

### Sistema de E-mail Web3
- Envio de e-mails entre endereços MultiversX
- Armazenamento de e-mails na blockchain (contrato inteligente)
- Caixa de entrada e enviados
- Marcação de e-mails como lidos
- Exclusão de e-mails
- Sistema de proteção contra spam (adicionar/remover endereços da lista de spam)
- Verificação de integridade dos e-mails (hash)
- Limite de e-mails por usuário para evitar spam
- Suporte a e-mails criptografados (campo "encrypted")
- Interface moderna para gerenciamento de e-mails

### Contrato Inteligente
- Desenvolvido em Solidity (deploy na Sepolia)
- Funções principais:
  - `send_email(to, subject, content)`: Envia e-mail
  - `get_inbox(account)`: Retorna caixa de entrada
  - `get_sent(account)`: Retorna enviados
  - `mark_as_read(index)`: Marca e-mail como lido
  - `delete_email(index)`: Remove e-mail
  - `add_to_spam(spammer)`: Adiciona endereço à lista de spam
  - `remove_from_spam(address)`: Remove endereço da lista de spam
  - `get_spam_list(account)`: Retorna lista de spam
  - `verify_email_integrity(account, index)`: Verifica integridade do e-mail

## Tecnologias Utilizadas
- React + TypeScript
- Vite
- Chakra UI
- Tailwind CSS
- ethers.js
- MultiversX SDK
- Solidity (contrato inteligente)
- Vercel (deploy)

## Instalação e Desenvolvimento Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/multiversx-wallet.git
cd multiversx-wallet
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
VITE_NETWORK=testnet
VITE_API_URL=https://testnet-api.multiversx.com
VITE_GATEWAY_URL=https://testnet-gateway.multiversx.com
VITE_EXPLORER_URL=https://testnet-explorer.multiversx.com
VITE_WALLET_CONNECT_BRIDGE=https://bridge.walletconnect.org
VITE_WALLET_CONNECT_DEEP_LINK=https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/
VITE_CHAIN_ID=T
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Deploy na Vercel

O projeto está atualmente deployado na Vercel e pode ser acessado em: [https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app](https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app)

### Deploy Automático

1. Fork o repositório no GitHub

2. Na Vercel:
   - Conecte sua conta GitHub
   - Importe o repositório
   - As configurações necessárias já estão no `vercel.json`

3. Configurações importantes:
   - O projeto usa Node.js 18.x
   - Todas as variáveis de ambiente da testnet MultiversX estão configuradas
   - Headers de segurança e cache otimizado
   - SSL/HTTPS habilitado automaticamente
   - Rotas configuradas para SPA

### Deploy Manual

Se precisar fazer um deploy manual:

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Monitoramento e Logs

- Acesse o [Dashboard da Vercel](https://vercel.com/dashboard)
- Monitore:
  - Status do deploy
  - Logs de build
  - Analytics
  - Performance
  - Erros
  - Variáveis de ambiente

## Como usar
- Instale a extensão MultiversX DeFi Wallet no navegador
- Conecte sua carteira pela interface
- Use o sistema de e-mail para enviar, receber, marcar como lido, excluir e-mails e gerenciar spam
- Consulte o saldo, envie EGLD e assine mensagens pela interface da carteira

## Estrutura do Projeto
```
src/
├── components/         # Componentes React
│   ├── Wallet.tsx     # Interface da carteira
│   ├── EmailSystem.tsx # Sistema de e-mail
│   └── ...
├── services/          # Serviços e integrações
├── styles/           # Estilos e temas
├── theme/            # Configuração do Chakra UI
└── types/            # Tipos TypeScript
```

## Prints e Fluxos do Sistema

### 1. Conexão com a Carteira MultiversX

![Tela de conexão da carteira](artifacts/prints/PRIMEIRA%20CONEXAO%20COM%20A%20CARTEIRA.png)

Ao acessar a aplicação, o usuário é recebido com a tela principal da MultiversX Wallet. Nela, é possível:
- **Conectar Carteira:** O botão "Conectar Carteira" inicia o processo de conexão com a extensão MultiversX DeFi Wallet instalada no navegador.
- **Criar Nova Carteira:** Caso o usuário não possua uma carteira, pode criar uma nova diretamente pela interface.
- **Importar de Seed Phrase:** Usuários que já possuem uma seed phrase podem importar sua carteira.

### 2. Criação da Carteira e Exibição da Seed Phrase

![Criação da carteira e seed phrase](artifacts/prints/CARTEIRA%20CRIADA%20PALAVRA%20DE%20SEGURANÇA%20.png)

### 3. Carteira Conectada

![Carteira conectada](artifacts/prints/CARTEIRA%20CONECTADA.png)

### 4. Área de E-mail

![Área de envio de e-mail](artifacts/prints/AREA%20DE%20EMAIL.png)

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Crie um Pull Request

## Segurança

- O projeto utiliza as melhores práticas de segurança
- Headers HTTP de segurança configurados
- HTTPS forçado
- Proteção contra XSS e outras vulnerabilidades
- Variáveis de ambiente seguras

## Licença

MIT