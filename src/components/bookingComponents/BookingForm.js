import { useState } from "react";

export default function BookingForm(props) {
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        time: "",
        guests: "",
        occasion: ""
    })

    const handleSubmit = (e) => { 
		e.preventDefault()
		setFormData({
            date: "",
            time: "",
            guests: "",
            occasion: ""
        })
		props.submitForm(formData)
	}

    const timesOptions = props.state.availableTimes ? props.state.availableTimes.map(time => {
        return <option key={time}>{time}</option>;
    }) : [];

    return (
        <form className="flex flex-col grow" onSubmit={handleSubmit}>
            <label htmlFor="res-date" className="text-sectionCategories text-darkColor mt-5 mb-2">Choose date</label>
            <input 
                type="date" 
                id="res-date"
                value={formData.date}
                onChange={e => {
                    setFormData({
                        ...formData,
                        date: e.target.value
                    });
                    props.dispatch(e.target.value)
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor focus-visible:outline-0"
            />
            <label htmlFor="res-time" className="text-sectionCategories text-darkColor mt-5 mb-2">Choose time</label>
            <select 
                id="res-time"
                value={formData.time}
                onChange={e => {
                    setFormData({
                        ...formData,
                        time: e.target.value
                    });
                    console.log(formData);
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor"
            >
                {timesOptions}
            </select>
            <label htmlFor="guests" className="text-sectionCategories text-darkColor mt-5 mb-2">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" max="10" 
                id="guests"
                value={formData.guests}
                onChange={e => {
                    setFormData({
                        ...formData,
                        guests: e.target.value
                    });
                    console.log(formData);
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor focus-visible:outline-0"
            />
            <label htmlFor="occasion" className="text-sectionCategories text-darkColor mt-5 mb-2">Occasion</label>
            <select 
                id="occasion"
                value={formData.occasion}
                onChange={e => {
                    setFormData({
                        ...formData,
                        occasion: e.target.value
                    });
                    console.log(formData);
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor"
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input 
                type="submit" 
                value="Make Your reservation" 
                className="btn-primary mt-8 mx-auto"
                data-testid="submitButton"
            />
        </form>
    );
}