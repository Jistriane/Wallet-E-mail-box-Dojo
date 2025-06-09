# MultiversX Wallet

Uma carteira web para a rede MultiversX (antiga Elrond) com sistema de e-mail descentralizado integrado via smart contract.

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
- ethers.js
- MultiversX SDK
- Solidity (contrato inteligente)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/multiversx-wallet.git
cd multiversx-wallet
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
VITE_MULTIVERSX_API_URL=https://api.multiversx.com
VITE_NETWORK=devnet
VITE_CHAIN_ID=D
VITE_CONTRACT_ADDRESS=SEU_CONTRATO
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## Como usar
- Instale a extensão MultiversX DeFi Wallet no navegador
- Conecte sua carteira pela interface
- Use o sistema de e-mail para enviar, receber, marcar como lido, excluir e-mails e gerenciar spam
- Consulte o saldo, envie EGLD e assine mensagens pela interface da carteira

## Estrutura do Projeto
- `src/components/Wallet.tsx`: Interface da carteira MultiversX
- `src/components/EmailSystem.tsx`: Interface do sistema de e-mail Web3
- `contracts/email-contract/`: Contrato inteligente de e-mail
- `src/services/`: Serviços de integração com blockchain e carteira

## Licença

MIT

## Prints e Fluxos do Sistema

### 1. Conexão com a Carteira MultiversX

![Tela de conexão da carteira](prints/conexao-carteira.png)

Ao acessar a aplicação, o usuário é recebido com a tela principal da MultiversX Wallet. Nela, é possível:
- **Conectar Carteira:** O botão "Conectar Carteira" inicia o processo de conexão com a extensão MultiversX DeFi Wallet instalada no navegador. Ao clicar, a extensão é aberta (lado direito da imagem), permitindo ao usuário escolher a conta e autorizar a conexão com o site.
- **Criar Nova Carteira:** Caso o usuário não possua uma carteira, pode criar uma nova diretamente pela interface.
- **Importar de Seed Phrase:** Usuários que já possuem uma seed phrase podem importar sua carteira preenchendo o campo correspondente e clicando em "Importar".
- **Status do Sistema de E-mail:** Abaixo, o sistema de e-mail descentralizado exibe o status de carregamento e conexão com a carteira.

Dicas de uso:
- Certifique-se de que a extensão MultiversX DeFi Wallet está instalada e desbloqueada no navegador.
- Se a extensão não estiver instalada, um link é exibido para facilitar a instalação.
- Após conectar, o endereço da carteira será exibido e as funcionalidades de e-mail e transações serão liberadas.

---

### 2. Criação da Carteira e Exibição da Seed Phrase

![Criação da carteira e seed phrase](prints/criacao-carteira.png)

Após clicar em "Criar Nova Carteira", a aplicação gera automaticamente uma nova carteira MultiversX para o usuário. Na sequência, é exibida uma notificação verde com a seed phrase (frase de segurança) gerada.

O que o usuário vê/faz nesta tela:
- **Endereço da Carteira:** O endereço público da carteira recém-criada é exibido para referência e uso em transações.
- **Seed Phrase:** A seed phrase é apresentada em destaque na notificação. IMPORTANTE: O usuário deve anotar e guardar essa frase em local seguro, pois ela é a única forma de recuperar o acesso à carteira.
- **Verificar Saldo:** O usuário pode consultar o saldo da carteira recém-criada.
- **Enviar EGLD:** É possível enviar EGLD para outros endereços diretamente da interface.
- **Importar de Seed Phrase:** Caso já possua uma seed phrase, o usuário pode importar uma carteira existente.

Dicas de uso:
- Nunca compartilhe sua seed phrase com terceiros.
- Guarde a seed phrase em local seguro e offline.
- Se perder a seed phrase, não será possível recuperar a carteira ou os fundos.

---

### 3. Carteira Conectada

![Carteira conectada](prints/carteira-conectada.png)

Após a conexão bem-sucedida com a extensão MultiversX DeFi Wallet, a interface exibe o endereço da carteira conectada e libera todas as funcionalidades da aplicação.

O que o usuário vê/faz nesta tela:
- **Endereço da Carteira:** O endereço público da carteira conectada aparece no topo, facilitando a cópia e o uso em transações.
- **Desconectar Carteira:** O botão permite ao usuário desconectar a carteira da aplicação a qualquer momento.
- **Criar Nova Carteira / Importar Seed Phrase:** Mesmo com uma carteira conectada, o usuário pode criar uma nova ou importar outra carteira usando uma seed phrase.
- **Sistema de E-mail Descentralizado:** Abaixo, o sistema de e-mail descentralizado exibe as abas de navegação: Caixa de Entrada, Enviados, Novo E-mail e Spam.
- **Conectar Carteira (E-mail):** Caso o sistema de e-mail precise de uma conexão adicional, o botão "Conectar Carteira" estará disponível.

Dicas de uso:
- Sempre confira o endereço exibido antes de realizar transações.
- Para alternar entre carteiras, basta desconectar e conectar novamente com outra conta na extensão.
- O sistema de e-mail só funciona com a carteira conectada.

---

### 4. Área de E-mail – Envio de Novo E-mail

![Área de envio de e-mail](prints/area-email.png)

Na aba "Novo E-mail" do Sistema de E-mail Descentralizado, o usuário pode enviar mensagens seguras e imutáveis para outros endereços MultiversX diretamente pela blockchain.

O que o usuário vê/faz nesta tela:
- **Campos de envio:**
  - **Endereço do destinatário:** Insira o endereço MultiversX para o qual deseja enviar o e-mail.
  - **Assunto:** Defina o título da mensagem.
  - **Conteúdo do e-mail:** Escreva o corpo da mensagem.
- **Botão "Enviar E-mail":** Após preencher os campos, clique para enviar o e-mail. A mensagem será registrada no smart contract e ficará disponível na caixa de entrada do destinatário.
- **Abas de navegação:** O usuário pode alternar entre Caixa de Entrada, Enviados, Novo E-mail e Spam para gerenciar todas as mensagens.
- **Status da carteira:** O rodapé exibe o endereço da carteira conectada e permite desconectar rapidamente.

Dicas de uso:
- Certifique-se de que o endereço do destinatário está correto antes de enviar.
- O envio de e-mails é registrado na blockchain, tornando o conteúdo imutável e auditável.
- Utilize a aba "Enviados" para acompanhar as mensagens já enviadas.