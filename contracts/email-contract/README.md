# Contrato de E-mail Web3

Um smart contract em Rust para armazenar e gerenciar e-mails na blockchain.

## Funcionalidades

- Envio de e-mails entre endereços Ethereum
- Armazenamento de e-mails na blockchain
- Marcação de e-mails como lidos
- Exclusão de e-mails
- Visualização de caixa de entrada e e-mails enviados
- Sistema de proteção contra spam
- Verificação de integridade dos e-mails
- Limite de e-mails por usuário
- Interface moderna e intuitiva

## Requisitos

- Rust 1.70+
- ink! CLI
- Substrate Node Template

## Instalação

1. Instale o Rust e o ink! CLI:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install --locked cargo-contract
```

2. Clone o repositório e entre no diretório do contrato:
```bash
cd contracts/email-contract
```

3. Compile o contrato:
```bash
cargo contract build
```

4. Faça o deploy do contrato:
```bash
cargo contract deploy
```

## Estrutura do Contrato

O contrato possui as seguintes estruturas principais:

- `Email`: Estrutura que representa um e-mail
  - `from`: Endereço do remetente
  - `to`: Endereço do destinatário
  - `subject`: Assunto do e-mail
  - `content`: Conteúdo do e-mail
  - `timestamp`: Data e hora do envio
  - `read`: Status de leitura
  - `encrypted`: Status de criptografia
  - `hash`: Hash do conteúdo para verificação de integridade

### Funções do Contrato

- `new()`: Construtor do contrato
- `send_email(to, subject, content)`: Envia um novo e-mail
- `get_inbox(account)`: Retorna a caixa de entrada de um endereço
- `get_sent(account)`: Retorna os e-mails enviados de um endereço
- `mark_as_read(index)`: Marca um e-mail como lido
- `delete_email(index)`: Remove um e-mail da caixa de entrada
- `add_to_spam(spammer)`: Adiciona um endereço à lista de spam
- `remove_from_spam(address)`: Remove um endereço da lista de spam
- `get_spam_list(account)`: Retorna a lista de spam de um endereço
- `verify_email_integrity(account, index)`: Verifica a integridade de um e-mail

## Segurança

- Todas as operações são verificadas pelo endereço do chamador
- Apenas o proprietário pode marcar seus e-mails como lidos ou excluí-los
- Os e-mails são armazenados de forma imutável na blockchain
- Sistema de proteção contra spam
- Verificação de integridade dos e-mails usando hash
- Limite de e-mails por usuário para prevenir spam

## Integração com Frontend

O contrato pode ser integrado com o frontend React usando o ethers.js. Exemplo de uso:

```typescript
const contract = new ethers.Contract(
  contractAddress,
  contractABI,
  signer
);

// Enviar e-mail
await contract.send_email(recipientAddress, subject, content);

// Buscar caixa de entrada
const inbox = await contract.get_inbox(accountAddress);

// Marcar como lido
await contract.mark_as_read(emailIndex);

// Excluir e-mail
await contract.delete_email(emailIndex);

// Gerenciar spam
await contract.add_to_spam(spammerAddress);
await contract.remove_from_spam(address);
const spamList = await contract.get_spam_list(accountAddress);

// Verificar integridade
const isValid = await contract.verify_email_integrity(accountAddress, emailIndex);
```

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue primeiro para discutir as mudanças que você gostaria de fazer.

## Licença

MIT 