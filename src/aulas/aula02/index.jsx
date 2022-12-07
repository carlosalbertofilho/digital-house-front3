import { MesaAula05 } from "../MesaAula05";
import "./styles.scss";

export const Aula02 = () => {
  const pList = [
    {id: 1, p: "Header" },
    {id: 2, p: "Banner" },
    {id: 3, p: "Buttons" },
    {id: 4, p : "Plans Cards" },
    {id: 5, p: "Sections" },
    {id: 6, p: "Accordion-Container - Perguntas Frequentes" },,
    {id: 7, p: "Footer" },
  ];

  return (
    <main>
      <h1>Segunda Aula</h1>
      <h2>
        Site -{" "}
        <a href={"https://www.starplus.com/en-br"} target={"_blank"}>
          Star+
        </a>{" "}
      </h2>
      <br />
      <h3>COMPONENTES DA PÁGINA</h3>
      <ul>
        {pList.map((list) => {
          return <MesaAula05
                   key={list.id}
                   item={list} />;
        })}
      </ul>
    </main>
  );
};
