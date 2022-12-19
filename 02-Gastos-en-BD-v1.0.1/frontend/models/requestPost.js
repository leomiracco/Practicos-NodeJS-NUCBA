export const requestPost = async (spendingData)=>{

  try {
    
    const response = await fetch(`http://localhost:8080/expense`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(spendingData)
    });
  
    // if(response.ok){
    //   const jsonResponse = await response.json();
    // }

  } catch (error) {
    console.log(error);
  }

};