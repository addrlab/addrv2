# AddrLab

[![Version: 0.9.1](https://img.shields.io/badge/Version-0.9.1-blue.svg)](https://github.com/addrlab/addrv2)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Generate custom Solana addresses – entirely in your browser.**

Create personalized Solana wallet addresses and token mint addresses that start or end with specific characters (like `SOL...` or `...MOON`). All cryptographic operations happen locally on your device – your private keys never leave your browser.

## Two Generators

| Generator | Use Case | URL |
|-----------|----------|-----|
| **Wallet Address** | Personal wallets, donations, branding | `/` |
| **Token Mint Address** | pump.fun token launches, custom token contracts | `/token` |

## What is a Vanity Address?

A vanity address is a cryptocurrency wallet address that contains a recognizable pattern. Instead of a random address like `4tVbKSR8gniF2Lq7aEzHbMD8WCAdPJBn6G9oPYzXmJcR`, you can generate one like:

- `ADDRe5qT8vNjZpKm2wYoFXcR7gB3hL9nUsDf6JkWx4` (starts with "ADDR")
- `5qT8vNjZpKm2wYoFXcR7gB3hL9nUsDf6JkWxLAB` (ends with "LAB")

This makes addresses more memorable and personal – perfect for public wallets, donations, or branding.

## Features

- **100% Client-Side** – All computation happens in your browser
- **125x Faster** – Native Web Crypto API outperforms all JavaScript/WASM implementations
- **Multi-Core Processing** – Uses all available CPU cores (~100,000 keys/second)
- **Token Mint Generator** – Create vanity addresses for pump.fun token launches
- **Domain Suggestions** – Get matching .sol, .solana, .bonk, .poor domain suggestions after generating
- **Key Security Check** – Verify cryptographic quality with real-time entropy analysis
- **Smart Difficulty Estimation** – Accurate time estimates including first-character rarity
- **Sound Notification** – Optional audio alert when address is found
- **Instant Export** – Download keys as TXT or JSON (Solana CLI compatible)
- **Works Offline** – No internet required after page loads
- **Mobile Optimized** – Fully responsive design with touch-friendly controls
- **Comprehensive FAQ** – Detailed answers to common questions

## Performance

| Pattern Length | Average Time |
|----------------|--------------|
| 3 characters   | < 1 second   |
| 4 characters   | ~15 seconds  |
| 5 characters   | ~12 minutes  |
| 6 characters   | ~11 hours    |

*Times for case-insensitive matching on a 16-core CPU with native Ed25519 support. Results vary by hardware.*

## Security

### Your Keys, Your Control

AddrLab is designed with a single principle: **your private keys should never leave your device**.

1. **No Server Communication** – The generation process makes zero network requests. Everything runs locally in Web Workers.

2. **Open Source** – The entire codebase is auditable. You can verify exactly what the code does.

3. **Content Security Policy** – Strict HTTP headers prevent any data from being sent to external servers.

4. **Offline Capable** – Works without internet after initial load, proving no server dependency.

### How to Verify Security

You don't have to trust us – you can verify it yourself:

#### Method 1: Network Monitor
1. Open Developer Tools (F12)
2. Go to the **Network** tab
3. Start generating an address
4. Watch: **No requests are made** during generation

#### Method 2: Offline Test
1. Load the page
2. Disconnect from the internet (airplane mode)
3. Generate an address – it still works
4. This proves keys are generated locally

#### Method 3: Source Code Review
1. Open Developer Tools (F12)
2. Go to **Sources** tab
3. Inspect `vanity-worker.js` – all crypto logic is visible
4. Or review the full source code in this repository

## How It Works

1. **Input** – Enter your desired prefix and/or suffix pattern
2. **Generation** – Multiple Web Workers generate random Ed25519 keypairs in parallel
3. **Matching** – Each public key is Base58-encoded and checked against your pattern
4. **Result** – When a match is found, you receive the complete keypair
5. **Domain Suggestions** – Get matching domain names for your pattern
6. **Export** – Download your keys in your preferred format

## Architecture

### Where Does the Code Run?

**Important:** All computation happens in your browser, not on any server.

```
┌─────────────────────────────────────────────────────────────────┐
│                         YOUR BROWSER                            │
│  ┌───────────────┐    ┌──────────────────────────────────────┐  │
│  │   Main Thread │    │     Web Workers (Native Ed25519)     │  │
│  │   (UI/React)  │───▶│  Worker 1 │ Worker 2 │ ... │ Worker N│  │
│  └───────────────┘    │(WebCrypto)│(WebCrypto)│    │(WebCrypto)│ │
│                       └──────────────────────────────────────┘  │
│                                 ▼                               │
│                         Keys generated locally                  │
│                         using YOUR CPU cores                    │
└─────────────────────────────────────────────────────────────────┘
                                 ▲
                                 │ Static files only (HTML/JS/CSS)
                                 │ No computation, no key access
┌─────────────────────────────────────────────────────────────────┐
│                      SERVER / HOSTING                           │
│                    Just a static file server                    │
└─────────────────────────────────────────────────────────────────┘
```

### Technical Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | Next.js 16 / React 19 | UI and state management |
| **Cryptography** | Native Web Crypto API | Ed25519 key generation (with WASM fallback) |
| **Parallelization** | Web Workers | Multi-core CPU utilization |
| **Randomness** | Web Crypto API | Cryptographically secure RNG |
| **Encoding** | Custom Base58 | Solana address format |
| **Bundling** | esbuild | Worker compilation |

### Native Web Crypto Performance

AddrLab uses the **Native Web Crypto API** for Ed25519 key generation (Chrome 113+, Firefox 129+, Safari 17+):

- Direct browser/OS-level implementation – no JavaScript overhead
- ~6,000+ keys/second per CPU core
- ~100,000 keys/second on a 16-core machine
- Automatic fallback to WASM (watsign) for older browsers

## Wallet Compatibility

Generated keypairs work with all major Solana wallets:

| Wallet | Import Method |
|--------|---------------|
| **Phantom** | Import Private Key (Base58) |
| **Solflare** | Import Private Key or JSON |
| **Backpack** | Import Private Key |
| **Solana CLI** | Import JSON file directly |

## Token Mint Generator (pump.fun)

Create custom token contract addresses for your Solana token launches:

### How It Works

1. Go to `/token` and generate a vanity address
2. Copy the **Private Key** (Base58 format)
3. On pump.fun, paste the key in "Token Address" → "Use Custom"
4. Launch your token with your custom address!

## FAQ

For detailed answers to common questions, visit our **[FAQ page](https://addrlab.com/faq)**.

## Disclaimer

This tool is provided as-is. Always verify generated keys work correctly before using them for significant transactions. The authors are not responsible for any loss of funds.

*Not affiliated with the Solana Foundation.*

## License

MIT
