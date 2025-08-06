const Footer = () => {
  const githubUrl = "https://github.com/Shinigxi3087?tab=repositories";
  const linkedinUrl = "https://www.linkedin.com/in/safwan-rahman-khan-a16895280/"; 

  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-6 py-6 px-4">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex gap-4 items-center">
      

          {/* GitHub Icon with link */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="hover:text-gray-400 transition-colors"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.004 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn Icon with link */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="hover:text-gray-400 transition-colors"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.85 0-2.134 1.445-2.134 2.94v5.666H9.356V9h3.414v1.561h.047c.476-.9 1.637-1.849 3.37-1.849 3.603 0 4.269 2.37 4.269 5.456v6.284zM5.337 7.433a2.07 2.07 0 11.001-4.14 2.07 2.07 0 010 4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.223.792 24 1.771 24h20.451C23.206 24 24 23.223 24 22.268V1.73C24 .774 23.206 0 22.225 0z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Safwan Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
