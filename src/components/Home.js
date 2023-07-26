import React, { useState, useEffect } from 'react';


function Home(){

    function handleInputChange(e){
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };
    
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
      });
    

    return(
        <div className="home--page">
            <div className="about--info">
                <h1>Modern Mom's</h1>
                <p className="intro--info">"Modern Mothers is a community of strong parents that pu community and family above self. We strive to make parenting easy with a community that will stand by your family and your mental health. Join our community and see what we have to offer for the family and for new mom's trying to get healthy.</p>
            </div>
            <img src="./images/community.jpg" alt="community" className="home--img"></img>
        <div className="join--input">
            <h3>Join Our Mailing List!</h3>
            <input
            type="text"
            name="firstName"
            value= {signupData.firstName}
            placeholder="First Name"
            onChange={handleInputChange}
            />
            <input 
            type="text"
            name="lastName"
            value={signupData.lastName}
            placeholder="Last Name"
            onChange={handleInputChange}/>
            <input 
            type="email"
            name="email"
            value={signupData.email}
            placeholder="Email"
            onChange={handleInputChange}
            />
            <button className="btn--email">Join Email List</button>
        </div>
        <div className="found--info">
            <h2>Founder's Message</h2>
            <img src="./images/intro.jpg" alt="founder" className="founder--img"></img>
           <p>First off thank you for taking the time in looking at our website. My family was the driving reason I created this company. My husband is in the Army and like military families around the world the time with our loved ones can me limited at times while they are protecting our country. Modern mothers was created to help the community be like family. We pride ourselves in our outreach programs to help every family no matter the stage of life they are in. We are here to be family! -Founder & CEO Courtney Cline</p>
        </div>
        <footer className="footer--info">
            <p>Copyright Modern Mom's LLC 2023</p>
        </footer>        

        </div>
    )
}

export default Home;