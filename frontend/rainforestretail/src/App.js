import logo from './logo.svg';
import './App.css';
import StoreContainer from './containers/StoreContainer';


function handleFooterClick() {
  alert("GOOOOOD MORNING VIETNAM");
}


function App() {
  return (
   <>
   
   <StoreContainer />
   <footer>
                <div className="footer-links">
                    <p>© 2024 Dunder Mifflin</p>
                    <p><a href="/privacy" onClick={() => handleFooterClick("/privacy")}>Privacy</a></p>
                    <p><a href="/terms" onClick={() => handleFooterClick("/terms")}>T&Cs</a></p>
                    <p><a href="/accessibility" onClick={() => handleFooterClick("/accessibility")}>Accessibility</a></p>
                    <p><a href="/contact" onClick={() => handleFooterClick("/contact")}>Contact Form</a></p>
                    <p><a href="/refund" onClick={() => handleFooterClick("/refund")}>Refund Policy</a></p>
                </div>
        </footer>
      
   </> 
  );
} 

export default App;
