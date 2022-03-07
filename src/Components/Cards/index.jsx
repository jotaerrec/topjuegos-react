import React, { useState } from "react";
import styles from "./styles.module.scss";

export const Card = ({ data }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameDetails}>
        <div className={styles.gameData}>
          <h1>
            <span>{data.orden}- </span>
            {data.Nombre}
          </h1>

          <h4>
            <span>{data.Puntaje}</span>
            {data.Genero}
          </h4>
        </div>
        <p>{data.Comentario}</p>
      </div>
      <iframe
        width="350"
        height="300"
        src={"https://www.youtube.com/embed/" + data.Gameplay.slice(17)}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
