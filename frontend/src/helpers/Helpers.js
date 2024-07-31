export const getPriceQueryParams = (searchParams, key, value) => {
    const hasValueInParam = searchParams.has

    if (value && hasValueInParam) {
        searchParams.set(key, value);
    } else if (value) {
        searchParams.append(key, value);
    } else if (hasValueInParam) {
        searchParams.delete(key);
    }

    return searchParams;
}