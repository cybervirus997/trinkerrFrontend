import React from 'react';
import { NameSpace } from './CssStore'

export const NameBox = () => {
    return (
        <div className="col-12" style={{ borderTop: "3px solid #F2F2F2",borderBottom: "3px solid #F2F2F2"}}>
            <NameSpace style={{paddingTop:"15px",paddingBottom:"40px"}}>
                <div className="col-10 ps-3">
                    <p>Abhishek</p>
                </div>
                <div className="col-2 ps-2 pe-5 d-flex flex-row" style={{justifyContent:"space-between"}}>
                    <div>
                        <img src="https://user-images.githubusercontent.com/72969348/146633421-4c97c35b-d18a-45d2-9e5d-f88f6c181825.png" alt="Edit" />
                    </div>
                    <div>
                        <img src="https://user-images.githubusercontent.com/72969348/146633394-7aa301ca-2a35-4243-9dc3-8409eb65b28f.png" alt="Delte" />
                    </div>
                </div>
            </NameSpace>
        </div>
    )
}
