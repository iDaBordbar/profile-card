import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src='/IMG_5126.png' alt='iDa Bordbar' className='avatar' />;
}

function Intro() {
  return <div className='intro'>
    <h2>iDa Bordbar</h2>
    <p>Hi, I'm iDa, a frontend developer passionate about creating clean and user-friendly website.
      I work with HTML, Css, Javascript and React, and I'm always learning new things.I enjoy turning ideas into interactive and beautiful web experiences.
    </p>
  </div>
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Html+Css" color="#dd4b25" />
      <Skill skill="JavaScript" color="#f7ac00" />
      <Skill skill="Tailwind" color="#36b7f0" />
      <Skill skill="React" color="#1399c4" />
      <Skill skill="Git & GitHub" color="purple" />
      <Skill skill="Web Design" color="darkseagreen" />
    </div>
  )


}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
