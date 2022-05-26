import {fireEvent, render, screen} from '@testing-library/react';
import { Quotes } from './Quotes'; // componente que será testado.


const quote = 'teste quote';
const speaker = 'random speaker';

// Teste de renderização do Quotes.
test('renders received quote, speaker and a button', () =>{
    render(<Quotes quote={quote} speaker={speaker} />);

    const quoteTest = screen.getByText(quote);
    const speakerTest = screen.getByText(`- ${speaker}`);
    const buttonTest = screen.getByRole('button');

    expect(quoteTest).toBeInTheDocument();
    expect(speakerTest).toBeInTheDocument();
    expect(buttonTest).toBeInTheDocument();
});

test('calls a calback when button is pressed', () => {
    const callback = jest.fn();

    render(<Quotes quote={quote} speaker={speaker} onUpdate={callback}/>);

    const buttonTest = screen.getByRole('button');

    // simula eeventos do usuário.
    fireEvent.click(buttonTest);

    expect(callback).toHaveBeenCalledTimes(1);

});