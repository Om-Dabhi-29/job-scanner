import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ScanJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    salary: "",
    location: "",
    skills: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleScan = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/scan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      localStorage.setItem(
        "scanResult",
        JSON.stringify(data)
      );

      navigate("/results");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to backend");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          JOB SCANNER
        </h1>

        <p className="text-center text-slate-600 mb-10">
          Analyze job listings and detect possible recruitment scams.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold block mb-2">
                Job Title
              </label>

              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Frontend Developer"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Infosys"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Salary Range
              </label>

              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="6-8 LPA"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Bangalore"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Required Skills
              </label>

              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="React, JavaScript"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Contact Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hr@company.com"
                className="w-full border p-3 rounded-xl"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="font-semibold block mb-2">
              Job Description
            </label>

            <textarea
              rows="8"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Paste complete job description..."
              className="w-full border p-3 rounded-xl"
            />
          </div>

          <button
            onClick={handleScan}
            className="mt-8 w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-2xl font-bold transition-all duration-300"
          >
            Analyze Job
          </button>

        </div>

      </div>
    </div>
  );
}

export default ScanJob;