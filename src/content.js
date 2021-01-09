import linkedin from '@iconify/icons-foundation/social-linkedin';
import github from '@iconify/icons-foundation/social-github';
import twitter from '@iconify/icons-foundation/social-twitter';
import email from '@iconify/icons-mdi/email';
import { Icon } from '@iconify/react';


export const ABOUT = {
    title: <h1 className="title">I'm a Front-End Developer specializing in ReactJS</h1>,
    text: <h2 className="subtitle">
    I’ve been at it for over 10 years, creating user interfaces for government clients at <a href="https://www.publicissapient.com/industries/public-sector" rel="noreferrer" target="_blank">Sapient</a> and in the private sector for <a href="https://www.wealthengine.com" rel="noreferrer" target="_blank">WealthEngine</a> and <a href="https://www.keycaliber.com" rel="noreferrer" target="_blank">KeyCaliber</a>. I have seen the industry go through a myriad of changes. My experience, grit, and the joy of learning new technologies keep me alert and motivated. 
    <br /><br />When I’m not coding, I love running, <a href="https://benhofer.bandcamp.com" rel="noreferrer" target="_blank">music</a>, and legos with my kids on our dining room table.
  </h2>,
  links: [
    <a href="http://twitter.com/benhofer" rel="noreferrer" target="_blank">
        <Icon icon={twitter} width="32px" /> <span className="is-sr-only">Twitter</span></a>,
    <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer" target="_blank"><Icon icon={linkedin} width="32px" /> <span className="is-sr-only">LinkedIn</span></a>,
    <a href="http://github.com/benhofer" rel="noreferrer" target="_blank"><Icon icon={github} width="32px" /> <span className="is-sr-only">Github</span></a>,
    <a href="mailto:ben dot hofer at gmail dot com" rel="noreferrer" target="_blank"><Icon icon={email} width="32px" /><span className="is-sr-only">Email</span></a>,
  ]
}

export const WORK = [
    {
        title: "WealthEngine Administration Suite",
        description: <p>Worked on an agile tribe as part of the WealthEngine technology team to design and build a robust administration tab into the product. The tab featured comprehensive usage analytics, user management and several other features for team administrators. The UI was built using ReactJS, React-Router and HighCharts.</p>, 
        images: [

        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "ReactJS", "React Router", "HighCharts"
        ]
    },
    {
        title: "Wealth Analysis Summary Tab",
        description: "Worked with the team to design and build out a tab for aggregate visual analysis of any number of system wealth profiles. The tab features multiple data visualization widgets built using ReactJS.",
        images: [

        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "ReactJS"
        ]
    },
    {
        title: "Propensity to Give (P2G) by Category",
        description: "Designed and built out breakdown visual analysis widget of WealthEngine’s proprietary P2G score by Category.",
        images: [

        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "ReactJS"
        ]
    },
    {
        title: "WE Prospect",
        description: "Worked with product management to design and build visual UI for the WE Prospect Audience Builder. The tool allows users to query and segment WealthEngine’s Data Graph into custom audiences.",
        images: [

        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "AngularJS"
        ]
    },{
        title: "Tempora App",
        description: "Worked with a friend to implement his vision for an app to aid spiritual seekers in centering prayer using Scripture and other spiritual verses. The app features simple background color animations and custom audio for each meditation. Each meditation presents a consistent audio format: a bell rings, the verse is read, then the bell is rung again. The user is then invited to meditate on the passage for a certain amount of time. At the end the bells and passage audio is again played.",
        link: "https://main.d15b5ad74h55z7.amplifyapp.com/app",
        images: [

        ],
        technologies: [
            "HTML", "CSS", "JavaScript", "ReactJS", "React Router"
        ]
    },{
        title: "Would You Rather App ",
        description: "This project was for the Udacity ReactJS Nanodegree. The assignment was to build an app which would allow users to create “Would You Rather” questions and also to vote on them. The demo features three made-up users.",
        link: "https://main.d15b5ad74h55z7.amplifyapp.com/app",
        images: [

        ],
        technologies: [
            "HTML", "CSS", "JavaScript", "ReactJS"
        ]
    }

]

export const TESTIMONIALS = [
    {
        text: <div><p>Ben worked in my team at WealthEngine. He is a very seasoned UX designer - an all-rounder who knows not only how to design great user experiences with style and usability but also develop full frontend components in React using data. I know very few designers who are full stack like him, skilled in tools like Sketch and Photoshop to HTML, SCSS, JS and React that are needed for creating rich, interactive prototypes. 
        </p><p>
        Ben saved us a ton of lead time by creating reusable style standards and components that developers could directly use in production. 
        </p><p>
        Apart from skills, Ben has honesty, humility and friendliness that make him a gem in the team. I wish him great creative experiences in his future gigs. P.S. Ben’s a great song writer and musician
        </p></div>,
        colleague: "Samir Damle",
        organization: "WealthEngine",
        title: "Senior Director of User Experience Design"
    },{
        text: <div><p>Ben has this amazingly calm demeanor and earnestly strives to deliver web-based user interfaces as specificated by the product team in conjunction with what is needed by the end-users. He methodically puts in the time to understand what is required, he focuses his effort on what is the most logical and workable in the end, and he continues to hone his skills to be on the forefront of front end web design. I was fortunate to be able to work with him to clarify workflow, reports, and results on several projects over the years, and he was always respectful of everyone that he interacted with at WealthEngine.</p></div>,
        colleague: "Zara Schiavo-Campo",
        organization: "WealthEngine",
        title: "Senior Data Services Analyst"
    },{
        text: <div><p></p></div>,
        colleague: "Alex Poulos",
        organization: "The Washington Post",
        title: "Senior Full-Stack Engineer"
    },
]