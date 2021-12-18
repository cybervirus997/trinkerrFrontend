import React, { useEffect, useState } from 'react'
import { CompanyName,Hiddenandseek } from './CssStore'

export const CompanyData = ({trigIt}) => {

    const [data, setData] = useState([]);
    const [trick,setTrick]=useState(true);

    useEffect(() => {
        StoreDataLocalStroge();
    }, [trigIt,trick])

    const StoreDataLocalStroge = () => { 
        let newArr = JSON.parse(localStorage.getItem("stock"))
        if (newArr !== null)
        { 
            setData(newArr);
        }
    }

    const deleteData = (idee) => { 
        let newArr = JSON.parse(localStorage.getItem("stock"));
        let supportTray = [];
            newArr.map((el) => { 
                if (el[0] !== idee[0])
                { 
                    supportTray=[...supportTray,el]
                }
            })
        localStorage.setItem("stock", JSON.stringify(supportTray));
        setTrick(!trick)
    }

    return (
        <div className="col-12" style={{ borderBottom: "3px solid #F2F2F2" }}>
            
            {
                data.map((el,i) => {
                    let UnsplitedName = el[0].split("::");
                    let name = UnsplitedName[0];
                    let nesdek = UnsplitedName[1];
                    let curr = Number(el[2]);
                    let per = (((Number(el[1]) - Number(el[2])) / Number(el[2])) * 100).toFixed(2);

                    return (
                        <CompanyName className="p-4 pb-2" key={i} >
                            <div className = "col-3">
                                {
                                    el[1] < el[2] ?
                                        <p style={{color:"#E7592E" }}>{name}</p> :
                                        <p style={{color:"#29C5C1" }}>{name}</p> 
                                }
                                
                                <p style={{color:"#9D9D9D",fontSize:"20px"}}>{nesdek}</p>
                            </div>

                            <Hiddenandseek className="showMethebutton123456" onClick={()=>deleteData(el)} >
                                    <img src="https://user-images.githubusercontent.com/72969348/146633394-7aa301ca-2a35-4243-9dc3-8409eb65b28f.png" alt="delte" />
                            </Hiddenandseek>

                            <div className ="col-2">
                                {
                                    el[1] < el[2] ?
                                        <p style={{ textAlign: "end",color:"#E7592E" }}>{curr}</p> :
                                        <p style={{ textAlign: "end",color:"#29C5C1" }}>{curr}</p>   
                                }
                                
                            <p style={{textAlign: "end",fontSize:"20px"}}>
                                    <span style={{marginRight:"10px"}}>
                                        {
                                            el[1] < el[2] ?
                                                <img src="https://user-images.githubusercontent.com/72969348/146635175-7fc168e9-2372-4596-9085-f231a0cbd3bd.png" alt="down" /> :
                                                <img src="https://user-images.githubusercontent.com/72969348/146636189-e3bbb9b2-15a3-4c10-91b2-2f79a5dddf4a.png" alt="upper" />
                                        }
                                    </span>
                                    {per}%
                            </p>
                        </div>
                    </CompanyName>
                    )
                    
                }) 
            }
        </div>
    )
}
