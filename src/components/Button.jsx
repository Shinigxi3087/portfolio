const Button = ({text, className, id}) => {
  return (
    <a 
    onClick={(e) => {
      e.preventDefault();
      const target = document.getElementById('counter')
      if (target && id) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo( {top, behavior: 'smooth' })
      }
    }}
    className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group relative transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 active:scale-95 shadow-lg hover:shadow-2xl">
            <div className="bg-pulse absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-110 transition-all duration-500 ease-out animate-pulse"/>
            <div className="bg-glow absolute inset-0 rounded-full bg-white/20 blur-md transform scale-0 group-hover:scale-125 transition-all duration-700 ease-out"/>
            <p className='text relative z-10 font-semibold group-hover:text-white transition-colors duration-300'>{text}</p>
            <div className="sparkles absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.1s'}}/>
                <div className="absolute bottom-3 left-4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.3s'}}/>
                <div className="absolute top-1/2 left-2 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}/>
            </div>
        </div>
    </a>
  )
};

export default Button;