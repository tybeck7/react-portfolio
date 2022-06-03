import logo from './logo.svg';
import './App.css';
import hahe from'./images/handyhelper.png'
import holand from'./images/horiseon-landingpage.png'
import getBaked from './images/getBaked.png'
import me from './images/me.jpg'

function App() {
  return (
<div classname="App">
  <header>
    <h1>TYLER BECK</h1>
    <nav className="navigation">
      <ul>
        <li>
          <a href="#about">ABOUT ME</a> 
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#contact">CONTACT ME</a>
        </li>
      </ul>         
    </nav>
  </header>
  {/*about me section*/}
  <div>
    <img src={me} alt="Me" className="portrait" width={600} height={650} />
    <div className="about-me">
      <h3 id="about">ABOUT ME</h3>
      <p>I am a twenty-three year old that currently manages at a grocery store. Being that I dont want to be in retail for the rest of my life, and working there for longer than I antisipated; I have branched out to coding to start a new journey an exciting demanding career. Coding has always been something that has intruiged me, but with having no experience with it I was never able to push myself to learn. I just recently started coding classes and it instantly grasped me. Just scratching the surface diving in to the HTML and CSS basics I find myself wanting to learn more and more. I hope to make this a professional career where I'm wanting to go with it is still unknown. I would like to hopefully become a full-stack developer and work my way up a company chain to build more and more knowledge in the feild.</p>
      <p>Outside of career path goals I am a layed back human being. If a person was to ask me if I was an introvert or an extrovert I would tell them that I am both. I am a homebody and I love my alone time, but at the same time I enjoy hanging out with friends and going to do things. I have lots of hobbies! I snowboard reguraly during the winter season its a once a year treat that makes me happy. During the summer I enjoy boating, and river days are always a nice way for me to relax. In fall and spring I enjoy disc golfing its a newer hobby that I have picked up, but it is by far one of my favorite activities to pass time.</p>
      <p>Overall I am just your everyday human. I have goals, dreams, people, and activities that make me happy. I dont know what my future will look like, but I do have dreams of what I want it to be thats the excting part about life the uncertanty. Thats me thank you for taking your time to read up!</p>
      <p>mail: Tybeck003@gmail.com</p>
      <p>tel: 530-334-3103</p>
    </div>
  </div>
  {/*portfolio section*/}
  <h3 id="portfolio" className="topic-style">PORTFOLIO</h3>
  <div className="container">
    <a href="https://tybeck7.github.io/horiseon-refactured/"><img src={holand} style={{width: 190}} onclick="onClick(this)" alt="horisoen project landingpage" /></a>
    <a href="https://tybeck7.github.io/my-roulette/#"><img src={"./assets/images/roulette.png"} style={{width: 190}} onclick="onClick(this)" alt="project 2 landingpage" /></a>
    <a href="https://boiling-gorge-57801.herokuapp.com/"><img src={hahe} style={{width: 190}} onclick="onClick(this)" alt="project 2 landingpage" /></a>
    <a href="https://afternoon-fjord-21260.herokuapp.com/"><img src="./assets/images/getBaked.png" style="width:190px" onclick="onClick(this)" alt="project 4 landingpage"></a>

  </div>
  {/*contact section*/}
  <div className="contact-section">
    <div>
      <h3 id="contact" className="topic-style">CONTACT ME</h3>
      <p>Want to reach out? I am new to coding but I am always looking for possible opprotunities and love meeting new people and making new connections! :)</p>   
    </div>
    <div className="email-box">
      <form action="mailto:tybeck003@gmail.com" method="post" encType="multipart/form-data" name="EmailForm">
        Name:<br />
        <input type="text" name="contact-name" /><br /><br />
        Message:<br /> <textarea name="contact-comment" rows={6} cols={20} defaultValue={"\n            "} /><br /><br /> <input type="submit" defaultValue="submit" />
      </form></div>
  </div>
  <footer>
    <div>
      <h3>INFO</h3>
      <p>I am new to web development. I am a quick and adaptive learner and am willing to take on any chanllange thrown my way!</p>
    </div>
  </footer>
</div>

  );
}

export default App;
