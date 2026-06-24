import {
  FaShieldAlt,
  FaRobot,
  FaSearch,
  FaExclamationTriangle
} from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
   <section className="min-h-screen bg-gradient-to-r from-sky-600 to-cyan-500">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              AI Powered Scam Detection
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6">
              Fake Job
              <br />
              Listing Detector
            </h1>

            <p className="mt-6 text-xl text-sky-100">
              Detect fraudulent job postings before
              they steal your money, data, or career
              opportunities.
            </p>

            <div className="mt-8 flex gap-4">
         <Link
  to="/scan"
  className="bg-white text-sky-600 px-6 py-3 rounded-xl font-semibold"
>
  Scan Job
</Link>

             <Link
  to="/about"
  className="border border-white px-6 py-3 rounded-xl"
>
  Learn More
</Link>
            </div>

          </div>

          <div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-3xl">
                <div className="text-5xl"><FaShieldAlt className="text-5xl" /></div>
                <h3 className="mt-4 font-bold">
                  Safe Browsing
                </h3>
              </div>

              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-3xl">
                <div className="text-5xl"><FaRobot className="text-5xl" /></div>
                <h3 className="mt-4 font-bold">
                  AI Analysis
                </h3>
              </div>

              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-3xl">
                <div className="text-5xl"><FaExclamationTriangle className="text-5xl" /></div>
                <h3 className="mt-4 font-bold">
                  Scam Alerts
                </h3>
              </div>

              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-3xl">
                <div className="text-5xl"><FaSearch className="text-5xl" /></div>
                <h3 className="mt-4 font-bold">
                  Risk Score
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;