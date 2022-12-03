import { useEffect, useState } from "react";
import "./style.scss";

export function Aula13() {
  const [pedido, setPedido] = useState(false);

  const mostraPedido = () => {
    setPedido(!pedido);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      console.log("Espera 2 segundos");
      mostraPedido();
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <main className="aula13-component">
      <h1 className="title-wrapper">
        Seu Pedido: {pedido ? "Pizza" : ""}
      </h1>
      <button onClick={mostraPedido}>Cancelar Pedido</button>
    </main>
  );
}
