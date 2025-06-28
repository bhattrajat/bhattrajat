import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";

const settings = [
  {
    value: "light",
    label: "Light",
    icon: FiSun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: FiMoon,
  },
  {
    value: "system",
    label: "System",
    icon: FiMonitor,
  },
];
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-6 w-6 animate-pulse bg-slate-200 dark:bg-slate-700 md:order-1 md:ml-2" />
    );
  }

  const Component = settings.find(({ value }) => value === theme)?.icon;
  return (
    <div className="relative flex flex-col md:order-1 md:ml-2">
      <Listbox value={theme} onChange={setTheme}>
        <Label className="sr-only">Theme</Label>
        <ListboxButton type="button">
          {Component && <Component className="flex h-6 w-6 items-center" />}
        </ListboxButton>
        <ListboxOptions className="dark:highlight-white/5 absolute right-0 top-full w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0">
          {settings.map(({ value, label, icon: Icon }) => (
            <ListboxOption key={value} value={value} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`
                  flex cursor-pointer items-center px-2 py-1
                  ${
                    selected || active
                      ? "bg-slate-800 text-slate-50 dark:bg-slate-200/30"
                      : ""
                  }
                `}
                >
                  <Icon className="mr-2 h-6 w-6" />
                  {label}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
