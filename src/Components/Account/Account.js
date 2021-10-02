import React from "react";
import styles from './Account.module.css';

class Account extends React.Component{
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

                    <div className={styles.account_name}>

                        <div className={ styles.left_block}>
                            <p className={styles.p1}>Название магазина или бутика:</p>
                            <p className={styles.p2}>Адрес:</p>
                            <p className={styles.p3}>Номер мобильного телефона:</p>
                            <p className={styles.p4}>Фото магазина или бутика:</p>
                            <p className={styles.p5}>Ваша категория:</p>
                        </div>

                        <div className={styles.right_block}>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text" placeholder={+996555123456}/>
                            <input type="text"/>
                            <input type="text"/>
                        </div>

                    </div>

                </div>

            </>
        );
    }
}

export default Account;