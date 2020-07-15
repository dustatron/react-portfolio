import React from 'react';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-title'>Lets Talk</div>
      <div className='contact-paragraph'>
        Wanna get in touch or talk about a project? Feel Free to contact me via
        email at
        <a href='mailto:dustymccord@gmail.com'>
          <span className='contact-paragraph-name'>
            {' '}
            dustymccord@gmail.com{' '}
          </span>
        </a>
        and view
        <a href=''>
          <span className='contact-paragraph-name'> my Resume here.</span>
        </a>
      </div>
      <div className='contact-buttons'>
        <a href='mailto:dustymccord@gmail.com'>
          <button className='contact-buttons-email'>
            <img src={require('../media/icons/mailbox.svg')} alt='mailbox' />{' '}
            email
          </button>
        </a>
        <a
          href='https://www.linkedin.com/in/dustymccord/'
          target='_blank'
          rel='noopener noreferrer'>
          <button className='contact-buttons-linkedin'>
            <img src={require('../media/icons/linkedin.svg')} alt='linkedin' />
            linkedin
          </button>
        </a>
        <a
          href='https://twitter.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <button className='contact-buttons-twitter'>
            <img src={require('../media/icons/twitter.svg')} alt='twitter' />
            twitter
          </button>
        </a>
        <a
          href='https://github.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <button className='contact-buttons-github'>
            <img
              src={require('../media/icons/github-simple.svg')}
              alt='github'
            />
            github
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
