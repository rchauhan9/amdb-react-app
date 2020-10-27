
export const compareCast = (a, b) => {
    if ( a.billing < b.billing ){
        return -1;
    }
    if ( a.billing > b.billing ){
        return 1;
    }
    return 0;
}