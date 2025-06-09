# Guia de Contribuição

## Como Contribuir

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Padrões de Código

### TypeScript/React
- Use TypeScript para todo o código
- Siga as convenções de nomenclatura do React
- Documente props e funções com JSDoc
- Mantenha componentes pequenos e focados

### Smart Contracts
- Siga os padrões de segurança do OpenZeppelin
- Documente funções com NatSpec
- Implemente testes unitários
- Use eventos para logs importantes

### Estilo de Código
- Use Prettier para formatação
- Siga as regras do ESLint
- Mantenha o código DRY
- Escreva testes para novas funcionalidades

## Processo de Desenvolvimento

1. **Planejamento**
   - Discuta mudanças em issues
   - Documente requisitos
   - Planeje testes

2. **Desenvolvimento**
   - Siga o padrão de branches
   - Mantenha commits atômicos
   - Documente mudanças

3. **Testes**
   - Escreva testes unitários
   - Execute testes de integração
   - Verifique cobertura

4. **Revisão**
   - Solicite code review
   - Responda a feedback
   - Faça ajustes necessários

## Ambiente de Desenvolvimento

1. **Configuração**
   ```bash
   git clone https://github.com/seu-usuario/multiversx-wallet.git
   cd multiversx-wallet
   npm install
   ```

2. **Variáveis de Ambiente**
   ```bash
   cp .env-example .env
   # Edite .env com suas configurações
   ```

3. **Scripts Disponíveis**
   ```bash
   npm run dev        # Desenvolvimento
   npm run build      # Build de produção
   npm run test       # Testes
   npm run lint       # Linting
   ```

## Estrutura do Projeto

```
├── src/                    # Código fonte
│   ├── components/        # Componentes React
│   ├── services/         # Serviços
│   ├── theme/            # Temas
│   └── types/            # Tipos TypeScript
├── contracts/            # Smart contracts
├── scripts/             # Scripts
└── tests/              # Testes
```

## Boas Práticas

### Frontend
- Use componentes funcionais
- Implemente lazy loading
- Otimize performance
- Mantenha acessibilidade

### Smart Contracts
- Siga padrões de segurança
- Otimize uso de gas
- Implemente fallbacks
- Documente funções

### Testes
- Cubra casos de borda
- Teste integração
- Verifique segurança
- Documente cenários

## Comunicação

- Use issues para discussão
- Mantenha PRs atualizados
- Responda a feedback
- Seja respeitoso

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto. 