import coin_bg from "../assets/bg.jpg";

const Coins = () => {
  return (
    <>
      <div className="relative flex items-center w-screen h-screen justify-center">
        {/* BG */}
        <img
          src={coin_bg}
          alt=""
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          className="w-full h-full bg-cover absolute top-0 left-0 z-[1]"
        />
        {/* END BG */}
        <section className="z-[2]">
          <div className="px-[10px] py-[15px] justify-center text-center border-2  bg-white rounded-[90px]">
            500 Rolls + 300 coins
          </div>
          <br />
          <button className="px-[10px] py-[15px] bg-amber-300 rounded-4xl border-2 border-black/40 text-6xl text-black">
            $149.99
            <button className="text-2xl text-red-600 relative bottom-5 line-through rotate-[45deg]">
              $199.99
            </button>
          </button>
        </section>
      </div>
    </>
  );
};

export default Coins;
