/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
/** 9. `<App>` imports the array from `data` into a state variable. Look very carefully at the
   location of `data.js`! It is not a sibling of `App.jsx`. */
import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  // 10. `<App>` keeps the selected show in a state variable.
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      {
        //** 11. `<App>` renders `<ShowSelection>` within the `<header>`
        //  and `<ShowDetails>` within the `<main>`.
        //  */
      }{" "}
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
