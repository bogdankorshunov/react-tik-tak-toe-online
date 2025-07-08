import { X } from "lucide-react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/cn";
import { createPortal } from "react-dom";

const modalClasses = tv({
  base: "relative mx-auto flex min-h-[320px] flex-col rounded-lg bg-white",
  variants: {
    width: {
      md: "max-w-[640px]",
      full: "mx-5",
    },
  },
});
export function UIModal({ width = "md", children, isOpen, onClose }) {
  function handleClose(e) {
    const inModal = e.target.closest("[data-id=modal]");
    if (inModal) return;
    onClose();
  }
  if (!isOpen) return null;
  const modal = (
    <div
      className="fixed inset-0 z-[9999] overflow-auto bg-black/50 py-10 backdrop-blur-md"
      onClick={handleClose}
    >
      <div data-id="modal" className={modalClasses({ width })}>
        <button
          onClick={onClose}
          className="group absolute left-[calc(100%+12px)] rounded-full bg-white p-1 transition-colors hover:bg-white/80"
        >
          <X
            size={24}
            className="text-gray-500 transition-colors group-hover:text-gray-600"
          />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
}

UIModal.Header = function UIModalHeader({ children, className }) {
  return <div className={cn("m-4 pt-4 text-xl", className)}>{children}</div>;
};

UIModal.Body = function UIModalBody({ children, className }) {
  return <div className={cn("m-4", className)}>{children}</div>;
};

UIModal.Footer = function UIModalFooter({ children, className }) {
  return (
    <div className={cn("m-4 mt-auto flex justify-end gap-4", className)}>
      {children}
    </div>
  );
};
