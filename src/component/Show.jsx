import React from 'react'

const Show = ({num,data,Data}) => {
    console.log(data)
  return (
    <article>
        {!data?
        data.map((elm,index)=>{
            return(
                <div className={`items items+${num}`}>
                    <img src={elm.image} alt="image" />
                        <dl>
                            <dt>{elm.name}</dt>
                            <dd>{elm.title}</dd>
                        </dl>
                        <p>{elm.quote}</p>
                </div>                
                )
            }):
            Data.map((elm,index)=>{
                return(
                    <div className={`items items+${num}`}>
                        <img src={elm.image} alt="image" />
                            <dl>
                                <dt>{elm.name}</dt>
                                <dd>{elm.title}</dd>
                            </dl>
                            <p>{elm.quote}</p>
                    </div>                
                    )
                })

        }
    </article>
  )
}

export default Show