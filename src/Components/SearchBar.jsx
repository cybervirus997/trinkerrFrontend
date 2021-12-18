import React from 'react'
import { Appbar } from './CssStore'

export const SearchBar = () => {
    return (
        <div className="col-12 p-4">
            <Appbar type="type" name="searchbar" placeholder="Search stocks..." />
        </div>
    )
}
