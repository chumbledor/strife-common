async function filterAsync<TValue>(array: TValue[], predicate: (value: TValue, index: number, array: TValue[]) => Promise<boolean>): Promise<TValue[]> {
  const promises = array.map(predicate);
  const results = await Promise.all(promises);
  return array.filter(filter);

  function filter(_: TValue, index: number): boolean {
    return results[index];
  }
}

async function mapAsync<TFrom, TTo>(array: TFrom[], callbackfn: (value: TFrom, index: number, array: TFrom[]) => Promise<TTo>): Promise<TTo[]> {
  const promises = array.map(callbackfn);
  const results = await Promise.all(promises);
  return array.map(map);

  function map(_: TFrom, index: number): TTo {
    return results[index];
  }
}

export const Algorithms = {
  filterAsync,
  mapAsync
};