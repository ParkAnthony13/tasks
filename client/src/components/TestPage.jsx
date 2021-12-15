import React,{useContext} from 'react';
import {navigate} from '@reach/router';
import GlobalState from '../contexts/GlobalState';
// const [state, setState] = useContext(GlobalState);

const TestPage = props => {
    const [state, setState] = useContext(GlobalState);
    const clickHandler = () => {
        setState({
            current:!state.current
        })
    }
    const clickHandlert = () => {
        console.log(state.current)
    }
    return(
        <div>
            <h1>testPage</h1>
            <button onClick={clickHandler}>bool</button>
            <button onClick={clickHandlert}>current</button>
            <button onClick={() => navigate('/home')}>home</button>
        </div>
    )
}


export default TestPage;