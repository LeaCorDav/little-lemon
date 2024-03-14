import { useState } from "react";

export default function BookingForm(props) {
    const [values, setValues] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })

    const handleSubmit = (e) => { 
		e.preventDefault()
		setValues("")
		console.log("Form submitted") 
	}

    const timesOptions = props.times ? props.times.map(time => {
        return <option key={time}>{time}</option>;
    }) : [];

    return (
        <form className="flex flex-col grow" onSubmit={handleSubmit}>
            <label htmlFor="res-date" className="text-sectionCategories text-darkColor mt-5 mb-2">Choose date</label>
            <input 
                type="date" 
                id="res-date"
                value={values.date}
                onChange={e => {
                    setValues({
                        ...values,
                        date: e.target.value
                    });
                    props.setTimes({ type: values.date })
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor focus-visible:outline-0"
            />
            <label htmlFor="res-time" className="text-sectionCategories text-darkColor mt-5 mb-2">Choose time</label>
            <select 
                id="res-time"
                value={values.time}
                onChange={e => {
                    setValues({
                        ...values,
                        time: e.target.value
                    });
                    console.log(values);
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor"
            >
                {timesOptions}
                {/* <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option> */}
            </select>
            <label htmlFor="guests" className="text-sectionCategories text-darkColor mt-5 mb-2">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" max="10" 
                id="guests"
                value={values.guests}
                onChange={e => {
                    setValues({
                        ...values,
                        guests: e.target.value
                    });
                    console.log(values);
                }}
                className="p-4 border-2 border-darkColor/35 rounded-lg text-darkColor focus:border-secDarkColor focus-visible:outline-0"
            />
            <label htmlFor="occasion" className="text-sectionCategories text-darkColor mt-5 mb-2">Occasion</label>
            <select 
                id="occasion"
                value={values.occasion}
                onChange={e => {
                    setValues({
                        ...values,
                        occasion: e.target.value
                    });
                    console.log(values);
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