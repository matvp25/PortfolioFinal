import SignupWidget from "../components/SignupWidget";

export default function Home() {
  return (
    <div>
      {/* Profile Section */}
      <div className="container mx-auto mt-8 px-4 max-w-7xl mb-12 text-gray-900 dark:text-white">
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/80x80/4A5568/FFFFFF?text=Profile"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Software engineer, father, and believer
        </h1>
        <p className="text-lg leading-relaxed mb-6 max-w-3xl text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="...linkedInPath..." />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content: Articles and Sidebar */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-2 space-y-8">
            {[1, 2, 3].map((_, i) => (
              <article
                key={i}
                className="pb-8 border-b border-gray-200 dark:border-gray-700"
              >
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  December 25, 2023
                </time>
                <h2 className="text-xl font-semibold mt-2 mb-3 text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                </p>
                <a href="#" className="text-teal-500 hover:text-teal-600 font-medium">
                  Read article →
                </a>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <SignupWidget
                title="Stay up to date"
                content="Get notified when I publish something new, and unsubscribe at any time."
                simulateNetworkRequestTime={2000}
              />

              {/* Work Section */}
              <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Work
                </h3>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ul className="space-y-4">
                  {[
                    { name: "Slack", years: "2016 - Present", icon: "slack-new.png" },
                    { name: "Spotify", years: "2014 - 2015", icon: "spotify--v1.png" },
                    { name: "Audible", years: "2012 - 2013", icon: "audible.png" },
                    { name: "Microsoft", years: "2010 - 2011", icon: "microsoft.png" },
                  ].map((job, idx) => (
                    <li key={idx} className="flex items-start">
                      <img
                        src={`https://img.icons8.com/color/48/${job.icon}`}
                        alt={job.name}
                        className="w-6 h-6 mr-3"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {job.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Software Engineer
                          <br />
                          {job.years}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Section */}
              <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Skills
                </h3>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {[
                  { name: "HTML", percent: "11/12", icon: "html-5--v1.png" },
                  { name: "CSS", percent: "10/12", icon: "css3.png" },
                  { name: "JavaScript", percent: "9/12", icon: "javascript--v1.png" },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center mb-1">
                      <img
                        src={`https://img.icons8.com/color/48/${skill.icon}`}
                        alt={skill.name}
                        className="w-5 h-5 mr-2"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className={`bg-teal-500 h-2 rounded-full w-${skill.percent}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}