"use client";

import { motion } from "motion/react";
import { Music2 } from "lucide-react";
import { useEffect, useState } from "react";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

const MusicBars = () => {
  return (
    <div className="flex h-4 items-center gap-[3px]">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [0.3, 1, 0.5, 0.8, 0.4, 1, 0.3],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            },
          }}
          className="h-full w-[3px] origin-bottom rounded-full bg-green-500"
        />
      ))}
    </div>
  );
};

const SpotifyNowPlaying = ({ data }: { data: SpotifyData }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || !data.isPlaying) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-muted-foreground flex gap-2 text-sm"
      >
        <Music2 className="h-4 w-4" />
        <span>Not playing</span>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className="group flex cursor-pointer gap-3"
    >
      <div className="relative">
        <motion.img
          src={data.albumImageUrl}
          alt={data.album}
          className="h-12 w-12 rounded-md shadow-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        />
        <motion.div
          className="absolute inset-0 rounded-md bg-green-500/20"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-2">
          <MusicBars />
          <motion.span
            className="text-xs font-medium text-green-500"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Now Playing
          </motion.span>
        </div>
        <motion.div
          className="truncate text-sm font-medium transition-colors group-hover:text-green-500"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {data.title}
        </motion.div>
        <motion.div
          className="text-muted-foreground truncate text-xs"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {data.artist}
        </motion.div>
      </div>
    </motion.a>
  );
};

export default SpotifyNowPlaying;
