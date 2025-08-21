import React, { useState } from "react";
import { PopupModal } from "react-calendly";

export default function CalendlyMeeting() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Book a Meeting
      </button>

      <PopupModal
        url="https://calendly.com/yourusername/30min" // <-- your event link
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
}
