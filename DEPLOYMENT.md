# Guia de Implantação

## Visão Geral

Este documento descreve o processo de implantação do projeto em diferentes ambientes:
- Desenvolvimento
- Homologação
- Produção

## Pré-requisitos

### Ferramentas
- Node.js >= 16
- npm >= 8
- Git
- Docker (opcional)
- MultiversX CLI

### Contas
- GitHub
- MultiversX Wallet
- Servidor de hospedagem

## Configuração de Ambiente

### Variáveis de Ambiente
```bash
# .env-dev
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_CHAIN_ID=D
NEXT_PUBLIC_CONTRACT_ADDRESS=erd1...

# .env-homolog
NEXT_PUBLIC_API_URL=https://homolog.example.com
NEXT_PUBLIC_CHAIN_ID=T
NEXT_PUBLIC_CONTRACT_ADDRESS=erd1...

# .env-prod
NEXT_PUBLIC_API_URL=https://example.com
NEXT_PUBLIC_CHAIN_ID=1
NEXT_PUBLIC_CONTRACT_ADDRESS=erd1...
```

### Smart Contracts
```bash
# Compilar contratos
npm run compile:contracts

# Implantar contratos
npm run deploy:contracts -- --network devnet
```

## Processo de Implantação

### 1. Preparação
```bash
# Atualizar dependências
npm install

# Executar testes
npm run test

# Build do projeto
npm run build
```

### 2. Implantação Frontend
```bash
# Desenvolvimento
npm run deploy:dev

# Homologação
npm run deploy:homolog

# Produção
npm run deploy:prod
```

### 3. Implantação Smart Contracts
```bash
# Desenvolvimento
npm run deploy:contracts:dev

# Homologação
npm run deploy:contracts:homolog

# Produção
npm run deploy:contracts:prod
```

## Verificação

### Frontend
- Verificar build
- Testar funcionalidades
- Verificar logs
- Monitorar performance

### Smart Contracts
- Verificar implantação
- Testar funções
- Verificar eventos
- Monitorar gas

## Rollback

### Frontend
```bash
# Reverter para versão anterior
npm run rollback:frontend -- --version v1.0.0
```

### Smart Contracts
```bash
# Reverter contrato
npm run rollback:contracts -- --version v1.0.0
```

## Monitoramento

### Métricas
- Uptime
- Performance
- Erros
- Uso de recursos

### Logs
- Frontend logs
- Contract logs
- Error logs
- Access logs

## Manutenção

### Atualizações
- Dependências
- Smart contracts
- Frontend
- Configurações

### Backup
- Código fonte
- Dados
- Configurações
- Logs

## Segurança

### SSL/TLS
- Certificados
- Configuração
- Renovação
- Monitoramento

### Firewall
- Regras
- Acesso
- Monitoramento
- Logs

## Troubleshooting

### Problemas Comuns
- Build falha
- Deploy falha
- Contrato não implantado
- Erros de conexão

### Soluções
- Verificar logs
- Reverter mudanças
- Contatar suporte
- Documentar problemas

## Recursos

### Documentação
- [MultiversX Docs](https://docs.multiversx.com)
- [React Docs](https://reactjs.org)
- [Hardhat Docs](https://hardhat.org)

### Suporte
- GitHub Issues
- Discord
- Email
- Telegram 