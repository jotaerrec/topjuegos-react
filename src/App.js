import React from "react";
import { useEffect, useState } from "react";
import data from "./Data/Juegos.json";
import { Card } from "./Components/Cards";
import { Paginacion } from "./Components/Paginacion";
import styles from "./styles.module.scss";

export default function App() {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(3);
  const maximo = Math.ceil(data.length / porPagina);

  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <div className={styles.containerTittle}>
        <h1>
          TOP 100 JUEGOS{" "}
          <span>
            by: <a href="https://twitch.tv/principeszn"> PrincipeSZN </a>
          </span>
        </h1>
      </div>
      <div className={styles.containerGames}>
        {data
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((game) => {
            return <Card data={game} />;
          })}
      </div>
      <div className={styles.Paginacion}>
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </div>
  );
}
