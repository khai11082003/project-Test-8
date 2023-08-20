import { useState } from "react";
import { useEffect } from "react";
import "./index.css"
import { Music } from "./data";
import { MERCH } from "./data";
function Stores(){
    const button = document.querySelectorAll('.add');
    const [data,setData] = useState([]);
    const [dataMerch,setDataMerch] = useState([]);    
    const [store,setStore] = useState([]);

    return(
        <>
            <div className="container-store">
               <div className="inner-content">
               <div className="inner-title-store">
                    <h1>MUSIC</h1>
                </div>
                <div className="inner-product">
                    {Music.map(
                        (data) => {


                            return(
                                <div className="inner-box">
                                <div className="inner-title-child">
                                    {data.title}
                                 </div>
                                <div className="inner-img-store">
                                    <img src={data.thumbnail}/>
                                </div>
                                <div className="inner-price">
                                    {data.price}
                                    <div className="add">
                                        add to Cart
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    )}
                </div>
               </div>
               <div className="inner-content">
               <div className="inner-title-store-2">
                    <h1>MERCH</h1>
                </div>
                <div className="inner-product">
                    {MERCH.map(
                        (dataMerch) => {
                            return(
                                <div className="inner-box">
                                    <div className="inner-title-child">
                                        {dataMerch.title}
                                    </div>
                                    <div className="inner-img-store">
                                        <img src={dataMerch.thumbnail}/>
                                    </div>
                                    <div className="inner-price">
                                        {dataMerch.price}
                                        <div className="add">
                                        add to Cart
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
               </div>
               <div className="inner-content">
               <div className="inner-title-store-2">
                    <h1>CART</h1>
                </div>
                </div>
            </div>
        </>
    )
}
export default Stores;

