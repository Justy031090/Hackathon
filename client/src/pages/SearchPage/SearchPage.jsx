import SongButton from "../../components/SongButton/SongButton.jsx";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="search-page">
      <SongButton
        song={{
          name: "Hero of our Time",
          artist: "NateWantsToBattle",
          genre: "Alternative",
        }}
      />
    </div>
  );
};
export default SearchPage;
