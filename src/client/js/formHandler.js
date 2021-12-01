import { checkURL } from "./nameChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(checkURL(formText)) {
        fetch('http://localhost:8081/check', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({urlAPI: `${formText}`})
        })
        .then((res)=> res.json())
        .then((resp)=> {
            const {model, agreement, subjectivity, confidence, irony} = resp
            document.getElementById('results').innerHTML= `model: ${model}... agreement:${agreement}... subjectivity:${subjectivity}... confidence:${confidence}... irony:${irony}`
        })
    } else {
        document.getElementById('results').innerHTML= 'Invalid URL'
    }
}

export { handleSubmit }
