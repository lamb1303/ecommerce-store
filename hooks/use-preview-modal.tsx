import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalStoreProps {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}
const UsePreviewModal = create<PreviewModalStoreProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default UsePreviewModal;
