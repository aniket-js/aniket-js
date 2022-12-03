import React, { useState } from 'react'
import CodeBlock from '../../../components/CodeBlock'
import ContentPage from '../../../layouts/ContentPage'
import CollapsableCard from '../../../components/CollapsableCard'
import TextArea from '../../../components/TextArea';
import { useEffect } from 'react';
import Head from 'next/head';


function JsRequireToEs6() {
    const codeString = `const mongoose = require('mongoose'); \nconst express =  require('express');`
    const expectedOutputString = `import mongoose from 'mongoose';\nimport express = import('express');`
    const [textAreaString, setTextAreaString] = useState('');
    const [error, setError] = useState(null)
    const [outputList, setOutputList] = useState([])
    const [extractVariables, setExtractVariables] = useState([])

    useEffect(() => {
        if (textAreaString === '') {
            return;
        }
        convertToEs6Imports();
    }, [textAreaString])


    function convertToEs6Imports() {
        setError(null)
        try {
            let statementList = textAreaString.trim().split("\n")
            let outputList = []
            let stError = {}

            let onlyVariables = []
            statementList.forEach((st, i) => {
                const tempSt = st.split(' ');

                if (tempSt.length === 1) {

                    if (tempSt[0] !== '') {
                        stError[i + 1] = st + ' // Error occured while parsing'
                        setError(stError)
                    }
                    return;
                }

                if (tempSt.length !== 4) {
                    stError[i + 1] = st + ' // Error occured while parsing'
                    setError(stError)
                    return;
                }


                if (!["let", "const", "var"].includes(tempSt[0].trim())) {
                    stError[i + 1] = st + ' // Error occured while parsing'
                    setError(stError)
                    return;
                }

                if (tempSt[2].trim() !== '=') {
                    stError[i + 1] = st + ' // Error occured while parsing'
                    setError(stError)
                    return;
                }


                const packageName = betweenMarkers(tempSt[3], "(", ")", ")")
                if (packageName.trim().length === 0) {
                    stError[i + 1] = st + ' // Error occured while parsing'
                    setError(stError)
                    return;
                }

                /// when validation pass
                onlyVariables.push(tempSt[1])

                const makeImportStatement = `import ${tempSt[1]} from ${packageName}`
                outputList.push(makeImportStatement)
            })

            console.log('------------------', error)

            setOutputList(outputList)
            setExtractVariables(onlyVariables)
            //console.log(list)
        } catch (error) {
            setError({ 0: 'Error while parsing your code...' })
        }

    }


    return (
        <ContentPage title="JS Require statement to Es6 Converter"
            desc=" Paste list of es6 require statements line by line, get es6 imports in output">
            <Head><title>JS Require statement to Es6 Converter</title></Head>
            <CollapsableCard title={"Expected Input"}>
                <CodeBlock blockTitle="*" canCopy={true} codestring={codeString} />
            </CollapsableCard>

            <CollapsableCard expanded={true} title={"Expected Output"}>
                <CodeBlock blockTitle="*" canCopy={true} codestring={expectedOutputString} />
            </CollapsableCard>


            {
                error && <>
                    {
                        Object.entries(error).map((item, key) => {
                            return <div key={key} style={{ color: 'red', margin: 2 }}>Line {item[0]} : {item[1]}</div>
                        })
                    }
                </>
            }
            <TextArea onChange={(text) => { setTextAreaString(text.target.value) }} />

            {
                outputList.length > 0 && <CodeBlock blockTitle="Converted JS Import" canCopy={true} codestring={outputList.join('\r\n')} />
            }

            {
                extractVariables.length > 0 && <CodeBlock blockTitle="All Variables" canCopy={true} codestring={extractVariables.join('\r\n')} />
            }

            {
                extractVariables.length > 0 && <CodeBlock blockTitle="Variable as Array" canCopy={true} codestring={JSON.stringify(extractVariables)} />
            }


        </ContentPage>
    )
}



function betweenMarkers(text, begin, end) {
    var firstChar = text.indexOf(begin) + begin.length;
    console.log("firstChar ", firstChar)
    var lastChar = text.lastIndexOf(end);
    console.log("lastChar ", lastChar)
    var newText = text.substring(firstChar, lastChar);
    return newText;
}

export default JsRequireToEs6