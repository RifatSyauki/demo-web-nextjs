import Link from 'next/link';
import "./Header.css";

export default function Header() {
	return  (
		<header className="">
			<div className="header-div">
				<h1 className="header-h1">Rebahan Project</h1>
				<div className="header-list-link">
					<Link href="/">Home</Link>
					<Link href="/pages">Pages</Link>
					<Link href="/about">About</Link>
				</div>
			</div>
		</header>
	)
}