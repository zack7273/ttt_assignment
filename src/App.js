import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar.js';
import About from './Components/About/About.js';
import Posts from './Components/Posts/Posts.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Posts />
      {/* Adding a comment for clarity */}
    </div>
  );
}

export default App;
