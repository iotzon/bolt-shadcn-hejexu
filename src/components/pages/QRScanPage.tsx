import { useState, useEffect, useRef } from 'react';
import { QrCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Html5QrcodeScanner } from 'html5-qrcode';

export function QRScanPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (isScanning && !scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "qr-reader",
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        false
      );

      scannerRef.current.render(
        (decodedText) => {
          setScannedData(decodedText);
          setIsScanning(false);
          scannerRef.current?.clear();
          scannerRef.current = null;
        },
        (error) => {
          console.error(error);
        }
      );
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
        scannerRef.current = null;
      }
    };
  }, [isScanning]);

  const handleScanClick = () => {
    if (isScanning) {
      scannerRef.current?.clear();
      scannerRef.current = null;
    }
    setIsScanning(!isScanning);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <Button 
        size="lg" 
        className="rounded-full w-32 h-32 flex flex-col gap-2"
        variant="outline"
        onClick={handleScanClick}
      >
        <QrCode className="h-8 w-8" />
        <span>{isScanning ? 'Pysäytä' : 'Skannaa QR'}</span>
      </Button>

      {isScanning && (
        <div className="w-full max-w-md">
          <div id="qr-reader" className="w-full"></div>
        </div>
      )}

      {scannedData && !isScanning && (
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Skannattu koodi:</h3>
          <p className="text-muted-foreground break-all">{scannedData}</p>
        </div>
      )}
    </div>
  );
}