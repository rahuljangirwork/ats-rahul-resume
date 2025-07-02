// import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

// const FormButton = ({ size, remove, add }) => {

//   return (
//     <div className="flex-wrap-gap-2 mb-2">
//       <button type="button" onClick={add}
//         aria-label="Add"
//         className="p-2 text-white bg-blue-700 rounded text-xl">
//         <MdAddCircle />
//       </button>
//       {
//         size > 0 &&
//         <button type="button" onClick={remove}
//           aria-label="Remove"
//           className="p-2 text-white bg-blue-700 rounded text-xl">
//           <MdRemoveCircle />
//         </button>
//       }
//     </div>
//   )
// }

// export default FormButton;\


import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";          // ← optional, for runtime checks

const FormButton = ({ size, add, remove }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      <Button
        type="button"
        onClick={add}
        aria-label="Add item"
        className="p-2 text-xl"
      >
        <MdAddCircle />
      </Button>

      {size > 0 && (
        <Button
          type="button"
          onClick={remove}
          aria-label="Remove item"
          variant="secondary"
          className="p-2 text-xl"
        >
          <MdRemoveCircle />
        </Button>
      )}
    </div>
  );
};

/* ------------ optional: PropTypes for runtime validation ------------ */
FormButton.propTypes = {
  size: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default FormButton;
