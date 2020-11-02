import {formatListToString, formatDate, formatToSlug} from "../formatting";

describe("String formatters", () => {
    test("formatDate returns date in dd MMM yyyy format", () => {
        expect(formatDate("Wed Jan 30 00:00:00 GMT 1974")).toBe("30 Jan 1974")
    })

    test("formatListToString returns a string of list joined by specified delimetter", () => {
        expect(formatListToString(["screenplay", "story", "book"], ", ")).toBe("screenplay, story, book")
    })

    test("formatListToString returns a standalone string when list length = 1", () => {
        expect(formatListToString(["screenplay"], ", ")).toBe("screenplay")
    })

    test("formatListToString returns null when list is empty or null", () => {
        expect(formatListToString([])).toBe(null)
        expect(formatListToString(undefined)).toBe(null)
    })

    test("formatToSlug returns a string of lower case words linked by hyphens", () => {
        expect(formatToSlug("Christian Bale Cast Card")).toBe("christian-bale-cast-card")
    })

    test("formatToSlug returns a string of lower case version of the word when no spaces in string", () => {
        expect(formatToSlug("ChristianBale")).toBe("christianbale")
    })

    test("formatToSlug returns an empty string when empty string, null or undefined passed", () => {
        expect(formatToSlug("")).toBe("")
        expect(formatToSlug(null)).toBe("")
        expect(formatToSlug(undefined)).toBe("")
    })
})


