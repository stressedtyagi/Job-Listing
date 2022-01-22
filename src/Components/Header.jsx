function Header() {
	return (
		<div className="grid gap-4 grid-cols-2">
			<div className=" border-2 border-black grid grid-cols-2 gap-2">
				<img
					// className="border"
					src="https://via.placeholder.com/150"
					alt="Icon"
				/>
				<span className="text-4xl">Job Listing</span>
			</div>
			<div>
				<span>Job Listing</span>
			</div>
		</div>
	);
}

export default Header;
