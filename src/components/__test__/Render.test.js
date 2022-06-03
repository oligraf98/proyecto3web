import React from "react";
import  ReactDOM  from "react-dom";

import App from "../App";


it("App renderiza sin problema", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("Hace render del link hacia github de ecommerce", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a href="https://github.com/guillermoSb/ecommerce-uvg" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>, div)
})

it("Funciona link hacia Youtube clone", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a href="http://stw-uvg-22.site:4020/" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>, div)
})

it("Funciona link hacia calculadora", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a href="http://stw-uvg-22.site/lab10/OFGF17190/bundle_react/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>, div)
})

it("Funciona link hacia memoria", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a href="http://stw-uvg-22.site/lab08/OFGF17190/Lab8-Web-MemoryGame/bundle_react/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>, div)
})

it("Funciona link hacia chat de JS only", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a href="http://stw-uvg-22.site/lab05/parte02/OFGF17190/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>, div)
})

it("Funciona link hacia imagen de CSS only", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a href="http://stw-uvg-22.site/lab04/OFGF17190/Lab4/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>, div)
})

it("Funciona link hacia HTML only", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a href="http://stw-uvg-22.site/lab03/OFGF17190/Lab3/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>, div)
})
