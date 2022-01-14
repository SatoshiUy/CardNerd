import Cards from "../../assets/desktop/isocard.svg"
const Slogan = () => {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Earn <span className="dark:text-purple-300 text-purple-600">More</span>
        </p>
        <p className="">Pay Less</p>
        <button className="text-white text-20 px-6 py-[6px] font-bold bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-500 md:text-24 md:py-[8px]">Start</button>
      </div>
      <div className="mt-10 flex justify-center md:absolute md:right-[-6rem]">
        <img src={Cards} alt="" />
      </div>
    </section>
  );
}
 
export default Slogan;