import {type FC, useState} from 'react';

import {Badge, Input} from './components';
import {ArrowBottom, File, LightCircle, Logo} from './assets';

import './App.css'

const Footer: FC = () => (
  <footer className="footer">
    <a href="mailto:hello@frontproof.org" className="footer-text footer-link">
      hello@frontproof.org
    </a>
    <span className="footer-text">© 2025, FrontProof</span>
  </footer>
)

const EmailSection = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <div className="section">
      <div className="sub-email">
        <span className="sub-text">Subscribe to immutable updates</span>
        <div className="sub-form">
          <Input
            value={email}
            placeholder="Type Your Email"
            name="email"
            type="email"
            onChange={setEmail}
            onSubmit={() => null}
          />
          <span className="sub-form-text">
                You’ll only hear from us when it matters
              </span>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const [needToHide] = useState(true);

  return (
    <>
      <div className="first">
        <header className="header">
          <a href="/" className="header-logo"><Logo/></a>
          <Badge className="header-badge"/>
          <a href="mailto:hello@frontproof.org" className="header-link">
            hello@frontproof.org
          </a>
        </header>
        <main className="main">
          <div className="text">
            <div className="main-code">
              <span>[</span><span>The last mile of decentralization starts here.</span><span>]</span>
            </div>
            <h1 className="main-heading">
              Layer 1 for Frontends
            </h1>
          </div>
          {!needToHide && <div className="main-badge">
            Stay in the loop
          </div>}
        </main>
        <div className="footer">
          <ArrowBottom/>
        </div>
        <div className="background-light"/>
        <LightCircle className="light-circle"/>
        <LightCircle className="light-circle"/>
        <LightCircle className="light-circle"/>
        <LightCircle className="light-circle"/>
      </div>
      <div className="second">
        <div className="section">
          <div className="text">
            <span className="sub-code">
              code is law_
            </span>
            <span className="sub-heading">
              but the frontend is both judge and jury.
            </span>
          </div>
        </div>
        <div className="section">
          <span className="sub-text">
            <text>FrontProof</text> lets you deploy frontends like smart contracts — deterministic, tamper-proof, and forever auditable.
          </span>
        </div>
        <div className="section">
          <div className="sub-section">
            <span className="sub-text">Whitepaper</span>
            <div className="sub-file">
              <File/>
              <div className="main-badge opacity">
                Coming soon
              </div>
            </div>
          </div>
        </div>
        {!needToHide && <EmailSection />}
      </div>
      <Footer />
      <div className="footer-badge"><Badge/></div>
    </>
  )
}

export default App
