"use client";

import { ReactNode, useState, useEffect, useRef, HTMLAttributes } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../providers/modal-context";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CustomModalProps {
  title?: string;
  subheading?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  contentClass?: HTMLAttributes<HTMLDivElement>["className"];
  id?: string;
  customizedModal?: boolean;
}

export default function CustomModal({
  title,
  subheading,
  children,
  defaultOpen = false,
  contentClass,
  id = "default",
  customizedModal = false,
}: CustomModalProps) {
  const { isOpen, setClose, setOpen, canClose, setCanClose } = useModal();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const contentClassName = clsx("rounded-md bg-card", contentClass);

  // Narrow dependency: only react to isOpen for this specific modal.
  useEffect(() => {
    setLocalOpen(isOpen[id] ?? defaultOpen);
  }, [isOpen[id], id, defaultOpen]);

  // Auto-focus when modal opens.
  useEffect(() => {
    if (localOpen && contentRef.current) {
      contentRef.current.focus();
    }
  }, [localOpen]);

  function handleOpenChange(open: boolean) {
    // Check the specific modal's canClose flag.
    if (!open && canClose[id] === false) {
      setShowConfirmation(true);
    } else {
      setLocalOpen(open);
      if (!open) {
        setTimeout(() => setClose(id), 300);
      } else {
        // IMPORTANT: Ensure you pass a valid modal element when opening.
        setOpen(
          <CustomModal
            id={id}
            title={title}
            subheading={subheading}
            contentClass={contentClass}
            customizedModal={customizedModal}
          >
            {children}
          </CustomModal>,
          undefined,
          id
        );
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      const focusableElements = contentRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          document &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    } else if (event.key === "Escape") {
      handleOpenChange(false);
    }
  }

  // Updated handleConfirmClose to force-close the modal.
  function handleConfirmClose() {
    setShowConfirmation(false);
    // Force the modal to be closable by updating canClose.
    setCanClose(id, true);
    setLocalOpen(false);
    setTimeout(() => setClose(id), 300);
  }

  return (
    <>
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to close?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will close the current modal. Any unsaved changes may
              be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowConfirmation(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmClose}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {customizedModal ? (
        <AnimatePresence>
          {localOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "anticipate" }}
              className="fixed h-full sm:inset-0 bottom-0 left-0 right-0 z-50 flex bg-black/50 items-end sm:items-center justify-center backdrop-blur-xl bg-opacity-50"
              onClick={() => handleOpenChange(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 200 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 200 }}
                transition={{ duration: 0.3, ease: "anticipate" }}
                className={clsx(
                  "relative outline-none rounded-xl",
                  contentClassName
                )}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleKeyDown}
                ref={contentRef}
                tabIndex={-1}
              >
                {/* <button
                  className="absolute top-2 right-2 p-1 rounded-full transition-colors"
                  onClick={() => handleOpenChange(false)}
                >
                  <X className="h-4 w-4" />
                </button> */}
                {title && (
                  <div className="p-4 -mb-4 w-full font-semibold text-lg tracking-wider text-center rounded-t-full">
                    Add Membership Plan
                  </div>
                )}
                {subheading && (
                  <p className="text-muted-foreground mb-4 mt-2">
                    {subheading}
                  </p>
                )}
                <div className="pt-[0.5em] flex flex-col flex-grow">
                  <X
                    onClick={() => {
                      handleOpenChange(false);
                      console.log("x icon clicked");
                    }}
                    className=" absolute -top-3 sm:-right-3 right-0 z-50 cursor-pointer bg-red-600 text-white p-1 rounded-full"
                  />
                  <ScrollArea className="h-[77vh] sm:h-[60vh] border-neutral-200 dark:border-neutral-900 border-t-2 p-4 w-screen sm:max-w-[30rem] scroll-smooth">
                    {children}
                  </ScrollArea>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <Dialog open={localOpen} onOpenChange={handleOpenChange}>
          <DialogContent className={contentClassName}>
            <DialogHeader className="py-2 text-left">
              <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
              {subheading && (
                <DialogDescription>{subheading}</DialogDescription>
              )}
              <div className="pt-[0.5em] flex flex-col flex-grow">
                {children}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
