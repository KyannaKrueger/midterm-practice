"use client"

import { useState } from "react";

//TODO
// add button
// fetch data
// add data to state
//responsiveness
//clear data
//data
//component for empty state -check
//component for data state - check
// error handling - bonus 

export default function Home() {
    //if useState isnt null, probably fetching or loading data or have data
    //if useState  === data, we can display our data
    const [astronomyData, setAstronomyData] = useState(null);
    const [loading, setLoading] = useState(null);

    async function fetchAstronomyData() {
      //build the function that grabs data
      setLoading(true);
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5") //use await because you are waiting for data
      
      const data = await response.json();

      setAstronomyData(data);
      setLoading(false);
    }

    const DisplayAstronomyData = () => {
      //display if we have data
      //loading state
      //fulfilled state (data exists)
      //empty state (!data)
      if (loading) return <div>Loading!</div>;

      if (astronomyData) {
        const formattedData = JSON.stringify(astronomyData);
        const dataThatIsFormattedForDisplay = [];
        astronomyData.forEach((entry, i) => {
          dataThatIsFormattedForDisplay.push(
          <article key={i}>
            <img src={entry.url} />
            <h3>{entry.title}</h3>
            <p>{entry.explanation}</p>
          </article>
          );
        });

          return<section>{dataThatIsFormattedForDisplay}</section>
        }

      return(<div>Empty, no data fetched</div>)
    };

    const Header = () => {
      //build the UI
      return (
      <header>
        Welcome to my midterm prep
        <br />
        <button onClick={fetchAstronomyData}>Fetch!🐕</button>

    
      </header>
      );
    }
    return (
    <div className="m-8">
      <Header />
      <DisplayAstronomyData />
    </div>
  );
}
