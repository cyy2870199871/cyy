"use client";

import { useApp } from "@/hooks/useAppContext";
import { useEffect } from "react";

const MALE_VARS = `
  --primary: #3B82F6;
  --primary-dark: #2563EB;
  --primary-light: #EFF6FF;
  --gender-gradient: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  --gender-shadow: rgba(37, 99, 235, 0.2);
  --gender-soft: #EFF6FF;
  --gender-text: #1d4ed8;
`;

const FEMALE_VARS = `
  --primary: #EC4899;
  --primary-dark: #DB2777;
  --primary-light: #FDF2F8;
  --gender-gradient: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
  --gender-shadow: rgba(236, 72, 153, 0.2);
  --gender-soft: #FDF2F8;
  --gender-text: #be185d;
`;

export default function GenderThemeInjector() {
  const { gender } = useApp();

  useEffect(() => {
    const vars = gender === "female" ? FEMALE_VARS : MALE_VARS;
    const style = document.getElementById("gender-theme-vars");
    if (style) {
      style.textContent = `:root { ${vars} }`;
    } else {
      const el = document.createElement("style");
      el.id = "gender-theme-vars";
      el.textContent = `:root { ${vars} }`;
      document.head.appendChild(el);
    }

    // Also set body data attribute for CSS selectors
    document.body.setAttribute("data-gender", gender);

    return () => {};
  }, [gender]);

  return null; // renders nothing
}
