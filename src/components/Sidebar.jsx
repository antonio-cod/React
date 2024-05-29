import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';


export function Sidebar () {
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1612659500560-4ca92962bfe1?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
             />
        
        <div className={styles.profile}>
           <Avatar  src="https://avatars.githubusercontent.com/u/6643122?v=4"/>

            <strong>Antonio carlos</strong>
            <span>Web Developer</span>
        </div>
        
        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
        
        </aside>
    );
}