function Header() {
	return (
		<div className="grid grid-cols-[1fr_3fr] justify-items-end bg-blue-900 text-slate-50">
			<div className="grid grid-cols-[1fr_5fr]">
				<img
					src="https://via.placeholder.com/150"
					alt="Icon"
					className="scale-[0.5]"
				/>
				<span className="text-3xl self-center">Job Listing</span>
			</div>
			<div className="grid gap-4 grid-cols-2 mr-1">
				<button>Sign Up</button>
				<button>Sign In</button>
			</div>
		</div>
	);
}

export default Header;
