import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gokuImg from '../../media/images/goku.png'
import { Quotes } from '../../components';
import {getQuote} from '../../services/';


export function App(){

    useEffect(() => {

        onUpdate();

    }, []);

    const [quoteState, setQuoteState] = useState({
        quote: 'loading quote ...',
        speaker: 'loading speaker ...'
    });


    const onUpdate = async () => {

        const resQuote = await getQuote();    
        setQuoteState(resQuote);

    };


    return(
        <Content>
            <Quotes 
                {...quoteState} onUpdate={onUpdate}/>
            <GokuImg src={gokuImg} alt="Goku Dragon Ball Z"/>
        </Content>
        
    );

}

const Content = styled.div`
    height: 100vh;
    padding; 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GokuImg = styled.img`
    max-width: 50vw;
    height: 55em;
    align-self: flex-end;
    padding-right: 15em;
`;

export default App;