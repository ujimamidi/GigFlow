import FormField from "./FormField";

function GigForm() {
    return (
        <div className="bg-[#1F232B] ml-8 mt-8 p-5 flex w-1/4 flex-col border-[#2D333B] border-2 rounded-xl">
            <h1 className="text-[#E6E6E6] text-xl mb-5">Add New Gig</h1>
            <FormField 
                title="Event Name"
                placeholder="e.g Wedding Reception"
            />
            <FormField 
                title="Client Name"
                placeholder="e.g Loli Mokam"
            />
            <FormField 
                title="Venue"
                placeholder="e.g Crown Melbourne"
            />
            <FormField 
                title="Date"
                type="date"
                placeholder="Select date"
            />
            <FormField 
                title="Payment Amount"
                placeholder="e.g $500"
            />
            <FormField 
                title="Mark as Paid?"
                type="checkbox"
            />
            <button className="mt-5 py-2 bg-[#8b5cf6] rounded-xl text-[#E6E6E6]">Add Gig</button>
        </div>
    )
}

export default GigForm;