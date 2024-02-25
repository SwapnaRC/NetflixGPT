const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/4 text-wrap">{overview}</p>
      <div className="flex my-3">
        <button className=" bg-white rounded-md text-black p-3 h-15 text-l hover:bg-opacity-80 w-1/12 mr-5">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 rounded-md text-white p-3 h-15 text-l bg-opacity-50 w-1.5/12">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
