import * as WebDataRocksReact from "@webdatarocks/react-webdatarocks";


function PivotTable() {
    return (
        <>
            <div className="App">
                <WebDataRocksReact.Pivot
                     toolbar={true}
                    width="100%"
                    report="https://cdn.webdatarocks.com/reports/report.json"
                />
            </div>
        </>
    );
}

export default PivotTable;