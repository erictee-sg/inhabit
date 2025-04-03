import React from "react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";

interface VideoModuleProps {
  videoId?: string;
  title?: string;
}

const VideoModule = ({
  videoId = "f4eiXwkxVgM",
  title = "Experience Inhabit Conference. Watch this video from Ps Neli Atiga:",
}: VideoModuleProps) => {
  // Extract video ID from YouTube URL if full URL is provided
  const getYouTubeId = (url: string) => {
    if (url.length === 11) return url; // Already an ID

    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : url;
  };

  const embedId = getYouTubeId(videoId);

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-[#000] to-[#889a98]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-white tracking-tight leading-tight mb-4">
            <div className="text-4xl font-bold">
              Experience inHabit Conference
            </div>
            <div className="text-4xl font-normal mt-2">
              Watch this video from Ps Neli Atiga:
            </div>
          </h2>
        </div>

        <Card className="overflow-hidden bg-slate-900 border-none shadow-xl rounded-xl">
          <CardContent className="p-0 relative">
            <div
              className={cn(
                "relative w-full",
                "pb-[56.25%]", // 16:9 aspect ratio
              )}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${embedId}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VideoModule;
