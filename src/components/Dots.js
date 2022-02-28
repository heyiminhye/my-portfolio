const Dot = ({ num, scrollIndex }) => {
  return (
    <div
      className="dot"
      style={{
        width: 10,
        height: 10,
        margin: 5,
        border: "1px solid white",
        boxShadow: "1px 1px 5px grey",
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? "white" : "transparent",
        transitionDuration: 1000,
        transition: "background-color 0.5s",
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }) => {
  return (
    <div style={{ position: "fixed", top: "35%", right: 50 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 200,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex} href="#home"></Dot>
        <Dot num={2} scrollIndex={scrollIndex} href="#introduce"></Dot>
        <Dot num={3} scrollIndex={scrollIndex} href="#skills"></Dot>
        <Dot num={4} scrollIndex={scrollIndex} href="#project"></Dot>
        <Dot num={5} scrollIndex={scrollIndex} href="#contact"></Dot>
      </div>
    </div>
  );
};

export default Dots;
