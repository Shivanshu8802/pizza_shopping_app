//Network call code
import URL from '../utils/constant.js';
export async function makeNetworkCall(){
   try{
  const response = await fetch(URL);
  const object = await response.json();
  return object;
   }
   catch(err){
      console.log('Some Problem in API Call',err);
      throw err; 
   }
   //  const promise = fetch(URL);  //Assign to thread
   //  console.log('Promise is',promise);
   //  promise.then(response=>{
   //     console.log('response is',response);
   //      const promise2 = response.json(); //Deserialization
   //      promise2.then (data=>console.log('Data is',data))
   //  .catch(e=>console.log('JSON parse Error',e))
   //  }).catch(err=>{
   //     console.log('Error is',err);
   //  });
   }
   export default makeNetworkCall;