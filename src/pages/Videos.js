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
        'Want Awesome Health? Get Our AWESOME Health Course Here: https://bioptimizers.com/awesome-health-course/?gl=611193aa8ebf58065464ed9e',
      date: 'Oct 22, 2021'
    },
    {
      title:
        'A Truly Holistic Approach to Wellness - with Aleks Rybchinskiy / Awesome Health Podcast',
      thumbnail:
        'https://i.ytimg.com/vi/xCw0MQtx6Dg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5kX9CgOQabnP9f7D5i0nj3i9GLw',
      url: 'https://www.youtube.com/watch?v=xsesSqRUZqM',
      description:
        'When a health practitioner calls themselves “holistic,” you often discover they either do not fully understand the definition of the word “holistic” or are misusing the term. ',
      date: 'Oct 21, 2021'
    },
    {
      title: `The Keys to Getting Through a Training & Diet Program / Wade's 50 weeks to 50 Challenge`,
      thumbnail:
        'https://i.ytimg.com/vi/Omyu-WOnW5Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdnzJGdqwlVnx258Z_DGroJTytww',
      url: 'https://www.youtube.com/watch?v=xsesSqRUZqM',
      description:
        'Want Awesome Health? Get Our AWESOME Health Course Here: https://bioptimizers.com/awesome-health-course/?gl=611193aa8ebf58065464ed9e',
      date: 'October 18, 2021'
    },
    {
      title: `How to Make Hijiki Seaweed Salad / Molecule to Meal`,
      thumbnail:
        'https://i.ytimg.com/vi/8tqYDw0TXLY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzxcNAUsXaOzsIkfH9h3xHdcybyQ',
      url: 'https://www.youtube.com/watch?v=8tqYDw0TXLY',
      description: `Alina Z  is an award-winning, Board-Certified Health Coach, Detox Specialist, Chef  and Creator of the #1 Best Diet in America, as selected by Harper's Bazaar Magazine. She has launched two food lines - one in Boca Raton, Florida and one in Moscow, Russia, as well as co-created 2 juice lines in Florida and one in Kazakhstan. Alina's passion is in bridging the gap between healthy and tasty food. `,
      date: 'October 15, 2021'
    },
    {
      title: `Breathe Your Way to Optimum Health & Happiness - with Dan Brulé / Awesome Health Podcast`,
      thumbnail:
        'https://i.ytimg.com/vi/aGV-bLQuW7k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASnK1QWdL-m_txyCDf8mHzxdpskg',
      url: 'https://www.youtube.com/watch?v=aGV-bLQuW7k',
      description:
        'Your perspective on breathing will never be the same after listening to Dan Brulé breathe life into a topic that might seem mundane on the surface. Biohackers know nothing is boring about your breath. Learning breathwork is a powerful tool. With patient practice, you can find optimal physical health and the bonuses of higher levels of mental and spiritual wellbeing through breath-focused meditation.',
      date: 'October 13, 2021'
    },
    {
      title: `Supplements for Gut and Vaginal Health / BiOptimized Woman`,
      thumbnail:
        'https://i.ytimg.com/vi/QQQieb5_jeY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmniAOpOMy9k4E-ZUqd2IDWIBcUg',
      url: 'https://www.youtube.com/watch?v=QQQieb5_jeY',
      description:
        'The BiOptimized Woman Show is designed to explain the common health challenges women might face throughout their lives.  Our hope is to demystify some of the taboo topics that are rarely discussed in society, and shed light on best practices to reach a BiOptimized state of health.',
      date: 'October 11, 2021'
    },
    {
      title: `Easy Gluten-Free Waffles / Healthy Recreations`,
      thumbnail:
        'https://i.ytimg.com/vi/iW-AOTl4ElI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARQ5_WIyF0zEJmRZqMsKAps6zfoA',
      url: 'https://www.youtube.com/watch?v=iW-AOTl4ElI',
      description: `About Alina:
        Alina Z  is an award-winning, Board-Certified Health Coach, Detox Specialist, Chef  and Creator of the #1 Best Diet in America, as selected by Harper's Bazaar Magazine. She has launched two food lines - one in Boca Raton, Florida and one in Moscow, Russia, as well as co-created 2 juice lines in Florida and one in Kazakhstan. Alina's passion is in bridging the gap between healthy and tasty food. `,
      date: 'October 8, 2021'
    },
    {
      title: `BETTER THAN TAKEOUT – Orange Chicken Recipe / Healthy Recreations`,
      thumbnail:
        'https://i.ytimg.com/vi/zCgEwj3I0lU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9-mpqpSFjR0pzQuR8uB9YVGDo6Q',
      url: 'https://www.youtube.com/watch?v=zCgEwj3I0lU',
      description: `About Alina:
        Alina Z  is an award-winning, Board-Certified Health Coach, Detox Specialist, Chef  and Creator of the #1 Best Diet in America, as selected by Harper's Bazaar Magazine. She has launched two food lines - one in Boca Raton, Florida and one in Moscow, Russia, as well as co-created 2 juice lines in Florida and one in Kazakhstan. Alina's passion is in bridging the gap between healthy and tasty food. `,
      date: 'October 4, 2021'
    },
    {
      title: `Why Sugar Is Bad For Your Vaginal Health / biOptimized Woman`,
      thumbnail:
        'https://i.ytimg.com/vi/wQPnjETNhIU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDi9R2HBIAS-XZxYBLwFtNr-uoa2w',
      url: 'https://www.youtube.com/watch?v=wQPnjETNhIU',
      description:
        'The BiOptimized Woman Show is designed to explain the common health challenges women might face throughout their lives.  Our hope is to demystify some of the taboo topics that are rarely discussed in society, and shed light on best practices to reach a BiOptimized state of health.',
      date: 'October 1, 2021'
    },
    {
      title: `Healthy Carrot Cake / Healthy Recreations`,
      thumbnail:
        'https://i.ytimg.com/vi/vo0DI_wAGBw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgP4GuU4icotMkwp9-naa_mZD4kQ',
      url: 'https://www.youtube.com/watch?v=vo0DI_wAGBw',
      description: `About Alina:
        Alina Z  is an award-winning, Board-Certified Health Coach, Detox Specialist, Chef  and Creator of the #1 Best Diet in America, as selected by Harper's Bazaar Magazine. She has launched two food lines - one in Boca Raton, Florida and one in Moscow, Russia, as well as co-created 2 juice lines in Florida and one in Kazakhstan. Alina's passion is in bridging the gap between healthy and tasty food. `,
      date: 'September 27, 2021'
    },
    {
      title: `EMF Protection from EMF Radiation Pt. 5 #Shorts`,
      thumbnail: 'https://i.ytimg.com/vi/T0yLxbg8sfY/sd2.jpg',
      url: 'https://www.youtube.com/shorts/T0yLxbg8sfY',
      description:
        'Our unique health solutions empower you to achieve an optimal state of well-being in the body, mind, and soul.  This allows you to have more energy, feel great and live a better life.',
      date: 'September 27, 2021'
    },
    {
      title: `EMF Protection from EMF Radiation Pt. 4 #Shorts`,
      thumbnail: 'https://i.ytimg.com/vi/-Dly1Hfa1wk/sd2.jpg',
      url: 'https://www.youtube.com/shorts/-Dly1Hfa1wk',
      description:
        'Our unique health solutions empower you to achieve an optimal state of well-being in the body, mind, and soul.  This allows you to have more energy, feel great and live a better life.',
      date: 'September 26, 2021'
    }
  ];
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <div class="holder mx-auto py-20 w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-green-600 relative">
            <img class="w-full" src={video.thumbnail} alt="" />
            <div class="info-box text-xs flex p-1 font-semibold text-black bg-gray-300">
              <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                105 Likes
              </span>
              <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                {video.date}
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
