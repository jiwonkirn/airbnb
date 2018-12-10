import React, { Component } from 'react';
import loadjs from 'loadjs';
import style from './DaumMap.module.scss';
import './DaumMap.scss';

export default class DaumMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.list !== this.props.list) {
      await loadjs(
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=da639cf155de5cfa487552ed41060ff3&autoload=false&libraries=services,clusterer,drawing',
        this.makeMap
      );
    }
  };

  makeMap = () => {
    const { daum } = window;
    const { list } = this.props;
    const lat =
      list.reduce((acc, item) => acc + parseFloat(item.lat), 0) / list.length;
    const lng =
      list.reduce((acc, item) => acc + parseFloat(item.lng), 0) / list.length;
    daum.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new daum.maps.LatLng(lat, lng),
        level: 5,
      };
      const map = new daum.maps.Map(container, options);
      for (const item of list) {
        const iwPosition = new daum.maps.LatLng(item.lat, item.lng); //인포윈도우 표시 위치입니다
        const infoWindow = new daum.maps.CustomOverlay({
          map: map,
          clickable: true,
          content: `<div class="infoMarker"}><span>₩${item.price}</span></div>`,
          position: iwPosition,
          xAnchor: 0.5,
          yAnchor: 1,
          zIndex: 3,
        });
      }
    });
  };

  render() {
    console.log('render');
    return <section id="map" className={style.map} />;
  }
}
