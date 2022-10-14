import React from "react";
import styles from "./index.module.css";

function LiveVideoGame() {
  return (
    <section className={styles.sectionVideoGame}>
      <div className={styles.containerLiveVideoGame}>
        <img
          className={styles.videosGames}
          src="https://i.ytimg.com/vi/MNC6KNdCp58/maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.videosGames}
          src="https://i.ytimg.com/vi/6lUwKdgNfnI/maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.videosGames}
          src="https://i.ytimg.com/vi/gtO3gi--rTw/maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.videosGames}
          src="https://i.ytimg.com/vi/5GJ75yc70Fo/maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.videosGames}
          src="https://i.ytimg.com/vi/gLmTEieQ_9s/maxresdefault.jpg"
          alt=""
        />
        <img
          className={styles.videosGames}
          src="https://i.ytimg.com/vi/bCrtf0zhgKQ/maxresdefault.jpg"
          alt=""
        />
      </div>

      {/* <video src="">
          <source />
      </video>
      <video src="">
          <source />
      </video>
      <video src="">
          <source />
      </video>
      <video src="">
          <source />
      </video>
      <video src="">
          <source />
      </video>
      <video src="">
          <source />
      </video> */}
    </section>
  );
}

export default LiveVideoGame;
