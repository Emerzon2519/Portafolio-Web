import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`Yo soy`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Emerson Chacon",
          "un Programador",
          "un freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
