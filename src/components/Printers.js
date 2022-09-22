  import {useEffect,useState} from "react";
  import { Link, useNavigate } from "react-router-dom";
  export default function Printers(){
    const navigate = useNavigate();
    const [data,setData] = useState([]);
      useEffect(()=>{
        fetch("https://6320a5329f82827dcf316a50.mockapi.io/Printer")
        .then((res)=>{
          return res.json();
        })
        .then((res)=>{
          setData(res);
        });
      },[]); 


      let formatedData = data.map((pri)=>{
        return (
          <>
           {/* <Link to={"/FacultiesDetails"+ pro.id}> */}

           <div class="card col-md-3" onClick={()=>{
    navigate("/PrinterDetails"+ pri.id )
  }} >
  <img src={pri.PrinterImage} class="card-img-top" /> 
  <div class="card-body">
    <h5 class="card-title">{pri.PrinterName}</h5>
    <h5 class="card-title">{pri.PrinterModel}</h5>
    <h5 class="card-title">{pri.PrinterMaker}</h5>
    <h5 class="card-title">{pri.PrinterPrice}</h5>
    <h5 class="card-title">{pri.PrinterDescription}</h5>
    <a href="#" class="btn btn-primary">Go To details</a>
  </div>
</div>
              
           
           </>
        );
     })
     return (<div class="row">
     { formatedData }
  </div>);
  }
//
  