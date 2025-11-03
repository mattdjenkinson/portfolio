import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

const getAccessToken = async () => {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.json().then((data) => data.access_token);
};

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.statusText === "No Content") {
    return {
      isPlaying: false,
      title: "",
      album: "",
      artist: "",
      albumImageUrl: "",
      songUrl: "",
    };
  }

  const data = await response.json();

  return data;
};

export default async function spotify() {
  const response = await getNowPlaying();

  const data = {
    isPlaying: response.is_playing,
    title: response.item?.name,
    album: response.item?.album?.name,
    artist: response.item?.album?.artists
      .map((artist: { name: string }) => artist.name)
      .join(", "),
    albumImageUrl: response.item?.album?.images[0]?.url,
    songUrl: response.item?.external_urls?.spotify,
  };

  return data;
}
