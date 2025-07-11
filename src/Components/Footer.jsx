import Logoimg from "../assets/resumelogo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-white text-base-content p-10 sm:flex sm:justify-between grid-cols-2 inset-shadow-sm">
        <aside>
          <img alt="" src={Logoimg} className="h-10    w-auto" />
          <p className="font-semibold text-gray-800">ATS Checker</p>
        </aside>
        <nav>
          <h6 className="footer-title font-semibold text-gray-800">Services</h6>
          <a className="link link-hover font-semibold text-gray-800">
            Branding
          </a>
          <a className="link link-hover font-semibold text-gray-800">Design</a>
          <a className="link link-hover font-semibold text-gray-800">
            Marketing
          </a>
          <a className="link link-hover font-semibold text-gray-800">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-gray-800">Company</h6>
          <a className="link link-hover font-semibold text-gray-800">
            About us
          </a>
          <a className="link link-hover font-semibold text-gray-800">Contact</a>
          <a className="link link-hover font-semibold text-gray-800">Jobs</a>
          <a className="link link-hover font-semibold text-gray-800">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-gray-800">Legal</h6>
          <a className="link link-hover font-semibold text-gray-800">
            Terms of use
          </a>
          <a className="link link-hover font-semibold text-gray-800">
            Privacy policy
          </a>
          <a className="link link-hover font-semibold text-gray-800">
            Cookie policy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
