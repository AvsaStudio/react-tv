import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
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
