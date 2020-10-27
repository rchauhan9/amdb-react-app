
export const renderDate = (date) => {
    const comps = date.split(" ")
    return [comps[2], comps[1], comps[5]].join(" ")
}