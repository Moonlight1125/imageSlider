import React, { useEffect, useState } from 'react'
import '../component/common.css'
import Data from '../component/Data'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { FaQuoteRight } from "react-icons/fa";
//参考 https://react-vite-project-7-slider.netlify.app/
// debounce function https://www.freecodecamp.org/news/debouncing-explained/ //
const Main = () => {
    const [data,setData] = useState(Data);
    const [num,setNum] = useState(0);

    useEffect(()=>{
        let intervalD = setTimeout(()=>{
            slideRight();
        },5000);
        return()=>{
            clearTimeout(intervalD);
        }
    },[num])
    
    const slideRight = ()=>{
        // if(num===data.length-1){
        //     setNum(0)
        // }
        // else{
        //     setNum(prev=>++prev)
        // }
        setNum((num)=>{
            const currentNum = (num+1)%data.length;
            return currentNum;
        })
    }
    const slideLeft = ()=>{
        // if(num===0){
        //     setNum(data.length-1)
        // }
        // else{
        //     setNum(prev=>--prev)
        // }
        setNum((num)=>{
            const currentNum = (num-1+data.length)%data.length;
            return currentNum;
        })
    }
  return (
    <div>
        <div className={"container"}>
            <h1><span>/</span>Reviews</h1>
            <article>
            {
                data.map((elm,index)=>{
                    let position = 'slideToNext';
                    const {image,name,title,quote} = elm;

                    if(num===index){
                        position="showing"
                    }else if(num===index-1||num-index===3){
                        position="slideToBack"
                    }

                    return(
                            <div key={index} className={`items ${position}`}>
                                <img src={image}  />
                                <dl>
                                    <dt>{name}</dt>
                                    <dd>{title}</dd>
                                </dl>
                                <p>{quote}</p>
                                <div className="Quote">
                                    <FaQuoteRight className='QuoteIcon'/>
                                </div>
                            </div>                
                        )
            })
            }
            </article>
            <div onClick={slideRight} className={"right"}>
                <GoChevronRight className={"rightBtn"}/>
            </div>
            <div onClick={slideLeft} className={"left"}>
                <GoChevronLeft className={"leftBtn"}/>
            </div>
        </div>
    </div>
  )
}

export default Main