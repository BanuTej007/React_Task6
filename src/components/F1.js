import './style.css'

export function Home(){
    return(
        <div class="homepage">
            <div className='display-3 '>Hello,</div>
            <div className='display-1'>World.</div>
            <p>My name is Banu. I'm a MERN developer<br/>and it is lovely to meet you. Check out my work.</p>
        </div>
    );
}

export function About(){
    return(
        <div className="page">
            <h3><u>Education:</u></h3>
            <p>10th: CBSE school</p>
            <p>12th: MPC in CBSE school</p>
            <p>BTech: CSE at VIT Vellore</p>
        </div>
    );
}

export function Contact(){
    return(
        <div className='page'>
            <h3>Contact Me:</h3>
            <p>Ph: 489448598</p>            
            <p>Mail: banutej@gmail.com</p>            
        </div>
    );
}