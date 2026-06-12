import { useEffect, useState } from "react";
import FormField from "./FormField";

function GigForm({setGigs}) {

    const [formData, setFormData] = useState({
        eventName: "",
        clientName: "",
        venue: "",
        date: "",
        payment: "",
        isPaid: false
    });

    useEffect(() => {
        // load gigs from local storage on component mount
        const savedGigs = JSON.parse(localStorage.getItem("gigs"));
        if (savedGigs) {
            console.log("local storage GET is working");
            setGigs(savedGigs);
        }
    }, [setGigs])

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        setGigs((prev) => {
            const updatedGigList = [...prev, formData];
            updatedGigList.sort((a, b) => new Date(a.date) - new Date(b.date));
            localStorage.setItem("gigs", JSON.stringify(updatedGigList));
            return updatedGigList;
        })
        // setGigs(prev => [...prev, formData].sort((a, b) => new Date(a.date) - new Date(b.date)));
        console.log(formData);
        // clear input
        setFormData({
            eventName: "",
            clientName: "",
            venue: "",
            date: "",
            payment: "",
            isPaid: false 
        });
    }

    return (
        <div className="bg-[#1F232B] p-5 flex w-1/4 flex-col border-[#2D333B] border-2 rounded-xl">
            <h1 className="text-[#E6E6E6] text-xl mb-5"><span>📌 </span>Add New Gig</h1>
            <FormField 
                title="Event Name"
                placeholder="e.g Wedding Reception"
                value={formData.eventName}
                onChange={(e) => handleChange("eventName", e.target.value)}
            />
            <FormField 
                title="Client Name"
                placeholder="e.g Loli Mokam"
                value={formData.clientName}
                onChange={(e) => handleChange("clientName", e.target.value)}
            />
            <FormField 
                title="Venue"
                placeholder="e.g Crown Melbourne"
                value={formData.venue}
                onChange={(e) => handleChange("venue", e.target.value)}
            />
            <FormField 
                title="Date"
                type="date"
                placeholder="Select date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
            />
            <FormField 
                title="Payment Amount"
                placeholder="e.g $500"
                value={formData.payment}
                onChange={(e) => handleChange("payment", e.target.value)}
            />
            <FormField 
                title="Mark as Paid?"
                type="checkbox"
                value={formData.isPaid}
                onChange={(e) => handleChange("isPaid", e.target.checked)}
            />
            <button
                onClick={handleSubmit}
                className="mt-5 py-2 bg-[#8b5cf6] rounded-xl text-[#E6E6E6]">
                    Add Gig
            </button>
        </div>
    )
}

export default GigForm;