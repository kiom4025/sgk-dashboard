import { Col, Row, Space } from "antd";
import Barchart from "../Charts/Barchart";
import Papa from "papaparse";
import { useState } from "react";
import SampleData from '../Data/OnTimeDelivery.json'

function Dashboard() {
    // console.log("Sample data structure: " + JSON.stringify(SampleData[0]));
    const [data, setdata] = useState({ data: SampleData });
    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            complete: function (results) {
                console.log(results.data)
                setdata(results)
            },
        });
    };
    return (
        <>
            <Row>
                <Col span={24}>
                <Space>
                    <input
                        type="file"
                        name="file"
                        accept=".csv"
                        // style={{ display: "block", margin: "10px auto" }}
                        onChange={changeHandler}
                    />      
                    </Space>           
                    <Barchart {...data}/>:
                </Col>
            </Row>
        </>
    )
}

export default Dashboard;