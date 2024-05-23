import styles from './Header.module.css'
import IgniteLogo from '../assets/Ignite-simbol.png';

export function Header() {
    return(
        <header className={styles.header}>
       <img src={IgniteLogo} alt="Logo" />
        <strong>Ingnite Feed</strong>
        </header>
        
    );
}