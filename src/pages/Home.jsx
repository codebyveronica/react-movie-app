import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData);
  const { data : nowPlayingData } = useFetch('/movie/now_playing');
  const { data : topRatedData } = useFetch('/movie/top_rated');
  const { data : popularTvShowData } = useFetch('/tv/popular');
  const { data : onTheAirShowData } = useFetch('tv/on_the_air');

  return (
    <div>
      <BannerHome/>
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} trending={false} />
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} trending={false} />
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} trending={false} />
      <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"} trending={false} />
    </div>
  )
}

export default Home;