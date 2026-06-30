function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Why />
        <Workflow />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <AIChatWidget />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
