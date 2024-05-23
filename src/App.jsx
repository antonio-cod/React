import { Post } from './Post.jsx';
import { Header } from './components/Header.jsx';
import './global.css';

export function App() {
  return (
    <div>
    <Header />

    <Post 
     author='Antonio Carlos'
     content="Lorm ipum dolor sit content is world"
     />

    <Post 
     author='Carlos Cruz'
     content="Lorem ipum dolor"
     />

    </div>
  
  )
}

