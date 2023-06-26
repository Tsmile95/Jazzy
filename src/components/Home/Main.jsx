import { useState,useEffect } from "react";
import jazzyPic from "../../assets/Frame 3.svg";
import '../../Styles/Main.css'
import fruitimage from "../../assets/Group 4.svg"
const Main = () => {
    const [data,setData] = useState([])

    const fetchFunction = ()=>{
        fetch('https://eggys.onrender.com/jazzyburger/all')
        .then((res)=>res.json())
        .then((resData)=> setData(resData))
    }

    useEffect(()=>{
        fetchFunction()

},[])
  return (
    <div className="container mt-5">
      <main className="row justify-content-between">
        <div className="col-md-4">
          <img className="img-fluid" src={jazzyPic} alt="jazzy-pic" />
        </div>
        <div className="col-md-8">
                <div className="main-flexed"> 
                    {data.map((datum)=>{
                        const {_id,image,title,price} = datum
                        return(
                            <div key={_id}>

                                <img className='img-fluid w-100' src={image} alt="" />
                                <h6> {title.slice(0,20)} </h6>
                                <p>Total Price</p>
                                <h2> #{price} </h2>
                                <div>
                                    <img src={fruitimage} alt="Fruit-Image" />
                                </div>
                                <button className='btn btn-danger w-100 fs-5'>Add to Cart</button>

                            </div>
                        )
                    })}
                </div>
  </div>
    
      </main>
    </div>
  );
};

export default Main;
