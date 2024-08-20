const Card = (props) => {
    return (
        <>
            <div className=" p-3  ">
                <div className="bg-gray-100 p-3 rounded-lg overflow-hidden">
                    <img src={props.Image} alt="dress" className="h-auto" />
                </div>
                <p className="font-['Assistant']  text-base font-bold">{props.CompanyName}</p>
                <p className="font-['Assistant'] text-sm  text-gray-600">{props.ProductName}</p>
                <p className="font-bold text-sm">{props.Price}</p>
            </div>
        </>
    )
}

export default Card;