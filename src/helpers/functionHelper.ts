export function debounce<T extends Function>(func: T, wait: number = 300) {
  let timer = 0;
  let callable = (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), wait);
  };
  return <T>(<any>callable);
}
