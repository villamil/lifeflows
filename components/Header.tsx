const Header = () => {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full opacity-1">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase  text-white font-black text-3xl">
          Life Flows
        </div>
        <div className="flex items-center">
          <nav className="font-sen  text-white uppercase text-lg lg:flex items-center hidden">
            <a href="#" className="py-2 px-6 flex hover:text-pink-400">
              Home
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-pink-400">
              Watch
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-pink-400">
              Product
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-pink-400">
              Contact
            </a>
            <a href="#" className="py-2 px-6 flex hover:text-pink-400">
              Carrer
            </a>
          </nav>
          <button className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1  bg-white mb-1"></span>
            <span className="w-6 h-1  bg-white mb-1"></span>
            <span className="w-6 h-1  bg-white mb-1"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
