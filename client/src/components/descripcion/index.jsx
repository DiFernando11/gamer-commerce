import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonAddCarts from "../buttonAddCarts";
import styles from "../descripcion/index.module.css";

export default function Descripcion() {
  const [readMore, setReadMore] = useState(false);
  const game = useSelector((state) => state.Details);
  const gameDescriptionLower = game?.description?.slice(0, 280);
  const gameDescriptionMore = game?.description?.slice(
    0,
    game?.description?.length
  );
  const difficult =
    game?.points || game?.totalreview
      ? Math.round(game?.points / game?.totalreview)
      : 1;
  return (
    <div className={styles.containerpadre}>
      <div className={styles.colum1}>
        <span className={styles.totalReviewText}>TOTAL REVIEWS</span>
        <div className={styles.information}>
          <i className={`bi bi-star-fill ${styles.activeStarsReviewsGame}`}></i>
          <i
            className={`bi bi-star-fill ${
              difficult >= 2 ? styles.activeStarsReviewsGame : ""
            }`}
          ></i>
          <i
            className={`bi bi-star-fill ${
              difficult >= 3 ? styles.activeStarsReviewsGame : ""
            }`}
          ></i>
          <i
            className={`bi bi-star-fill ${
              difficult >= 4 ? styles.activeStarsReviewsGame : ""
            }`}
          ></i>
          <i
            className={`bi bi-star-fill ${
              difficult >= 5 ? styles.activeStarsReviewsGame : ""
            }`}
          ></i>
          <div className={styles.containerButtonPurchased}>
            {game.with_discount ? <div className={styles.with_discount}>
          <span className={styles.price_discount}>U$D {game.price}.00</span>
          <span className={styles.price}>{Number.isInteger(game.discount)
												? `U$D ${game.discount}.00`
												: `U$D ${game.discount}0`}</span>
        </div> : <span className={styles.price}>U$D ${game.price}.00</span>}
            <ButtonAddCarts nameGame={game} />
          </div>
        </div>

        <div>
          <h1>Description of game</h1>
          <div className={styles.containerFlexRead}>
            <p>
              {game.description
                ? !readMore
                  ? `${gameDescriptionLower}...`
                  : gameDescriptionMore
                : "Set during the World War II, this isometric tactic game offers the player to lead an Allied commando squad through a series of secret military operations. The game was inspired by war movies like Bridge on the River Kwai and Saving Private Ryan, and some missions are set at the background of the real events shown in this films, such as the Battle of Normandy. There are ten main missions, not counting tutorial, and ten bonus missions are unlocked after you complete the storyline. Most missions require sneaking, camouflaging, and stealth action. The maps are not covered by the fog of war, so you can study them beforehand to thoroughly plan the squad’s movements. For each mission, you're given a predetermined set of characters. Each member of the squad is named after his or her specialization, such as Sniper, Diver, or Seductress, and has a set of unique abilities and a colorful personality. Spy, for example, can disguise himself as an enemy officer to send the guards away, while Sapper can set and disable landmines. Most characters are from the original Commandos, but there are also new members, such as a sneaky Thief and Whiskey, the squad’s bull terrier. The variety of characters’ skills was also increased to make them more versatile."}
            </p>
            {!readMore ? (
              <span
                className={styles.readMore}
                onClick={() => setReadMore(true)}
              >
                Read more...
              </span>
            ) : (
              <span
                className={styles.readMore}
                onClick={() => setReadMore(false)}
              >
                Read less...
              </span>
            )}
          </div>
        </div>
        <h1> Categories </h1>
        <div className={styles.containerCategoriesGames}>
          {game.genres?.map((genre, index) => (
            <p key={index}>{genre.name}</p>
          ))}
        </div>
      </div>

      <div className={styles.colum3}>
        <h1> Requirements </h1>

        <div className={styles.row2}>
          <p>
            {game.requirements_rec
              ? game.requirements_min
              : "Rec: OS: Windows 7 SP1 64-bit or Windows 8.1 64-bit or Windows 10 64-bit Processor: Intel Core i5 or equivalent Memory: 4 GB RAM Graphics: NVIDIA® GeForce® GTX 550 or ATI™ Radeon™ HD 6XXX or higher DirectX: Version 11 Storage: 25 GB available space Additional Notes: Minimum requirements may change during development."}
          </p>
          <p>
            {game.requirements_rec
              ? game.requirements_rec
              : "Minimum: OS: Windows 7 SP1 64-bit or Windows 8.1 64-bit or Windows 10 64-bit Processor: Intel Core i5 or equivalent Memory: 4 GB RAM Graphics: NVIDIA® GeForce® GTX 550 or ATI™ Radeon™ HD 6XXX or higher DirectX: Version 11 Storage: 25 GB available space Additional Notes: Minimum requirements may change during development."}
          </p>
        </div>
      </div>
    </div>
  );
}
