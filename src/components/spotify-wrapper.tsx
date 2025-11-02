import spotify from "@/data/spotify";
import SpotifyNowPlaying from "./spotify-now-playing";
import { cacheLife } from "next/cache";

const SpotifyWrapper = async () => {
  "use cache";
  cacheLife("seconds");
  const data = await spotify();
  return <SpotifyNowPlaying data={data} />;
};

export default SpotifyWrapper;
