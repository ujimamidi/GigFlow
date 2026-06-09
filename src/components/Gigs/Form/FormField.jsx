function FormField({ title, type = "text", placeholder, value, onChange }) {
    if (type === "checkbox") {
        return (
            <div className="flex items-center gap-3 my-3">
                <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={value}
                    onChange={onChange}
                />
                <label className="text-[#E6E6E6]">
                    {title}
                </label>
            </div>
        );
    }

    return (
        <div className="flex flex-col my-3">
            <label className="text-[#E6E6E6] mb-3">
                {title}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="bg-[#161B22] border border-[#2D333B] rounded-lg p-2 text-[#E6E6E6]"
            />
        </div>
    );
}

export default FormField;