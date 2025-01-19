import React, { useState, useEffect } from "react";

interface VolumeBarProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const VolumeBar: React.FC<VolumeBarProps> = ({ volume, onVolumeChange }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleSeek = (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    const progressBar = document.querySelector(".volume-bar") as HTMLDivElement;
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newVolume = Math.min(Math.max(offsetX / rect.width, 0), 1);
    onVolumeChange(newVolume);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleSeek(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleSeek(e);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="relative h-2 w-20 bg-gray-300 rounded cursor-pointer volume-bar group"
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute top-0 left-0 h-2 bg-green-500 rounded"
        style={{ width: `${volume * 100}%` }}
      ></div>
      <div
        className="absolute top-[-4px] w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          left: `${volume * 100}%`,
          transform: "translateX(-50%)",
        }}
      ></div>
    </div>
  );
};

export default VolumeBar;
