export default function TestimonialsCard(props) {
    return (
        <div className="flex flex-col p-7 bg-white shadow-md rounded-lg w-3/4 sm:w-full sm:max-w-[45%] lg:max-w-[22.5%] mx-auto">
            <div className="flex items-center gap-1 mb-3">
                <img src="./icons/star.png" alt="stars" />
                <span className="text-lead">{props.rating}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
                <img src={props.photosrc} alt={props.name} width={"48px"} height={"48px"} className="rounded-full object-cover h-12" />
                <span className="text-cardTitle">{props.name}</span>
            </div>
            <p>{props.review}</p>
        </div>
    )
}