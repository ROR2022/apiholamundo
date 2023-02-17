import LoginFace from "./LoginFace";
import { FacebookProvider} from 'react-facebook';


function App() {
  return (
    <FacebookProvider appId="933422631180070">
    <div>
      <header>
       <h1>Pruebas con Face</h1>
       <LoginFace/>
      </header>
    </div>
    </FacebookProvider>
  );
}

export default App;
