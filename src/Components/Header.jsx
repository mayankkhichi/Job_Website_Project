import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/main.css";
import { Link } from "react-router-dom";

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <header className="overflow-auto">
      <div className=""><h3 >LOGO</h3></div>
			<div className="flex justify-end">
			<nav ref={navRef}>
        <Link>
				<a href="/#" className="bg-black text-white  py-3 rounded-md text-xl font-bold px-8 mx-5"> 
          Search Job
         </a></Link>

         <Link to="Login">
				<a href="/#"><button className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold">
          For Candidate
        </button></a></Link>


				<a href="/#"><button className="bg-white text-black px-6 py-3 rounded-md text-xl font-bold">
         For Company
         </button></a>


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"	
				onClick={showNavbar}>
				<FaBars />
			</button>
      </div>
		</header>
	);
}

export default Header;
