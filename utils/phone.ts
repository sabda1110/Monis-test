export const sanitizePhoneNumber = (value: string): string => {
  const trimmed = value.trimStart();
  const startsWithPlus = trimmed.startsWith('+');
  const withoutPlus = value.replace(/\+/g, '');
  const digitsAndAllowed = withoutPlus.replace(/[^\d\s-]/g, '');
  const normalizedSpaces = digitsAndAllowed.replace(/\s+/g, ' ');
  if (!normalizedSpaces.trim()) {
    return startsWithPlus ? '+' : '';
  }
  return startsWithPlus ? `+${normalizedSpaces}` : normalizedSpaces;
};

export const isValidPhoneNumber = (value: string): boolean => {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 16;
};

export const isAllowedPhoneKey = (key: string, isCtrlOrMeta: boolean): boolean => {
  if (isCtrlOrMeta) return true;
  if (key.length !== 1) return true;
  return /[\d+\s-]/.test(key);
};
