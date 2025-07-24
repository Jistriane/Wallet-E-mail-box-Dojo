# Deployment Guide

## Overview

This document describes the project deployment process in different environments:
- Development
- Staging
- Production

## Prerequisites

### Tools
- Node.js >= 16
- npm >= 8
- Git
- Docker (optional)
- MultiversX CLI

### Accounts
- GitHub
- MultiversX Wallet
- Hosting server

## Environment Setup

### Environment Variables
```bash
# .env-dev
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_CHAIN_ID=D
NEXT_PUBLIC_CONTRACT_ADDRESS=erd1...

# .env-staging
NEXT_PUBLIC_API_URL=https://staging.example.com
NEXT_PUBLIC_CHAIN_ID=T
NEXT_PUBLIC_CONTRACT_ADDRESS=erd1...

# .env-prod
NEXT_PUBLIC_API_URL=https://example.com
NEXT_PUBLIC_CHAIN_ID=1
NEXT_PUBLIC_CONTRACT_ADDRESS=erd1...
```

### Smart Contracts
```bash
# Compile contracts
npm run compile:contracts

# Deploy contracts
npm run deploy:contracts -- --network devnet
```

## Deployment Process

### 1. Preparation
```bash
# Update dependencies
npm install

# Run tests
npm run test

# Build project
npm run build
```

### 2. Frontend Deployment
```bash
# Development
npm run deploy:dev

# Staging
npm run deploy:staging

# Production
npm run deploy:prod
```

### 3. Smart Contracts Deployment
```bash
# Development
npm run deploy:contracts:dev

# Staging
npm run deploy:contracts:staging

# Production
npm run deploy:contracts:prod
```

## Verification

### Frontend
- Verify build
- Test functionality
- Check logs
- Monitor performance

### Smart Contracts
- Verify deployment
- Test functions
- Check events
- Monitor gas

## Rollback

### Frontend
```bash
# Revert to previous version
npm run rollback:frontend -- --version v1.0.0
```

### Smart Contracts
```bash
# Revert contract
npm run rollback:contracts -- --version v1.0.0
```

## Monitoring

### Metrics
- Uptime
- Performance
- Errors
- Resource usage

### Logs
- Frontend logs
- Contract logs
- Error logs
- Access logs

## Maintenance

### Updates
- Dependencies
- Smart contracts
- Frontend
- Configurations

### Backup
- Source code
- Data
- Configurations
- Logs

## Security

### SSL/TLS
- Certificates
- Configuration
- Renewal
- Monitoring

### Firewall
- Rules
- Access
- Monitoring
- Logs

## Troubleshooting

### Common Issues
- Build fails
- Deploy fails
- Contract not deployed
- Connection errors

### Solutions
- Check logs
- Revert changes
- Contact support
- Document issues

## Resources

### Documentation
- [MultiversX Docs](https://docs.multiversx.com)
- [React Docs](https://reactjs.org)
- [Hardhat Docs](https://hardhat.org)

### Support
- GitHub Issues
- Discord
- Email
- Telegram 