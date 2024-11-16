import { menuItems } from './Sidebar';
import { QRScanPage } from '@/components/pages/QRScanPage';

interface MainContentProps {
  selectedItem: string;
}

export function MainContent({ selectedItem }: MainContentProps) {
  // Jos valittu sivu on QR-skannaus, näytetään sen komponentti
  if (selectedItem === 'qr-scan') {
    return (
      <main className="flex-1 p-6">
        <div className="rounded-lg border bg-card p-6 h-[calc(100vh-7rem)]">
          <h2 className="text-2xl font-semibold mb-4">
            {menuItems.find(item => item.id === selectedItem)?.label}
          </h2>
          <QRScanPage />
        </div>
      </main>
    );
  }

  // Muille sivuille näytetään oletussisältö
  return (
    <main className="flex-1 p-6">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-2xl font-semibold mb-4">
          {menuItems.find(item => item.id === selectedItem)?.label}
        </h2>
        <p className="text-muted-foreground">
          Valittu sisältöalue: {selectedItem}
        </p>
      </div>
    </main>
  );
}