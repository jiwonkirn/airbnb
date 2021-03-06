import React, { Component } from 'react';
import loadjs from 'loadjs';
import { withUser } from '../contexts/UserContext';
import style from './DaumMap1.module.scss';
import './DaumMap.scss';

class DaumMap extends Component {
  async componentDidMount() {
    await loadjs(
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=da639cf155de5cfa487552ed41060ff3&autoload=false&libraries=services,clusterer,drawing',
      this.makeMap
    );
  }

  makeMap = () => {
    const { daum } = window;
    const { device } = this.props;
    const lat = this.props.lat;
    const lng = this.props.lng;
    daum.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new daum.maps.LatLng(lat, lng),
        level: 5,
      };
      const map = new daum.maps.Map(container, options);
      const iwPosition = new daum.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다
      const infoWindow = new daum.maps.CustomOverlay({
        map: map,
        clickable: true,
        content: `<div class="infoMarker"}><span>${
          device === 'desktop' ? this.props.room_name : 'Here!'
        }</span></div>`,
        position: iwPosition,
        xAnchor: 0.5,
        yAnchor: 1,
        zIndex: 3,
      });
    });
  };

  render() {
    return <section id="map" className={style.map} />;
  }
}

export default withUser(DaumMap);
