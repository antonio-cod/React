import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    console.log(props);
    return (

        <article className={styles.post}>
            <header>
            <div className={styles.author}>
            <Avatar src="https://media.licdn.com/dms/image/C4D03AQEb2PamddNalQ/profile-displayphoto-shrink_800_800/0/1660610967599?e=1721865600&v=beta&t=164xG6Yja7FS8Ut2AlZUdmHx5SU0oO-g3X6BzdF46kI"/>
             <div className={styles.authorInfo}>
                <strong>Antônio Carlos</strong>
                <span>Web Developer</span>
             </div>
            </div>

            <time title="28 de maio ás 14:39h" dateTime="2024-05-28 14:39:00">Publicado há 1h</time>
            </header>

        <div className={styles.content}>
            <p>Fala galeraa</p>
            <p>Acabei de subir mais um projeto no github</p>
            <p><a href="">jane.disign/doctorcar</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>
           </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
             placeholder='Deixe um comentário'
            />
            <footer>
            <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>

        </article>
    )

}
