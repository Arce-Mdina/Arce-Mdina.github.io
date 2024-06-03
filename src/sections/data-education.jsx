import goldUKMT from '../assets/UKMT-gold.png'
import silverUKMT from '../assets/UKMT-silver.png'

// DCIS 
export const dcisInfo = [{
    id: 0,
    heading: "House Captain",
    information: (
        <>
            <div>
                I was House Captain of Ubin for 4 consecutive years (although I only got 3 badges as I was absent once when they gave them out ☹️)
            </div>
        </>
    ),
}, {
    id: 1,
    heading: "Student Council",
    information: (
        <>
            <div>
                I was a member of the Digital & Learning Committee of Student Council for 2 years.
            </div>
            <div>
                <br></br>
                <p>There, I created 2/4 of the Microsoft tutorial videos (which is shown at the start of the 2023-24 school year) which helped students across campus to transfer from Google services to Microsoft services.</p>
                <br></br>
                <p>In addition, I contributed to planning a Hackathon and trying creating more recogniton and voice across NAE.</p>
            </div>
        </>
    ),
}, {
    id: 2,
    heading: "UKMT Maths Challenges",
    information: (
        <>
            <div>In Year 8 and 9, I entered the UKMT Maths Competition. I won the Gold Award and the Silver Award in that order.</div>
            <br></br>
            <div className="card-grid">
                <img src={goldUKMT} className="overlay-image"/>
                <img src={silverUKMT} className="overlay-image"/>
            </div>
        </>
    ),
}, {
    id: 3,
    heading: "MUN Conference Year 2022-23",
    information: (
        <>
            <div>I joined MUN and represented the United States of America. We discovered topics such as Inflation & the Tawain Strait Conflict</div>
        </>
    )
}, {
    id: 4,
    heading: "Learning to Code",
    information: (
        <>
            <div>Although not entirely of the school's curriculum, I found a friend who is amazing at coding and he inspired me to learn more.</div>
            <br></br>
            <div>I learned languages such as HTML, CSS, JavaScript, and React later on. I created websites that help me to promote my school work and make me stand out!</div>
        </>
    ),
}]


// NAIS
export const naisInfo = [{
    id: 0,
    heading: "",
    information: (
        <></>
    ),
}]