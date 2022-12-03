import { useEffect, useState } from "react";
import { Aula14Item } from "../../components/aula14";
import "./style.scss";

export function Aula14() {
  const [listComments, setListComments] = useState([]);

  const getApiData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const jsonData = await data.json();
    setListComments(jsonData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="aula14">
      <h1>Comentários</h1>
      <section className="aula14-list-comments">
        <ul>
          {listComments.map((comment) => {
            return <Aula14Item
                     id={comment.id}
                     post={comment} />;
          })}
        </ul>
      </section>
    </div>
  );
}
