# Arquitetura do Sistema

## Visão Geral da Arquitetura

O sistema é composto por três camadas principais:

1. **Frontend (React + TypeScript)**
   - Interface do usuário
   - Gerenciamento de estado
   - Integração com blockchain

2. **Smart Contract (Solidity)**
   - Armazenamento de e-mails
   - Lógica de negócios
   - Gerenciamento de spam

3. **Blockchain (MultiversX)**
   - Armazenamento imutável
   - Execução de transações
   - Gerenciamento de carteiras

## Diagrama de Componentes

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Frontend     │     │  Smart Contract │     │   Blockchain    │
│  (React/TS)     │◄────┤   (Solidity)    │◄────┤   (MultiversX)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Chakra UI +    │     │    Hardhat      │     │    MultiversX   │
│  Tailwind CSS   │     │  Development    │     │      SDK        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Componentes do Frontend

### 1. Wallet Component
- Gerencia conexão com carteira
- Exibe saldo e endereço
- Permite criar/importar carteiras

### 2. EmailSystem Component
- Interface de e-mail
- Gerenciamento de caixas de entrada/saída
- Envio e recebimento de e-mails

### 3. SeedPhraseModal Component
- Exibição segura da seed phrase
- Cópia para área de transferência
- Confirmação de backup

### 4. Loader Component
- Feedback visual durante operações
- Indicador de carregamento
- Overlay de bloqueio

### 5. Toast Component
- Notificações do sistema
- Feedback de ações
- Mensagens de erro/sucesso

## Smart Contract

### EmailContract.sol

#### Estrutura de Dados
```solidity
struct Email {
    address from;
    address to;
    string subject;
    string content;
    uint256 timestamp;
    bool isRead;
    bool isEncrypted;
    bytes32 hash;
}
```

#### Funções Principais
1. **Gerenciamento de E-mails**
   - `send_email`: Envio de novo e-mail
   - `get_inbox`: Recuperação da caixa de entrada
   - `get_sent`: Recuperação de e-mails enviados
   - `mark_as_read`: Marcação de e-mail como lido
   - `delete_email`: Exclusão de e-mail

2. **Proteção contra Spam**
   - `add_to_spam`: Adiciona endereço à lista de spam
   - `remove_from_spam`: Remove endereço da lista
   - `get_spam_list`: Recupera lista de spam

3. **Segurança**
   - `verify_email_integrity`: Verifica integridade do e-mail
   - `encrypt_email`: Criptografa conteúdo do e-mail
   - `decrypt_email`: Descriptografa conteúdo

## Fluxo de Dados

1. **Conexão da Carteira**
   ```
   Usuário → Frontend → MultiversX SDK → Blockchain
   ```

2. **Envio de E-mail**
   ```
   Usuário → Frontend → Smart Contract → Blockchain
   ```

3. **Recebimento de E-mail**
   ```
   Blockchain → Smart Contract → Frontend → Usuário
   ```

## Segurança

### 1. Proteção de Dados
- Seed phrases geradas localmente
- E-mails criptografados opcionalmente
- Verificação de integridade via hash

### 2. Controle de Acesso
- Verificação de propriedade de e-mails
- Proteção contra spam
- Limites de taxa de envio

### 3. Auditoria
- Logs de transações
- Histórico de alterações
- Verificação de integridade

## Escalabilidade

### 1. Frontend
- Componentização para reuso
- Lazy loading de componentes
- Cache de dados

### 2. Smart Contract
- Otimização de gas
- Paginação de resultados
- Limites de armazenamento

### 3. Blockchain
- Confirmações de transação
- Retry em caso de falha
- Monitoramento de status

## Monitoramento

### 1. Logs
- Transações blockchain
- Erros de contrato
- Ações do usuário

### 2. Métricas
- Tempo de resposta
- Uso de gas
- Taxa de sucesso

### 3. Alertas
- Falhas de transação
- Tentativas de spam
- Erros críticos

## Manutenção

### 1. Atualizações
- Versionamento de contrato
- Migração de dados
- Compatibilidade retroativa

### 2. Backup
- Seed phrases
- E-mails importantes
- Configurações

### 3. Documentação
- Código comentado
- Guias de uso
- Troubleshooting 