"use client";

import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';

type MapProps = {
  address: string;
}

export default function Map({ address }: MapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // Hardcoded coordinates for "Rua Ary Rolim Costa, 719 – Fazendinha Curitiba/PR"
  const position = { lat: -25.4939, lng: -49.3245 }; 

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center text-center p-4">
        <p className="text-muted-foreground">
          Mapa não disponível.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <GoogleMap
        style={{ width: '100%', height: '100%' }}
        defaultCenter={position}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId="glc-map"
      >
        <AdvancedMarker position={position} title="GLC Mecânica" />
      </GoogleMap>
    </APIProvider>
  );
}
