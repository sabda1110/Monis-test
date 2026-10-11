export const MONTH_NAMES: readonly string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const WEEKDAY_NAMES: readonly string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export const getTodayStart = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

export const getTodayDateString = (): string => {
  const today = getTodayStart();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const isPastDay = (year: number, monthIndex: number, day: number): boolean => {
  const target = new Date(year, monthIndex, day);
  const today = getTodayStart();
  return target.getTime() < today.getTime();
};

export const isMonthInPast = (year: number, monthIndex: number): boolean => {
  const today = getTodayStart();
  if (year < today.getFullYear()) return true;
  if (year === today.getFullYear() && monthIndex <= today.getMonth()) return true;
  return false;
};

export const isPastDateString = (dateString: string): boolean => {
  if (!dateString) return false;
  const parts = dateString.split('-');
  if (parts.length !== 3) return false;
  const y = Number(parts[0]);
  const m = Number(parts[1]) - 1;
  const d = Number(parts[2]);
  if (Number.isNaN(y) || Number.isNaN(m) || Number.isNaN(d)) return false;
  return isPastDay(y, m, d);
};

export const getRelativeDateString = (offsetDays: number): string => {
  const target = getTodayStart();
  target.setDate(target.getDate() + offsetDays);
  const y = target.getFullYear();
  const m = String(target.getMonth() + 1).padStart(2, '0');
  const d = String(target.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const formatDisplayDate = (dateString: string): string => {
  if (!dateString) return 'Select start date';
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const y = Number(parts[0]);
    const m = Number(parts[1]) - 1;
    const d = Number(parts[2]);
    const dateObj = new Date(y, m, d);
    if (!Number.isNaN(dateObj.getTime())) {
      return dateObj.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
  }
  return dateString;
};

export const getDaysInMonth = (year: number, monthIndex: number): number => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

export const getFirstDayOfWeek = (year: number, monthIndex: number): number => {
  const day = new Date(year, monthIndex, 1).getDay();
  return day === 0 ? 6 : day - 1;
};
