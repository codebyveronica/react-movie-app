import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from '../components/Card'

const Explore = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  console.log("params", params.explore)

  const fetchData = async() => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params : {
          page : pageNo
        }
      })
      setData((preve) => {
        return [
          ...preve,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log("error", error) 
    }
  }

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(preve => preve + 1)
    }
  }

  useEffect(() => {
    fetchData();
  }, [pageNo])

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">Popular {params.explore} show</h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-7">
          {
            data.map((exploreData) => {
              return (
                <Card key={exploreData.id+"exploreSection"} data={exploreData} media_type={params.explore} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Explore
