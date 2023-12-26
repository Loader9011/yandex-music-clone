import Playlist from "@/components/Playlist";
import playListRoute from "@/public/playListRoute";

export default function Home() {
  return (
    <div className="px-5 -z-10 overflow-hidden inline-flex 
    hover:-translate-x-10 
    transition-all">
      {playListRoute.map((item) => (
        <Playlist
          className="
          px-2
          py-3.5"
          key={item.plName}
          {...item}
        />
      ))}
    </div>
  );
}
