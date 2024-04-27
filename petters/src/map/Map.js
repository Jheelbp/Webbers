import "./map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon for regular markers
const customIcon = new Icon({
  iconUrl: require("./dog.png"),
  iconSize: [38, 38] // size of the icon
});

// create custom icon for restaurant markers
const restaurantIcon = new Icon({
  iconUrl: require("./cafe.jpg"), // path to the restaurant icon
  iconSize: [38, 38] // size of the icon
});

// create custom icon for hospital markers
const hospitalIcon = new Icon({
  iconUrl: require("./hospital.jpg"), // path to the hospital icon
  iconSize: [38, 38] // size of the icon
});

// create custom icon for park markers
const parkIcon = new Icon({
  iconUrl: require("./park.jpg"), // path to the park icon
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: <span class="cluster-icon">${cluster.getChildCount()}</span>,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const markers = [
  {
    geocode: [19.1249, 72.8361],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [19.1075, 72.8263],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [19.0968, 72.8517],
    popUp: "Hello, I am pop up 3"
  },
  {
    geocode: [19.1439, 72.8428],
    popUp: "Hello, I am pop up 4"
  }
];

// restaurants
const restaurants = [
  {
    geocode: [19.155001, 72.849998],
    name: "Oh-My-God DOG",
    link: "https://www.google.co.in/maps/dir/19.1231768,72.8360387/Ohh+My+Dog+Pefe,+Pratisthan+Bunglow,Yamuna+Nagar,+Back+Road,+opp.+Fairy+Land+School,+beside+RNA+Eclat,+Lokhandwala+Complex,+Andheri+West,+Mumbai,+Maharashtra+400053/@19.1364162,72.8204488,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3be7b6162fbe49e9:0x2cce7c5b40edffce!2m2!1d72.8270208!2d19.1497092?hl=en&entry=ttu",
    popUp: "Oh-My-God DOG",
  },
  {
    geocode: [19.1175, 72.8223],
    name: "New Cafe Gulshan",
    link: "https://www.google.com/maps?s=web&sca_esv=f116dc5384b4bd87&vet=12ahUKEwiZmsGUhOOFAxXYsVYBHRvqBuoQ5OUKegQIHRAN..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KeH4XQbQyec7MfOF9_H37IQc&daddr=barfi+wala+lane,+Juhu+Ln,+opp.+bmw+navneet+show+room,+Shree+Ram+Nagar,+Andheri+West,+Mumbai,+Maharashtra+400058",
    popUp: "New Cafe Gulshan",
  },
  {
    geocode: [19.1941, 72.8370],
    name: "Barista",
    link: "https://www.google.com/maps?s=web&sca_esv=f116dc5384b4bd87&lqi=ChdhZXN0aGV0aWMgY2FmZXMgbmVhciBtZSIDkAEBSNiBkdPlgICACFojEAAQARgBGAIYAyIXYWVzdGhldGljIGNhZmVzIG5lYXIgbWWSAQtjb2ZmZWVfc2hvcKoBVRABKhMiD2Flc3RoZXRpYyBjYWZlcygAMh8QASIb4EoPN7L0OaKnmDqyI1zT1ie1Muqd0tSkIax6MhsQAiIXYWVzdGhldGljIGNhZmVzIG5lYXIgbWU&phdesc=n7aIp8mjY1c&vet=12ahUKEwimzeSNheOFAxW5gFYBHRPXDrkQ1YkKegQIKBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWd8ad_Tyec7MZih3uSoROqJ&daddr=Shop+no.+2,+Reporters+Bungalow,+120,+Swami+Vivekananda+Rd,+nr.+Shoppers+Stop,+Navpada,+Andheri+West,+Mumbai,+Maharashtra+400058",
    popUp: "Barista",
  }
];

// hospitals
const hospitals = [
  {
    geocode: [19.1225, 72.8350],
    name: "Vet Clinic",
    link: "https://www.google.com/maps?s=web&sca_esv=f116dc5384b4bd87&lsa=HXAIEBABGAEiEwisnpPchOOFAxWTslYBHRNuCFkoAQ&vet=12ahUKEwisnpPchOOFAxWTslYBHRNuCFkQzooKegQIIxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KYnFwJmmyec7MU9KAxshU7yY&daddr=Dadabhai+Cross+Rd+Number+2,+near+Bhavans+College,+Tepgaon,+Andheri+West,+Mumbai,+Maharashtra+400058",
    popUp: "Vet Clinic",
  },
 
  {
    geocode: [19.1998, 72.8432],
    name: "Apex Vet Clinic",
    link: "https://www.google.com/maps?s=web&sca_esv=f116dc5384b4bd87&lqi=CgpwZXQgY2xpbmljSN_Kir-QtoCACFocEAAQARgAGAEiCnBldCBjbGluaWMqBggDEAAQAZIBDHZldGVyaW5hcmlhbpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSUGVVOVVOWFJCUlJBQqoBTAoIL20vMDY4aHkQASoOIgpwZXQgY2xpbmljKAAyHhABIhoen_WA_rKS3x2MnmAhPeKqYDAHBZTjGARCHjIOEAIiCnBldCBjbGluaWM&vet=12ahUKEwimzeSNheOFAxW5gFYBHRPXDrkQ1YkKegQIKBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KfvhQW4vyec7MTr0nMiWN3y2&daddr=Shop+No.+4,+Panchvati+Chs+Ltd.,+Juhu+Lane,+Near+Irla+Masjid,+Andheri,+Mumbai,+Maharashtra+400058",
    popUp: "Apex Vet Clinic",
  },
  {
    geocode: [19.1380, 72.8621],
    name: "Top Dog Vet Clinic",
    link: "https://www.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=Kd3c8PUctuc7MUbzbHLfq_d5&daddr=shah+industrial+estate,+Millenium+Toyota,+Plot+No.23,+Off+Veera+Desai+Rd,+Andheri+West,+Mumbai,+Maharashtra+400053&ved=0CDkQiBNqFwoTCID14K6F44UDFQAAAAAdAAAAABAj",
    popUp: "Top Dog Vet Clinic",
  }
];

// parks
const parks = [
  {
    geocode: [19.1101, 72.8325],
    name: "Joggers Park",
    link: "https://www.google.com/maps/place/Jogger's+Park/@19.0595391,72.8188279,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c96982a43755:0xfc1fb95ad1eb5bcc!8m2!3d19.059534!4d72.8214028!16s%2Fg%2F11yjq8tdv?entry=ttu",
    popUp: "Joggers Park ",
  },
  {
    geocode: [19.1050, 72.8318],
    name: "City Park",
    link: "https://www.google.com/maps/place/City+Park/@19.0558905,72.8516646,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c8df1aee59bd:0x69ee7047751d57e0!8m2!3d19.0558854!4d72.8542395!16s%2Fg%2F1tp2yvxm?entry=ttu",
    popUp: "City Park",
  },
  {
    geocode: [19.1902, 72.8905],
    name: "Central Park ",
    link: "https://www.google.com/maps/place/Central+Park/@19.2571555,72.9773196,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bb92c0448ab5:0x3d252e9d7ef3af31!8m2!3d19.2571505!4d72.9798945!16s%2Fg%2F11c5h020fq?entry=ttu",
    popUp: "Central Park",
  },
  
];

export default function App() {
  return (
    <MapContainer center={[19.1136, 72.8697]} zoom={13}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the restaurants */}
        {restaurants.map((restaurant) => (
          <Marker position={restaurant.geocode} icon={restaurantIcon}>
            <Popup>
              <div>
                <p>{restaurant.popUp}</p>
                <a href={restaurant.link} target="_blank" rel="noopener noreferrer">View location</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the hospitals */}
        {hospitals.map((hospital) => (
          <Marker position={hospital.geocode} icon={hospitalIcon}>
            <Popup>
              <div>
                <p>{hospital.popUp}</p>
                <a href={hospital.link} target="_blank" rel="noopener noreferrer">View location</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the parks */}
        {parks.map((park) => (
          <Marker position={park.geocode} icon={parkIcon}>
            <Popup>
              <div>
                <p>{park.popUp}</p>
                <a href={park.link} target="_blank" rel="noopener noreferrer">View location</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}