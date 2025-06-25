function Certifications() {
  const certs = [
    {
      name: "Front-End Developer Certification",
      issuer: "Great Learning",
    },
    {
      name: "Google Analytics Certification",
      issuer: "Great Learning",
    },
    {
      name: "Java Full Stack Developer Certification",
      issuer: "Capgemini",
    },
    {
      name: "WordPress Website Designing Certification",
      issuer: "Panda",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-gray-800 dark:text-white">
      <div className="w-full px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <ul className="space-y-4">
          {certs.map((cert, index) => (
            <li
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 text-left"
            >
              <p className="text-lg font-semibold">{cert.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Issued by {cert.issuer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
