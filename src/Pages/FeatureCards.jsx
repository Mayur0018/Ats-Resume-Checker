import ResumeImg from "../assets/resumimg.png";
import ResumeImg2 from "../assets/resumimg2.png";
const FeatureCards = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:px-32 sm:py-20 flex flex-col justify-center items-center">
        <div>
          <img src={ResumeImg} alt="" className="w-52 sm:w-82" />
        </div>
        <div>
          <p className="font-semibold text-white py-3 px-10 text-3xl">
            An example of an ATS friendly resume template that is readable by
            ATS and resume scanners
          </p>
          <p className="font-semibold text-gray-500 py-3 px-8">
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

        {/* second page  */}

        <div>
          <p className="font-semibold text-white py-6 px-14 text-3xl mt-20">
            The importance of resume keywords
          </p>
          <p className="font-semibold text-gray-500 py-8 px-14">
            If you're reading until this point, you've understood how to make
            your resume readable and scanned correctly by applicant tracking
            systems, or ATS. This is a great start - well done! However, you're
            not done yet. You need to now make sure these resume scanners
            actually rank your resume highly. Let's back up for a bit. If you
            recall at the start of this page, we discussed that companies use
            ATS to filter down the number of applicants they receive. They
            filter resumes by looking for keywords that match the job
            description. Fortunately for you, our resume keyword scanner helps
            you identify the right keywords to include on your resume. This tool
            helps you test your resume against a specific job description,
            enabling you to optimize for that posting (and of course,
            dramatically increase your success rate).
          </p>
        </div>
        <div>
          <img src={ResumeImg2} alt="" className="w-52 sm:w-82 ml-14" />
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
