interface IParamsConditional {
  counter: number;
}

export const Conditional = (params: IParamsConditional) => {
  // let templateText = <></>;

  // if (params.counter > 20) {
  //   templateText = <p>Es mayor a 20</p>;
  // } else {
  //   templateText = <p>No es mayor a 20</p>;
  // }

  return (
    <>
      <h2>Conditional</h2>
      {/* {templateText} */}

      {params.counter > 20 ? <p>Es mayor a 20</p> : <p>No es mayor a 20</p>}
      {params.counter > 30 && <b>Es mayor a 30</b>}
    </>
  );
};
