import React from "react";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className='HomePage'>
      <header className='hero'>
        <h1 className='hero-text'>
          Hi, I am
          <span> Otman.</span>
        </h1>
        <p className='h-sub-text'>
          Having always had a passion for technology, innovation, and
          creativity, I developed a keen interest in software development. I
          nurtured this interest through self-learning and academic studies to
          pursue a career in web development.
        </p>
        <div className='icons'>
          <a
            className='icon-holder'
            href='https://linkedin.com/in/otman-ouali'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} className='icon ln' />
          </a>
          <a
            className='icon-holder'
            href='https://github.com/ottowoolf'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </a>
          <a href='mailto:otto.woolf@gmail.com' className='icon-holder'>
            <FontAwesomeIcon icon={faEnvelope} className='icon ml' />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
