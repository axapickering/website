export default function Navbar() {
  return <nav className="nav flex-column fixed-top mh-vh-100">
    <a className="nav-link active fs-1 text-warning" aria-current="page" href="/">Axa Pickering</a>
    <a className="nav-link text-warning" href="/projects">Projects</a>
    <a className="nav-link text-warning" href="/about-me">About me</a>
    <a className="nav-link text-warning" href="/experience">Experience</a>
    <a className="nav-link text-warning" href="/fitness">Fitness</a>
  </nav>;
}