import {compareCast} from "../sorting";

test("Returns -1 when second person's billing is higher", () => {
    const first = {
        name: "Leonardo DiCaprio",
        billing: 0
    }
    const second = {
        name: "Jonah Hill",
        billing: 1
    }
    expect(compareCast(first, second)).toBe(-1)
})

test("Returns 1 when second person's billing is lower", () => {
    const first = {
        name: "Leonardo DiCaprio",
        billing: 1
    }
    const second = {
        name: "Jonah Hill",
        billing: 0
    }
    expect(compareCast(first, second)).toBe(1)
})

test("Returns 0 when both billings are equal", () => {
    const first = {
        name: "Leonardo DiCaprio",
        billing: 1
    }
    const second = {
        name: "Jonah Hill",
        billing: 1
    }
    expect(compareCast(first, second)).toBe(0)
})