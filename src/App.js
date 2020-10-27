import React, { useContext } from "react";
import "./styles.css";
import AppProvider from "./ContextProvider";
import { AppContext } from "./ContextProvider";
import SimpleAccordion from "./Acordion";

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <SimpleAccordion />
        <div className="cake">
          <Plate />
          <Cake />
          <Icing />
          <Candle />
        </div>
      </AppProvider>
    </div>
  );
}

function Cake() {
  const { torta } = useContext(AppContext);
  const showCake = torta.show !== "on" ? "" : "layer";
  return (
    <>
      <div
        className={`${showCake} layer-bottom`}
        style={{
          "--color-torta": torta.colorTorta,
          backgroundColor: torta.colorRelleno
        }}
      ></div>
      <div
        className={`${showCake} layer-middle`}
        style={{
          "--color-torta": torta.colorTorta,
          backgroundColor: torta.colorRelleno
        }}
      ></div>
      <div
        className={`${showCake} layer-top`}
        style={{
          "--color-torta": torta.colorTorta,
          backgroundColor: torta.colorRelleno
        }}
      ></div>
    </>
  );
}

function Plate() {
  const { plato } = useContext(AppContext);
  const showPlato = plato.show !== "on" ? "" : "plate";
  return (
    <div
      className={`${showPlato}`}
      style={{ backgroundColor: plato.color, "--color-plato": plato.color }}
    ></div>
  );
}

function Icing() {
  const { nevado } = useContext(AppContext);
  const showNevado = nevado.show !== "on" ? "" : "drip";
  return (
    <>
      <div
        className={nevado.show !== "on" ? "" : "icing"}
        style={{ "--color-nevado": nevado.color }}
      ></div>
      <div
        className={`${showNevado} drip1`}
        style={{ backgroundColor: nevado.color }}
      ></div>
      <div
        className={`${showNevado} drip2`}
        style={{ backgroundColor: nevado.color }}
      ></div>
      <div
        className={`${showNevado} drip3`}
        style={{ backgroundColor: nevado.color }}
      ></div>
    </>
  );
}

function Candle() {
  const { vela } = useContext(AppContext);
  const showVela = vela.show !== "on" ? "" : "flame";
  return (
    <>
      <div
        className="candle"
        style={{ backgroundColor: vela.color, "--color-vela": vela.color }}
      >
        <div className={`${showVela}`}></div>
      </div>
    </>
  );
}
