import React from 'react'

const Bust = ({bust}) => {

    if (bust === 0){
        return(null);
    } else {
        return( 
            <div class="card" >
                <h1> BUST!!!</h1>
            </div>
        );
    }


}
export default Bust;
