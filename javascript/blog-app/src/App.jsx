import React, { useState, useEffect } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const addToDisplay = (value) => {
    if (value === '.') {
      const parts = display.split(/[\+\-\*\/]/);
      const lastPart = parts[parts.length - 1];
      if (lastPart.includes('.')) return;
    }

    const operators = ['+', '-', '*', '/'];
    if (
      operators.includes(value) &&
      (display === '' || operators.includes(display.slice(-1)))
    ) {
      if (!(value === '-' && (display === '' || operators.includes(display.slice(-1))))) {
        return;
      }
    }

    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const removeLast = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculateResult = () => {
    if (display === '') return;

    try {
      const result = new Function('return ' + display)();
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const allowedKeys = '0123456789+-*/.=BackspaceEnterEscape'.split('');
      if (
        allowedKeys.includes(event.key) ||
        event.key === 'Backspace' ||
        event.key === 'Enter' ||
        event.key === 'Escape'
      ) {
        event.preventDefault();
        if (event.key >= '0' && event.key <= '9') addToDisplay(event.key);
        else if (['+', '-', '*', '/'].includes(event.key)) addToDisplay(event.key);
        else if (event.key === '.') addToDisplay('.');
        else if (event.key === 'Backspace') removeLast();
        else if (event.key === 'Enter') calculateResult();
        else if (event.key === 'Escape') clearDisplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display]);

  return (
    <div className="calculator" style={styles.calculator}>
      <h2>Calculator</h2>
      <input type="text" value={display} readOnly className="display" style={styles.display} />
      <div className="buttons" style={styles.buttons}>
        <button onClick={clearDisplay} style={styles.button}>C</button>
        <button onClick={removeLast} style={styles.button}>⌫</button>
        <button onClick={() => addToDisplay('/')} style={styles.button}>÷</button>
        <button onClick={() => addToDisplay('*')} style={styles.button}>×</button>

        <button onClick={() => addToDisplay('7')} style={styles.button}>7</button>
        <button onClick={() => addToDisplay('8')} style={styles.button}>8</button>
        <button onClick={() => addToDisplay('9')} style={styles.button}>9</button>
        <button onClick={() => addToDisplay('-')} style={styles.button}>−</button>

        <button onClick={() => addToDisplay('4')} style={styles.button}>4</button>
        <button onClick={() => addToDisplay('5')} style={styles.button}>5</button>
        <button onClick={() => addToDisplay('6')} style={styles.button}>6</button>
        <button onClick={() => addToDisplay('+')} style={styles.button}>+</button>

        <button onClick={() => addToDisplay('1')} style={styles.button}>1</button>
        <button onClick={() => addToDisplay('2')} style={styles.button}>2</button>
        <button onClick={() => addToDisplay('3')} style={styles.button}>3</button>
        <button onClick={calculateResult} style={styles.button}>=</button>

        <button onClick={() => addToDisplay('0')} style={{ ...styles.button, ...styles.zero }}>0</button>
        <button onClick={() => addToDisplay('.')} style={styles.button}>.</button>
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    maxWidth: 350,
    margin: 'auto',
    padding: 20,
    border: '2px solid #ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  display: {
    width: '100%',
    fontSize: 24,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    border: '1px solid #ccc',
    textAlign: 'right',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 10,
  },
  button: {
    padding: '15px 0',
    fontSize: 20,
    borderRadius: 6,
    border: 'none',
    backgroundColor: '#ddd',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.2s',
  },
  zero: {
    gridColumn: 'span 2',
  },
};

export default Calculator;


