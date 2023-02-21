import styles from '@/styles/hamburger.module.scss'
import { useContext} from 'react';
import Mycontext from './Context';
function Hamburger() {
    const { isHover, setIsHover } = useContext(Mycontext);

    const hamburgerClick = () => {
        setIsHover(!isHover);
    }
    return (
        <div className={`fixed left-0 top-0 w-20 h-full`} onClick={hamburgerClick}>
            <button className={"flex flex-col justify-center items-center w-full h-full"}>
                <div className={styles.hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.button}>カテゴリー</div>
            </button>
        </div>
    );
}

export default Hamburger;