import { useReducer } from "react";
import BookingForm from "./bookingComponents/BookingForm";
import { fetchAPI,submitAPI } from "../API/api"

export const updateTimes = (state, action) => {
    if(action.type === "2024-03-12") return ["09:00", "10:00"]
    if(action.type === "2024-03-13") return ["11:00", "12:00", "13:00"]
    if(action.type === "2024-03-14") return ["14:00", "15:00", "16:00"]
    if(action.type === "2024-03-15") return ["17:00", "18:00", "19:00"]
    if(action.type === "2024-03-16") return ["20:00", "21:00", "22:00"]
    if(action.type === "2024-03-17") return ["22:00", "23:00", "00:00"]
    if(action.type === "2024-03-18") return ["01:00", "02:00", "03:00"]
    return state
}
export const initializeTimes = ["-----Select a date-----"]
/* new Date().toISOString().split('T')[0] */

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
    
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
                <BookingForm times={availableTimes} setTimes={dispatch} />
            </div>
        </main>
    );
}