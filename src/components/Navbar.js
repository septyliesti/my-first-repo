import Logo from "./Logo";
import Nav from "./NavItem";
import Button from "./Button";

export default function Navbar() {
    return (
          <div className="flex items-center">
            <div className="w-3/12">
              <Logo/>
            </div>
            <div className="w-6/12">
              <Nav/>
            </div>
            <div className="w-3/12">
              <Button/>
            </div>
          </div>
      
      )
}