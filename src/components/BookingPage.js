export default function BookingPage() {
    return (
        <main>
            <section className="bg-mainColor p-4 lg:py-6">
                <div className="relative m-auto max-w-4xl">
                    <h1 className="text-lightColor text-40 flex flex-col mb-4">
                        <span className="text-accentColor text-64">Booking</span>
                    </h1>
                    <p className="text-white w-1/2 max-w-60 mb-12">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className="btn-primary">Reserve a Table</button>
                </div>
            </section>
        </main>
    );
}