import { useRef } from "react";
import { usePlayer } from "~/hooks/useplayer";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { togglePlayPause, isPlaying, volume, handleVolumeChange } =
    usePlayer(audioRef);

  return (
    <div className="w-full bg-neutral-700 h-24 flex items-center justify-around px-4">
      <audio
        ref={audioRef}
        src="https://cast1.my-control-panel.com/proxy/radiochi/stream"
      />
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <label>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>
    </div>
  );
}
