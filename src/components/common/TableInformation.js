import React from "react";
import TableRow from "./../common/TableRow";

const TableInformation = props => {
    const { information } = props;

    if (information && information.length) {

        if (information.length) {
            
            let highestCustomerVisitRatio = Math.max(...information.map((el) => el.customer_visit_ratio));
            console.log("highestCustomerVisitRatio",highestCustomerVisitRatio )
            let actualPercentage = information.map((el) => el.customer_visit_ratio).map((elem) => {
                let percent = (elem / highestCustomerVisitRatio) * 100
                return percent === highestCustomerVisitRatio ? 100 : percent;
            })

            return information.sort((a,b) => b.customer_visit_ratio - a.customer_visit_ratio).map(function(elem, i) {
                let PercentageColor ="bg-success"
                let PercentVal = "High"

                console.log(`actualPercentage ${elem.brand_names}`, actualPercentage[i])

                if(actualPercentage[i] > 75) {
                    PercentageColor = "progress-green-bg"
                    PercentVal = "High"
                }else if(actualPercentage[i] >= 25 && actualPercentage[i] <= 74) {
                    PercentageColor = "progress-orange-bg"
                    PercentVal = "Med"
                } else {
                    PercentageColor = "bg-danger"
                    PercentVal = "Low"
                }
                return (
                    <TableRow
                        num={i}
                        key={i}
                        visitsData={[elem]}
                        percentagecolor = {PercentageColor}
                        percentageVal = {PercentVal}
                        percentages={actualPercentage[i]}
                    />
                );
            });
        } else {
            return (
                <tr>
                    <td>
                        <div>
                            Loading
                        </div>
                    </td>
                </tr>
            );
        }
    }
};

export default TableInformation;