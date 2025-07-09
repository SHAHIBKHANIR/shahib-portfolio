function Projects() {
    const projects = [
        {
            name: "TechHighbrows Software Solutions Pvt Ltd 🚀",
            role: "Software Engineer (Front-End Developer)",
            duration: "July 2023 – Present",
            location: "Bangalore, Karnataka",
            description:
                "Designed and developed responsive web applications using HTML, CSS, JavaScript, Bootstrap, and React.js. Built RESTful APIs with Node.js and Express.js. Enhanced performance and usability by optimizing UI, integrating third-party APIs, and leveraging Firebase. Also contributed to Android app front-end development using Android Studio.",
            tech: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, Firebase, Android Studio, Bootstrap, Git, Jira",
        },
        {
            name: "Task Manager Web App📋",
            description:
                "A fully functional task manager web app with task creation, editing, completion, and deletion. Includes LocalStorage persistence, deadline support, Excel export (SheetJS), download history, and resume/edit past sessions.",
            tech: "HTML, CSS, JavaScript, SheetJS",
            link: "https://github.com/SHAHIBKHANIR/task-manager", // ✅ your working GitHub link
            demo: " https://shahibkhanir.github.io/task-manager/",
        },
        {
            name: "SmartRobust Company Website🚀",
            description:
                "Designed and developed a modern responsive website for SmartRobust-TechSolution Pvt. Ltd. with interactive sections and branding.",
            tech: "HTML, CSS, JavaScript, Bootstrap, Node.js, MongoDB",
            // link: "https://github.com/SHAHIBKHANIR/SR-group-website", // ✅ your working GitHub link
            // demo: "",
        },
        {
            name: "Home Interior Website🏡",
            description:
                "A fully responsive Home Interior website built using HTML, CSS, and JavaScript. It includes an interactive homepage, a customizer page for previewing interior styles, a gallery to showcase designs, and a contact page with form validation. The website emphasizes clean UI, smooth navigation, and enhanced user experience using JavaScript for interactivity.",
            tech: "HTML, CSS, JavaScript",
            link: "https://github.com/SHAHIBKHANIR/Home-Interior", // ✅ your working GitHub link
            demo: "https://shahibkhanir.github.io/Home-Interior/",
        },
        {
            name: "Tic-Tac-Toe Game🕹️",
            description:
                "A classic two-player Tic-Tac-Toe game with clean UI and win detection logic.",
            tech: "HTML, CSS, JavaScript",
            link: "https://github.com/SHAHIBKHANIR/Tic-Tac-Toe",
            demo: "https://SHAHIBKHANIR.github.io/Tic-Tac-Toe/",
        },
        {
            name: "Simple Calculator🧮",
            description:
                "A basic calculator built using HTML and CSS. Supports arithmetic operations with a clean responsive UI.",
            tech: "HTML, CSS",
            link: "https://github.com/SHAHIBKHANIR/Calculator",
            demo: "https://shahibkhanir.github.io/Calculator/",
        },
        {
            name: "Experience Letter Generator📝",
            description:
                "A responsive HTML template that dynamically fills employee details to generate and print experience letters using JavaScript.",
            tech: "HTML, CSS, JavaScript",
            link: "https://github.com/SHAHIBKHANIR/Experience-Letter-Generator",
            demo: "https://shahibkhanir.github.io/Experience-Letter-Generator/",
        },
        {
            name: "Resume Builder Web App 📝",
            description:
                "A responsive web-based resume builder that allows users to create professional resumes in real-time. Supports dynamic live preview, multi-entry experience section, education details, skill tagging, project listing, and export to A4-style PDF using html2pdf.js. Includes print-ready formatting, form validation, and user-friendly layout inspired by real-world resume formats.",
            tech: "HTML, CSS, JavaScript, html2pdf.js",
            link: "https://github.com/SHAHIBKHANIR/resume-builder",
            demo: "https://shahibkhanir.github.io/resume-builder/",
        },
        {
            name: "Weather App ☁️",
            description:
                "A responsive weather web app that fetches real-time weather data using the OpenWeatherMap API. Supports city-based search, geolocation-based weather, weather icons, temperature, humidity, and description. Includes dark/light mode toggle, auto-correction for common city typos, and popular city autocomplete. Built for clean usability and mobile responsiveness.",
            tech: "HTML, CSS, JavaScript, OpenWeatherMap API",
            link: "https://github.com/SHAHIBKHANIR/weather-app",
            demo: "https://shahibkhanir.github.io/weather-app/",
        },
        {
            name: "QR Code Generator 🔳",
            description:
                "A feature-rich QR code generator web app built using HTML, CSS, and JavaScript. Includes live QR preview, customizable size, foreground and background color pickers, dark/light theme toggle, and downloadable PNG with embedded logo. Built using the QRCode.js library for full offline support and branding flexibility.",
            tech: "HTML, CSS, JavaScript, QRCode.js",
            link: "https://github.com/SHAHIBKHANIR/qr-code-generator",
            demo: "https://shahibkhanir.github.io/qr-code-generator/",
        },
        {
            name: "Typing Speed Test ⌨️",
            description:
                "A responsive typing speed test app built using HTML, CSS, and JavaScript. Features live WPM, accuracy tracking, and timer with real-time feedback. Fetches random paragraphs from an API with fallback, includes dark/light mode toggle, best score tracking, and a clean, user-friendly UI.",
            tech: "HTML, CSS, JavaScript, Quotable API, localStorage",
            link: "https://github.com/SHAHIBKHANIR/typing-speed-test",
            demo: "https://shahibkhanir.github.io/typing-speed-test/",
        },
        {
            name: "Skill-to-Job Matcher 🧠",
            description:
                "An interactive roadmap generator that helps students and freshers explore 20+ job roles across IT and non-IT domains. Shows skills, tools, projects, interview topics, resources, and learning duration. Built with HTML, CSS, JS, JSON, and supports PNG export.",
            tech: "HTML, CSS, JavaScript, JSON, html2canvas, localStorage",
            link: "https://github.com/SHAHIBKHANIR/skill-to-job-matcher",
            demo: "https://shahibkhanir.github.io/skill-to-job-matcher/"
        }
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
            <div className="w-full px-4 md:px-12 lg:px-20">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-left"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {project.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 my-2">
                                {project.description}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                Tech: {project.tech}
                            </p>
                            <a
                                href={project.demo}
                                target="_blank"
                                className="text-green-600 dark:text-green-400 hover:underline mr-4"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.link}
                                target="_blank"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
