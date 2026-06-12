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
    const [errors, setErrors] = useState({});

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

    /*
    * Handles errors if form has empty inputs
    */
    const handleErrors = () => {
        const newErrors = {};
        if (!formData.eventName) newErrors.eventName = "Event Name is required";
        if (!formData.clientName) newErrors.clientName = "Client Name is required";
        if (!formData.venue) newErrors.venue = "Venue is required";
        if (!formData.date) newErrors.date = "Date is required";
        if (!formData.payment) newErrors.payment = "Payment is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // returns true if no errors
    }

    /*
    * Handles submission of form
    */
    const handleSubmit = () => {
        const isValid = handleErrors();
        if (!isValid) return; // prevent submission

        // creates gig and adds it to local storage
        setGigs((prev) => {
            const updatedGigList = [...prev, formData];
            updatedGigList.sort((a, b) => new Date(a.date) - new Date(b.date)); // sorts gigs in date order
            localStorage.setItem("gigs", JSON.stringify(updatedGigList));
            return updatedGigList;
        })
        console.log(formData);
        // clear inputs after submission
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
                error={errors.eventName}
            />
            <FormField 
                title="Client Name"
                placeholder="e.g Loli Mokam"
                value={formData.clientName}
                onChange={(e) => handleChange("clientName", e.target.value)}
                error={errors.clientName}
            />
            <FormField 
                title="Venue"
                placeholder="e.g Crown Melbourne"
                value={formData.venue}
                onChange={(e) => handleChange("venue", e.target.value)}
                error={errors.venue}
            />
            <FormField 
                title="Date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                error={errors.date}
            />
            <FormField 
                title="Payment Amount"
                placeholder="e.g $500"
                value={formData.payment}
                onChange={(e) => handleChange("payment", e.target.value)}
                error={errors.payment}
            />
            <FormField 
                title="Mark as Paid?"
                type="checkbox"
                value={formData.isPaid}
                onChange={(e) => handleChange("isPaid", e.target.checked)}
            />
            <button
                onClick={handleSubmit}
                className="mt-5 py-2 bg-[#8b5cf6] rounded-xl text-[#E6E6E6] cursor-pointer hover:border-2">
                    Add Gig
            </button>
        </div>
    )
}

export default GigForm;