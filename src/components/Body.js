import ShimmerCard from "./ShimmerUI";
import ResCard from "./RestCards";
import React from "react";
import { useState,useEffect } from "react";
const swiggy_api_url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.133514&lng=75.851102&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  const[allRestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  

  useEffect(()=>{getRestaurants()},[]);
  const[searchText,setSearchText] = useState("");

  async function getRestaurants(){
      try
      {
        const response = await fetch(swiggy_api_url);
        const json = await response.json();

        async function checkJsondata(jsonData)
        {
          for(let i=0;i<jsonData?.data?.cards.length;i++)
          {
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // if checkData is not undefined then return it
           if (checkData !== undefined) 
             {
               return checkData;
             }
          }
        }
        const ResData = await checkJsondata(json);
        setAllRestaurants(ResData);
        setFilteredRestaurants(ResData);
      }
      catch(error)
      {
        console.log(error);
      }

      };  

if(allRestaurants.length===0)
{
  return <ShimmerCard/>;
}



    return (
      <div className='Body'>
          <div className="Filter-Buttons">

            <div className="SearchBar">
              <input type="text" class="search-input" placeholder="Search..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
              <button class="search-button" onClick={
                ()=>{
                  const filteredsearch = allRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurants(filteredsearch);
                }
              }
    
              >Search</button>
            </div>
              
              
              <button className="Top-Rated-Res" onClick={()=>{
                 const filteredList = allRestaurants.filter(
                  (res)=>res.info.avgRating>"4" )
                setFilteredRestaurants(filteredList);
              }}>Top Rated Restaurants</button>
            </div>
            <div className="CardContainer">
              {filteredRestaurants.map((restaurants) => {
                return <ResCard key={restaurants.info.id} {...restaurants.info} />;
              })}
          </div> 
      </div>
    );
  };

export default Body;