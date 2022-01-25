import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="navbar bg-cyan-600">
          <div className="container flex items-center mx-auto py-4">
            <div className="w-3/12">
              <Logo/>
            </div>
            <div className="w-6/12">
              <ul className="nav flex justify-center space-x-10 text-lg">
                <li className="nav-item text-white text-opacity-60 font-semibold text-lg">Profile</li>
                <li className="nav-item text-white text-opacity-60 font-semibold text-lg">Skills</li>
                <li className="nav-item text-white text-opacity-60 font-semibold text-lg">Project</li>
                <li className="nav-item text-white text-opacity-60 font-semibold text-lg">Contact</li>
              </ul>
            </div>
            <div className="w-3/12">
              <div className="button text-center">
                <a className="text-lg font-semibold text-yellow-300 border rounded-full border-yellow-300 py-1 px-6">
                Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      )
}