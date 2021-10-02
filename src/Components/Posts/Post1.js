import React from "react";
import styles from "./Post1.module.css";
import img1 from "./../../img/6 страница внутри каталога с товарами.png";
import price2 from "./../../img/1800 сом 2499 сом            -20%.png";
import tc2 from "./../../img/ЦУМ 3 эт. Бутик №7.png";
import img2 from "./../../img/6 страница внутри каталога с товарами2.png";
import price3 from "./../../img/2200 сом 3099 сом            -30%.png";
import tc1 from "./../../img/ЦУМ 3 эт. Бутик №7 копия 2.png";
import img3 from "./../../img/6 страница внутри каталога с товарами3.png";
import price1 from "./../../img/1500 сом 2199 сом            -20%.png";
import tc3 from "./../../img/Азия Мол 2 эт. Бутик №8.png";
import img4 from "./../../img/6 страница внутри каталога с товарами4.png";
import img5 from "./../../img/6 страница внутри каталога с товарами5.png";
import img6 from "./../../img/6 страница внутри каталога с товарами6.png";
import Sort from "../Sort/Sort";
import plus from "../../img/Слой 50.png";

class Post1 extends React.Component{
    render() {
        return(
            <>
                <div>

                    <Sort/>

                    <div className={styles.catalog_right}>
                        <div><span>по цене:</span></div>
                        <div><span>по скидке:</span></div>
                    </div>

                    <div className={styles.post}>

                        <div>
                            <img src={img1} alt=""/>
                            <img src={price2} alt=""/>
                            <p>Женские брюки с высокой <br/> талией</p>
                            <img src={tc2} alt=""/>
                        </div>

                        <div>
                            <img src={img2} alt=""/>
                            <img src={price3} alt=""/>
                            <p>Женское Карандаш с <br/>высокой талией</p>
                            <img src={tc1} alt=""/>
                        </div>

                        <div>
                            <img src={img3} alt=""/>
                            <img src={price1} alt=""/>
                            <p>Женские длинные брюки, <br/> модель для йоги</p>
                            <img src={tc3} alt=""/>
                        </div>

                        <div>
                            <img src={img4} alt=""/>
                            <img src={price2} alt=""/>
                            <p>Женские брюки с высокой <br/> талией</p>
                            <img src={tc3} alt=""/>
                        </div>

                        <div>
                            <img src={img5} alt=""/>
                            <img src={price3} alt=""/>
                            <p>Женское Карандаш с <br/>высокой талией</p>
                            <img src={tc1} alt=""/>
                        </div>

                        <div>
                            <img src={img6} alt=""/>
                            <img src={price1} alt=""/>
                            <p>Женские длинные брюки, <br/> модель для йоги</p>
                            <img src={tc3} alt=""/>
                        </div>

                    </div>

                    <div className={styles.plus}>
                        <div className={styles.circle}>
                            <img src={plus} alt=""/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Post1;