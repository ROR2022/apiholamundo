
import { FacebookProvider} from 'react-facebook';
import LoginFace from './LoginFace';

function App() {
  return (
    <FacebookProvider appId="933422631180070">
    <div>
      <LoginFace/>
    </div>
    </FacebookProvider>
  );
}

export default App;
