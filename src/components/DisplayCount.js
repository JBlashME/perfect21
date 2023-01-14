import React from 'react'

const DisplayCount = ({ count, aceCount, handPosition }) => {

    if (count > 11){
        return(
            <div class="card" >{count} Greater than 11</div>
        )
    } else if (aceCount[handPosition] >= 1){
        return(
            <div class="card" >{count}/{count + 10} Has Ace</div>
        )
    } else {
        return( 
            <div class="card" >{count} Normal count</div>
        )
    }


}
export default DisplayCount;
