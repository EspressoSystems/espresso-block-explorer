import { default as React } from 'react';
import './theme_toggle.css';

export type ColorTheme = 'light' | 'dark';

/**
 * colorThemeStorageKey is where the chosen theme is saved. Until the user
 * picks one the page follows the OS setting. The inline script in the
 * delegation-ui root layout reads the same key to set the theme before the
 * first paint.
 */
export const colorThemeStorageKey = 'esp-theme';

function readColorTheme(): ColorTheme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function subscribeToColorTheme(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

/**
 * useColorTheme returns the theme currently set on the page, and updates
 * whenever it changes.
 */
export function useColorTheme(): ColorTheme {
  return React.useSyncExternalStore(
    subscribeToColorTheme,
    readColorTheme,
    () => 'light',
  );
}

/**
 * setColorTheme switches the page to the given theme and remembers the
 * choice.
 */
export function setColorTheme(theme: ColorTheme) {
  try {
    localStorage.setItem(colorThemeStorageKey, theme);
  } catch {
    // The choice just won't outlive the page.
  }

  // Switch every color in the same frame instead of letting each element's
  // own transition fade it at a different speed.
  const root = document.documentElement;
  root.classList.add('theme-switching');
  root.dataset.theme = theme;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.classList.remove('theme-switching'));
  });
}

const MoonIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const choices: { theme: ColorTheme; label: string; icon: React.FC }[] = [
  { theme: 'dark', label: 'Night', icon: MoonIcon },
  { theme: 'light', label: 'Day', icon: SunIcon },
];

/**
 * ThemeToggle switches the Delegation UI between its day and night themes.
 */
export const ThemeToggle: React.FC = () => {
  const current = useColorTheme();

  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Color theme">
      {choices.map(({ theme, label, icon: Icon }) => (
        <button
          key={theme}
          type="button"
          role="radio"
          aria-checked={current === theme}
          aria-label={label}
          title={label}
          onClick={() => setColorTheme(theme)}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
};
