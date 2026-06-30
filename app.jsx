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
         <VisionMission />
         <Integrations />
         <Security />
         <Roadmap />
         <Industries />
         <Workflow />
         <Testimonials />
         <Pricing />
         <Contact />
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
