import styles from '@/styles/side-menu.module.scss'
import { useContext } from 'react';
import Mycontext from './Context';

function SideMenu() {
    const { isHover, setIsHover } = useContext(Mycontext);
    return (
        <div className={isHover ? styles.open : styles.close}>
            <div className={styles.wrap}>sideMenuß</div>
            <ul></ul>
        </div>
    );
}

export default SideMenu;