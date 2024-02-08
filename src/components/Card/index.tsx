import "./card.css";
import { ICardParams } from "./models/card.model";

export function Card(params: ICardParams) {
  //!CODIGO

  return (
    <div className="card">
      <h3>
        {params.name} - {params.title}
      </h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sed soluta
        asperiores, placeat similique laboriosam animi incidunt magnam eum porro
        voluptate architecto culpa quae delectus laborum? Facere beatae corrupti
        recusandae.
      </p>
      <img width={100} src={params.image} alt="" />
    </div>
  );
}
