

const HomeCard = (props1) => {
  return (
    <>
      <div className=" p-3  ">
        <div className="bg-[#1483b8] p-3  overflow-hidden h-64 ">
          <img src={props1.Image1} alt="dress" className="h-40 w-44" />
          <p className="font-['Assistant']  text-base font-semibold flex items-center justify-center  text-white">{props1.Name}</p>
          <p className="font-['Assistant']  flex items-center justify-center font-black text-white text-2xl">{props1.Offer}</p>
          <p className="font-['Assistant'] flex items-center justify-center text-base  text-white">{props1.Comment}</p>
        </div>
      </div>
    </>
  )
}

export default HomeCard