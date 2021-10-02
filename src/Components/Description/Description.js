import React from "react";
import styles from './Description.module.css'
import Post1 from "../Posts/Post1";
import plus from './../../img/Слой 50.png';
import Sort from "../Sort/Sort";
import Post2 from "../Post/Post2";
import Post3 from "../Post/Post3";


class Description extends React.Component{
    render() {
        return(
            <>
                <div className={styles.Post}>

                    <div className={styles.description}>

                        <div className={styles.description_text}>

                            <div className={styles.gg}>

                            </div>

                            <div className={styles.catalog_left}>
                                <p>Каталог: </p>
                            </div>

                            <div>

                                <p>Бельё</p>
                                <a href="">Боди и корсеты</a>
                                <a href="">Бюстгалтеры и бьстье</a>
                                <a href="">Колготки и чулки</a>
                                <a href="">Термобелье</a>
                                <a href="">Майки и трусы</a>

                            </div>
                            <div>
                                <p>Блузки и рубашки</p>
                                <p style={ { color: 'red' } } >+ Брюки</p>
                                <p>Верхняя одежда</p>
                                <a href="">Анарок</a>
                                <a href="">Ветровка</a>
                                <a href="">Дубленка</a>
                                <a href="">Куртка</a>
                                <a href="">Пальто</a>
                                <a href="">Плащ</a>
                                <a href="">Пуховик</a>
                                <a href="">Шуба</a>
                            </div>
                            <div>
                                <p>Водолазки</p>
                                <p>Джемперы и кардиганы</p>
                                <p>Джинсы</p>
                                <p>Жилеты</p>
                                <p>Кардиганы</p>
                                <p>Комбинизоны</p>
                                <p>Костюмы</p>
                                <p>Купальные костюмы</p>
                                <p>Лонгсливы</p>
                                <p>Мантии</p>
                                <p>Пиджаки и жакеты</p>
                                <p>Платья и сарафаны</p>
                                <p>Религиозная</p>
                                <a href="">Ислам</a>
                                <a href="">Христиан</a>
                            </div>
                            <div>
                                <p>Спорт</p>
                                <p>Свитшоты</p>
                                <p>Свадебные платья</p>
                                <p>Толстовки</p>
                                <p>Туники</p>
                                <p>Футболки и топы</p>
                                <p>Худи</p>
                            </div>

                        </div>

                        {/*<Post1/>*/}
                        <Post2/>
                        {/*<Post3/>*/}

                    </div>


                </div>
            </>
        )
    }
}

export default Description;