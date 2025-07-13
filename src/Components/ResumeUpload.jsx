import { useRef, useState } from "react";

const ResumeUpload = () => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex justify-center w-1/2 mt-10 py-10">
      <div className="border py-2 px-2 sm:px-32 ml-40 sm:ml-0 sm:py-8 border-dotted border-white bg-transparent rounded-xl shadow-xl/20 shadow-amber-50 mb-10">
        <p className="font-semibold px-2 sm:px-0 text-gray-500">
          Drop your resume here or choose a file.<br />
          PDF & DOCX only. Max 2MB file size.
        </p>

        <input
          type="file"
          ref={inputRef}
          name="resume"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleInputChange}
        />

        <button
          type="button"
          className="w-48 font-semibold bg-green-500 text-white sm:py-2 sm:px-5 mt-2 rounded-sm"
          onClick={handleButtonClick}
        >
          Upload Your Resume
        </button>

        {fileName && (
          <p className="text-sm text-gray-400 mt-2 truncate">{fileName}</p>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;
