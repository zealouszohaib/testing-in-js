import { toUpperCase } from "../app/Utils"

describe("Utils test suit", () => {

    test("it should return upper case", () => {
        const res = toUpperCase('zohaib');

        expect(res).toBe('ZOHAIB')
    })
})