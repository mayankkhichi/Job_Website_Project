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
		<Link to="/">
      <div className="  mx-auto flex justify-center items-center bottom-0">
       <h3>
         <img src="/public/Mainicon.png" className=" h-[200px] w-[250px] left-0" alt="Main Icon" />
       </h3>
      </div></Link>

			<div className="flex justify-end">
			<nav ref={navRef}>
    
				<Link to="AllJobs" className="bg-black text-white  py-3 rounded-md text-xl font-bold px-8 mx-5"> 
          Search Job
         </Link>

         <Link to="Login">
				<button className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold">
          For Candidate
        </button></Link>

                <Link to="CompanyLogin">
				<button className="bg-white text-black px-6 py-3 rounded-md text-xl font-bold">
         For Company
         </button></Link>



				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				<button
				className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />

				</button>
				
			</nav>
			<div></div>
			<Link to="StudentProfile">
			
				<img src="user.png" className="h-[50px]"></img>
			
			</Link>
			
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
