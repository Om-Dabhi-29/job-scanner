function RiskCard() {
  return (
    <div className="bg-red-100 border border-red-300 rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-red-700">
        Risk Score: 82%
      </h2>

      <p className="mt-2 text-red-600">
        High Risk Job Listing
      </p>
    </div>
  );
}

export default RiskCard;