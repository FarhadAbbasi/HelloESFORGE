import { useEffect, useState } from "react";
import styled from "styled-components";
import { load } from "surge/lib/util/tables";
import SearchResults from "./Components/SearchResults";
import { type } from "os";

export const BASE_URL = "http://localhost:9000" 



const MyApp = ()=> {
     const[data, setData] = useState(null);
     const[filteredData, setFilteredData] = useState(null);
     const[loading, setLoading] = useState(false);
     const[error, setError] = useState(null);
     const[selectedBtn, setSelectedBtn] = useState("all");


     useEffect( ()=> {

      const FetchFoodData = async ()=> {
        setLoading(true);
    
        try{
          const response = await fetch(BASE_URL);
          const json = await response.json();
          //      console.log(json);
          setData(json);
          setFilteredData(json);
          setLoading(false);
          } 
        catch(error) {
          setError("Unable to fetch data");
          }
      };
    
        FetchFoodData(); 

     }, []);
    
//     console.log(data);

     const searchFood = (e)=> {
        const searchValue = e.target.value
        console.log(searchValue); 

        if (searchValue == ""){ setFilteredData(null)}

        const filter = data.filter ((food)=> 
        food.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredData(filter);
     }

     const filterFood = (type)=> {
        
      if (type == "all") {
        setFilteredData(data);
        setSelectedBtn("all");
        return;
        }
    
      const filter = data.filter ((food)=> 
        food.type.toLowerCase().includes(type.toLowerCase())
        );

        setFilteredData(filter);
        setSelectedBtn(type);

    }

    const filterBtns = [
     {
      name: "All",
      type: "all",
     },
     {
      name: "Breakfast",
      type: "breakfast",
     },
     {
      name: "Lunch",
      type: "lunch",
     },
     {
      name: "Dinner",
      type: "dinner",
     },
     {
      name: "Snacks",
      type: "snacks",
     },
    ] 


if (error) return <div>{error}</div>
if (loading) return <div> Loading... </div>

 
    return (
     <MainContainer>
        <TopContainer>
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
            </div>
    
            <FilterContainer>
             <div className="btns">
             {
              filterBtns.map( (value)=> (<Button key={value.name} onClick={()=> filterFood(value.type)}>{value.name}</Button> 
             ))}
             </div>
    
             <div className="search">
                <input onChange={searchFood} placeholder="Search Food"/> 
            </div>

            </FilterContainer>

        </TopContainer>

        <SearchResults data= {filteredData}/>

     </MainContainer>

    )
}

export default MyApp;



const MainContainer = styled.div`
background-color: #323334 ;
max-width: 2600px;
min-width: 100%;
margin: 0 auto;

 @media (0 < width <600px) {
  min-width: 600px;
 }

`;

const TopContainer = styled.section`
max-height: 120px;
display: flex;
justify-content: space-between;
padding: 16px;
align-itmes: center;

.logo{
img{
max-height: 100%;
}
}

`;

const FilterContainer = styled.section `
  display: flex;
  justify-content: left;
  gap: 12px;
  padding: 40px;

  .btns {
  display: flex;
  gap: 12px;  
  }

  .search {
  input{
    background-color: transparent;
    border: 1px solid;
    color: white;
    border-radius: 5px;
    border-color: #ff4343;
    height: 14px;
    font-size: 16px;
    padding: 6px; 
    &::placeholder {
    color: #bbb}  
  }
}

 @media (0 < width <600px) {
 flex-direction: column;
 }
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;  
  cursor: pointer;
  &: hover{
  background-color:  #D14343 ;
  outline: 1px solid  #ffffff
  }
`;



/*



*/