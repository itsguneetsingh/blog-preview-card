import React from "react";
import Image from "next/image";
import "./stylesheet.css";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(245,208,78)]">
      <div class="outer-div">
        <img src="/illustration-article.svg" className="rounded-lg m-5" />
        <div className="flex flex-col items-start justify-items-start space-y-4 w-full px-5 pb-5">
          <div className="p-2 rounded font-bold text-sm bg-[rgb(245,208,78)]">
            Learning
          </div>
          <div className="rounded font-medium text-sm">
            Published 21 Dec 2023
          </div>
          <div className="rounded font-extrabold text-2xl p-y-2 hover:text-[rgb(245,208,78)]">
            HTML & CSS foundations
          </div>
          <p className="rounded text-sm font-medium text-zinc-500 p-y-2 text-wrap max-w-fit">
            These languages are the backbone of every
            <br />
            website, defining structure, content and
            <br />
            presentation.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Image src="/image-avatar.webp" height={30} width={30} />
            <span className="font-extrabold text-xs">Greg Hooper</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
