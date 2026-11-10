import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SheetItem {
  id: string;
  label: string;
  question: string;
  answer: string;
}

interface ResearchSheetProps {
  items: SheetItem[];
}

export default function ResearchSheet({ items }: ResearchSheetProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mt-4 corner-box">
      <div className="px-4 py-2.5 border-b border-[var(--edge)] bg-[var(--panel-alt)] flex items-center justify-between font-mono-code text-xs">
        <span className="text-[var(--fg)] font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-xs bg-[var(--accent)]"></span>
          overview // quick answers
        </span>
        <span className="text-[var(--fg-muted)]">{items.length} entries</span>
      </div>

      <div className="divide-y divide-[var(--edge)]">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.id} className="research-row">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-3.5 cursor-pointer list-none hover:bg-[var(--panel-alt)] transition-colors select-none text-left"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 font-mono-code text-xs">
                  <span className="text-[var(--accent)] font-semibold">{item.id}</span>
                  <span className={`font-medium transition-colors ${isOpen ? 'text-[var(--accent)]' : 'text-[var(--fg)]'}`}>
                    {item.label}
                  </span>
                  <span className="text-[var(--fg-muted)] hidden sm:inline">— {item.question}</span>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="font-mono-code text-xs text-[var(--fg-muted)] inline-block origin-center"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-3.5 pt-1 text-xs text-[var(--fg-muted)] leading-relaxed font-sans bg-[var(--panel)]">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
