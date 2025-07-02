// import React, { } from "react";
// import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

// const FormCP = ({ formClose, setFormClose }) => {
//   return (
//     <button
//       aria-label="Form Open/Close"
//       className="exclude-print fixed bottom-5 left-10 font-bold rounded-full bg-white text-blue-600 shadow-lg border-2 border-white"
//       onClick={() => setFormClose(!formClose)}
//     >
//       {formClose ? <BsFillArrowRightCircleFill className="w-10 h-10" title="Form Open" /> : <BsFillArrowLeftCircleFill className="w-10 h-10" title="Form Close" />}
//     </button>
//   )
// }

// export default FormCP;

import React from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const FormCP = ({ formClose, setFormClose }) => {
  const toggleForm = () => setFormClose(!formClose);

  return (
    <button
      aria-label={formClose ? "Open Form Panel" : "Collapse Form Panel"}
      aria-pressed={!formClose}
      title={formClose ? "Open Form Panel" : "Collapse Form Panel"}
      onClick={toggleForm}
      className="exclude-print fixed bottom-5 left-5 z-40 rounded-full bg-white text-blue-600 shadow-lg border-2 border-white hover:bg-blue-50 transition-colors"
    >
      {formClose ? (
        <BsFillArrowRightCircleFill className="w-10 h-10" />
      ) : (
        <BsFillArrowLeftCircleFill className="w-10 h-10" />
      )}
    </button>
  );
};

export default FormCP;
