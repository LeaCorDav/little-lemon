import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./bookingComponents/BookingForm";
import fakeAPI from "../API/api"

export const updateTimes = (state, date) => {
    return {availableTimes: fakeAPI.fetchAPI(new Date(date))}
}

/* const today = new Date().toISOString().split('T')[0] */
export const initializeTimes = {availableTimes:  fakeAPI.fetchAPI(new Date())}

export default function BookingPage() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes)
    const navigate = useNavigate();

    function submitForm(formData) {
        if (fakeAPI.submitAPI(formData)) {
            navigate("/confirmed-booking")
        }
    }
    
    return (
        <main>
            <div className="bg-mainColor p-4">
                <div className="relative m-auto max-w-4xl">
                    <h1 className="text-accentColor text-64">
                        Reserve a Table
                    </h1>
                </div>
            </div>
            <div className="relative m-auto p-8 max-w-4xl flex gap-12">
                <img 
                    src="./img/chicagorestaurant-1.jpg" 
                    alt="restaurants view"
                    width={"500px"}
                    className="hidden md:block object-cover rounded-lg w-1/2"
                />
                <BookingForm state={state} dispatch={dispatch} submitForm={submitForm} />
            </div>
        </main>
    );
}