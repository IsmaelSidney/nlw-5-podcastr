
import styles from "./styles.module.scss";

function Player() {

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>
            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider} />
                    </div>

                    <span>00:00</span>
                </div>
                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="" />
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="" />
                    </button>
                    <button type="button">
                        <img src="/play.svg" className={styles.playButton} alt="" />
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="" />
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="" />
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default Player