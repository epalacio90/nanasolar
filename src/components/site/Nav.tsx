"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#casos", label: "Casos" },
  { href: "#negocios", label: "Para negocios" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#recursos", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Nanasolar, inicio">
          <Logo variant="pink-dark" width={160} height={36} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href="#cotiza" />}
            className="bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full px-5"
          >
            Analiza mi recibo
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label="Abrir menú" />}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[380px]">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <Logo variant="pink-dark" width={140} height={32} />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pt-2" aria-label="Navegación móvil">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  render={<a href="#cotiza" />}
                  className="mt-4 w-full bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full"
                  onClick={() => setOpen(false)}
                >
                  Analiza mi recibo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
