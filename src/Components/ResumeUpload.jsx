const ResumeUpload = () => {
  return (
    <div className="flex justify-center w-1/2 mt-10 py-10">
      <div className="border py-2 px-2 sm:px-32 ml-40 sm:ml-0 sm:py-8 border-dotted border-white bg-transparent rounded-xl shadow-xl/20 shadow-amber-50 mb-10">
        <p className="font-semibold px-2 sm:px-0 text-gray-500">
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
