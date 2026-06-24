function Results() {

  const result = JSON.parse(
    localStorage.getItem("scanResult")
  );

  if (!result) {
    return (
      <h1 className="text-center mt-20">
        No Results Found
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Scan Results
      </h1>

      <div className="bg-red-100 p-8 rounded-3xl shadow-xl">

        <h2 className="text-5xl font-bold text-red-600">
          {result.riskScore}%
        </h2>

        <p className="text-xl mt-3">
          {result.status}
        </p>

      </div>

      <div className="mt-10 bg-white p-8 rounded-3xl shadow-xl">

        <h2 className="text-2xl font-bold mb-4">
          Red Flags
        </h2>

        <ul className="space-y-3">

          {result.redFlags.map(
            (flag, index) => (
              <li key={index}>
                ⚠ {flag}
              </li>
            )
          )}

        </ul>

      </div>

    </div>
  );
}

export default Results;