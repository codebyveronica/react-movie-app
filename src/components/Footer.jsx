import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-center gap-4 bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
      </footer>
    </div>
  )
}

export default Footer;
