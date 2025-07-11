import ResumeImg from "../assets/resumimg.png";
const FeatureCards = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:px-32 sm:py-20 flex flex-col justify-center items-center">
        <div>
          <img src={ResumeImg} alt="" className="w-52 sm:w-82" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 py-3 px-10 text-3xl">
            An example of an ATS friendly resume template that is readable by
            ATS and resume scanners
          </p>
          <p className="font-semibold text-gray-800 py-3 px-8">
            Here are the guidelines we outlined above in practice. Notice the
            clean single-column design and how fancy formatting like tables,
            diagrams and graphs have been stripped out. ATS resume scanners
            either ignore these or read them incorrectly. You want to make sure
            you stick to text and a standard font with minimal use of special
            characters. Similarly, notice how this resume also uses standard
            section titles, such as "Experience" and "Education". Resume
            scanners specifically look out for these core sections and you want
            to make sure they're easy to find. Bonus tip: Use reverse
            chronological order for your dates. Many applicant tracking systems
            try to find your most recent work experience and assumes your resume
            is in reverse chronological order (i.e. most recent first).
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
