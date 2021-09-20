import React from "react";
import styles from './Post.module.css'


class Post extends React.Component{
    render() {
        return(
            <>
                <div className={styles.Post}>

                    <div className={styles.sort}>
                        сортировать:
                    </div>

                    <div>
                        <div>

                        </div>

                        <div>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Post;