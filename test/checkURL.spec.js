import {checkURL} from "../src/client/js/nameChecker"

describe("Testing formHandler file", ()=> {
    test('check formHandler is defined', ()=>{
        expect(checkURL).toBeDefined()
    })
})