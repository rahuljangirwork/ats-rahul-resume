// import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
// import React, { useContext } from "react";
// import { ResumeContext } from "../../pages/builder";

// const LoadUnload = () => {
//   const { resumeData, setResumeData } = useContext(ResumeContext);

//   // load backup resume data
//   const handleLoad = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const resumeData = JSON.parse(event.target.result);
//       setResumeData(resumeData);
//     };
//     reader.readAsText(file);
//   };

//   // download resume data
//   const handleDownload = (data, filename, event) => {
//     event.preventDefault();
//     const jsonData = JSON.stringify(data);
//     const blob = new Blob([jsonData], { type: "application/json" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = filename;
//     link.click();
//   };

//   return (
//     <div className="flex flex-wrap gap-4 mb-2 justify-center">
//       <div className="inline-flex flex-row items-center gap-2">
//         <h2 className="text-[1.2rem] text-white">Load Data</h2>
//         <label className="p-2 text-white bg-blue-700 rounded cursor-pointer">
//           <FaCloudUploadAlt className="text-[1.2rem] text-white" />
//           <input
//             aria-label="Load Data"
//             type="file"
//             className="hidden"
//             onChange={handleLoad}
//             accept=".json"
//           />
//         </label>
//       </div>
//       <div className="inline-flex flex-row items-center gap-2">
//         <h2 className="text-[1.2rem] text-white">Save Data</h2>
//         <button
//           aria-label="Save Data"
//           className="p-2 text-white bg-blue-700 rounded"
//           onClick={(event) =>
//             handleDownload(
//               resumeData,
//               resumeData.name + " by rahuljangirresume.json",
//               event
//             )
//           }
//         >
//           <FaCloudDownloadAlt className="text-[1.2rem] text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoadUnload;



import React, { useContext } from "react";
import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import { ResumeContext } from "../../pages/builder";
import { Button } from "@/components/ui/button";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  /* ------------ handlers ------------ */
  const handleLoad = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const json = JSON.parse(evt.target.result);
        setResumeData(json);
      } catch (err) {
        console.error("Invalid JSON file:", err);
      }
    };
    reader.readAsText(file);
  };

  const handleDownload = (data, filename, e) => {
    e.preventDefault();
    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  /* ------------ UI ------------ */
  return (
    <div className="flex flex-wrap gap-4 mb-4 justify-center">
      {/* --------- Load JSON --------- */}
      <Button
        asChild
        variant="secondary"
        className="inline-flex items-center gap-2 px-4 py-2 text-base"
      >
        {/* label keeps file-picker behaviour, Button adds styling */}
        <label htmlFor="resume-file" className="cursor-pointer">
          <FaCloudUploadAlt className="text-lg" />
          <span>Load Data</span>
          <input
            id="resume-file"
            type="file"
            accept=".json"
            onChange={handleLoad}
            className="hidden"
          />
        </label>
      </Button>

      {/* --------- Save JSON --------- */}
      <Button
        onClick={(e) =>
          handleDownload(
            resumeData,
            `${resumeData.name || "resume"} by rahuljangirresume.json`,
            e
          )
        }
        className="inline-flex items-center gap-2 px-4 py-2 text-base"
      >
        <FaCloudDownloadAlt className="text-lg" />
        <span>Save Data</span>
      </Button>
    </div>
  );
};

export default LoadUnload;
