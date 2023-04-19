import db from './FirebaseConfig';
import { useState } from 'react';
 
const ReadData = () => {
 
    const [info , setInfo] = useState([]);
 
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });
 
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("exstobio").get().then((querySnapshot) => {
            
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);             
            });
        })
    }
    
    // Display the result on the page
    return (
        <div>
            {
            info.map((data) => (
                <div>
                    <p>{data}</p>
                </div>
                ))
            }
            {console.log(info)}

        </div>
 
    );
}

export default ReadData;
