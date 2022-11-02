import React from "react";
import styles from "./index.module.css";

function LiveVideoGame() {
  let unshuffled = [
    "https://cdn.akamai.steamstatic.com/steam/apps/256906179/movie480_vp9.webm?t=1663275402",
    "https://cdn.akamai.steamstatic.com/steam/apps/256913294/movie480_vp9.webm?t=1666907098",
    "https://cdn.akamai.steamstatic.com/steam/apps/256761600/movie480.webm?t=1568120227",
    "https://cdn.akamai.steamstatic.com/steam/apps/256848978/movie480_vp9.webm?t=1629989890",
    "https://cdn.akamai.steamstatic.com/steam/apps/256902673/movie480_vp9.webm?t=1661436561",
    "https://cdn.akamai.steamstatic.com/steam/apps/256797799/movie480_vp9.webm?t=1598035779",
    "https://cdn.akamai.steamstatic.com/steam/apps/256902721/movie480_vp9.webm?t=1661522353",
    "https://cdn.akamai.steamstatic.com/steam/apps/256911391/movie480_vp9.webm?t=1666108392",
    "https://cdn.akamai.steamstatic.com/steam/apps/256845756/movie480_vp9.webm?t=1646817755",
    "https://cdn.akamai.steamstatic.com/steam/apps/256658589/movie480.webm?t=1528288687",
    "https://cdn.akamai.steamstatic.com/steam/apps/256913280/movie_max_vp9.webm?t=1666907189",
    "https://cdn.akamai.steamstatic.com/steam/apps/256764626/movie480.webm?t=1572357570",
    "https://cdn.akamai.steamstatic.com/steam/apps/256742028/movie480.webm?t=1549069619",
    "https://cdn.akamai.steamstatic.com/steam/apps/256878957/movie_max_vp9.webm?t=1648158872",
    "https://cdn.akamai.steamstatic.com/steam/apps/256861947/movie480_vp9.webm?t=1646264830",
  ]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 6);

  return (
    <section className={styles.sectionVideoGame}>
      <div className={styles.containerLiveVideoGame}>
        <video className={styles.videosGames} controls autoPlay muted loop>
          <source src={unshuffled[0]} type="video/mp4" />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source src={unshuffled[1]} type="video/mp4" />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source src={unshuffled[2]} type="video/mp4" />
        </video>

        <video className={styles.videosGames} controls autoPlay muted loop>
          <source src={unshuffled[3]} type="video/mp4" />
        </video>

        <video className={`${styles.videosGames} ${styles.videoGamesNotMobile}`} controls autoPlay muted loop>
          <source src={unshuffled[4]} type="video/mp4" />
        </video>

        <video className={`${styles.videosGames} ${styles.videoGamesNotMobile}`}  controls autoPlay muted loop>
          <source src={unshuffled[5]} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default LiveVideoGame;
