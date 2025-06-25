function Experience() {
  const jobs = [
    {
      role: "Software Engineer (Frontend Developer)",
      company: "TechHighbrows Software Solutions Pvt. Ltd.",
      date: "Jul 2023 – Present",
      tasks: [
        "Built responsive, user-friendly web applications using HTML, CSS, JavaScript, Bootstrap, and React.js.",
        "Improved UI/UX through wireframes, performance optimization (30% faster load times), and cross-browser compatibility.",
        "Integrated RESTful APIs and third-party services using Node.js, Express.js, and AJAX to enhance app functionality.",
        "Contributed to Android app front-end development using Android Studio and Java, including UI debugging and ADB log analysis.",
        "Collaborated with teams using Git, Jira, and participated in code reviews to ensure clean, maintainable code.",
        "Worked with Google Firebase for real-time data handling, authentication, and cloud storage."
      ],
    },
    {
      role: "Associate Software Engineer (Device Testing)",
      company: "TechHighbrows Software Solutions Pvt. Ltd.",
      date: "Feb 2023 – Jul 2023",
      tasks: [
        "Conducted application testing for Samsung devices, ensuring quality across daily and continuous builds.",
        "Performed flashing of OEM builds, followed by Smoke, Regression, and Sanity testing.",
        "Logged detailed defects using Bugzilla, including precise reproduction steps and relevant ADB logs/screenshots.",
        "Collaborated closely with developers to reproduce issues, verify fixes, and support debugging efforts.",
        "Coordinated with senior developers for technical escalation and smooth communication."
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 text-gray-800 dark:text-white">
      <div className="w-full px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        {jobs.map((job, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-sm text-gray-500">{job.company} • {job.date}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
