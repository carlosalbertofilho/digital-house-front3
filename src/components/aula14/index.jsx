import "./style.scss";

export function Aula14Item(props) {
  return (
    <li>
      <h1>{props.post.name}</h1>
      <span> By {props.post.email} </span>
      <p>{props.post.body}</p>
    </li>
  );
}
