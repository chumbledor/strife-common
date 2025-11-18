async function filterAsync(array, predicate) {
    const promises = array.map(predicate);
    const results = await Promise.all(promises);
    return array.filter(filter);
    function filter(_, index) {
        return results[index];
    }
}
async function mapAsync(array, callbackfn) {
    const promises = array.map(callbackfn);
    const results = await Promise.all(promises);
    return array.map(map);
    function map(_, index) {
        return results[index];
    }
}
export const Algorithms = {
    filterAsync,
    mapAsync
};
//# sourceMappingURL=Algorithms.js.map