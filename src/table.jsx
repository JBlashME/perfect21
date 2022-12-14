
// import React from 'react'
// import JsonData from './data.json'
//  function JsonDataDisplay(){
//     const DisplayData=JsonData.map(
//         (info)=>{
//             return(
//                 <tr>
//                     <td>{info.id}</td>
//                     <td>{info.name}</td>
//                     <td>{info.city}</td>
//                 </tr>
//             )
//         }
//     )
//     return(
//         <div>
//             <table class="table table-striped">
//                 <thead>
//                     <tr>
//                     <th>Sr.NO</th>
//                     <th>Name</th>
//                     <th>City</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {DisplayData}
//                 </tbody>
//             </table>
//         </div>
//     )
//  }
 
import React from 'react'
import JsonData from './data.json'
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                <td>{info.hand}</td>
                <td>{info.c_2}</td>
                <td>{info.c_3}</td>
                <td>{info.c_4}</td>
                <td>{info.c_5}</td>
                <td>{info.c_6}</td>
                <td>{info.c_7}</td>
                <td>{info.c_8}</td>
                <td>{info.c_9}</td>
                <td>{info.c_10}</td>
                <td>{info.c_A}</td>
                </tr>
            )
        }
    )
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>A</td>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }

 export default JsonDataDisplay;