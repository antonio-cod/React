import { Post } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from "./App.module.css";

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://media.licdn.com/dms/image/C4D03AQEb2PamddNalQ/profile-displayphoto-shrink_800_800/0/1660610967599?e=1721865600&v=beta&t=164xG6Yja7FS8Ut2AlZUdmHx5SU0oO-g3X6BzdF46kI',
      name:'Antonio Carlos',
      role: 'Desenvolvedor FrontEnd'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no gitub que fiz na NLW Return'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-03 14:22:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://media.licdn.com/dms/image/C4D03AQEb2PamddNalQ/profile-displayphoto-shrink_800_800/0/1660610967599?e=1721865600&v=beta&t=164xG6Yja7FS8Ut2AlZUdmHx5SU0oO-g3X6BzdF46kI',
      name:'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no gitub que fiz na NLW Return'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-30 14:22:00'),
  },
];

export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {posts.map(post => {
        return (
        <Post 
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
        />
        )
      })}
      </main>
    </div>
  </div>
  
  )
}

