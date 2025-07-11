const ResumeUpload = () => {
  return (
    <div className="flex justify-center w-1/2 mt-10">
      <div className="border py-2 px-2 sm:px-32 ml-40 sm:ml-0 sm:py-8 border-dotted border-neutral-800 bg-white rounded-xl shadow-accent">
        <p className="font-semibold px-2 sm:px-0 text-gray-800">
          Drop your resume here or choose a file.<br></br> PDF & DOCX only. Max
          2MB file size.
        </p>
        <input
          type="file"
          name="Upload Your Resume"
          className="font-semibold bg-green-500 py-3  mt-2 rounded-sm"
          accept=".pdf,.doc,.docx"
        />
      </div>
    </div>
  );
};

export default ResumeUpload;
