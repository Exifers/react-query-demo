import React from "react";

function SeasonSelect({value, onChange}) {
    return (
        <select onChange={onChange} value={value}>
            <option value="all">All seasons</option>
            <option value="1">Season 1</option>
            <option value="2">Season 2</option>
            <option value="3">Season 3</option>
            <option value="4">Season 4</option>
            <option value="5">Season 5</option>
        </select>
    )
}

export default SeasonSelect