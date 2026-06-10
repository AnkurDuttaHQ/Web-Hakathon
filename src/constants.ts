export const PORTFOLIO_DATA = {
  profile: {
    name: "Ankur Dutta",
    title: "Full Stack & ML Engineer",
    subtitle: "AI/ML & Data Systems Enthusiast",
    email: "rikdutta1436@gmail.com",
    phone: "+91 6294035107",
    location: "Kolkata, India",
    github: "https://github.com/AnkurDuttaHQ",
    linkedin: "https://linkedin.com/in/ankur-dutta01",
    resumeUrl: "https://drive.google.com/file/d/1GORTygVszwQnBgkzG4Tat9i3lwZKfjIy/view?usp=drive_link",
    bio: "BCA student and active Machine Learning & Data Science intern with 2 deployed Web full-stack portals and advanced analytical engines. Highly skilled in Python, Scikit-Learn, and the MERN stack. Proficient at pre-processing real datasets and building high-precision classifiers.",
    stats: [
      { label: "Projects", value: "4" },
      { label: "CGPA", value: "8.35" },
      { label: "Commits", value: "500+" },
    ],
    typingRoles: [
      "Machine Learning Intern",
      "Full Stack Developer",
      "Data Science Specialist",
      "MERN Stack Developer",
      "GSoC Contributor Aspirant"
    ]
  },
  about: {
    education: [
      {
        institution: "Adamas University",
        degree: "Bachelor of Computer Applications (BCA)",
        period: "2024 - Present",
        description: "CGPA: 8.35. Focused heavily on Data Structures, OOP, Database Management systems, and Machine Learning."
      },
      {
        institution: "Akui Union High School",
        degree: "Higher Secondary (WBCHSE)",
        period: "2024",
        description: "Grade: 77.2%. Primary technical and scientific tracks."
      }
    ],
    journey: [
      {
        year: "2024",
        title: "Foundation & Academics",
        description: "Began BCA at Adamas University, building absolute consistency with OOP (C++) and foundational computer science."
      },
      {
        year: "2025",
        title: "Frontend & Full-Stack Prototyping",
        description: "Represented university in prestigious national hackathons. Finished as Finalist at IIT Bhubaneswar Frontend Battle."
      },
      {
        year: "2026",
        title: "Internships & Machine Learning Deployment",
        description: "Transitioned to active engineering. Secured competitive internships at Xylofy AI and Codveda Technologies while launching classification & segmentation models."
      }
    ]
  },
  skills: {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 100 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "REST API Design", level: 95 },
      { name: "JWT Authentication", level: 90 },
    ],
    languages: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "SQL", level: 88 },
      { name: "C / C++", level: 83 },
    ],
    ai_ml: [
      { name: "Scikit-Learn", level: 88 },
      { name: "Clustering (K-Means/Agglomerative)", level: 85 },
      { name: "Classification (Naive Bayes/LogReg/KNN)", level: 90 },
      { name: "Data Preprocessing & Evaluation", level: 92 },
      { name: "Pandas & NumPy & Matplotlib", level: 90 },
    ],
    tools: [
      { name: "Git / GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 92 },
    ]
  },
  experiences: [
    {
      role: "Data Science Intern",
      company: "Xylofy AI",
      period: "Jun 2026 – Present",
      points: [
        "Working on core data analysis, interactive metrics visualization, and machine learning models with Python.",
        "Developing automated data preprocessing pipelines, performing key feature engineering, and conducting rigorous model evaluations on complex, real-world customer records."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Codveda Technologies",
      period: "May 2026 – Jun 2026",
      points: [
        "Architecting, training, and optimizing descriptive machine learning models using Scikit-Learn libraries.",
        "Applying predictive analytics, high-accuracy feature imputation, and robust testing evaluation methodologies."
      ]
    }
  ],
  projects: [
    {
      id: "wanderland",
      title: "Wanderland",
      description: "A secure travel accommodation platform allowing robust property management, interactive search features, and traveler discovery pages.",
      features: ["MERN Stack", "JWT Authentication", "REST APIs", "Image Uploads", "Tailwind CSS"],
      live: "https://wanderland-1-do1e.onrender.com/listings",
      github: "https://github.com/AnkurDuttaHQ/Wanderland",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "smartcart",
      title: "SmartCart — Customer Segmentation",
      description: "An intelligent clustering platform separating 2,240 detailed user records using PCA reduction and K-Means segmentation algorithms to produce insights.",
      features: ["Python", "K-Means Clustering", "Agglomerative Clustering", "NumPy & Pandas", "PCA Reduction"],
      live: "https://github.com/AnkurDuttaHQ/Smartcart_clustering_project",
      github: "https://github.com/AnkurDuttaHQ/Smartcart_clustering_project",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "creditwise",
      title: "CreditWise — Loan Assessment",
      description: "An adaptive classifier model testing Gaussian Naive Bayes, KNN, and Logistic Regression on 1,000 credit applications to achieve 86.5% overall predictive accuracy.",
      features: ["Python", "Gaussian Naive Bayes", "Logistic Regression", "Robust Scaling", "Missing Value Imputation"],
      live: "https://github.com/AnkurDuttaHQ/CreditWise-loan-prediction",
      github: "https://github.com/AnkurDuttaHQ/CreditWise-loan-prediction",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "delis",
      title: "Delis Portal",
      description: "A custom fluid frontend branding build featuring full typography alignment, responsive micro-animations, and styled navigation blocks.",
      features: ["React.js", "Redux Toolkit", "Modern UI/UX", "Responsive", "Glassmorphism"],
      live: "https://delis-tasteful-bloom.lovable.app/",
      github: "https://github.com/AnkurDuttaHQ/Delis-",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
    }
  ],
  achievements: [
    {
      title: "1st Runner-Up",
      org: "Overnight Event, Kshitij — IIT Kharagpur",
      type: "Event",
      date: "2026"
    },
    {
      title: "National Finalist",
      org: "Clash of Coders, Kshitij — IIT Kharagpur",
      type: "Event",
      date: "2026"
    },
    {
      title: "National Finalist",
      org: "Chandigarh University Ideathon",
      type: "Event",
      date: "2025"
    },
    {
      title: "Frontend Battle Winner",
      org: "Frontend Battle Hackathon — IIT Bhubaneswar",
      type: "Event",
      date: "2025"
    },
    {
      title: "Conference Participant",
      org: "ICDMAI — International Conference on Data Management, Analytics & Innovation",
      type: "Participation",
      date: "2025"
    }
  ],
  certifications: [
    {
      title: "Delta — Full Stack Web Development",
      org: "Credentialed by Apna College",
      type: "Certification",
      date: "2025"
    }
  ],
  ai_journey: [
    { title: "MERN Stack Foundations", status: "Completed", icon: "code" },
    { title: "Statistical Machine Learning", status: "Completed", icon: "brain" },
    { title: "Full-Stack + ML Internships", status: "Active", icon: "briefcase" },
    { title: "Neural Networks & Deep Learning", status: "Ongoing", icon: "cpu" },
    { title: "International Open-Source (GSoC)", status: "Goal", icon: "award" }
  ]
};
