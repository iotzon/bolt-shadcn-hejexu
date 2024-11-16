import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';

function App() {
  const [selectedItem, setSelectedItem] = useState('qr-scan');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
        />
        <MainContent selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default App;