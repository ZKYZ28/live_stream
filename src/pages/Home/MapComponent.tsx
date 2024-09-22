import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import customMarker from '../../../public/surveillance.png';

const customIcon = new L.Icon({
    iconUrl: customMarker,
    iconSize: [30, 30],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

const MapComponent = () => {
    const position = [51.505, -0.09];

    return (
            <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        A pretty popup.<br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

    );
};

export default MapComponent;
