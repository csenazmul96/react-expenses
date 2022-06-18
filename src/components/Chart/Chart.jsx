import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";
const Chart = (props)=>{
    const dataPointValue = props.dataPoints.map(dataPint => dataPint.value)
    const totalMax = Math.max(...dataPointValue)
    return (
       <div className="chart">
           {props.dataPoints.map(chart=>
               (<ChartBar
               key={chart.label}
               value={chart.value}
               maxvalue={totalMax}
               label={chart.label}
           />))}
       </div>
    )
}
export default Chart
