import "./shows.css";

export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          className="show"
          key={show.name}
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
