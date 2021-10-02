import React from "react";
import styles from './Post2.module.css';
import img1 from './../../img/7 страница одного товара внутри каталога.png';

class Post2 extends React.Component{
     render() {
         return(
             <>
                 <div className={styles.post}>

                     <div className={styles.back}>
                         <p>назад</p>
                     </div>

                     <div className={styles.img}>
                         <div className={styles.imgLeft}>
                             <img src={img1} alt=""/>
                             <p style={{
                                 color: 'grey',
                                 fontWeight: 'bold',
                                 fontSize: '22px',
                                 marginTop: '1px',
                                 marginLeft: '55px'
                             }}>До конца акции осталось:</p>
                             <div>
                                 <p>10д. 12ч.</p>
                             </div>
                         </div>

                         <div className={styles.imgDescription}>
                             <p style={{fontWeight: "bold", fontSize: '22px', marginTop: '10px'}}>Комплект нижнего белья
                                 от LISE CHARMEL</p>
                             <div className={styles.up}>
                                 <div className={styles.up_div}><p>2000 сом</p></div>
                                 <div className={styles.up_div} style={{textDecorationLine: "line-through"}}><p>2899
                                     сом</p></div>
                                 <div style={{
                                     width: '66px',
                                     height: '40px',
                                     fontSize: '21px',
                                     fontWeight: 'bold',
                                     background: 'red',
                                     borderRadius: '5px',
                                     color: 'white',
                                     marginLeft: '20px'
                                 }}>
                                     <p style={{marginTop: '4px', marginLeft: '7px'}}>-20%</p>
                                 </div>
                             </div>
                             <div className={styles.middle}>
                                 <p style={{color: 'black', fontSize: '21px'}}>Азия Мол 3 эт.Бутик №7</p>
                                 <div>
                                     <p>Бренд:<span>NASHA</span></p>
                                 </div>
                                 <div>
                                     <p>Сезон:<span>Лето</span></p>
                                 </div>
                                 <div>
                                     <p>Состав:<span>Полиэстр 40%</span></p>
                                 </div>
                                 <div>
                                     <p>Страна производитель:<span>Италия</span></p>
                                 </div>
                             </div>
                             <div className={styles.bottom}>
                                 <p style={{
                                     marginBottom: '15px',
                                     fontSize: '20px',
                                     fontWeight: 'bold',
                                     color: '#bbb4b4'
                                 }}>Описание товара:</p>
                                 <p>Свойства полиэстра:</p>
                                 <p>сверхноский:</p>
                                 <p>устойчивый к световому воздействию:</p>
                                 <p>устойчив к действию органических и миниральных кислот:</p>
                                 <p>не меняется:</p>
                                 <p>легко стирается:</p>
                                 <p>не садиться:</p>
                                 <p>впитывает влагу, быстро высыхает.</p>

                             </div>
                         </div>
                     </div>
                 </div>
             </>
        )
     }
}

export default Post2;