import styled from 'styled-components';

const Title = styled.h1`
  font-size: 100px;
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title className="title">Hello, world</Title>
      </header>
    </div>
  );
}