function StatisticCard({ number, title }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-4xl font-bold text-sky-500">
        {number}
      </h2>

      <p className="mt-3 text-slate-600">
        {title}
      </p>
    </div>
  );
}

export default StatisticCard;