import React from "react";

const RecentSearches = () => {
  return (
    <>
      <span className="dark:text-jacarta-300">Popular searches: </span>
      <a
        href="#"
        className="text-accent hover:text-jacarta-700 dark:hover:text-white"
      >
        cryptopunks
      </a>
      <span>, </span>
      <a
        href="#"
        className="text-accent hover:text-jacarta-700 dark:hover:text-white"
      >
        bored ape yacht club
      </a>
      <span>, </span>
      <a
        href="#"
        className="text-accent hover:text-jacarta-700 dark:hover:text-white"
      >
        moonbirds
      </a>
    </>
  );
};

export default RecentSearches;
