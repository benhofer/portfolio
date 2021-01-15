import linkedin from '@iconify/icons-foundation/social-linkedin';
import github from '@iconify/icons-foundation/social-github';
import twitter from '@iconify/icons-foundation/social-twitter';
import email from '@iconify/icons-mdi/email';
import { Icon } from '@iconify/react';
import weAdmin1 from './img/we-admin1.jpg';
import weAdmin2 from './img/we-admin2.jpg';
import weAdmin3 from './img/we-admin3.jpg';
import weAdmin4 from './img/we-admin4.jpg';
import weAdmin5 from './img/we-admin5.jpg';
import weAnalysis from './img/we-analysis.jpg';
import weP2G from './img/we-p2g.jpg';
import weProspect from './img/we-prospect.jpg';
import tempora1 from './img/tempora1.jpg';
import tempora2 from './img/tempora2.jpg';
import wyr1 from './img/wyr1.jpg';
import wyr2 from './img/wyr2.jpg';
import wyr3 from './img/wyr3.jpg';
import kc from './img/keycaliber.jpg';



export const ABOUT = {
    title: "Frontend Developer",
    subtitle: "Specializing in ReactJS",
    text: <div><p>
        I’ve been at it for over 10 years, creating user interfaces for government clients at <a href="https://www.publicissapient.com/industries/public-sector" rel="noreferrer" target="_blank">Sapient</a> and in the private sector for <a href="https://www.wealthengine.com" rel="noreferrer" target="_blank">WealthEngine</a> and <a href="https://www.keycaliber.com" rel="noreferrer" target="_blank">KeyCaliber</a>.</p>        
        <p>When I’m not coding, I love running, <a href="https://benhofer.bandcamp.com" rel="noreferrer" target="_blank">making music</a>, and playing legos with my kids on our dining room table.</p>
    </div>,
  links: [
    <a href="http://github.com/benhofer" rel="noreferrer" target="_blank"><Icon icon={github} width="32px" /> <span className="is-sr-only">Github</span></a>,
    <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer" target="_blank"><Icon icon={linkedin} width="32px" /> <span className="is-sr-only">LinkedIn</span></a>,
    <a href="http://twitter.com/benhofer" rel="noreferrer" target="_blank">
        <Icon icon={twitter} width="32px" /> <span className="is-sr-only">Twitter</span></a>,
    <a href="mailto:ben dot hofer at gmail dot com" rel="noreferrer" target="_blank"><Icon icon={email} width="32px" /><span className="is-sr-only">Email</span></a>,
  ]
}

export const WORK = [
    {
        title: "KeyCaliber Website",
        description: "Along with the team at KeyCaliber I implemented their public website and a new UI for their flagship product.",
        link: "https://www.keycaliber.com",
        images: [
            kc
        ],
        technologies: [
            "HTML", "CSS", "JavaScript", "ReactJS", "React Router"
        ]
    },
    {
        title: "Centering Prayer App",
        description: "Worked with a friend to implement his vision for an app to aid spiritual seekers in centering prayer. The app features simple background color animations and custom audio for each meditation. Each meditation presents a consistent audio format: a bell rings, a text is read, then the bell rings a second time. The user is then invited to meditate on the passage. At the end the bells and text are played again.",
        link: "https://main.d15b5ad74h55z7.amplifyapp.com/app",
        images: [
            tempora1, tempora2
        ],
        technologies: [
            "HTML", "CSS", "JavaScript", "ReactJS", "React Router"
        ]
    },
    {
        title: "WealthEngine Administration Suite",
        description: "Worked on an Agile Tribe as part of the WealthEngine technology team to design and build a robust administration tab into the product. The tab featured comprehensive usage analytics, user management and several other features for team administrators. The UI was built using ReactJS, React-Router and HighCharts.", 
        images: [
            weAdmin1, weAdmin2, weAdmin3, weAdmin4, weAdmin5
        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "ReactJS", "React Router", "HighCharts"
        ]
    },
    {
        title: "Wealth Analysis Summary Tab",
        description: "Worked with the team to design and build out a tab for aggregate visual analysis of any number of system wealth profiles. The tab features multiple data visualization widgets built using ReactJS.",
        images: [
            weAnalysis
        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "ReactJS"
        ]
    },
    {
        title: "Propensity to Give (P2G) by Category",
        description: "Designed and built out breakdown visual analysis widget of WealthEngine’s proprietary P2G score by Category.",
        images: [
            weP2G
        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "ReactJS"
        ]
    },
    {
        title: "WE Prospect",
        description: "Worked with product management to design and build visual UI for the WE Prospect Audience Builder. The tool allows users to query and segment WealthEngine’s Data Graph into custom audiences.",
        images: [
            weProspect
        ],
        technologies: [
            "HTML", "CSS", "Sass/scss",  "JavaScript", "AngularJS"
        ]
    },{
        title: "Would You Rather App ",
        description: "This project was for the Udacity ReactJS Nanodegree. The assignment was to build an app which would allow users to create “Would You Rather” questions and also to vote on them. The demo features three made-up users.",
        link: "https://master.d2jo2yzx5ypc0r.amplifyapp.com/",
        images: [
            wyr1, wyr2, wyr3
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
        text: <div><p>
                I worked with Ben in WealthEngine where he was responsible for designing the UX/UI components for my team. Ben is not only a very passionate and enthusiastic UX designer but also a hardworking and dedicated UI engineer. He always looks at UI from the users' perspective and his suggestions for UI layouts are fresh and creative. His quick-learning capabilities are great add-ons. On the personal front, he is very friendly to work with. I would highly recommend him for any UX/UI role and wish him all the best for future endeavours.
            </p></div>,
        colleague: "Ullash Nandan",
        organization: "WealthEngine",
        title: "Software Development Manager"

    },
    {
        text: <div><p>
        By combining an artist’s eye with JavaScript chops, Ben brings vivid front-end experiences to life! I’m a full-stack dev, but lean towards the back-end side of things. Ben helped me create a beautiful front-end web experience for Tempora, a meditation app I work on in my free time.
        </p></div>,
        colleague: "Alex Poulos",
        organization: "The Washington Post",
        title: "Full Stack Engineer"
    },
]