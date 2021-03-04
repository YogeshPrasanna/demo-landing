import React, { useEffect, useState } from "react";
import Table from "../common/Table";
import Footer from "../common/Footer";
import data from "../common/test.json";

const Landing = (props) => {
  const [automotiveData, setAutomotiveData] = useState([]);
  const [financeData, setFinanceData] = useState([]);
  const [filteredTable, setFilteredTable] = useState("");

  useEffect(() => {
    console.log(data);
    let automotiveData = data.outer_attribute.brands.filter(
      (el) => el.Vertical === "Automotive"
    );
    let financeData = data.outer_attribute.brands.filter(
      (el) => el.Vertical === "Finance"
    );

    setAutomotiveData(automotiveData);
    setFinanceData(financeData);
    setFilteredTable("Automotive")
    console.log(automotiveData, financeData);
  }, []);

  return (
    <>
      <section className="features-icons bg-light text-center background-zeta">
        <div className="container background-container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"
                style={{ paddingTop: "5%" }}
              >
                <div className="features-icons-icon d-flex">
                  <i className="icon-screen-desktop m-auto text-primary"></i>
                </div>
                <h3 className="zeta-header header-margin">Zeta Global Interview Test</h3>
                <h5 className="mb-0">
                  Lorem ipsum doloar sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidudunt ut labore et dolore et dolore
                  magna aliqua. Et enim ad minim veniam, quis nostrud
                  erercitation ullamco laboris nisi ut aliquip ex
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container">
          <div className="row">
            <div className="col-lg-8"></div>
            <div className="col-lg-4">
              <select
                onChange={(e) => {
                  setFilteredTable(e.target.value);
                  console.log(e.target.value);
                }}
                className="float-right zeta-header font-weight-bold"
                value={filteredTable}
              >
                <option className="zeta-header" value="Automotive">Automotive</option>
                <option className="zeta-header" value="Finance">Finance</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h6 className="zeta-header"><span className="font-weight-bold">Automotive</span> Store Visits</h6>
              <Table data={automotiveData} />
            </div>
            <div className="col-lg-4">
              <h6 className="zeta-header"><span className="font-weight-bold">Finance</span> Store Visits</h6>
              <Table data={financeData} />
            </div>
            <div className="col-lg-4">
            <h6 className="zeta-header"><span className="font-weight-bold">{filteredTable === "Automotive" ? "Automotive" : "Finance"}</span> Store Visits</h6>
              {filteredTable === "Automotive" ? (
                <Table data={automotiveData} />
              ) : (
                
                <Table data={financeData} />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Landing;
