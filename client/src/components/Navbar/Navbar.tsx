function Home(_props: any) {

  return (
    <div className="main items-center justify-center bg-white">
      <div className="flex-row justify-between items-center">
        <div className="navbar shadow max-h-screen">
          <div className="h-16 mx-auto px-5 flex items-center justify-between">
              <a href="/home" className="text-xl font-mono text-blue-500 hover:text-blue-800 transition-colors cursor-pointer">Jobtracker</a>
              
              <ul className="flex items-center gap-5">
                <li><a href="/my-applications" className="text-blue-500 font-mono hover:text-blue-800 transition-colors">My applications</a></li>
                <li><a href="/profile" className="text-blue-500 font-mono hover:text-blue-800 transition-colors">Profil</a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;