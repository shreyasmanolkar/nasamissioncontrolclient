// const API_URL = 'http://localhost:8000/v1';

const API_URL = 'https://nasamissioncontrolbackend.herokuapp.com';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}


  async function httpGetAllLaunches(){
    const response = await fetch(`${API_URL}/launches`);
    const fetchedLaunches = await response.json();
    return fetchedLaunches.sort((a, b)=>{
      return a.flightNumber - b.flightNumber;
    });
  }
async function httpSubmitLaunch(launch) {

  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    })
  } catch (err) {
      return{
        ok: false,
      }
  }
}

  // TODO: Once API is ready.
  // Delete launch with given ID.
async function httpAbortLaunch(id) {

  try{
    return await fetch(`${API_URL}/launches/${id}`,{
      method: "delete", 
    });
  } catch(err){
    console.log(err);
    return {
      ok: false,
    };
  }
}

export {
  httpGetPlanets,
  httpGetAllLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};