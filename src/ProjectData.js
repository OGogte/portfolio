import blogit from './assets/blogit.png'
import ticketmaster from './assets/ticketmaster.png'
import campusolx from './assets/campusolx.png'


export default [
    {
        title: 'BlogIt',
        text: 'A simple platform for people to post blogs and images.',
        url: 'https://github.com/OGogte/MERNBlogWebsite.git',
        tools: 'React, NodeJs, Express, MongoDB',
        img: <img src={blogit}/>
    },
    {
        title: 'Ticketmaster',
        text: 'A train ticket booking application with features like train search, seat reservations, and other administrative functionalities',
        url: 'https://github.com/OGogte/theticketmaster',
        tools: 'React, FastAPI, PostgreSQL',
        img: <img src={ticketmaster}/>
    },
    {
    title: 'Campus OLX',
    text: 'A peer-to-peer marketplace web application for students to sell, rent, and buy items among themselves.',
    url: 'https://github.com/OGogte/PWI-OLX-CAMPUS',
    tools: 'React, CSS, Firebase',
    img: <img src={campusolx}/>
    }
]