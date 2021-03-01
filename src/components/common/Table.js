import React from "react";
import TableInformation from "./TableInformation";

const Table = (props) => {

    if(props && props.data && props.data.length) {
      return (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">BRAND</th>
                <th scope="col">VISIT SHARE</th>
              </tr>
            </thead>
            <tbody>
              <TableInformation information={props.data}/>
            </tbody>
          </table>
        </div>
      );
    }else{
      return (
        <div>
          <p>Loading</p>
        </div>
      )
    }
};

export default Table;
