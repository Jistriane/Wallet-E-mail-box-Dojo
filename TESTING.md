# Guia de Testes

## Visão Geral

Este documento descreve a estratégia de testes do projeto, incluindo:
- Testes unitários
- Testes de integração
- Testes end-to-end
- Testes de segurança

## Estrutura de Testes

```
├── tests/
│   ├── unit/           # Testes unitários
│   ├── integration/    # Testes de integração
│   ├── e2e/           # Testes end-to-end
│   └── security/      # Testes de segurança
```

## Testes Unitários

### Frontend
```typescript
// Exemplo de teste de componente
import { render, screen } from '@testing-library/react';
import { Wallet } from '../components/Wallet';

describe('Wallet', () => {
  it('should render wallet address', () => {
    render(<Wallet address="erd1..." />);
    expect(screen.getByText(/erd1/)).toBeInTheDocument();
  });
});
```

### Smart Contracts
```solidity
// Exemplo de teste de contrato
contract EmailContractTest {
    EmailContract emailContract;
    
    function setUp() public {
        emailContract = new EmailContract();
    }
    
    function testSendEmail() public {
        emailContract.sendEmail("to", "subject", "content");
        // Assertions
    }
}
```

## Testes de Integração

### API
```typescript
// Exemplo de teste de API
describe('Email API', () => {
  it('should send email', async () => {
    const response = await api.post('/email', {
      to: 'user@example.com',
      subject: 'Test',
      content: 'Test content'
    });
    expect(response.status).toBe(200);
  });
});
```

### Smart Contracts
```solidity
// Exemplo de teste de integração
contract EmailIntegrationTest {
    function testEmailFlow() public {
        // Setup
        // Execute flow
        // Verify state
    }
}
```

## Testes End-to-End

### Cypress
```typescript
// Exemplo de teste E2E
describe('Email Flow', () => {
  it('should send and receive email', () => {
    cy.visit('/');
    cy.get('[data-testid="connect-wallet"]').click();
    cy.get('[data-testid="send-email"]').click();
    // Complete flow
  });
});
```

## Testes de Segurança

### Smart Contracts
- Testes de reentrância
- Testes de overflow
- Testes de acesso
- Testes de estado

### Frontend
- Testes XSS
- Testes CSRF
- Testes de validação
- Testes de sanitização

## Cobertura de Testes

### Métricas
- Cobertura de código > 80%
- Cobertura de branches > 70%
- Cobertura de funções > 90%

### Relatórios
```bash
npm run test:coverage
```

## Executando Testes

### Comandos
```bash
# Testes unitários
npm run test:unit

# Testes de integração
npm run test:integration

# Testes E2E
npm run test:e2e

# Todos os testes
npm run test
```

### CI/CD
```yaml
# Exemplo de pipeline
test:
  stage: test
  script:
    - npm run test:unit
    - npm run test:integration
    - npm run test:e2e
```

## Boas Práticas

### Testes Unitários
- Teste uma coisa por vez
- Use descrições claras
- Mantenha testes independentes
- Use mocks apropriadamente

### Testes de Integração
- Teste fluxos completos
- Verifique estados
- Limpe dados entre testes
- Use fixtures

### Testes E2E
- Teste jornadas do usuário
- Verifique UI/UX
- Teste em diferentes dispositivos
- Mantenha testes estáveis

## Debugging

### Frontend
- React DevTools
- Redux DevTools
- Console logs
- Network tab

### Smart Contracts
- Hardhat console
- Event logs
- State inspection
- Gas profiling

## Manutenção

### Atualizações
- Mantenha dependências atualizadas
- Atualize testes quando necessário
- Revise cobertura regularmente
- Documente mudanças

### Troubleshooting
- Verifique logs
- Reproduza problemas
- Documente soluções
- Atualize documentação 