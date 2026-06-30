const { useState } = React;

function App() {
   useReveal();
   useSmoothScroll();
   const [toast, setToast] = useState(null);
   
   window.showToast = (message) => {
     setToast(message);
   };
   
   const closeToast = () => setToast(null);
   
   return (
     <>
       <Nav />
       {toast && <Toast message={toast} onClose={closeToast} />}
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
