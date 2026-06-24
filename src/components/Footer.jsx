import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-sky-400">
              🔍 Fake Job Detector
            </h2>

            <p className="mt-4 text-slate-400">
              Protecting job seekers from scams
              using AI-powered analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/scan">Scan Job</Link></li>
              <li><Link to="/results">Results</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Scam Awareness</li>
              <li>Career Safety</li>
              <li>Job Verification</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>support@detector.com</li>
              <li>+91 9876543210</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between text-slate-500 text-sm">

          <p>
            © 2026 Fake Job Listing Detector
          </p>

          <p>
            This platform provides guidance and
            does not guarantee job authenticity.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;