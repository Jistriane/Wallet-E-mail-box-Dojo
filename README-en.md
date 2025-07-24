# MultiversX Wallet

A web wallet for the MultiversX network (formerly Elrond) with integrated decentralized email system via smart contract.

🌐 **[Access the Application](https://wallet-email-box-dojo-w6un86bnb-jistrianes-projects.vercel.app)**

## Deployment Status

The deployment has been completed successfully! The application is available in the following environments:

### Access URLs
- **Preview:** [https://wallet-email-box-dojo-iml3u25zw-jistrianes-projects.vercel.app](https://wallet-email-box-dojo-iml3u25zw-jistrianes-projects.vercel.app)
- **Production:** [https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app](https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app)

### Automatic Configurations
- ✅ Automatic build with Node.js 18.x
- ✅ MultiversX testnet environment variables
- ✅ Security headers
- ✅ Asset cache optimization
- ✅ Route configurations
- ✅ SSL/HTTPS

### Project Status
- ✅ Connected to MultiversX testnet
- ✅ Automatic deployment configured
- ✅ HTTPS enabled
- ✅ Optimized cache
- ✅ Security headers configured

### Vercel Management
Access the Vercel dashboard to monitor:
- 📊 Build logs
- 📈 Analytics
- ⚙️ Project settings
- 🔐 Environment variables
- 🌐 Custom domains

**Note:** For future deployments, no manual action is required. Vercel automatically detects pushes to the main branch and performs the deployment.

## Features

### MultiversX Wallet
- Connect and disconnect MultiversX wallet via official extension
- Create new wallet (seed phrase)
- Import existing wallet using seed phrase
- Display connected wallet address
- Check EGLD balance
- Send transactions to other addresses
- Sign messages
- Responsive and intuitive interface

### Web3 Email System
- Send emails between MultiversX addresses
- Store emails on blockchain (smart contract)
- Inbox and sent folders
- Mark emails as read
- Delete emails
- Spam protection system (add/remove addresses from spam list)
- Email integrity verification (hash)
- User email limit to prevent spam
- Support for encrypted emails (encrypted field)
- Modern email management interface

### Smart Contract
- Developed in Solidity (deployed on Sepolia)
- Main functions:
  - `send_email(to, subject, content)`: Send email
  - `get_inbox(account)`: Return inbox
  - `get_sent(account)`: Return sent items
  - `mark_as_read(index)`: Mark email as read
  - `delete_email(index)`: Remove email
  - `add_to_spam(spammer)`: Add address to spam list
  - `remove_from_spam(address)`: Remove address from spam list
  - `get_spam_list(account)`: Return spam list
  - `verify_email_integrity(account, index)`: Verify email integrity

## Technologies Used
- React + TypeScript
- Vite
- Chakra UI
- Tailwind CSS
- ethers.js
- MultiversX SDK
- Solidity (smart contract)
- Vercel (deployment)

## Installation and Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/multiversx-wallet.git
cd multiversx-wallet
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root with the following variables:
```env
VITE_NETWORK=testnet
VITE_API_URL=https://testnet-api.multiversx.com
VITE_GATEWAY_URL=https://testnet-gateway.multiversx.com
VITE_EXPLORER_URL=https://testnet-explorer.multiversx.com
VITE_WALLET_CONNECT_BRIDGE=https://bridge.walletconnect.org
VITE_WALLET_CONNECT_DEEP_LINK=https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/
VITE_CHAIN_ID=T
```

4. Start the development server:
```bash
npm run dev
```

## Vercel Deployment

The project is currently deployed on Vercel and can be accessed at: [https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app](https://wallet-email-box-dojo-khmhh6npl-jistrianes-projects.vercel.app)

### Automatic Deployment

1. Fork the repository on GitHub

2. On Vercel:
   - Connect your GitHub account
   - Import the repository
   - Required configurations are already in `vercel.json`

3. Important settings:
   - Project uses Node.js 18.x
   - All MultiversX testnet environment variables are configured
   - Security headers and optimized cache
   - SSL/HTTPS automatically enabled
   - Routes configured for SPA

### Manual Deployment

If you need to deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Monitoring and Logs

- Access the [Vercel Dashboard](https://vercel.com/dashboard)
- Monitor:
  - Deploy status
  - Build logs
  - Analytics
  - Performance
  - Errors
  - Environment variables

## How to Use
- Install the MultiversX DeFi Wallet extension in your browser
- Connect your wallet through the interface
- Use the email system to send, receive, mark as read, delete emails and manage spam
- Check balance, send EGLD and sign messages through the wallet interface

## Project Structure
```
src/
├── components/         # React Components
│   ├── Wallet.tsx     # Wallet interface
│   ├── EmailSystem.tsx # Email system
│   └── ...
├── services/          # Services and integrations
├── styles/           # Styles and themes
├── theme/            # Chakra UI configuration
└── types/            # TypeScript types
```

## System Screenshots and Flows

### 1. MultiversX Wallet Connection

![Wallet connection screen](artifacts/prints/PRIMEIRA%20CONEXAO%20COM%20A%20CARTEIRA.png)

When accessing the application, the user is greeted with the MultiversX Wallet main screen. Here, it's possible to:
- **Connect Wallet:** The "Connect Wallet" button initiates the connection process with the MultiversX DeFi Wallet extension installed in the browser.
- **Create New Wallet:** If the user doesn't have a wallet, they can create a new one directly through the interface.
- **Import from Seed Phrase:** Users who already have a seed phrase can import their wallet.

### 2. Wallet Creation and Seed Phrase Display

![Wallet creation and seed phrase](artifacts/prints/CARTEIRA%20CRIADA%20PALAVRA%20DE%20SEGURANÇA%20.png)

### 3. Connected Wallet

![Connected wallet](artifacts/prints/CARTEIRA%20CONECTADA.png)

### 4. Email Area

![Email sending area](artifacts/prints/AREA%20DE%20EMAIL.png)

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Security

- The project uses security best practices
- Security HTTP headers configured
- Forced HTTPS
- Protection against XSS and other vulnerabilities
- Secure environment variables

## License

MIT 