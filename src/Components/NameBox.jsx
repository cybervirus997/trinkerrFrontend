import React from 'react';
import { NameSpace } from './CssStore'

export const NameBox = () => {
    return (
        <div className="col-12 ps-4 pe-4">
            <NameSpace>
                <div>
                    <p>Abhishek</p>
                </div>
                <div className="d-flex flex-row">
                    <div>
                        <img src="https://user-images.githubusercontent.com/72969348/146633421-4c97c35b-d18a-45d2-9e5d-f88f6c181825.png" alt="" />
                    </div>
                    <div>
                        <img src="https://user-images.githubusercontent.com/72969348/146633394-7aa301ca-2a35-4243-9dc3-8409eb65b28f.png" alt="" />
                    </div>
                </div>
            </NameSpace>
        </div>
    )
}
