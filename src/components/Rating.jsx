import React, { useState } from "react";
import styles from "../styles/Rating.module.css";
import starIconBlank from "../icons/star_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import starIcon from "../icons/star_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.svg";

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const ratingList = [];

  for (let i = 1; i <= ratingValue; i++) {
    ratingList.push(starIcon);
  }

  for (let i = ratingList.length; i < 5; i++) {
    ratingList.push(starIconBlank);
  }

  function assess(index) {
    setRatingValue(index + 1);
  }

  return (
    <div className={styles.rating}>
      <ul className={styles.ratingList}>
        {ratingList.map((starURL, index) => {
          return (
            <li key={index}>
              <img src={starURL} alt="uniqImage" />
            </li>
          );
        })}
      </ul>
      <ul className={styles.descriptionList}>
        {["Ужасно", "Плохо", "Приемлимо", "Хорошо", "Отлично"].map(
          (description, index) => {
            return (
              <li key={index}>
                <button onClick={() => assess(index)}>{description}</button>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Rating;
