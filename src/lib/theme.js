import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'theme';
const listeners = new Set();
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

let current = document.documentElement.classList.contains('dark')
  ? 'dark'
  : 'light';

function storedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function apply(theme) {
  current = theme;
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  listeners.forEach((listener) => listener());
}

export function setTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore private-mode storage errors */
  }
  apply(theme);
}

export function toggleTheme() {
  setTheme(current === 'dark' ? 'light' : 'dark');
}

/** Follow the OS preference until the visitor makes an explicit choice. */
darkQuery.addEventListener('change', (event) => {
  if (!storedTheme()) apply(event.matches ? 'dark' : 'light');
});

function subscribe(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useTheme() {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => 'light',
  );
}
