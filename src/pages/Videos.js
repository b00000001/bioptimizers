import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
const Videos = () => {
  const videos = [
    {
      title: 'Magnesium Sweetened Condensed Cashew Milk/ Molecule to Meal',
      thumbnail:
        'https://i.ytimg.com/vi/xsesSqRUZqM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn22_h4l0LT7iy_4RcF3qBu1dqZg',
      url: 'https://www.youtube.com/watch?v=xsesSqRUZqM',
      description:
        'Want Awesome Health? Get Our AWESOME Health Course Here: https://bioptimizers.com/awesome-health-course/?gl=611193aa8ebf58065464ed9e'
    }
  ];
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-green-600 relative">
            <img class="w-full" src={video.thumbnail} alt="" />
            <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
              Live
            </div>
            <div class="info-box text-xs flex p-1 font-semibold text-black bg-gray-300">
              <span class="mr-1 p-1 px-2 font-bold">105 Watching</span>
              <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                105 Likes
              </span>
              <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                105 Dislikes
              </span>
            </div>
            <div class="desc p-4 text-white">
              <a
                href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                target="_new"
                class="title font-bold block cursor-pointer hover:underline"
              >
                {video.title}
              </a>
              <a
                href="https://www.youtube.com/user/sam14319"
                target="_new"
                class="badge bg-yellow-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
              >
                @biOptimizers
              </a>
              <span class="description text-white text-sm block py-2 border-gray-400 mb-2">
                {video.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
