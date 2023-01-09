import React from "react";
import linkedin from '@iconify/icons-foundation/social-linkedin';
import github from '@iconify/icons-foundation/social-github';
import email from '@iconify/icons-mdi/email';
import { Icon } from '@iconify/react';
import weAdmin from './img/portfolio/we-admin.png';
import weMatchStats from './img/portfolio/we-match-stats.png';
import weP2G from './img/portfolio/we-p2g.png';
import weProspect from './img/portfolio/we-prospect.png';
import tempora from './img/portfolio/tempora.png';
import kc from './img/portfolio/keycaliber.png';
import riskSc from './img/portfolio/risk-screencast1080p.mov';
import quickSearch from './img/portfolio/quick-search1080p.mov';
import quickSearchPoster from './img/portfolio/search-ph.png';
import inventory from './img/portfolio/inventory.png';

export const ABOUT = {
    title: "Frontend Developer",
    subtitle: "In Washington DC",
    text: <div><p>
        I’ve been at it for over 10 years, creating user interfaces for government clients at <a href="https://www.publicissapient.com/industries/public-sector" rel="noopener noreferrer" target="_blank">Sapient</a> and in the private sector for <a href="https://www.wealthengine.com" rel="noreferrer noopener" target="_blank">WealthEngine</a> and <a href="https://www.keycaliber.com" rel="noreferrer noopener" target="_blank">KeyCaliber</a>.</p>        
        <p>When I’m not coding, I love running, <a href="https://benhofer.bandcamp.com" rel="noreferrer noopener" target="_blank">making music</a>, and playing legos with my kids on our dining room table.</p>
    </div>,
  links: [
    <a href="http://github.com/benhofer" rel="noreferrer noopener" target="_blank"><Icon icon={github} width="32px" /> <span className="is-sr-only">Github</span></a>,
    <a href="https://www.linkedin.com/in/benhofer/" rel="noreferrer noopener" target="_blank"><Icon icon={linkedin} width="32px" /> <span className="is-sr-only">LinkedIn</span></a>,
    <a href="mailto:ben dot hofer at gmail dot com" rel="noreferrer noopener" target="_blank"><Icon icon={email} width="32px" /><span className="is-sr-only">Email</span></a>,
  ]
}

export const WORK = [
    {
        title: "KeyCaliber",
        description: "I built wireframes, UI and data visualizations for this cybersecurity startup's SaaS product and public marketing website.",
        time: 'August 2020 - Present',
        link: ['https://www.keycaliber.com', 'About KeyCaliber'],
        projects: [
            {
                title: "Marketing Website", 
                description: 'Developed wireframes and frontend code including custom interactive elements for public marketing website. Coordinated with VP of Engineering to ensure a successful deployment.', 
                headerImg: kc, 
                technologies: [
                    "HTML", "CSS", "JavaScript", "React", "React Router", "Responsive Design"
                ],
                images: [
                    // [kc2, 'is-one-third-desktop', 'description']
                ]
            }, {
                title: "KeyCaliber Product: Risk", 
                description: "Built wireframes and front-end code for a redesign of the KeyCaliber Product with Material UI and the D3 data visualization library. The Risk tab featured an interactive scatterplot.", 
                link: "",
                images: null,
                technologies: [
                    "HTML", "CSS", "JavaScript", "React", "Material UI", "D3"
                ],
                headerVideo: riskSc
            },{
                title: "KeyCaliber Product: Inventory", 
                description: "Developed a UI for filtering and sorting a paginated table of assets.", 
                link: "",
                images: null,
                technologies: [
                    "HTML", "CSS", "JavaScript", "React", "Material UI"
                ],
                headerImg: inventory,
                headerImgBorder: true
            },{
                title: "KeyCaliber Product: Search", 
                description: "Developed concept and built out interactive autocomplete search feature that doubles as a way to navigate the website.", 
                link: "",
                images: null,
                technologies: [
                    "HTML", "CSS", "JavaScript", "React", "Material UI"
                ],
                headerVideo: quickSearch,
                headerVideoPoster: quickSearchPoster
            }
        ]
    },
    {
        title: "WealthEngine",
        time: 'April 2014 - June 2020',
        description: "I established, maintained and documented a UI pattern library for the WealthEngine data analytics platform. This served to organize the code and streamline frontend development by providing the team with reusable components and layouts.", 
        link: ['https://www.wealthengine.com/about', 'About WealthEngine'],
        projects: [
            {
                title: "WE Admin",
                description: "Built administration prototype using React. The tool provides comprehensive usage analytics, user management and several other features for team administrators. Coordinated with technology team and product management to ensure a successful handoff.", 
                headerImg: weAdmin,
                thumbnails: true,
                images: [
                    // [weAdmin1], [weAdmin2], [weAdmin3], [weAdmin4], [weAdmin5]
                ],
                technologies: [
                    "HTML", "CSS", "Sass/scss",  "JavaScript", "React", "React Router", "HighCharts"
                ]
            },
            {
                title: "Wealth Analysis Summary",
                description: "Created a dashboard for aggregate visual analysis of any number of system wealth profiles. Built several data visualization widgets using React.",
                headerImg: weMatchStats,
                images: null,
                technologies: [
                    "HTML", "CSS", "Sass/scss",  "JavaScript", "React"
                ]
            },
            {
                title: "Propensity to Give (P2G) by Category",
                description: "Built analysis widget for WealthEngine’s proprietary P2G score, broken out by category.",
                headerImg: weP2G,  
                images: null,
                technologies: [
                    "HTML", "CSS", "Sass/scss",  "JavaScript", "React"
                ]
            },
            {
                title: "WE Prospect",
                description: "Contributed to development of a visual audience builder. The tool allows users to query and segment WealthEngine’s Data Graph into custom audiences.",
                headerImg: weProspect, 
                images: [
                ],
                technologies: [
                    "HTML", "CSS", "Sass/scss",  "JavaScript"
                ]
            }
        ]
    },
    // {
    //     title: "Side Projects",
    //     time: "2020 - Present", 
    //     projects: [{
    //             title: "Centering Prayer App",
    //             description: "Worked with a friend to develop a webapp which aids spiritual seekers in centering prayer. I created background color animations to transition between the pages with CSS and React-Router. Each meditation presents a consistent audio format with bells and readings, accomplished via timers and React hooks.",
    //             link: "https://main.d15b5ad74h55z7.amplifyapp.com/app",
    //             headerImg: tempora,
    //             technologies: [
    //                 "HTML", "CSS", "JavaScript", "React", "React Router", "Responsive Design"
    //             ]
    //         },
            // {
            //     title: "Would You Rather App ",
            //     description: "This project was for the Udacity React Nanodegree. The assignment was to build an app which would allow users to create “Would You Rather” questions and also to vote on them. The demo features three made-up users.",
            //     link: "https://master.d2jo2yzx5ypc0r.amplifyapp.com/",
            //     images: [
            //         wyr1, wyr2, wyr3
            //     ],
            //     technologies: [
            //         "HTML", "CSS", "JavaScript", "React"
            //     ]
            // }
        // ]
    // }
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