import * as React from 'react';
import * as d3 from "d3";

class Piechart extends React.Component {
    constructor (props) {
        super();
        this.ref = React.createRef();
        this.createPie = d3.pie().value((d) => (d.value));
        this.createArc = d3.arc().innerRadius(props.innerRadius)
            .outerRadius(props.outerRadius);
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
        this.format = d3.format(".2f");
    }

    componentDidMount () {
        const svg = d3.select(this.ref.current)
            .style("margin-left", 20)
            .style("margin-top", 20);

        const data = this.createPie(this.props.data);
        // eslint-disable-next-line no-unused-vars
        const { width, height, innerRadius, outerRadius } = this.props;
        svg
            .attr("class", "chart")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", "0,0,200,200");

        const group = svg
            .append("g")
            .attr("transform", `translate(${outerRadius} ${outerRadius})`);
        console.log("data;", data);
        const groupWithEnter = group
            .selectAll("g.arc")
            .data(data)
            .enter();

        const path = groupWithEnter.append("g").attr("class", "arc");

        path
            .append("path")
            .attr("class", "arc")
            .attr("d", this.createArc)
            .attr("fill", (d, i) => this.colors(d.index));
        path
            .append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("transform", d => `translate(${this.createArc.centroid(d)})`)
            .style("fill", "white")
            .style("font-size", 10)
            .text(d => (d.data.label));
    }

    render () {
        return <svg ref={this.ref} />;
    }
}

export default Piechart;
