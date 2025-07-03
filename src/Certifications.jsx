import certFrontend from "./assets/certificates/greatlearning_frontend.jpg";
import certAnalytics from "./assets/certificates/greatlearning_analytics.jpg";
import certCapgemini from "./assets/certificates/capgemini_java.jpg";
import certWordpress from "./assets/certificates/wordpress_panda.jpg";

function Certifications() {
  const certs = [
    {
      name: "Front-End Developer Certification",
      issuer: "Great Learning",
      image: certFrontend,
      link: "https://www.mygreatlearning.com/certificate/XPMCWDTX",
    },
    {
      name: "Google Analytics Certification",
      issuer: "Great Learning",
      image: certAnalytics,
      link: "https://example.com/analytics-certificate",
    },
    {
      name: "Java Full Stack Developer Certification",
      issuer: "Capgemini",
      image: certCapgemini,
      link: "https://example.com/java-fullstack-certificate",
    },
    {
      name: "WordPress Website Designing Certification",
      issuer: "Panda",
      image: certWordpress,
      link: "https://example.com/wordpress-certificate",
    },
  ];

  return (
    <section
      className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-gray-800 dark:text-white"
      id="certifications"
    >
      <div className="w-full px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden"
            >
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noreferrer">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 object-contain border-b border-gray-200 dark:border-gray-700 hover:opacity-90 transition duration-200"
                  />
                </a>
              ) : (
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-48 object-contain border-b border-gray-200 dark:border-gray-700"
                />
              )}
              <div className="p-4">
                <p className="text-lg font-semibold">{cert.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Issued by {cert.issuer}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
