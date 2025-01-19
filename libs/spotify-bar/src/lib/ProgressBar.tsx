import React, { useState } from "react";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onSeek,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const calculateNewTime = (
    e: React.MouseEvent<HTMLDivElement>,
    progressWidth: number
  ) => {
    const offsetX = e.nativeEvent.offsetX;
    return (offsetX / progressWidth) * duration;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressWidth = e.currentTarget.offsetWidth;
    const newTime = calculateNewTime(e, progressWidth);
    onSeek(newTime);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleSeek(e);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">{formatTime(currentTime)}</span>
        <div
          className="relative flex-1 h-2 bg-gray-300 rounded cursor-pointer group"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onClick={handleSeek}
        >
          <div
            className="absolute top-0 left-0 h-2 bg-green-500 rounded"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>

          <div
            className="absolute top-[-6px] w-4 h-4 bg-green-500 rounded-full hidden group-hover:block pointer-events-none"
            style={{
              top: "-5px",
              left: `${(currentTime / duration) * 100}%`,
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>
        <span className="text-gray-600 text-sm">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default ProgressBar;
