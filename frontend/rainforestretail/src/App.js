import './App.css';
import StoreContainer from './containers/StoreContainer';


function handleFooterClick(event) {
  event.preventDefault();
  alert("GOOOOOD MORNING VIETNAM");
}


function App() {
  return (
   <>
   
   <StoreContainer />
   <footer className="footer">
  <div className="footer-links">
    <p>© 2024 Dunder Mifflin</p>
    <p><a href="/privacy" onClick={(e) => handleFooterClick(e, "/privacy")}>Privacy</a></p>
    <p><a href="/terms" onClick={(e) => handleFooterClick(e, "/terms")}>T&Cs</a></p>
    <p><a href="/accessibility" onClick={(e) => handleFooterClick(e, "/accessibility")}>Accessibility</a></p>
    <p><a href="/contact" onClick={(e) => handleFooterClick(e, "/contact")}>Contact Form</a></p>
    <p><a href="/refund" onClick={(e) => handleFooterClick(e, "/refund")}>Refund Policy</a></p>
  </div>
</footer>

      
   </> 
  );
} 

export default App;
