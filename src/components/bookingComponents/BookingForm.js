import { useState } from "react";

export default function BookingForm(props) {
    const today = new Date().toISOString().split('T')[0]
    const [formData, setFormData] = useState({
        date: today,
        time: "",
        guests: 1,
        occasion: "--- Select an occasion ---"
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
                min={today}
                id="res-date"
                value={formData.date}
                onChange={e => {
                    setFormData({
                        ...formData,
                        date: e.target.value
                    });
                    props.dispatch(e.target.value)
                }}
                className={`p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor focus-visible:outline-0 ${formData.date < today ? "border-b-red-600" : ""}`}
                required
            />
            { 
                formData.date < today ? 
                <p className="text-red-600">Please enter a valid date</p> : "" 
            }
            <label htmlFor="res-time" className="text-sectionCategories text-darkColor mt-5 mb-2">Choose time</label>
            <select 
                id="res-time"
                value={formData.time}
                onChange={e => {
                    setFormData({
                        ...formData,
                        time: e.target.value
                    });
                }}
                className={`p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor ${formData.time === "--- Select a time ---" ? "border-b-red-600" : ""}`}
                required
            >
                {timesOptions}
            </select>
            { 
                formData.time === "--- Select a time ---" ? 
                <p className="text-red-600">Please choose an available time</p> : "" 
            }
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
                }}
                className={`p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor focus-visible:outline-0 ${formData.guests < 1 || formData.guests > 10 ? "border-b-red-600" : ""}`}
                required
            />
            { 
                formData.guests < 1 ? 
                <p className="text-red-600">Please select a valid number of guests between 1 and 10</p> : ""
            }
            { 
                formData.guests > 10 ? 
                <p className="text-red-600">Please contact us via phone call for more than 10 persons reservations</p> : ""
            }
            <label htmlFor="occasion" className="text-sectionCategories text-darkColor mt-5 mb-2">Occasion</label>
            <select 
                id="occasion"
                value={formData.occasion}
                onChange={e => {
                    setFormData({
                        ...formData,
                        occasion: e.target.value
                    });
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor"
            >
                <option>--- Select an occasion ---</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            { 
                formData.occasion != "--- Select an occasion ---" ? 
                <p className="text-mainColor">Feel free to contact us if you have any special request for you special occasion!</p> : ""
            }
            <input 
                type="submit" 
                value="Make Your reservation" 
                className="btn-primary mt-8 mx-auto"
                data-testid="submitButton"
                disabled={!formData.date || !formData.time || formData.time == "--- Select a time ---" || !formData.guests}
            />
        </form>
    );
}