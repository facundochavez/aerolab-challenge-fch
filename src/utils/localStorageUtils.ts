const LOCAL_STORAGE_KEYS = {
  filterCategory: 'filterCategory',
  orderBy: 'orderBy',
  orderDirection: 'orderDirection',
};

export const saveToLocalStorage = (
  key: keyof typeof LOCAL_STORAGE_KEYS,
  value: string
) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEYS[key], value);
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
};

export const getFromLocalStorage = (
  key: keyof typeof LOCAL_STORAGE_KEYS,
  defaultValue: string
): string => {
  try {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEYS[key]);
    return storedValue !== null ? storedValue : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return defaultValue;
  }
};
