export default function Header({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <header>
      <h1>6ereke7</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="accent"
      >
        Toggle Theme
      </button>
    </header>
  );
}
