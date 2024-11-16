import { Home, Users, FileText, Settings, ChevronRight, QrCode } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const menuItems = [
  { id: 'qr-scan', label: 'Skannaa QR-koodi', icon: QrCode },
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'users', label: 'Käyttäjät', icon: Users },
  { id: 'documents', label: 'Dokumentit', icon: FileText },
  { id: 'settings', label: 'Asetukset', icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  selectedItem: string;
  onSelectItem: (id: string) => void;
}

export function Sidebar({ isOpen, selectedItem, onSelectItem }: SidebarProps) {
  return (
    <aside
      className={cn(
        "border-r bg-muted/40 transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-1 p-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={selectedItem === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  !isOpen && "justify-center px-2"
                )}
                onClick={() => onSelectItem(item.id)}
              >
                <Icon className="h-4 w-4" />
                {isOpen && (
                  <>
                    <span className="ml-2">{item.label}</span>
                    <ChevronRight className={cn(
                      "ml-auto h-4 w-4 transition-transform",
                      selectedItem === item.id && "rotate-90"
                    )} />
                  </>
                )}
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </aside>
  );
}