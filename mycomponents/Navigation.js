import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    return(
        <nav className="nav">
            <Link href="/" className="logo">SovTech Challenge</Link>

            <ul className="list">
                <li className="listItem">
                    <Link href="#">Email: j.dinizulu@gmail.com</Link>
                </li>
                <li className="listItem">
                    <Link href="https://www.linkedin.com/in/jabulane-dinizulu-a5a650143/">
                        <span className="size"><Image src="/Linkedin_logo_initials.png" width="60" height="45" alt="Google image" /></span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;