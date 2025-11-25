import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NerveSystem from './components/NerveSystem';
import ProcessFlow from './components/ProcessFlow';
import AnalyticalFramework from './components/AnalyticalFramework';
import LiveMonitor from './components/LiveMonitor';
import RiskBarometer from './components/RiskBarometer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />
      <main>
        <Hero />
        <NerveSystem />
        <ProcessFlow />
        <AnalyticalFramework />
        <LiveMonitor />
        <RiskBarometer />
      </main>
      <Footer />
    </div>
  );
}

export default App;