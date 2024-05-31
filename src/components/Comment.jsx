import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';


export function Comment({content}) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C4D03AQEb2PamddNalQ/profile-displayphoto-shrink_800_800/0/1660610967599?e=1721865600&v=beta&t=164xG6Yja7FS8Ut2AlZUdmHx5SU0oO-g3X6BzdF46kI"/>
           
            <div className={styles.commentBox}>
            <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                 <strong>Antônio Carlos</strong>
                 <time title="28 de maio ás 14:39h" dateTime="2024-05-28 14:39:00">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar comentário">
                    <Trash size={24} />
                </button>
            </header>

            <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                     Aplaudir <span>20</span>
                </button>
            </footer>
            </div>
        </div>
    )
    
}