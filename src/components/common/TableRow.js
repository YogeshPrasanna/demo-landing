import React from "react";

const TableRow = (props) => {

    const { visitsData, percentages ,percentagecolor, percentageVal} = props;

    if (visitsData) {
        return (
            <tr>
                <td>{visitsData[0].brand_names}</td>
                {/* <td>{percentages}</td> */}

                <td>
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                        <span style={{
                            color: `${percentagecolor == "progress-green-bg" ? '#90a218' : (percentagecolor == "progress-orange-bg" ? '#f78d1f' : 'red')}`
                        }}>{percentageVal}</span>
                        </div>
                        <div className="col-xs-6 col-md-9">
                        <span className="progress">
                            <div className={`progress-bar ${percentagecolor}`} style={{"width": `${percentages}%`}}></div>
                        </span>
                        </div>
                        </div>
                </td>
            </tr>
        )   
    } else {
        return (
        <tr> 
            <td>Loading</td>
            <td>Loading</td>
        </tr>
        )
    } 
}

export default TableRow;