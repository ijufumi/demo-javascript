import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-json';

import './App.css';

interface Props {}

const App: FC<Props> = () => {
    const [code, setCode] = useState<string>(`{
        "question": "How many parameters does BERT-large have?",
        "answer_text": "BERT-large is really big... it has 24-layers and an embedding size of 1,024, for a total of 340M parameters! Altogether it is 1.34GB, so expect it to take a couple minutes to download to your Colab instance."
    }`)

    const changeCode = (code: string) => {
        setCode(code);
    }

    const handleDownload = () =>  {
        const link = document.createElement('a');
        const data = JSON.stringify(JSON.parse(code), undefined, 2);
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        link.download = "sample.json";
        link.href = downloadUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Container>
            <Title>
                Sample App
            </Title>
            <Contents>
                <ButtonContainer>
                    <Button onClick={handleDownload}>
                        Download
                    </Button>
                </ButtonContainer>
                <Editor
                    value={code}
                    onValueChange={code => changeCode( code )}
                    highlight={code => highlight(code, languages.json)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 20,
                        height: '500px',
                        margin: '10px',
                        border: '1px solid #000000'
                    }}
                />
            </Contents>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica,Arial,sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: #EBE9E3;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  height: 100px;
  background-color: #FFFFFF;
  margin: 10px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  margin: 10px;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 150px;
  font-size: 20px;
  background-color: #B2DC98;
  color: #FFFFFF;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
`;

export default App;
