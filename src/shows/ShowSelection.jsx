import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    /** 7. Within the `<nav>`, each show is rendered as `<a class="show">`
     * with the name of the show as both the key and the text of the anchor. */
    <nav className="shows">
      {shows.map((show) => (
        <a
          className="show"
          key={show.name}
          //** 8. When a show is clicked, the selected show
          // is updated in state to the show that was clicked. */
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
