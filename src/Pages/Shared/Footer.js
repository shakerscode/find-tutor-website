import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-secondary">
      <div className='footer p-10 text-neutral-content justify-between items-center '>
        <div className='text-center'>
          <span class="font-bold text-xl text-white">Services</span>
          <a class="link link-hover" href='#'>Branding</a>
          <a class="link link-hover" href='#'>Design</a>
          <a class="link link-hover" href='#'>Marketing</a>
          <a class="link link-hover" href='#'>Advertisement</a>
        </div>
        <div>
          <span class="font-bold text-xl text-white">Company</span>
          <a class="link link-hover" href='#'>About us</a>
          <a class="link link-hover" href='#'>Contact</a>
          <a class="link link-hover" href='#'>Jobs</a>
          <a class="link link-hover" href='#'>Press kit</a>
        </div>
        <div>
          <span class="font-bold text-xl text-white">Legal</span>
          <a class="link link-hover" href='#'>Terms of use</a>
          <a class="link link-hover" href='#'>Privacy policy</a>
          <a class="link link-hover" href='#'>Cookie policy</a>
        </div>
      </div>
      <div>
        <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved by <a className='font-bold' href="https://www.linkedin.com/in/shaker-ahamed-a96a94206/">Shaker Ahamed</a></p>
      </div>
    </footer>
  );
};

export default Footer;