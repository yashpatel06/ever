import ReactPlayer from "react-player";
// import Ziggo from "../assets/ziggo.svg";
// import IBM from "../assets/IBM.svg";
// import Essent from "../assets/Essent.svg";
// import Philips from "../assets/Philips.svg";
// import Eneco from "../assets/eneco.svg";
// import Vodafone from "../assets/Vodafone.svg";
// import Improvers from "../assets/improvers.svg";
// import Heineken from "../assets/Heineken.svg";

const Awards = () => {
  return (
    <div className="container my-20">
      <h1 className="text-[28px] md:text-[30px] text-center font-semibold">
        Walk Through
      </h1>
      <div className="flex justify-center mt-10">
        <ReactPlayer url={"https://www.youtube.com/watch?v=y1DP1RcQNE0&t=1s"} />
      </div>
      {/* <div className="flex flex-col gap-10 item-center w-full">
        <div className="flex flex-col items-center gap-10 md:gap-20 md:flex-row justify-center">
          <img src={Ziggo} alt="Ziggo" className="w-[150px]" />
          <img src={IBM} alt="IBM" className="w-[150px]" />
          <img src={Essent} alt="Essent" className="w-[150px]" />
          <img src={Philips} alt="Philips" className="w-[150px]" />
        </div>
        <div className="flex flex-col items-center gap-10 md:gap-20 md:flex-row justify-center">
          <img src={Eneco} alt="Eneco" className="w-[150px]" />
          <img src={Vodafone} alt="Vodafone" className="w-[150px]" />
          <img src={Improvers} alt="Improvers" className="w-[150px]" />
          <img src={Heineken} alt="Heineken" className="w-[150px]" />
        </div>
      </div> */}
    </div>
  );
};

export default Awards;
