import React from "react";
import styles from './Header.module.css';
import sloy29 from './../../img/Слой 29.png';
import sloy9 from './../../img/Слой 9.png';
import sloy11 from './../../img/Слой 11.png';
import sloy13 from './../../img/Слой 13.png';
import sloy6 from './../../img/Слой 6.png';



class Header extends React.Component{
    render() {
        return(
            <>
                <div className={styles.header}>
                    <div className={styles.frame}>
                        <div className={styles.width_left}>

                            <div className={styles.border1}>
                                <img src={sloy29} className={styles.img} alt=""/>
                                <p className={styles.text}>торговые центры</p>
                            </div>

                            <div className={styles.border2}>
                                <img src={sloy9} className={styles.img} alt=""/>
                                <p className={styles.text}>магазины</p>
                            </div>

                            <div className={styles.border3}>
                                <img src={sloy11} className={styles.img} alt=""/>
                                <p className={styles.text}>мебель</p>
                            </div>

                            <div className={styles.border4}>
                                <img src={sloy13} className={styles.img} alt=""/>
                                <p className={styles.text}>супермаркет</p>
                            </div>

                        </div>

                        <div className={styles.width_right}>

                            <button className={styles.button}>
                                <p>войти</p>
                            </button>

                        </div>
                    </div>

                    <div className={styles.header_bottom}>
                        
                        <div className={styles.header_bottom_left}>
                            <span>
                                каталог:
                            </span>
                        </div>
                        
                        <div className={styles.img3}>
                            <img src={sloy6} alt=""/>
                        </div>
                        
                        <div className={styles.search}>
                            <input type="text"/>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Header;