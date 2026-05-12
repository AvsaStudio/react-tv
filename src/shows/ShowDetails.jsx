import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
/** 1. `<ShowDetails>` takes a `show` as a prop.*/
export default function ShowDetails({ show }) {
  /** 2. `<ShowDetails>` keeps the selected episode in a state variable.
   */
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  /** 3. If no show is provided, `<ShowDetails>` renders a message
   * encouraging the user to select a show. */
  /** 4. If a show is provided, `<ShowDetails>`
   * renders `<EpisodeList>` and `<EpisodeDetails>`. */
  /** 5. `<EpisodeList>` and `<EpisodeDetails>` are provided the correct props.
   * Read the source code of these components to figure out what props they expect!
   */
  if (!show) {
    return (
      <div className="show-details">
        <p>Select a show to see episode details.</p>
      </div>
    );
  }
  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />

      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
