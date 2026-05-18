import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      {}{" "}
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
