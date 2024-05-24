import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';


export function Sidebar () {
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1612659500560-4ca92962bfe1?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
             />
        
        <div className={styles.profile}>
            <img  className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQEb2PamddNalQ/profile-displayphoto-shrink_800_800/0/1660610967599?e=1721865600&v=beta&t=164xG6Yja7FS8Ut2AlZUdmHx5SU0oO-g3X6BzdF46kI" alt="" 
            />

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