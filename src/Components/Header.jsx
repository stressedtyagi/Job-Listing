function Header() {
	return (
		<nav className="grid grid-cols-[1fr_3fr] justify-items-end shadow-2xl w-full fixed bg-white">
			<div className="grid grid-cols-[1fr_5fr]">
				<img
					src="https://via.placeholder.com/150"
					alt="Icon"
					className="scale-[0.5]"
				/>
				<span className="text-3xl self-center">Job Listing</span>
			</div>
			<div className="grid gap-4 grid-cols-2 mr-1">
				<button className="">Sign Up</button>
				<button>Sign In</button>
			</div>
		</nav>
	);
}

export default Header;
