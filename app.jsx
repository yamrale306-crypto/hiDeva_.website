const { useState, useEffect } = React;

function App() {
   const [introDone, setIntroDone] = useState(false);
   
   useReveal();
   useSmoothScroll();
   const [toast, setToast] = useState(null);
   
   window.showToast = (message) => {
     setToast(message);
   };
   
   const closeToast = () => setToast(null);
   
   useEffect(() => {
     const timer = setTimeout(() => {
       setIntroDone(true);
     }, 2200);
     return () => clearTimeout(timer);
   }, []);
   
   return (
     <>
       {!introDone && (
         <div id="intro-overlay" className="intro-overlay">
           <div className="intro-content">
             <div className="intro-logo">
               <span className="intro-logo-text">hi<span className="text-aurora">Deva</span></span>
             </div>
             <div className="intro-loader">
               <div className="intro-loader-bar"></div>
             </div>
             <p className="intro-tagline">AI-Powered Call Assistant</p>
           </div>
         </div>
       )}
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
