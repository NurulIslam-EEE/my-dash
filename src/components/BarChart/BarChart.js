import React, { useEffect, useRef, useState } from "react";
import NavBar from '../Shared/NavBar'
import * as d3 from "d3";


export const BarChart = () => {
  const [data, setData] = useState([]);
  const svgRef = useRef();

  useEffect(()=>{
      let randomNumber=Math.floor(Math.random() * 12)
      if(  randomNumber<=4){
        randomNumber=5
      }
      setData(Array.from({length:  randomNumber}, () => Math.floor(Math.random() * 600)))

  },[])
  useEffect(() => {
    const w = 500;
    const h = 500;
    const svg = d3.select(svgRef.current).attr("width", '90%').attr("height", h).style('overflow','visible')
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(.5);
      const yScale=d3.scaleLinear()
      .domain([0,h])
      .range([h,0]);
      const xAxis=d3.axisBottom(xScale)
      .ticks(data.length)
      const yAxis=d3.axisLeft(yScale)
      .ticks(4);
      svg.append('g')
      .call(xAxis)
      .attr('transform',`translate(0,${h})`);
      svg.append('g')
      .call(yAxis)
      

      svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('x',(v,i)=>xScale(i))
      .attr('y',yScale)
      .attr('width',xScale.bandwidth())
      .attr('height',val=>h-yScale(val))
  }, [data]);
  return (
    <div>
      <NavBar/>
      <svg className="chart" ref={svgRef}></svg>
    </div>
  );
};
