import React from "react";
import styles from './Account2.module.css';

class Account2 extends React.Component{
    render() {
        return (
            <>
                <div className={styles.account}>

                    <div className={styles.personal_account}>
                        <p>
                            Личный кабинет профиля:
                        </p>
                        <button>
                            Подать обьявление:
                        </button>
                    </div>

                    <div className={styles.button}>
                        Поля отмеченные красной звездочкой(<span>*</span>) являются обьязательным для заполнения.
                    </div>

                    <div className={styles.account_name}>

                        <div>
                            <p style={ {marginTop: "1px", marginLeft:"100px"} }>* Название товара:</p>
                            <input className={styles.padding} type="text"/>
                        </div>

                        <div>
                            <p style={{marginLeft:"177px"}}>* Адрес:</p>
                            <input className={styles.padding} type="text"/>
                        </div>

                        <div>
                            <p style={{marginLeft:"162px"}}>* Укажите:</p>
                            <input className={styles.padding2} type="text" style={{marginRight:'190px'}}/>
                        </div>

                        <div>
                            <input className={styles.padding2} type="text" style={{marginLeft:"258px"}}/>
                        </div>

                        <div>
                            <input className={styles.padding2} type="text" style={{marginLeft:"258px"}}/>
                        </div>

                        <div>
                            <p style={{marginLeft:"186px"}}>Бренд:</p>
                            <input className={styles.padding} type="text"/>
                        </div>

                        <div>
                            <p style={{marginLeft:"180px"}}>Состав:</p>
                            <input className={styles.padding} type="text"/>
                        </div>

                        <div>
                            <p style={{marginLeft:"63px"}}>Страна производителя:</p>
                            <input className={styles.padding} type="text"/>
                        </div>

                        <div>
                            <p style={{marginLeft:"60px"}}>Длина, ширина, высота:</p>
                            <input className={styles.padding} type="text"/>
                        </div>

                        <div style={{height:'186px'}}>
                            <div style={{width:'170px',marginLeft:'70px', border:'1px solid white'}}><p style={{marginBottom:'160px'}}>* Укажите дату акции:</p></div>
                            <div style={{width:'370px', height:'186px' , display:'flex',flexWrap:'wrap'}}>
                                <div style={{height:'90px',display:'flex',flexWrap:'wrap'}}>
                                    <p style={{marginLeft:'93px', fontWeight:'bold', color:'black'}}>Дата публикации:</p>
                                    <input type="Month"/>
                                    <input type="time"/>
                                </div>
                                <div style={{height:'90px',display:'flex',flexWrap:'wrap'}}>
                                    <p style={{marginLeft:'33px', fontWeight:'bold',color:'black'}}>Дата отмены публикации:</p>
                                    <input type="Month"/>
                                    <input type="time"/>
                                </div>
                            </div>
                        </div>

                        <div style={{height:'100px'}}>
                            <p style={{marginBottom:'60px', marginLeft:'20px'}}>Описание до 200 символов:</p>
                            <input className={styles.padding} style={{paddingBottom:'37px', paddingTop:'20px'}} type="text"/>
                        </div>

                        <div>
                            <p>* Загрузка фото:</p>
                            <input type="file"/>
                        </div>

                        <div>
                            <p style={{marginLeft:'140px'}}>* Категория:</p>
                            <input className={styles.padding} type="text" min/>
                        </div>

                    </div>

                    <button style={{padding:'15px 50px 15px 50px', marginTop:'70px', marginLeft:'500px', color:'white', fontWeight:'bold', backgroundColor:'red', borderRadius:'5px'}}>
                        опубликовать
                    </button>

                </div>

            </>
        );
    }
}

export default Account2;