import './App.css';
import {useReducer} from 'react';


const reducer = (state, action) => {

    switch (action.type) {

        case '+':
            return { ...state, count1: state.count1 + 1 };

        case '-':
            return { ...state, count1: state.count1 - 1 };

        case 'plus':
            return { ...state, count2: state.count2 + 1 };

        case 'minus':
            return { ...state, count2: state.count2 - 1 };

        case 'unplus':
            return { ...state, count3: state.count3 + 1 };

        case 'moins':
            return { ...state, count3: state.count3 - 1 };
        case 'reset':
            return { ...state, count1: action.payload, count2: action.payload, count3: action.payload };

        default:
            throw new Error('Ouhhh, Errorrr!!!');
    }


};


function App() {

    const [state, dispatch] = useReducer(reducer, { count1: 0, count2: 0, count3: 0 });

    return (
        <div>

            <div className={'abcWrap'}>

                <div className={'letterWrap'}>
                <div>A: {state.count1}</div>
                <button onClick={() => dispatch({ type: '+' })}>+</button>
                <button onClick={() => dispatch({ type: '-' })}>-</button>
                </div>

                <div className={'letterWrap'}>
                <div>B: {state.count2}</div>
                <button onClick={() => dispatch({ type: 'plus' })}>Plus</button>
                <button onClick={() => dispatch({ type: 'minus' })}>Minus</button>
                </div>

                <div className={'letterWrap'}>
                <div>C: {state.count3}</div>
                <button onClick={() => dispatch({ type: 'unplus' })}>Un plus</button>
                <button onClick={() => dispatch({ type: 'moins' })}>Moins</button>
                </div>

            </div>

            <div className={'buttonReset'}>
                <button onClick={() => dispatch({ type: 'reset' })}>RESET ALL</button>
            </div>
        </div>
    );
}

export default App;
