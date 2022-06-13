import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

function App() {
  
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
essa parte estava fora da function App()
------------------------------------------
import {useState} from 'react'
import './App.css';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import OutraLista from './components/OutraLista';
--------------------------------------------
essa parte estava fora do return (antes dele), mas,
dentro da function App()
------------------------------------------
  const [nome, setNome] = useState()

  const nome = 'João'
  const newName = nome.toLocaleUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'http://via.placeholder.com/150'
---------------------------------------
esse conteúdo estava dentro do return!
---------------------------------------

 <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>

 const meusItems = ['React', 'Vue', 'Angular']
      <OutraLista itens={meusItems} />
      <OutraLista itens={[]} />

  <Evento />
  <Form />

const nome = "Maria"
<h2>Alterando o JSX</h2>
<p>Olá {newName}</p>
<p>Soma: {sum(1, 2)}</p>
<img src={url} alt="minha imagem" />

 <Frase />
      <Frase />
      <SayMyName nome="João" />
      <SayMyName nome="Lupita" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="João"
        idade="46"
        profissao="Web Developer"
        foto="https://via.placeholder.com/150"
      />
      <List />
*/