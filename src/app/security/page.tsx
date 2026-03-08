'use client';

/**
 * Security Page
 * Comprehensive explanation of AddrLab's security architecture
 */

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SecurityInfo } from '@/components/SecurityInfo';

export default function SecurityPage() {
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onHowItWorksClick={() => { setShowSecurityInfo(true); }} />

      {/* Hero with background image */}
      <header className="border-b-2 border-ink relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url(/hero.png)' }}
        />
        
        {/* Content */}
        <div className="relative px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Top rule */}
          <div className="hidden sm:flex border-b border-ink py-3 justify-between items-center text-micro uppercase tracking-widest text-muted">
            <span>Security First</span>
            <span>100% Client-Side</span>
            <span>Open Source</span>
          </div>

          {/* Main content */}
          <div className="py-8 sm:py-12 md:py-20">
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end">
              {/* Left: Main headline */}
              <div className="md:col-span-6 lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🔒</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    100% Client-Side
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.85]">
                  <span className="text-accent">Security</span><br />
                  at<br />
                  AddrLab
                </h1>
              </div>

              {/* Right: Description */}
              <div className="md:col-span-6 lg:col-span-5 lg:col-start-8 border-l-2 border-ink pl-4 sm:pl-6 mt-4 md:mt-0">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-3 sm:mb-4">
                  Your private keys <strong className="text-accent">never leave your browser</strong>. 
                  No exceptions. No backdoors. Here's exactly how we ensure that.
                </p>
                <p className="text-xs sm:text-caption font-mono mb-2 sm:mb-3">
                  <span className="text-accent font-bold">Zero Server Access</span> • Open Source • Verifiable
                </p>
                <p className="text-micro text-muted">
                  All cryptographic operations happen locally. You can verify this yourself.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="flex flex-col sm:flex-row border-t-2 border-accent">
            <div className="flex-1 py-2 sm:py-3 sm:border-r border-b sm:border-b-0 border-ink/30 text-center text-micro uppercase tracking-wider">
              <span className="text-accent font-bold">256-bit</span> Entropy
            </div>
            <div className="flex-1 py-2 sm:py-3 sm:border-r border-b sm:border-b-0 border-ink/30 text-center text-micro uppercase tracking-wider">
              CSPRNG
            </div>
            <div className="flex-1 py-2 sm:py-3 text-center text-micro uppercase tracking-wider">
              Ed25519
            </div>
          </div>
        </div>
      </header>

      {/* Mini Navigation */}
      <nav className="sticky top-0 z-40 bg-paper border-b border-ink/20 py-3 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-xs text-muted font-medium shrink-0 hidden sm:block">Jump to:</span>
            <div className="flex gap-1 sm:gap-2">
              <a href="#architecture" className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium bg-ink/5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap">
                01 Architecture
              </a>
              <a href="#storage" className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium bg-ink/5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap">
                02 Storage
              </a>
              <a href="#crypto" className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium bg-ink/5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap">
                03 Crypto
              </a>
              <a href="#headers" className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium bg-ink/5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap">
                04 Headers
              </a>
              <a href="#verify" className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium bg-ink/5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap">
                05 Verify
              </a>
              <a href="#faq" className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium bg-ink/5 hover:bg-accent hover:text-white transition-colors whitespace-nowrap">
                06 FAQ
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* TL;DR */}
          <section className="bg-green-50 border-2 border-green-200 p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4 text-green-800">TL;DR – The Short Version</h2>
            <ul className="space-y-2 text-green-900">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Keys are generated in YOUR browser</strong> – never on our servers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>We cannot see your keys</strong> – we don't receive them, store them, or have access to them</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Works offline</strong> – disconnect from internet after loading to prove it</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Open source</strong> – all code is auditable on GitHub</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Verifiable</strong> – use DevTools to confirm zero data transmission</span>
              </li>
            </ul>
          </section>

          {/* Architecture */}
          <section id="architecture" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent">01</span>
              Where Your Keys Are Generated
            </h2>
            
            {/* Visual Architecture Diagram */}
            <div className="mb-8 space-y-4">
              {/* Your Browser Box */}
              <div className="border-4 border-green-500 bg-green-50 p-6 sm:p-8">
                <div className="text-center mb-6">
                  <span className="bg-green-500 text-white px-4 py-2 font-bold text-lg">YOUR BROWSER</span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  {/* Main Thread */}
                  <div className="border-2 border-green-400 bg-white p-4 text-center">
                    <p className="font-bold text-green-800">Main Thread</p>
                    <p className="text-sm text-muted">(UI / React)</p>
                  </div>
                  
                  {/* Web Workers */}
                  <div className="border-2 border-green-400 bg-white p-4">
                    <p className="font-bold text-green-800 text-center mb-3">Web Workers (parallel)</p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="bg-green-100 p-2 text-center text-xs">
                        <p className="font-bold">W1</p>
                        <p className="text-[10px]">Ed25519</p>
                      </div>
                      <div className="bg-green-100 p-2 text-center text-xs">
                        <p className="font-bold">W2</p>
                        <p className="text-[10px]">Ed25519</p>
                      </div>
                      <div className="bg-green-100 p-2 text-center text-xs">
                        <p className="font-bold">...</p>
                        <p className="text-[10px]">Ed25519</p>
                      </div>
                      <div className="bg-green-100 p-2 text-center text-xs">
                        <p className="font-bold">Wn</p>
                        <p className="text-[10px]">Ed25519</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Keys generated here */}
                <div className="bg-green-600 text-white p-4 text-center">
                  <p className="text-xl font-bold">🔐 Keys Generated HERE</p>
                  <p className="text-sm opacity-90">Using YOUR CPU cores • In YOUR browser's memory</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <div className="text-center py-2">
                  <div className="text-3xl text-muted">↑</div>
                  <p className="text-sm text-muted font-medium">Static files only (HTML, JS, CSS)</p>
                  <p className="text-xs text-red-600 font-bold">NO key data flows here</p>
                  <div className="text-3xl text-muted">↓</div>
                </div>
              </div>
              
              {/* Server Box */}
              <div className="border-4 border-ink/30 bg-ink/5 p-6 sm:p-8">
                <div className="text-center mb-4">
                  <span className="bg-ink/20 text-ink px-4 py-2 font-bold text-lg">OUR SERVER</span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm text-center">
                  <div className="bg-white p-3 border border-ink/20">
                    <p className="text-muted">Delivers static files</p>
                  </div>
                  <div className="bg-white p-3 border border-ink/20">
                    <p className="text-muted">Cannot compute keys</p>
                  </div>
                  <div className="bg-white p-3 border border-ink/20">
                    <p className="text-muted">No memory access</p>
                  </div>
                  <div className="bg-white p-3 border border-ink/20">
                    <p className="text-red-600 font-bold">NO key access</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 p-5">
                <h3 className="font-bold text-green-800 mb-3">✓ What happens in YOUR browser</h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li>• All JavaScript execution</li>
                  <li>• All cryptographic operations</li>
                  <li>• Random number generation</li>
                  <li>• Key pair creation</li>
                  <li>• Pattern matching</li>
                  <li>• File downloads</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 p-5">
                <h3 className="font-bold text-red-800 mb-3">✗ What our server CANNOT do</h3>
                <ul className="space-y-2 text-sm text-red-900">
                  <li>• See your private keys</li>
                  <li>• Access your browser memory</li>
                  <li>• Execute code on your device</li>
                  <li>• Intercept generated keys</li>
                  <li>• Track your patterns</li>
                  <li>• Identify you personally</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Storage */}
          <section id="storage" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent">02</span>
              What We Store (Nothing)
            </h2>

            <div className="border-2 border-ink p-6 sm:p-8 mb-6">
              <h3 className="font-bold mb-4">Zero Data Storage</h3>
              <p className="text-muted mb-4">
                AddrLab stores <strong>absolutely no data</strong>. There is no database, 
                no analytics, no tracking. The application runs entirely in your browser.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-5">
              <h3 className="font-bold text-red-800 mb-3">We do NOT store:</h3>
              <ul className="space-y-2 text-sm text-red-900">
                <li>• No private keys</li>
                <li>• No public keys / addresses</li>
                <li>• No patterns searched</li>
                <li>• No IP addresses</li>
                <li>• No timestamps</li>
                <li>• No user identifiers</li>
                <li>• No cookies</li>
                <li>• No analytics</li>
              </ul>
            </div>
          </section>

          {/* Cryptography */}
          <section id="crypto" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent">03</span>
              Cryptographic Security
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-ink/20">
                <thead>
                  <tr className="bg-ink/5">
                    <th className="border border-ink/20 p-3 text-left">Component</th>
                    <th className="border border-ink/20 p-3 text-left">Technology</th>
                    <th className="border border-ink/20 p-3 text-left">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-ink/20 p-3 font-medium">Key Algorithm</td>
                    <td className="border border-ink/20 p-3">Ed25519</td>
                    <td className="border border-ink/20 p-3">RFC 8032</td>
                  </tr>
                  <tr className="bg-ink/5">
                    <td className="border border-ink/20 p-3 font-medium">Key Generation</td>
                    <td className="border border-ink/20 p-3">Native Web Crypto API</td>
                    <td className="border border-ink/20 p-3">W3C Standard</td>
                  </tr>
                  <tr>
                    <td className="border border-ink/20 p-3 font-medium">Random Numbers</td>
                    <td className="border border-ink/20 p-3">crypto.getRandomValues()</td>
                    <td className="border border-ink/20 p-3">Hardware-backed CSPRNG</td>
                  </tr>
                  <tr className="bg-ink/5">
                    <td className="border border-ink/20 p-3 font-medium">Entropy</td>
                    <td className="border border-ink/20 p-3">256 bits</td>
                    <td className="border border-ink/20 p-3">Industry standard</td>
                  </tr>
                  <tr>
                    <td className="border border-ink/20 p-3 font-medium">Address Encoding</td>
                    <td className="border border-ink/20 p-3">Base58</td>
                    <td className="border border-ink/20 p-3">Solana compatible</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-5">
              <h3 className="font-bold text-blue-800 mb-3">Key Security Check</h3>
              <p className="text-sm text-blue-900 mb-3">
                After generating a key, AddrLab performs real-time security analysis:
              </p>
              <ul className="space-y-1 text-sm text-blue-900">
                <li>• <strong>Entropy verification</strong> – Confirms 256-bit entropy</li>
                <li>• <strong>CSPRNG check</strong> – Verifies cryptographically secure RNG</li>
                <li>• <strong>Chi-Square test</strong> – Statistical verification of randomness</li>
                <li>• <strong>Distribution analysis</strong> – Ensures uniform byte distribution</li>
              </ul>
            </div>
          </section>


          {/* HTTP Headers */}
          <section id="headers" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent">04</span>
              HTTP Security Headers
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-ink/20">
                <thead>
                  <tr className="bg-ink/5">
                    <th className="border border-ink/20 p-3 text-left">Header</th>
                    <th className="border border-ink/20 p-3 text-left">Value</th>
                    <th className="border border-ink/20 p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-ink/20 p-3 font-mono text-sm">Content-Security-Policy</td>
                    <td className="border border-ink/20 p-3 text-sm">Strict</td>
                    <td className="border border-ink/20 p-3 text-sm">Prevents XSS, blocks external scripts</td>
                  </tr>
                  <tr className="bg-ink/5">
                    <td className="border border-ink/20 p-3 font-mono text-sm">Strict-Transport-Security</td>
                    <td className="border border-ink/20 p-3 text-sm">max-age=31536000</td>
                    <td className="border border-ink/20 p-3 text-sm">Forces HTTPS for 1 year (HSTS)</td>
                  </tr>
                  <tr>
                    <td className="border border-ink/20 p-3 font-mono text-sm">X-Frame-Options</td>
                    <td className="border border-ink/20 p-3 text-sm">DENY</td>
                    <td className="border border-ink/20 p-3 text-sm">Prevents clickjacking</td>
                  </tr>
                  <tr className="bg-ink/5">
                    <td className="border border-ink/20 p-3 font-mono text-sm">X-Content-Type-Options</td>
                    <td className="border border-ink/20 p-3 text-sm">nosniff</td>
                    <td className="border border-ink/20 p-3 text-sm">Prevents MIME sniffing</td>
                  </tr>
                  <tr>
                    <td className="border border-ink/20 p-3 font-mono text-sm">Referrer-Policy</td>
                    <td className="border border-ink/20 p-3 text-sm">strict-origin</td>
                    <td className="border border-ink/20 p-3 text-sm">Limits referrer information</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Verify */}
          <section id="verify" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent">05</span>
              How to Verify Yourself
            </h2>

            <p className="text-muted mb-6">
              Don't trust us – verify it yourself. Here are three methods to confirm 
              that your keys never leave your browser:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Method 1 */}
              <div className="border-2 border-ink p-6 flex flex-col">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="bg-ink text-paper w-8 h-8 flex items-center justify-center text-sm rounded-full">1</span>
                  Network Monitor
                </h3>
                <ol className="space-y-2 text-sm flex-1">
                  <li>1. Open DevTools (F12)</li>
                  <li>2. Go to <strong>Network</strong> tab</li>
                  <li>3. Clear existing requests</li>
                  <li>4. Generate an address</li>
                  <li>5. Watch: <strong>Zero requests</strong></li>
                </ol>
                <div className="bg-green-50 border border-green-200 p-3 mt-4 text-xs text-green-800">
                  <strong>Result:</strong> No key data ever transmitted
                </div>
              </div>

              {/* Method 2 */}
              <div className="border-2 border-ink p-6 flex flex-col">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="bg-ink text-paper w-8 h-8 flex items-center justify-center text-sm rounded-full">2</span>
                  Offline Test
                </h3>
                <ol className="space-y-2 text-sm flex-1">
                  <li>1. Load AddrLab</li>
                  <li>2. <strong>Go offline</strong> (airplane mode)</li>
                  <li>3. Generate an address</li>
                  <li>4. It works!</li>
                </ol>
                <div className="bg-green-50 border border-green-200 p-3 mt-4 text-xs text-green-800">
                  <strong>Result:</strong> No server needed for keys
                </div>
              </div>

              {/* Method 3 */}
              <div className="border-2 border-ink p-6 flex flex-col">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="bg-ink text-paper w-8 h-8 flex items-center justify-center text-sm rounded-full">3</span>
                  Code Review
                </h3>
                <ol className="space-y-2 text-sm flex-1">
                  <li>1. Visit <a href="https://github.com/addrlab/addrv2" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a></li>
                  <li>2. Check <code className="bg-ink/10 px-1 text-xs">vanity.worker.source.ts</code></li>
                  <li>3. Review the source code</li>
                  <li>4. Verify yourself</li>
                </ol>
                <div className="bg-green-50 border border-green-200 p-3 mt-4 text-xs text-green-800">
                  <strong>Result:</strong> All code is auditable
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent">06</span>
              Common Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-ink/20 p-5">
                <h3 className="font-bold mb-2">Can you steal my keys?</h3>
                <p className="text-sm text-muted">
                  No. We physically cannot access your keys because they never leave your browser. 
                  There is no code path that transmits key data to any server. You can verify 
                  this by auditing our source code or monitoring network traffic.
                </p>
              </div>
              <div className="border border-ink/20 p-5">
                <h3 className="font-bold mb-2">What if your servers get hacked?</h3>
                <p className="text-sm text-muted">
                  Even if our servers were compromised, attackers could not access your keys. 
                  The server only delivers static files – it never receives or processes keys. 
                  Your keys exist only in your browser's memory.
                </p>
              </div>
              <div className="border border-ink/20 p-5">
                <h3 className="font-bold mb-2">Are vanity addresses less secure?</h3>
                <p className="text-sm text-muted">
                  No. The cryptographic security is identical to random addresses. The private 
                  key is generated using the same secure methods. Only the resulting public 
                  key (address) is filtered for your pattern.
                </p>
              </div>
              <div className="border border-ink/20 p-5">
                <h3 className="font-bold mb-2">Do you collect any data?</h3>
                <p className="text-sm text-muted">
                  No. AddrLab stores zero data. There is no database, no analytics, 
                  no tracking. Everything runs entirely in your browser.
                </p>
              </div>
              <div className="border border-ink/20 p-5 md:col-span-2">
                <h3 className="font-bold mb-2">Should I use this for large amounts?</h3>
                <p className="text-sm text-muted">
                  For significant amounts, we recommend additional precautions: generate keys 
                  while offline, verify the key works with a small test transaction first, 
                  and consider using a hardware wallet for long-term storage.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-ink text-paper p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-paper/80 mb-6 max-w-lg mx-auto">
              Security is our top priority. If you have any concerns or want to report 
              a vulnerability, we want to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/addrlab/addrv2/security/advisories/new"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper text-ink px-6 py-3 font-medium hover:bg-paper/90 transition-colors"
              >
                Report a Vulnerability
              </a>
              <a
                href="/faq"
                className="border border-paper px-6 py-3 font-medium hover:bg-paper/10 transition-colors"
              >
                View FAQ
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      
      <SecurityInfo
        isOpen={showSecurityInfo}
        onClose={() => { setShowSecurityInfo(false); }}
      />
    </div>
  );
}
