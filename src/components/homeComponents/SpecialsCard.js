export default function SpecialsCard(props) {
    return (
        <div className="flex flex-col bg-lightColor shadow-md rounded-lg w-[75%] sm:w-[30%] mx-auto">
            <img src={props.imgsrc} alt={props.title} height={"230px"} className="h-52 rounded-tr-lg rounded-tl-lg object-cover" />
            <div className="p-6 grow flex flex-col">
                <header className="flex justify-between mb-8">
                    <h3 className="text-cardTitle">{props.title}</h3>
                    <span className="text-secDarkColor">{props.price}</span>
                </header>
                <p className="text-darkColor mb-8 grow">{props.description}</p>
                <button className="btn-tertiary w-max">
                    Order a delivery
                    <img src="./icons/moto.png" alt="delivery" width={"18px"} height={"18px"} />
                </button>
            </div>
        </div>
    )
}