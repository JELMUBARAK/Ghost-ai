"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import type { Ref } from "react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  sidebarToggleRef: Ref<HTMLButtonElement>;
  onToggleSidebar: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  sidebarToggleRef,
  onToggleSidebar,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="flex h-14 shrink-0 items-center border-b border-surface-border bg-surface px-3">
      <div className="flex flex-1 items-center gap-2">
        <Button
          ref={sidebarToggleRef}
          variant="ghost"
          size="icon-lg"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={isSidebarOpen}
          className="rounded-xl text-copy-muted hover:text-copy-primary"
        >
          <ToggleIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center" />
      <div className="flex flex-1 items-center justify-end" />
    </header>
  );
}
