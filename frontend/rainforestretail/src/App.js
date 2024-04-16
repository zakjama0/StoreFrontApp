import './App.css';
import StoreContainer from './containers/StoreContainer';
function App() {
  return (
    <>
      <StoreContainer />
      <footer className="footer">
        <div className="footer-links">
          <p>© 2024 Dunder Mifflin</p>
          <p><a href="https://www.youtube.com/watch?v=mzaRAfPrKR8">Privacy</a></p>
          <p><a href="https://www.youtube.com/watch?v=mzaRAfPrKR8">T&Cs</a></p>
          <p><a href="https://www.youtube.com/watch?v=mzaRAfPrKR8">Accessibility</a></p>
          <p><a href="https://www.youtube.com/watch?v=mzaRAfPrKR8">Contact Form</a></p>
          <p><a href="https://www.youtube.com/watch?v=mzaRAfPrKR8">Refund Policy</a></p>
        </div>
      </footer>
    </>
  );
}
export default App;