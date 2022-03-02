const api_url = "./data/pipeline_616_forecast.json"

async function getForecast() {
    const response = await fetch(api_url);
    const data = await response.json();


    
    

    let time = data[0].localTimestamp;
    let day = new Date(time).toDateString();
    let dayY = new Date(time);

    let month = new Date(time).getMonth() + 1;



    
    let showDate = day.slice(0, 10);
    let waveHeight = data[0].swell.maxBreakingHeight;

    
    document.getElementById("day").textContent = showDate;
    document.getElementById("title").textContent = "Pipeline";
    
    console.log(showDate);

    console.log(waveHeight);
}

getForecast();

