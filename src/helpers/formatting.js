export const formatDate = (date) => {
    const comps = date.split(" ")
    return [comps[2], comps[1], comps[5]].join(" ")
}

export const formatListToString = (list, delimetter) => {
    return list && list.length > 0 ? list.join(delimetter) : null
}

export const formatToSlug = (phrase) => {
    if (phrase == null) {
        return ""
    }
    const words = phrase.split(" ")
    const lowerWords = words.map(w => {
        return w.toLowerCase()
    })
    return lowerWords.join("-")
}