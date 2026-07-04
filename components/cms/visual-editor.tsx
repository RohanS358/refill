"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Monitor, Tablet, Smartphone, RotateCcw } from "lucide-react";
import { saveTexts } from "@/app/admin/actions";
import { cn } from "@/lib/utils";

type Viewport = "desktop" | "tablet" | "mobile";
const viewports: { id: Viewport; icon: typeof Monitor; width?: number; label: string }[] = [
  { id: "desktop", icon: Monitor, label: "Desktop" },
  { id: "tablet", icon: Tablet, width: 768, label: "Tablet" },
  { id: "mobile", icon: Smartphone, width: 390, label: "Mobile" },
];

export function VisualEditor({ routes }: { routes: { label: string; href: string }[] }) {
  const [route, setRoute] = useState(routes[0].href);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [changes, setChanges] = useState<Record<string, string>>({});
  const [frameKey, setFrameKey] = useState(0);
  const [pending, startTransition] = useTransition();
  const frameRef = useRef<HTMLIFrameElement>(null);

  const enterEditMode = () => {
    frameRef.current?.contentWindow?.postMessage(
      { type: "cms:enter" },
      window.location.origin,
    );
  };

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      if (e.data?.type === "cms:ready") enterEditMode();
      if (e.data?.type === "cms:change") {
        setChanges((c) => ({ ...c, [e.data.key]: e.data.value }));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const changeCount = Object.keys(changes).length;
  const reload = () => setFrameKey((k) => k + 1);

  const publish = () =>
    startTransition(async () => {
      await saveTexts(changes);
      setChanges({});
      reload();
    });

  const discard = () => {
    setChanges({});
    reload();
  };

  const width = viewports.find((v) => v.id === viewport)?.width;

  return (
    <div className="flex h-screen flex-col">
      {/* Toolbar */}
      <div className="flex items-center gap-4 border-b border-border bg-card px-5 py-3">
        <label htmlFor="editor-route" className="text-eyebrow text-muted-foreground">
          Page
        </label>
        <select
          id="editor-route"
          value={route}
          onChange={(e) => {
            setRoute(e.target.value);
            setChanges({});
          }}
          className="border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
        >
          {routes.map((r) => (
            <option key={r.href} value={r.href}>
              {r.label}
            </option>
          ))}
        </select>

        <div className="flex items-center border border-border" role="group" aria-label="Viewport">
          {viewports.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setViewport(v.id)}
              aria-label={v.label}
              aria-pressed={viewport === v.id}
              className={cn(
                "p-2.5 transition-colors",
                viewport === v.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <v.icon size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={reload}
          aria-label="Reload page"
          className="p-2.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <RotateCcw size={16} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className="ml-auto flex items-center gap-3">
          <p aria-live="polite" className="text-data text-muted-foreground">
            {changeCount > 0
              ? `${changeCount} pending edit${changeCount === 1 ? "" : "s"}`
              : "Click any highlighted text to edit"}
          </p>
          <button
            type="button"
            onClick={discard}
            disabled={changeCount === 0 || pending}
            className="border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-foreground hover:text-foreground disabled:opacity-40"
          >
            Discard
          </button>
          <button
            type="button"
            onClick={publish}
            disabled={changeCount === 0 || pending}
            className="bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground disabled:opacity-40"
          >
            {pending ? "Publishing…" : "Publish"}
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Canvas */}
        <div className="flex flex-1 justify-center overflow-auto bg-secondary p-4">
          <iframe
            ref={frameRef}
            key={`${route}-${frameKey}`}
            src={route}
            title="Site preview — click text to edit"
            onLoad={enterEditMode}
            className="h-full border border-border bg-background"
            style={{ width: width ? `${width}px` : "100%", flexShrink: 0 }}
          />
        </div>

        {/* Pending changes */}
        <aside className="w-72 shrink-0 overflow-y-auto border-l border-border bg-card">
          <h2 className="text-eyebrow border-b border-border px-4 py-3 text-muted-foreground">
            Pending edits
          </h2>
          {changeCount === 0 ? (
            <p className="text-data px-4 py-4 text-muted-foreground">
              Nothing yet. Edits appear here before you publish. Scroll the page
              to reach content further down.
            </p>
          ) : (
            <ul>
              {Object.entries(changes).map(([key, value]) => (
                <li key={key} className="border-b border-border px-4 py-3">
                  <p className="text-data break-all text-primary">{key}</p>
                  <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
