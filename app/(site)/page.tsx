import Playlist from "@/components/Playlist";
import playListRoute from "@/public/playListRoute";

export default function Home() {
  return (
    <div className="text-green-500 inline-flex">
      {playListRoute.map((item) => (
        <Playlist
          className="
          px-2
          py-3.5
        hover:bg-[#4E4E4E]"
          key={item.plName}
          {...item}
        />
      ))}
    </div>
  );
}
