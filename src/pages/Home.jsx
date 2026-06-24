import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import StatisticCard from "../components/StatisticCard";

function Home() {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Platform Features
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="md:col-span-2 bg-sky-500 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300">
        <h3 className="text-3xl font-bold">
          AI Scam Detection
        </h3>

        <p className="mt-4">
          Advanced AI identifies fake job
          listings in real time.
        </p>
      </div>

      <div className="
bg-white
p-6
rounded-3xl
shadow-xl
hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300
">
        <h3 className="font-bold">
          NLP Analysis
        </h3>

        <p className="mt-3">
          Detect suspicious language.
        </p>
      </div>

      <div className="
bg-white
p-6
rounded-3xl
shadow-xl
hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300
">
        <h3 className="font-bold">
          Company Verification
        </h3>

        <p className="mt-3">
          Verify recruiters instantly.
        </p>
      </div>

      <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300">
        <h3 className="text-2xl font-bold">
          Browser Protection
        </h3>

        <p className="mt-4">
          Receive scam alerts while
          browsing job portals.
        </p>
      </div>

      <div className="bg-emerald-500 text-white p-6 rounded-3xl shadow-xl">
        <h3 className="font-bold">
          Fast Detection
        </h3>
      </div>

      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
        <h3 className="font-bold">
          Risk Scoring
        </h3>
      </div>

    </div>

  </div>
</section>

      {/* Statistics Section */}
      <section className="py-20 bg-sky-50 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Statistics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <StatisticCard
              number="15,000+"
              title="Jobs Scanned"
            />

            <StatisticCard
              number="2,400+"
              title="Frauds Detected"
            />

            <StatisticCard
              number="800+"
              title="Verified Companies"
            />

            <StatisticCard
              number="20,000+"
              title="Users Protected"
            />

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="
bg-white
p-6
rounded-3xl
shadow-xl
text-center
hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300
">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold">
                Fast Detection
              </h3>
            </div>

            <div className="
bg-white
p-6
rounded-3xl
shadow-xl
text-center
hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300
">
              <div className="text-4xl mb-4">🛡</div>
              <h3 className="font-bold">
                Scam Protection
              </h3>
            </div>

            <div className="
bg-white
p-6
rounded-3xl
shadow-xl
text-center
hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300
">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold">
                AI Powered
              </h3>
            </div>

            <div className="
bg-white
p-6
rounded-3xl
shadow-xl
text-center
hover:-translate-y-1
hover:shadow-2xl
transition-all
duration-300
">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="font-bold">
                Accessible Anywhere
              </h3>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;