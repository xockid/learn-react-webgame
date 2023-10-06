import React from 'react';
import ReactDom from 'react-dom/client';

import TicTacToe from './TicTacToe';

ReactDom.createRoot(document.querySelector('#root')).render(<TicTacToe />);