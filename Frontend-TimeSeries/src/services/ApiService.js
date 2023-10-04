const apiUrl = 'http://localhost:5000/api/timeseries';

// Function to fetch data from the API
export const fetchDataFromApi = async () => {
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data from API: ${error.message}`);
  }
};