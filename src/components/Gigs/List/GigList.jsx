import GigCard from "./GigCard";
import GigListNavbar from "./GigListNavbar";

function GigList() {
    return (
        <div className="ml-5 mt-8">
            <div className="p-5 bg-[#1F232B] border-[#2D333B] border-2 rounded-xl">
                <GigListNavbar />
            </div>
            <GigCard 
                    month={`Jun`} 
                    day={`13`} 
                    gigName={`Club - One More song`} 
                    venue={`Ellora, St Kilda`}
                    number={`$200`}
            />
            <GigCard 
                    month={`Jun`} 
                    day={`13`} 
                    gigName={`Club - One More song`} 
                    venue={`Ellora, St Kilda`}
                    number={`$200`}
            />
            <GigCard 
                    month={`Jun`} 
                    day={`13`} 
                    gigName={`Club - One More song`} 
                    venue={`Ellora, St Kilda`}
                    number={`$200`}
            />
        </div>
        
    )
}

export default GigList;