

'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet icon issue in Next.js (type-safe)
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

// Initial default position (London)
const defaultPosition: [number, number] = [51.505, -0.09];

const formSchema = z.object({
  location: z.string().min(1, { message: 'Location is required' }),
});

// Component to update map view programmatically
function ChangeMapView({ coords }: { coords: [number, number] }) {
  const map = useMap();
  map.setView(coords, 13, { animate: true });
  return null;
}

export default function Map(): JSX.Element {
  const [position, setPosition] = useState<[number, number]>(defaultPosition);
  console.log("position :", position, location);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { location: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("loc",values)
    const query = encodeURIComponent(values.location);
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setPosition([lat, lon]);
      } else {
        alert('Location not found');
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      alert('Failed to fetch location');
    }
  }

  return (
    <div>
      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
          key={`${position[0]}-${position[1]}`} // force remount on position change for MapContainer center update
        >
          <ChangeMapView coords={position} />
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Location: {position[0].toFixed(4)}, {position[1].toFixed(4)}</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div style={{ marginTop: '10px' }}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter location name or address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Search</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}








// 'use client';

// import React, { useState } from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';

// // 🔧 Fix Leaflet icon issue in Next.js
// delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
// });

// // 📍 Default map position (London)
// const defaultPosition: [number, number] = [51.505, -0.09];

// // 🧾 Form schema using Zod
// const formSchema = z.object({
//   location: z.string().min(1, { message: 'Location is required' }),
// });

// // 🗺️ Component to programmatically change map view
// function ChangeMapView({ coords }: { coords: [number, number] }) {
//   const map = useMap();
//   map.setView(coords, 13, { animate: true });
//   return null;
// }

// // 🌍 Main Map Component
// export default function Map(): JSX.Element {
//   const [position, setPosition] = useState<[number, number]>(defaultPosition);
//   const [locationName, setLocationName] = useState<string>('');

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: { location: '' },
//   });

//   // 🔍 Location search handler
//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values)
//     const query = encodeURIComponent(values.location);
//     const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       if (data && data.length > 0) {
//         const lat = parseFloat(data[0].lat);
//         const lon = parseFloat(data[0].lon);
//         const name = data[0].display_name;

//         setPosition([lat, lon]);
//         setLocationName(name);

//         // ✅ Console log the result
//         console.log('Search result:', data[0]);
//         console.log('Found location name:', name);
//       } else {
//         alert('Location not found');
//       }
//     } catch (error) {
//       console.error('Geocoding error:', error);
//       alert('Failed to fetch location');
//     }
//   }

//   return (
//     <div>
//       {/* 🗺️ Map Section */}
//       <div style={{ height: '400px', width: '100%' }}>
//         <MapContainer
//           center={position}
//           zoom={13}
//           scrollWheelZoom={true}
//           style={{ height: '100%', width: '100%' }}
//           key={`${position[0]}-${position[1]}`} // force remount
//         >
//           <ChangeMapView coords={position} />
//           <TileLayer
//             attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={position}>
//             <Popup>
//               📍 {locationName || 'Location'}<br />
//               🧭 Lat: {position[0].toFixed(4)}, Lon: {position[1].toFixed(4)}
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>

//       {/* 🔎 Search Input */}
//       <div style={{ marginTop: '10px' }}>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
//             <FormField
//               control={form.control}
//               name="location"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter location name or address"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit">Search</Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }





