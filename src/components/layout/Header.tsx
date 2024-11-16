import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/layout/MainNav";

export function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <MainNav />
      </div>
    </header>
  );
}