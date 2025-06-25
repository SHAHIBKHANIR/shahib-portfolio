function Skills() {
  const skills = [
    "HTML5", 
    "CSS3",
     "JavaScript (ES6+)",
    "React.js", 
    "Tailwind CSS", 
    "Bootstrap",
    "Node.js (Basics)",
     "MongoDB (Basics)",
    "Responsive Design",
     "Git & GitHub",
    // "Figma",
    // "Adobe XD", 
    "Android UI/UX (Java)",
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
