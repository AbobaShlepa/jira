export function getItem<ItemType>(key: string): ItemType | null {
  const value = sessionStorage.getItem(key);
  if (!value) {
    return null;
  }

  const typedValue = JSON.parse(value);
  return typedValue;
}

export function setItem<ItemType>(key: string, item: ItemType): void {
  const serializedValue = JSON.stringify(item);
  sessionStorage.setItem(key, serializedValue);
}