import { useState } from "react";

function NotesModal({gigName, notes, saveNotes, onClose}) {

    const [draft, setDraft] = useState(notes);

    const handleSave = () => {
        saveNotes(draft);
        onClose();
    }

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={onClose}>
            <div
                className="bg-[#1F232B] border-[#2D333B] border-2 rounded-xl p-5 w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}>
                <h2 className="text-[#e6e6e6] text-lg font-bold mb-3">Notes — {gigName}</h2>
                <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    rows={6}
                    placeholder="Add notes for this gig..."
                    className="w-full bg-[#0D1117] text-[#e6e6e6] border-[#2D333B] border-2 rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-[#8b5cf6]"
                />
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-[#A0A7B2] bg-[#0D1117] border-[#2D333B] border-2 rounded-lg hover:text-[#e6e6e6] cursor-pointer text-sm">
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-[#8b5cf6] text-white rounded-lg hover:bg-[#7c4dec] cursor-pointer text-sm font-medium">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotesModal;