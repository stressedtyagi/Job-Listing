function Header() {
	return (
		<div className="grid grid-cols-[1fr_3fr] justify-items-end">
			<div className="grid grid-cols-[1fr_5fr]">
				<img
					// className="border"
					src="https://via.placeholder.com/150"
					alt="Icon"
					className="scale-[0.8]"
				/>
				<span className="text-3xl self-center">Job Listing</span>
			</div>
			<div className="grid gap-4 grid-cols-2">
				<button>Sign Up</button>
				<button>Sign In</button>
			</div>
		</div>
	);
}

export default Header;
