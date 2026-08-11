import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ open, images, index, onIndexChange, onClose }) {
  const hasMultiple = images && images.length > 1;

  const goPrev = () => {
    if (!hasMultiple) return;
    onIndexChange((index - 1 + images.length) % images.length);
  };
  const goNext = () => {
    if (!hasMultiple) return;
    onIndexChange((index + 1) % images.length);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, images]);

  if (!images || images.length === 0) return null;
  const current = images[index];

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4 sm:p-8"
        >
          <button
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center h-10 w-10 rounded-full bg-surface border border-border text-text hover:border-accent/50 transition-colors z-10"
          >
            <X size={20} />
          </button>

          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-surface border border-border text-text hover:border-accent/50 transition-colors z-10"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-surface border border-border text-text hover:border-accent/50 transition-colors z-10"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            className="flex flex-col items-center gap-4 max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              src={current.src}
              alt={current.label}
              className="max-w-full max-h-[80vh] rounded-xl border border-border shadow-2xl object-contain cursor-default"
            />
            {hasMultiple && (
              <p className="font-mono text-xs text-muted">
                {current.label} — {index + 1} / {images.length}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
