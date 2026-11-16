"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Flower2 } from "lucide-react";
import { SupportChat } from "./support-chat";

const SHOW_AFTER_SCROLL_PX = 300;
const EXPAND_AFTER_MS = 7000;
const COLLAPSE_AFTER_MS = 12000;
const BEAT_EVERY_MS = 5000;
const BEAT_DURATION_MS = 1500;

export function DynamicWhatsApp({
  phone,
  message,
}: {
  phone: string;
  message: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasCollapsed, setHasCollapsed] = useState(false);
  const [isBeating, setIsBeating] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const hasAppeared = useRef(false);

  // Aparece (colapsado) al bajar 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SHOW_AFTER_SCROLL_PX && !hasAppeared.current) {
        hasAppeared.current = true;
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // A los 7s se expande; a los 12s se colapsa y ya puede latir
  useEffect(() => {
    if (!isVisible) return;
    const expand = window.setTimeout(() => setIsExpanded(true), EXPAND_AFTER_MS);
    const collapse = window.setTimeout(() => {
      setIsExpanded(false);
      setHasCollapsed(true);
    }, COLLAPSE_AFTER_MS);
    return () => {
      window.clearTimeout(expand);
      window.clearTimeout(collapse);
    };
  }, [isVisible]);

  // Latido cada 5s mientras está colapsado y el chat está cerrado
  useEffect(() => {
    if (!hasCollapsed || chatOpen) return;
    let stopBeat: number | undefined;
    const interval = window.setInterval(() => {
      setIsBeating(true);
      stopBeat = window.setTimeout(() => setIsBeating(false), BEAT_DURATION_MS);
    }, BEAT_EVERY_MS);
    return () => {
      window.clearInterval(interval);
      if (stopBeat !== undefined) window.clearTimeout(stopBeat);
      setIsBeating(false);
    };
  }, [hasCollapsed, chatOpen]);

  const openChat = () => {
    setChatOpen(true);
    setIsExpanded(false);
  };
  const closeChat = useCallback(() => setChatOpen(false), []);

  const classes = [
    "dynamic-wa",
    isVisible ? "visible" : "",
    isExpanded ? "expanded" : "",
    // El latido se detiene en cuanto el chat se abre, sin esperar a otro render
    isBeating && !chatOpen ? "beating" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <SupportChat
        onClose={closeChat}
        open={chatOpen}
        phone={phone}
        whatsappMessage={message}
      />
      <button
        aria-expanded={chatOpen}
        aria-label="Abrir asistente de ayuda"
        className={classes}
        onClick={chatOpen ? closeChat : openChat}
        type="button"
      >
        <div className="dynamic-wa-text">
          <strong>¿Tienes dudas?</strong>
          <span>Escríbenos por WhatsApp</span>
        </div>
        <div className="dynamic-wa-icon">
          <Flower2 aria-hidden="true" className="dynamic-wa-flower-svg" size={26} strokeWidth={1.8} />
        </div>
      </button>
    </>
  );
}
