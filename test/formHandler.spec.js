import {handleSubmit} from "../src/client/js/formHandler"

describe("Testing formHandler file", ()=> {
    test('check formHandler is defined', ()=>{
        expect(handleSubmit).toBeDefined()
    })
})