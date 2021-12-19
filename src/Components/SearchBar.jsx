import React, { useEffect, useState } from 'react'
import { Appbar } from './CssStore'
import { CompanyData } from './CompanyData'
import { NameBox } from './NameBox'
import { TrinkerrData } from '../Maindata'
import { Footer } from './Footer'
import { CompanyName,Hiddenandseek} from './CssStore'

export const SearchBar = () => {

    const [title, setTitle] = useState("")
    const [wholeData, setWholeData] = useState([])
    const [bool, setBool] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => { 
        searchTypeData();
    }, [title])

    
    const searchTypeData = () => { 
        let arr = [];
        TrinkerrData.map((el,i) => { 
                let UnsplitedName = el[0].split("::");
                let name = UnsplitedName[0];
            if (title.length === 0)
            { 
                arr=[]
            }
            
            if (name.includes(title.toUpperCase()) && title.length!==0)
            { 
                arr=[...arr,el]
            }
            
        })
        setWholeData(arr);
        setBool(!bool);
    }


    const addDataToLocalStroge = (el2) => {
       
        let newarr = JSON.parse(localStorage.getItem("stock"))
        if (newarr === null) {
            let res = [];
            res.push(el2)
            localStorage.setItem("stock", JSON.stringify(res))
        } else
        { 
            let xyz = JSON.parse(localStorage.getItem("stock"));
            xyz.push(el2);
            localStorage.setItem("stock", JSON.stringify(xyz))
        }
        setTitle("")
    }


    const hadleDelteFromSearch = (elee) => { 
        let newArr = JSON.parse(localStorage.getItem("stock"));
        let supportTray = [];
        
            newArr.map((el) => { 
                if (el[0] !== elee[0])
                { 
                    supportTray=[...supportTray,el]
                }
            })
        localStorage.setItem("stock", JSON.stringify(supportTray));
        setTitle("")
        let newArr1 = JSON.parse(localStorage.getItem("stock"));
        
        if (newArr1.length === 0 )
        { 
            localStorage.removeItem("stock");
        }
        setData(supportTray)
    }


    return (
        <>
            <div className="col-12 p-4">
                <Appbar type="type" name="searchbar" placeholder="Search stocks..." value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>

            {
                wholeData.length !== 0 ?  
                    
                <div style={{width:"66%",position: "absolute",background:"white",top:"99px"}}>
                {/* sdfgh */}
                    {
                    wholeData.map((el,i) => {
                        let UnsplitedName = el[0].split("::");
                        let name = UnsplitedName[0];
                        let nesdek = UnsplitedName[1];
                        let curr = Number(el[1]);
                        let per = (((Number(el[1]) - Number(el[2])) / Number(el[2])) * 100).toFixed(2);

                        let UIarr = JSON.parse(localStorage.getItem("stock"));

                        return (
                            <CompanyName className="p-4 pb-2" key={i} style={{borderBottom: "3px solid #F2F2F2"}} >
                                <div className = "col-3">
                                    {
                                        el[1] < el[2] ?
                                            <p style={{color:"#E7592E" }}>{name}</p> :
                                            <p style={{color:"#29C5C1" }}>{name}</p> 
                                    }
                                    
                                    <p style={{color:"#9D9D9D",fontSize:"20px"}}>{nesdek}</p>
                                </div>

                                <div>

                                    {
                                    UIarr !== null ? UIarr.map((item) => 
                                        item[0] === el[0] ? 
                                            <Hiddenandseek className="showMethebutton" style={{ backgroundColor: "white", zIndex: "100", position: "absolute" }} onClick={()=>hadleDelteFromSearch(el)}>
                                                <img src="https://user-images.githubusercontent.com/72969348/146633394-7aa301ca-2a35-4243-9dc3-8409eb65b28f.png" alt="delte" />
                                            </Hiddenandseek> : <Hiddenandseek className="showMethebutton" style={{backgroundColor:"white",position:"absolute"}}  onClick={() => addDataToLocalStroge(el)}>
                                            +
                                            </Hiddenandseek> ) : <Hiddenandseek className="showMethebutton"  onClick={() => addDataToLocalStroge(el)}>
                                            +
                                            </Hiddenandseek>
                                    }
                                    </div>
                                
                                
                                {/* <Hiddenandseek className="showMethebutton" style={{marginLeft:"51%"}} onClick={() => addDataToLocalStroge(el)}>
                                    +
                                </Hiddenandseek> */}

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

                </div> :
                <div style={{display:"none"}}>
                        
                </div>            
            }
            

            <NameBox /> 

            <CompanyData trigIt={bool} data={data} setData={setData} />

            <Footer />
        </>    
    )
}
