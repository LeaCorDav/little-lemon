export default function ConfirmedBooking(props) {

    return (
        <main className="bg-mainColor p-4">
            <div className="relative m-auto max-w-4xl">
                <h1 className="text-accentColor text-64">
                    Reservation Confirmed
                </h1>
                <div className="py-16 text-center">
                    <img 
                        src="./icons/confirmar.png" 
                        alt="confirmed"
                        width={"60px"}
                        className="mx-auto mb-2"
                    />
                    <h2 className="text-secLightColor text-subtitle mb-10">Thank you for reservating with us!</h2>
                    <p className="text-lightColor text-highlight mb-2">We'll send you an email with all the details</p>
                    <p className="text-lightColor">Hope to see you enjoying our meals</p>
                </div>
            </div>
        </main>
    )
}