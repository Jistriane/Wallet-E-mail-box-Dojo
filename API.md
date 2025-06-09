# Guia da API

## Visão Geral

Este documento descreve a API do sistema de email descentralizado, incluindo:
- Endpoints
- Parâmetros
- Respostas
- Exemplos

## Autenticação

### Headers
```http
Authorization: Bearer <token>
Content-Type: application/json
```

### Tokens
- JWT para autenticação
- Expiração em 24 horas
- Refresh token disponível

## Endpoints

### Email

#### Enviar Email
```http
POST /api/email/send
```

**Parâmetros**
```json
{
  "to": "erd1...",
  "subject": "Assunto do email",
  "content": "Conteúdo do email",
  "attachments": []
}
```

**Resposta**
```json
{
  "success": true,
  "txHash": "0x...",
  "message": "Email enviado com sucesso"
}
```

#### Receber Emails
```http
GET /api/email/inbox
```

**Parâmetros**
```json
{
  "page": 1,
  "limit": 10,
  "filter": "unread"
}
```

**Resposta**
```json
{
  "emails": [
    {
      "id": "0x...",
      "from": "erd1...",
      "subject": "Assunto",
      "content": "Conteúdo",
      "timestamp": "2024-03-24T12:00:00Z",
      "isRead": false
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 10
}
```

### Wallet

#### Conectar Wallet
```http
POST /api/wallet/connect
```

**Parâmetros**
```json
{
  "address": "erd1..."
}
```

**Resposta**
```json
{
  "success": true,
  "token": "jwt...",
  "user": {
    "address": "erd1...",
    "balance": "1000",
    "nonce": 1
  }
}
```

#### Verificar Saldo
```http
GET /api/wallet/balance
```

**Resposta**
```json
{
  "balance": "1000",
  "currency": "EGLD"
}
```

## Smart Contract

### Funções

#### sendEmail
```solidity
function sendEmail(
    address to,
    string memory subject,
    string memory content
) public returns (bool)
```

**Parâmetros**
- `to`: Endereço do destinatário
- `subject`: Assunto do email
- `content`: Conteúdo do email

**Retorno**
- `bool`: Sucesso da operação

#### getInbox
```solidity
function getInbox(
    address user,
    uint256 page,
    uint256 limit
) public view returns (Email[] memory)
```

**Parâmetros**
- `user`: Endereço do usuário
- `page`: Número da página
- `limit`: Limite por página

**Retorno**
- `Email[]`: Lista de emails

## Eventos

### EmailSent
```solidity
event EmailSent(
    address indexed from,
    address indexed to,
    string subject,
    uint256 timestamp
);
```

### EmailReceived
```solidity
event EmailReceived(
    address indexed to,
    address indexed from,
    string subject,
    uint256 timestamp
);
```

## Códigos de Erro

### HTTP
- 200: Sucesso
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

### Smart Contract
- 1: Email inválido
- 2: Saldo insuficiente
- 3: Destinatário não encontrado
- 4: Erro de permissão

## Exemplos

### Enviar Email
```javascript
const response = await fetch('/api/email/send', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: 'erd1...',
    subject: 'Teste',
    content: 'Conteúdo de teste'
  })
});

const data = await response.json();
```

### Receber Emails
```javascript
const response = await fetch('/api/email/inbox?page=1&limit=10', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

const data = await response.json();
```

## Limites

### Rate Limiting
- 100 requisições/minuto
- 1000 requisições/hora
- 10000 requisições/dia

### Tamanho
- Email: 1MB
- Anexos: 10MB total
- Batch: 100 itens

## Segurança

### Headers
```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Content-Security-Policy: default-src 'self'
```

### Validação
- Sanitização de entrada
- Validação de endereços
- Verificação de assinatura

## Monitoramento

### Métricas
- Requisições/minuto
- Tempo de resposta
- Taxa de erro
- Uso de recursos

### Logs
- Acesso
- Erros
- Performance
- Segurança 