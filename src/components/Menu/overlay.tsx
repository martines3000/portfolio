import { useNavStore } from '@/stores/navStore';

export function SidebarOverlay() {
  const { isOpen, setIsOpen } = useNavStore();

  return (
    <div
      className={`fixed inset-0 z-20 bg-black/75 transition duration-200 ease-in-out dark:bg-black/75 ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      onClick={() => setIsOpen(false)}
    />
  );
}
