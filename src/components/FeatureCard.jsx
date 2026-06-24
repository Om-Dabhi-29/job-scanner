function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;