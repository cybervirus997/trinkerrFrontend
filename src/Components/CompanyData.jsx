import React from 'react'
import { CompanyName } from './CssStore'

export const CompanyData = () => {
    return (
        <div className="col-12" style={{borderBottom:"3px solid #F2F2F2"}}>
            <CompanyName className="p-4 pb-2">
                <div>
                    <p>TRINKERR</p>
                    <p>NSE</p>
                </div>
                <div>
                    <p style={{textAlign:"end"}}>899</p>
                    <p style={{fontSize:"20px"}}>
                        <span> <img src="https://user-images.githubusercontent.com/72969348/146635175-7fc168e9-2372-4596-9085-f231a0cbd3bd.png" alt="" /> </span>
                        - 45%
                    </p>
                </div>
            </CompanyName>
        </div>
    )
}
