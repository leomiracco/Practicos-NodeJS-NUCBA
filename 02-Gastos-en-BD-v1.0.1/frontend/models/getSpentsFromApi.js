export const getSpentsFromApi = async ()=>{
  try {
    
    const response = await fetch(`http://localhost:8080/expense`);
  
    const data = await response.json();
    
    return data;

    // if(response.ok){
    //   const jsonResponse = await response.json();
    // }

  } catch (error) {
    console.log(error);
  }
};