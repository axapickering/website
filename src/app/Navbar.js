export default function Navbar() {
  return <nav className="nav flex-column fixed-top">
  <a className="nav-link active fs-1" aria-current="page" href="/">Axa Pickering</a>
  <a className="nav-link" href="/projects">Projects</a>
  <a className="nav-link" href="/about-me">About me</a>
  <a className="nav-link" href="/experience">Experience</a>
  <a className="nav-link" href="/fitness">Fitness</a>
</nav>
}