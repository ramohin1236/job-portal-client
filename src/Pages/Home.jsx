
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Context/DataContext';


const Home = () => {
   const {query} =useContext(DataContext)

    console.log(query);

    const [selectedCategory,setSelectedCategory]= useState(null);

    const [jobs, setJobs]=useState([]);

    
    
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
   

    // filter jobs by title
    const filteredItems = jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1
    )
 
    console.log(filteredItems);

  return (
    <div >
     
    </div>
  )
}

export default Home