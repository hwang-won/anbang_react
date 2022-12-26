import { NaverMap, RenderAfterNavermapsLoaded, Marker } from "react-naver-maps";

const NaverMapAPI = () => {
    const navermaps = window.naver.maps;

    return (
        <NaverMap
            mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
            style={{
                width: "100%", // 네이버지도 가로 길이
                height: "100vh", // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 36.54369042327482, lng: 128.7924836162134 }} // 지도 초기 위치
            defaultZoom={17} // 지도 초기 확대 배율
        >
            <Marker
                key={1}
                position={new navermaps.LatLng(36.5436, 128.7924)}
                animation={2}
                onClick={() => {
                    alert("뭘");
                }}
            />

            <Marker
                key={2}
                position={
                    new navermaps.LatLng(36.545148325900975, 128.79394521640884)
                }
                animation={2}
                onClick={() => {
                    alert("뭘봐");
                }}
            />
        </NaverMap>
    );
};

const Map = () => {
    return (
        <RenderAfterNavermapsLoaded // Render후 Navermap로드
            ncpClientId={"wzs47md753"} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
            <NaverMapAPI />
        </RenderAfterNavermapsLoaded>
    );
};

export default Map;
