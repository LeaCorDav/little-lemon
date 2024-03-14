import { Link } from "react-router-dom"
import {specialsData, testimonialsData} from "./homeComponents/Data.js";
import SpecialsCard from "./homeComponents/SpecialsCard";
import TestimonialsCard from "./homeComponents/TestimonialsCard";


export default function Home() {
    const specialsHighlights = specialsData.map(special => {
        return <SpecialsCard 
            imgsrc={special.imgsrc} 
            title={special.title} 
            price={special.price}
            description={special.description}
            key={special.title}
        />
    })
    const testimonials = testimonialsData.map(testimonial => {
        return <TestimonialsCard 
            rating={testimonial.rating} 
            photosrc={testimonial.photosrc} 
            name={testimonial.name}
            review={testimonial.review}
            key={testimonial.name}
        />
    })

    return (
        <main>
            <section className="bg-mainColor p-4 lg:py-6">
                <div className="relative m-auto max-w-4xl">
                    <h1 className="text-lightColor text-40 flex flex-col mb-4">
                        <span className="text-accentColor text-64">Little Lemon</span>
                        Chicago
                    </h1>
                    <p className="text-white w-1/2 max-w-60 mb-12">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" className="btn-primary">Reservations</Link>
                    <img src="/img/hero-img.jpg" alt="hero" height={"380px"} width={"350px"} className="object-cover w-5/12 max-w-[352px] h-full sm:h-96 max-h-60 sm:max-h-96 rounded-2xl shadow-lg absolute top-1/3 right-0 sm:top-0"/>
                </div>
            </section>

            <section className="px-4 py-8 sm:py-20">
                <div className="m-auto max-w-4xl">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-subtitle">Specials</h2>
                        <button className="btn-primary">Online Menu</button>
                    </div>

                    <div className="flex justify-between gap-8 flex-wrap">
                        {specialsHighlights}
                    </div>
                </div>
            </section>

            <section className="bg-lightColor px-4 py-8 sm:py-20">
                <div className="m-auto max-w-4xl">
                    <h2 className="text-subtitle mb-16">Testimonials</h2>
                    <div className="flex justify-between gap-4 flex-wrap">
                        {testimonials}
                    </div>
                </div>
            </section>

            <section id="About" className="px-4 py-8 sm:py-20">
                <div className="relative m-auto max-w-4xl">
                    <h2 className="text-subtitle text-mainColor flex flex-col mb-4 sm:mb-12">
                        Little Lemon
                        <span className="text-sectionTitle text-darkColor">Chicago</span>
                    </h2>
                    <img 
                        src="./img/Mario and Adrian A.jpg" 
                        alt="Little Lemon at Chicago"
                        width={"256px"}
                        loading="lazy"
                        className="mb-4 w-full object-cover h-64 rounded-2xl shadow-lg sm:w-64 sm:absolute top-0 right-0"
                    />
                    <img 
                        src="./img/Mario and Adrian B.jpg" 
                        alt="Little Lemon at Chicago"
                        width={"256px"}
                        loading="lazy"
                        className="hidden lg:block absolute bottom-[-25%] right-40 object-cover h-40 rounded-2xl shadow-lg"
                    />
                    <p className="sm:max-w-[50%]">Welcome to Little Lemon, nestled in the heart of Chicago. Our cozy eatery offers a delightful blend of comfort and innovation, where each dish is crafted with care and bursting with flavor. From our signature lemon-infused specialties to classic comfort food favorites, there's something for everyone to savor. Join us and experience the zest of Little Lemon, where every bite leaves a lasting impression.</p>
                </div>
            </section>
        </main>
    );
}