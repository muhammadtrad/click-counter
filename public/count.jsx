import React from 'react';

// class Counts extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return (
//             <ul>
//                {
//                    this.props.previousCounts.map(count => <li>{count}</li>)
//                }
//             </ul>
//         )
//     }
// }

//use functional apporach when there are no states to set in the class approach in the constructor
const Counts = ({ previousCounts }) => (
    <ul>
        {
            previousCounts.map(count => <li>{count}</li>)
        }
    </ul>
);
export default Counts;
