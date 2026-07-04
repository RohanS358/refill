"use client";

import { useEffect } from "react";

/**
 * Visual-editor bridge. Dormant on normal visits; when the page is framed by
 * /admin/editor (same origin) and receives "cms:enter", every [data-cms]
 * element becomes contentEditable and reports edits back via postMessage.
 * Saving happens in the parent — this component never writes anything.
 */
export function EditBridge() {
  useEffect(() => {
    if (window.self === window.top) return; // not framed → do nothing

    const origin = window.location.origin;
    const post = (message: unknown) => window.parent.postMessage(message, origin);
    let editing = false;

    const enable = () => {
      editing = true;
      document.documentElement.setAttribute("data-cms-edit", "1");
      for (const el of document.querySelectorAll<HTMLElement>("[data-cms]")) {
        el.setAttribute("contenteditable", "plaintext-only");
        if (!el.isContentEditable) el.setAttribute("contenteditable", "true");
        el.setAttribute("spellcheck", "false");
      }
    };

    const disable = () => {
      editing = false;
      document.documentElement.removeAttribute("data-cms-edit");
      for (const el of document.querySelectorAll<HTMLElement>("[data-cms]")) {
        el.removeAttribute("contenteditable");
      }
    };

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== origin) return;
      if (e.data?.type === "cms:enter") enable();
      if (e.data?.type === "cms:exit") disable();
    };

    const onInput = (e: Event) => {
      const el = e.target as HTMLElement;
      const key = el?.dataset?.cms;
      if (editing && key) post({ type: "cms:change", key, value: el.innerText });
    };

    // In edit mode a click means "edit this", never "navigate away".
    const onClick = (e: MouseEvent) => {
      if (!editing) return;
      const link = (e.target as HTMLElement).closest("a");
      if (link) e.preventDefault();
    };

    window.addEventListener("message", onMessage);
    document.addEventListener("input", onInput, true);
    document.addEventListener("click", onClick, true);
    post({ type: "cms:ready", path: window.location.pathname });

    return () => {
      window.removeEventListener("message", onMessage);
      document.removeEventListener("input", onInput, true);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
