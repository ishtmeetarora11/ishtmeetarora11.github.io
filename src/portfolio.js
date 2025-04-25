/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ishtmeet Singh Arora",
  title: "Hi all, I'm Ishtmeet",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Java / Python / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aBTUHKgaxNTlHLKWIVeNYNytz3jbi_WU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ishtmeetarora11",
  linkedin: "https://www.linkedin.com/in/ishtmeet-arora/",
  facebook: "https://www.facebook.com/Ishtmeet.arora/",
  instagram: "https://www.instagram.com/_isht11_/",
  twitter: "https://twitter.com/ishtupaaji",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/UFL.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "GPA: 3.85 / 4",
      descBullets: [
        "Graduate Research Assistant under Dr. Walter Leite",
        "Graduate Teaching Assistant in the Software Engineering Course",
        "Finalist in Gator AI Hackathon"
      ]
    },
    {
      schoolName: "Jaypee Institute of Information Technology",
      logo: require("./assets/images/jiit3.jpeg"),
      subHeader: "Bachelor of Technology with Honors in Computer Science",
      duration: "July 2018 - May 2022",
      desc: "CGPA: 8.3 / 10",
      descBullets: ["Ranked top 10% in the program"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Devops",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "University of Florida",
      companylogo: require("./assets/images/UFL.png"),
      date: "October 2024 – Present",
      desc: "Developed and deployed a responsive React frontend and backend with SQL/MongoDB for Storiza, enhancing adaptive storytelling for K–3 learners. Integrated GCP Cloud Monitoring to ensure 99.9% uptime. Enabled real-time, adaptive storytelling based on reading levels and keywords, enhancing personalized learning outcomes through scalable, personalized storytelling, supporting diverse literacy needs in Dr. Leite’s Virtual Learning Lab platform.",
    },
    {
      role: "Software Engineer Apprenticeship",
      company: "Aerial Tech",
      companylogo: require("./assets/images/at_ag_logo.jpeg"),
      date: "January 2025 – May 2025",
      desc: "As part of the Sky Radar project at Aerial Tech, I engineered frontend functionalities to enhance real-time drone tracking and airspace visualization. I developed a dynamic Area of Interest (AOI) widget enabling rectangle and polygon drawing with live vertex editing using React.js and Leaflet.js. I integrated AOI CRUD operations with backend APIs for persistent storage and built a sidebar-driven management table with editable fields. My work optimized user workflows, improved spatial data interaction, and boosted platform responsiveness.",
    },
    {
      role: "Graduate Assistant Volunteer",
      company: "University of Florida",
      companylogo: require("./assets/images/UFL.png"),
      date: "March 2024 – August 2024",
      desc: "Contributed to Dr. Kristy Boyer’s Lab by developing real-time sports visualizations and game-based virtual agents using Python, JavaScript, and React. Improved Bluetooth error handling in Karoo-to-Karoo communications and implemented Java-based background monitoring in ConneXX to ensure reliable connectivity and real-time status updates for enhanced learning environments.",
    },
    {
      role: "Software Engineer",
      company: "ZopSmart",
      companylogo: require("./assets/images/zops.jpeg"),
      date: "August 2022 – July 2023",
      desc: "Led development of core modules for 'Rocket', a Java microservices framework. Built Redis and Tracing modules with OpenTelemetry, Zipkin, and New Relic integration. Added CircuitBreaker to HTTP Client, SFTP to File Store, and OpenAPI/Swagger generation via JAX-RS, streamlining logging, monitoring, and deployment across services."
    },
    {
      role: "Software Engineer Intern",
      company: "ZopSmart",
      companylogo: require("./assets/images/zops.jpeg"),
      date: "February 2022 – August 2022",
      desc: "At ZopSmart, transitioned a monolithic compiler platform to 13 microservices, enabling multi-file Java support and reducing Java/C++ compilation time by 40%. Set up CI/CD with GitHub Actions, GCP deployments, and automated code snippet generation in six languages. Managed coding tests for 2000+ students with accurate cluster provisioning."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gator AI Hackathon Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me !"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  designation: "Software Engineer",
  location: "United States",
  email_address: "ishtmeet.arora@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ishtupaaji", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
