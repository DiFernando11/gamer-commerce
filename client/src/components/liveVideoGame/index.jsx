import React from "react";
import styles from "./index.module.css";

function LiveVideoGame() {
  return (
    <section className={styles.sectionVideoGame}>
      <div className={styles.containerLiveVideoGame}>
        {/* 
        <iframe
          className={styles.videosGames}
          src="https://www.youtube.com/embed/_CZn-05bc88?autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
        />

        <iframe
          className={styles.videosGames}
          src="https://www.youtube.com/embed/wmNt4Rpc3HU?autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
        />

        <iframe
          className={styles.videosGames}
          src="https://www.youtube.com/embed/p4QG59y6FGE?autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
        />

        <iframe
          className={styles.videosGames}
          src="https://www.youtube.com/embed/W0gea2jLRdY?autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
        />

        <iframe
          className={styles.videosGames}
          src="https://www.youtube.com/embed/s8G8jacm6Mw?autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
        />

        <iframe
          className={styles.videosGames}
          src="https://www.youtube.com/embed/ba9cx77KziY?autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
        /> */}

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256681322/movie480.mp4"
            type="video/mp4"
          />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256667549/movie480.mp4"
            type="video/mp4"
          />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256676833/movie480.mp4"
            type="video/mp4"
          />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256683776/movie480.mp4"
            type="video/mp4"
          />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256681858/movie480.mp4"
            type="video/mp4"
          />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source
            src="https://steamcdn-a.akamaihd.net/steam/apps/256675646/movie480.mp4"
            type="video/mp4"
          />
        </video>

        {/* <img
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
        /> */}
      </div>
    </section>
  );
}

export default LiveVideoGame;
