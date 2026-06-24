function JobInput() {
  return (
    <div className="mt-8">
      <textarea
        rows="10"
        className="w-full max-w-4xl border rounded-xl p-4"
        placeholder="Paste Job Description Here..."
      />

      <button className="mt-4 bg-sky-500 text-white px-6 py-3 rounded-lg">
        Analyze Job
      </button>
    </div>
  );
}

export default JobInput;