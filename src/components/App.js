import React, { Component } from 'react';
import htmlOnly from "./htmlOnly.png";
import cssOnly from "./cssOnly.png";
import jsOnly from "./jsOnly.png";
import mem from "./memory.png";
import calc from "./calculathor.png";
import ytclone from "./ytclone.png";
import odo from "./odo.jpeg";
import "./App.css";


function App(){
    return(
        <div className = "main" >
        <header>
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Oliver Graf</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#porta">Portafolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#herra">Herramientas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://github.com/oligraf98">Github</a>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </header>
        <br/>
        <br/>
          <div  className = "persons-pannel">
            <div id="home" class="row display-4 fw-bold">
              Página Personal
            </div>
            <br/>
            <div class="row">
              <img src={odo} alt="html only" width="500" height="500" class="col-md-6"/>

              <div class = "display-5 fw-bold col-md-6 desc">
                My nombre es Oliver Graf y actualmente estoy cursando mi último año de Ingeniería en Bioinformatica. En esta página podrán encontrar algunas de las aplicaciones web que he desarrollado.
              </div>
            </div>
          </div>
          <div id="porta" className = "projects-pannel">
            <div class="p-5 mb-4 rounded-3 obscuro">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">HTML only</h1>
                  <div class="row">
                  <p class="col-md-8 fs-4">Una serie de páginas web, en las que cuento una historia. El propósito de este ejercicio fue crear dicha historia utilizando únicamente HTML.</p>
                  <img src={htmlOnly} alt="html only" width="150" height="240" class="col-md-4"/>
                  </div>
                  <a href="http://stw-uvg-22.site/lab03/OFGF17190/Lab3/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>
              </div>
            </div>
            <div class="p-5 mb-4 rounded-3 claro">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">CSS only</h1>
                <div class="row">
                  <p class="col-md-8 fs-4">Recreando una imagen minimalista de un piano, utilizando únicamente CSS para lograrlo.</p>
                  <img src={cssOnly} alt="CSS only" width="150" height="240" class="col-md-4"/>
                  </div>
                  <a href="http://stw-uvg-22.site/lab04/OFGF17190/Lab4/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>
              </div>
            </div>
            <div class="p-5 mb-4 rounded-3 obscuro">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">JS only</h1>
                <div class="row">
                  <p class="col-md-8 fs-4">Creación de un chat funcional utilizando únicamente JavaScript para lograrlo.</p>
                  <img src={jsOnly} alt="JS only" width="150" height="240" class="col-md-4"/>
                  </div>
                  <a href="http://stw-uvg-22.site/lab05/parte02/OFGF17190/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>
              </div>
            </div>
            <div class="p-5 mb-4 rounded-3 claro">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Juego de Memoria utilizando React</h1>
                <div class="row">
                  <p class="col-md-8 fs-4">Un simple juego de memoria creado utilizando React. El propósito de este proyecto era conocer más a fondo React y ponerlo en práctica.</p>
                  <img src={mem} alt="Juego de Memoria utilizando React" width="150" height="240" class="col-md-4"/>
                  </div>
                  <a href="http://stw-uvg-22.site/lab08/OFGF17190/Lab8-Web-MemoryGame/bundle_react/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>
              </div>
            </div>
            <div class="p-5 mb-4 rounded-3 obscuro">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">CalculaThor utilizando React</h1>
                <div class="row">
                  <p class="col-md-8 fs-4">Una calculadora que al hacer cálculos retumba con el poder de Thor.</p>
                  <img src={calc} alt="CalculaThor utilizando React" width="150" height="240" class="col-md-4"/>
                  </div>
                  <a href="http://stw-uvg-22.site/lab10/OFGF17190/bundle_react/index.html" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>
              </div>
            </div>
            <div class="p-5 mb-4 rounded-3 claro">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Youtube clone</h1>
                <div class="row">
                  <p class="col-md-8 fs-4">La idea de este ejercicio era elegir una página web y crear un clon (en cuanto al estilo) de dicha página.</p>
                  <img src={ytclone} alt="Youtube clone" width="150" height="240" class="col-md-4"/>
                  </div>
                  <a href="http://stw-uvg-22.site:4020/" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>
              </div>
            </div>
            <div class="p-5 mb-4 rounded-3 obscuro">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Demo Ecommerce</h1>
                <div class="row">
                  <p class="col-md-8 fs-4">Este proyecto fue una colaboración muy grande entre todos los alumnos del curso de Sistemas y tecnologías Web. El objetivo era crear una tienda en línea (ecommerce) funcional.</p>

                  </div>
                  <a href="https://github.com/guillermoSb/ecommerce-uvg" class="btn btn-primary btn-lg" role="button" target="_blank">Ir a proyecto</a>
              </div>
              <div class="p-5 mb-4 rounded-3 obscurisimo">
                <div class="container-fluid py-5">
                  <h1 id="herra" class="display-5 fw-bold">Herramientas utilizadas:</h1>
                  <div class="row">
                    <p class="col-md-4 fs-4">Los proyectos que se encuentran en esta página desfilan las siguientes herramientas para el desarrollo de aplicaciones web:</p>
                    <ul>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Web Pack</li>
                      <li>Babel</li>
                      <li>linter</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SASS</li>
                      <li>Jest</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default App;
