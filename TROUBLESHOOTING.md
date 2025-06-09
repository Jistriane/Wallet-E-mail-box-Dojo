# Guia de Troubleshooting

## Visão Geral

Este documento descreve soluções para problemas comuns encontrados durante o desenvolvimento e uso do sistema.

## Problemas de Instalação

### Dependências
```bash
# Erro: Cannot find module
npm install

# Erro: Version conflict
npm install --force

# Erro: Peer dependencies
npm install --legacy-peer-deps
```

### Variáveis de Ambiente
```bash
# Erro: Missing environment variables
cp .env-example .env
# Edite .env com suas configurações
```

## Problemas de Build

### Frontend
```bash
# Erro: Module not found
npm run build -- --verbose

# Erro: Type errors
npm run type-check

# Erro: Lint errors
npm run lint -- --fix
```

### Smart Contracts
```bash
# Erro: Compilation failed
npm run compile:contracts -- --verbose

# Erro: Gas estimation failed
npm run deploy:contracts -- --network devnet
```

## Problemas de Runtime

### Frontend
- **Erro: White screen**
  - Verifique console
  - Limpe cache
  - Verifique rotas

- **Erro: Component not rendering**
  - Verifique props
  - Verifique estado
  - Verifique condições

- **Erro: API calls failing**
  - Verifique CORS
  - Verifique autenticação
  - Verifique endpoints

### Smart Contracts
- **Erro: Transaction failed**
  - Verifique gas
  - Verifique nonce
  - Verifique permissões

- **Erro: State not updating**
  - Verifique eventos
  - Verifique transações
  - Verifique estado

## Problemas de Performance

### Frontend
- **Problema: Slow rendering**
  - Use memoização
  - Otimize re-renders
  - Use lazy loading

- **Problema: High memory usage**
  - Limpe event listeners
  - Use weak references
  - Otimize imagens

### Smart Contracts
- **Problema: High gas costs**
  - Otimize storage
  - Use batch operations
  - Reduza complexidade

## Problemas de Segurança

### Frontend
- **Problema: XSS vulnerability**
  - Sanitize input
  - Use CSP
  - Escape output

- **Problema: CSRF attack**
  - Use tokens
  - Verifique origem
  - Use SameSite cookies

### Smart Contracts
- **Problema: Reentrancy**
  - Use checks-effects-interactions
  - Use ReentrancyGuard
  - Verifique callbacks

- **Problema: Overflow**
  - Use SafeMath
  - Verifique limites
  - Use uint256

## Problemas de Testes

### Unit Tests
```bash
# Erro: Test failing
npm run test -- --verbose

# Erro: Coverage low
npm run test:coverage
```

### Integration Tests
```bash
# Erro: Network issues
npm run test:integration -- --network devnet

# Erro: State issues
npm run test:integration -- --reset
```

## Problemas de Deploy

### Frontend
```bash
# Erro: Build failed
npm run build -- --verbose

# Erro: Deploy failed
npm run deploy -- --verbose
```

### Smart Contracts
```bash
# Erro: Contract deployment failed
npm run deploy:contracts -- --network mainnet

# Erro: Verification failed
npm run verify:contracts -- --network mainnet
```

## Problemas de Monitoramento

### Logs
```bash
# Erro: Missing logs
npm run logs -- --verbose

# Erro: Log rotation
npm run logs -- --rotate
```

### Metrics
```bash
# Erro: Metrics not updating
npm run metrics -- --reset

# Erro: High resource usage
npm run metrics -- --analyze
```

## Problemas de Integração

### API
- **Problema: CORS errors**
  - Verifique headers
  - Verifique origens
  - Verifique métodos

- **Problema: Authentication**
  - Verifique tokens
  - Verifique expiração
  - Verifique permissões

### Blockchain
- **Problema: Network issues**
  - Verifique conexão
  - Verifique RPC
  - Verifique gas

- **Problema: Contract interaction**
  - Verifique ABI
  - Verifique endereço
  - Verifique parâmetros

## Recursos

### Documentação
- [React Troubleshooting](https://reactjs.org/docs/error-boundaries.html)
- [TypeScript Errors](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [Solidity Errors](https://docs.soliditylang.org/en/latest/control-structures.html#error-handling)
- [MultiversX Issues](https://docs.multiversx.com/troubleshooting)

### Ferramentas
- [React DevTools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- [Hardhat Console](https://hardhat.org/hardhat-network/reference/#console-log)
- [Ethers.js Debug](https://docs.ethers.io/v5/api/utils/logger/)
- [Chakra UI Debug](https://chakra-ui.com/docs/features/color-mode#debugging)

## Suporte

### Comunidade
- [GitHub Issues](https://github.com/seu-usuario/multiversx-wallet/issues)
- [Discord](https://discord.gg/seu-servidor)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/multiversx)

### Equipe
- Email: support@seudominio.com
- Telegram: @support_team
- Horário: 9h-18h UTC 