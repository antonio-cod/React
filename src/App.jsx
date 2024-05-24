import { Post } from './Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import styles from "./App.module.css";

import './global.css';

export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
     author='Antonio Carlos'
     content="Lorm ipum dolor sit content is world"
     />

    <Post 
     author='Carlos Cruz'
     content="Lorem ipum dolor"
     />
      </main>

    </div>

    </div>
  
  )
}

