import { useEffect, useState } from "react";
import "./style.scss";

export function Aula13() {
  const [pedido, setPedido] = useState(false);

  const excluirPedido = () => {
    pedido
      ? alert("Seu pedido foi cancelado")
      : alert("Vc não tem pedido cadastrado");
    setPedido(false);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      console.log("Espera 2 segundos");
      setPedido(true);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <main className="aula13-component">
      <h1 className="title-wrapper">Seu Pedido: {pedido ? "Pizza" : ""}</h1>
      <button onClick={excluirPedido}>Cancelar Pedido</button>
    </main>
  );
}
