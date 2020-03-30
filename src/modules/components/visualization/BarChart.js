import * as React from 'react';
import * as d3 from "d3";

class BarChart extends React.Component {
    componentDidMount () {
        this.drawChart();
    }

    drawChart () {
        const svg = d3.select("#chart").append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .style("margin-left", 20);

        svg.selectAll("rect")
            .data(this.props.data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.props.height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
            .attr("stroke", "black");
    }

    render () {
        return (<React.Fragment> <div id="chart" /> </React.Fragment>);
    }
}
export default BarChart;
