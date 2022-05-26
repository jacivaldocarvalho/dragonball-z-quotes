import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen, fireEvent} from '@testing-library/react';
import {App} from './app';

const response = {speaker: 'Speaker', quote: 'test quote'};

const server =  setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Teste de renderização do app.
test('renders the app, with a button, a quote and a button', () =>{
    render(<App />);

    const buttonTest = screen.getByRole('button');
    const imageTest = screen.getByRole('img');
    const textTest = screen.getByText(/loading speaker/);

    expect(buttonTest).toBeInTheDocument();
    expect(imageTest).toBeInTheDocument();
    expect(textTest).toBeInTheDocument();

});

test('calls API on startup and renders it response', async () => {
  render(<App />);
  
  const quoteTest = await screen.findByText(response.quote);

  expect(quoteTest).toBeInTheDocument();
  
});

test('calls API on button click and update its text', async () =>{
    render(<App />);

    const buttonTest = screen.getByRole('button');
    fireEvent.click(buttonTest);

    const quoteTest = await screen.findByText(response.quote);

    expect(quoteTest).toBeInTheDocument();

});


