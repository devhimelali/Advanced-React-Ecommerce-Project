type classValue = string | Record<string, boolean> | undefined | null;
export const classNames = (...args: classValue[]): string => {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === "string") return [arg];
      if (typeof arg === "object")
        return Object.entries(arg)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);

      return [];
    })
    .join(" ");
};
