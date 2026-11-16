"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ChatNodeId = "menu" | "envios" | "materiales" | "personalizados" | "ari";
type ChatActionKind = "goto" | "form" | "whatsapp";

interface ChatAction {
  label: string;
  kind: ChatActionKind;
  /** Solo para kind === "goto" */
  target?: ChatNodeId;
}

interface ChatNode {
  message: string;
  actions: readonly ChatAction[];
}

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
}

const BACK: ChatAction = { label: "⬅️ Volver al menú", kind: "goto", target: "menu" };

const NODES: Record<ChatNodeId, ChatNode> = {
  menu: {
    message: "¡Hola! 🌸 Soy el asistente virtual de Ari. ¿En qué te puedo ayudar hoy?",
    actions: [
      { label: "🚚 Envíos", kind: "goto", target: "envios" },
      { label: "🌸 Materiales", kind: "goto", target: "materiales" },
      { label: "🎨 Personalizados", kind: "goto", target: "personalizados" },
      { label: "💬 Hablar con Ari", kind: "goto", target: "ari" },
    ],
  },
  envios: {
    message:
      "Hacemos envíos a domicilio y a provincias. El costo y el tiempo dependen de tu zona. Al confirmar tu pedido por WhatsApp, te damos los detalles exactos.",
    actions: [BACK],
  },
  materiales: {
    message:
      "Todas nuestras flores son eternas y hechas a mano. Usamos foami, limpiapipas, cintas de satén, mariposas metálicas y coronas decorativas. ¡Nunca se marchitan!",
    actions: [BACK],
  },
  personalizados: {
    message:
      "¡Claro que sí! Puedes crear el ramo de tus sueños. Solo tienes que usar nuestro formulario, elegir colores, flores y subir una foto de referencia de Pinterest.",
    actions: [{ label: "Ir al formulario", kind: "form" }, BACK],
  },
  ari: {
    message:
      "¡Genial! Te atenderé personalmente. Haz clic abajo para abrir WhatsApp.",
    actions: [{ label: "Abrir WhatsApp", kind: "whatsapp" }],
  },
};

const INITIAL_MESSAGES: readonly ChatMessage[] = [
  { id: 0, from: "bot", text: NODES.menu.message },
];

interface SupportChatProps {
  open: boolean;
  onClose: () => void;
  phone: string;
  whatsappMessage: string;
}

export function SupportChat({
  open,
  onClose,
  phone,
  whatsappMessage,
}: SupportChatProps) {
  const [nodeId, setNodeId] = useState<ChatNodeId>("menu");
  const [messages, setMessages] = useState<readonly ChatMessage[]>(INITIAL_MESSAGES);
  const nextId = useRef(1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const node = NODES[nodeId];

  // Al cerrar, el chat vuelve al menú principal (se ajusta durante el render, no en un efecto)
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (!open) {
      setNodeId("menu");
      setMessages(INITIAL_MESSAGES);
    }
  }

  // Mantener visible el último mensaje
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleAction = useCallback(
    (action: ChatAction) => {
      if (action.kind === "goto" && action.target) {
        const target = action.target;
        const userId = nextId.current++;
        const botId = nextId.current++;
        setMessages((prev) => [
          ...prev,
          { id: userId, from: "user", text: action.label },
          { id: botId, from: "bot", text: NODES[target].message },
        ]);
        setNodeId(target);
        return;
      }
      if (action.kind === "form") {
        onClose();
        document
          .getElementById("personalizar")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (action.kind === "whatsapp") {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
        const opened = window.open(url, "_blank", "noopener,noreferrer");
        if (!opened) window.location.href = url;
      }
    },
    [onClose, phone, whatsappMessage],
  );

  return (
    <div
      aria-hidden={!open}
      aria-label="Conserje virtual de Ari"
      className={`support-chat${open ? " open" : ""}`}
      role="dialog"
    >
      <header className="support-chat-header">
        <span aria-hidden="true" className="support-chat-avatar">
          A
        </span>
        <span className="support-chat-id">
          <span className="support-chat-title">Ari&apos;s Eternal Flowers</span>
          <span className="support-chat-status">
            <span aria-hidden="true" className="support-chat-dot" /> Conserje · en línea
          </span>
        </span>
        <button
          aria-label="Cerrar chat"
          className="support-chat-close"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          type="button"
        >
          ×
        </button>
      </header>

      <div aria-live="polite" className="support-chat-body" ref={bodyRef}>
        {messages.map((m) => (
          <p
            className={`support-chat-bubble ${m.from === "user" ? "from-user" : "from-bot"}`}
            key={m.id}
          >
            {m.text}
          </p>
        ))}
        <div className="support-chat-actions">
          {node.actions.map((action) => (
            <button
              className={`support-chat-option${
                action.kind === "whatsapp" || action.kind === "form"
                  ? " primary"
                  : ""
              }`}
              key={action.label}
              onClick={() => handleAction(action)}
              tabIndex={open ? 0 : -1}
              type="button"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
