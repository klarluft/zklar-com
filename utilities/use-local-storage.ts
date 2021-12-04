import { useEffect, useState } from "react";

export interface LocalStorageTypes {
  cookieConsent: boolean;
}

const getStorageValue = <LocalStorageType extends any>(
  key: string,
  defaultValue?: LocalStorageType
): LocalStorageType | undefined => {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(key);
      const initial = saved ? JSON.parse(saved) : undefined;
      return initial ?? defaultValue;
    } catch {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
};

export const useLocalStorage = <Key extends keyof LocalStorageTypes>(
  key: Key,
  defaultValue?: LocalStorageTypes[Key]
) => {
  const [value, setValue] = useState<LocalStorageTypes[Key] | undefined>(() =>
    getStorageValue(key, defaultValue)
  );

  useEffect(() => {
    if (typeof value !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue] as const;
};
