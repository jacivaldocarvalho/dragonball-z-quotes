import styled from 'styled-components';
import {string, func} from 'prop-types';
import {Button} from '../button';

export const Quotes = ({quote, speaker, onUpdate}) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>Frases<br></br>Dragon Ball Z</Button>
        </Wrapper>
    );
};

// define protypes para Quotes.
Quotes.prototype = {
    quote: string,
    speaker: string,
    onUpdate: func
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = styled.p`
    font-size: 3em;
    font-weight: bold;
    text-shadow: -3px 2px 2px #FFAD3F;
    margin: 0;
    padding-left: 2em;
`;

const Speaker = styled(Quote)`
    text-align: center;
    margin-bottom: 50px;
`;