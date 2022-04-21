import "../styles/App.scss";
import { useState } from "react";
//el nº de errores se puede calcular a partir de otros datos
//El número de errores, cambia solo cuando añade una letra errónea
//¿Qué número de errores hay cuando el juego no ha empezado? 0
//¿Hay un número de errores mínimo y/o máximo? si, minimo 0 maximo 13
//¿Hay datos que son conjuntos de datos (como un array o un objeto) o todos los datos son simples o primitivos? Puede ser el propio muñeco el array que se va pintando, las letras de la solución porque hay que recorrerlas al pintarlas y las letras falladas también
//dato simple puede ser el valor que introduce la usuaria para probar

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const handleButton = (event) => {
    event.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);

  };

  const handleInput = (ev) => {
    const userLetter = ev.target.value;
    setLastLetter(userLetter);
    console.log(lastLetter);
    // continuar por aquí
  }

  return (
    <div>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                <li className="letter">k</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter">k</li>
                <li className="letter">r</li>
                <li className="letter"></li>
                <li className="letter">k</li>
                <li className="letter">e</li>
                <li className="letter">r</li>
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                value={lastLetter}
                onChange={handleInput}
              />
              <button onClick={handleButton}>incrementar</button>
            </form>
          </section>

          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
