import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';  // Импортируем библиотеку Leaflet для работы с картой

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html', // Шаблон компонента
  styleUrls: ['./map.component.scss']  // Стили компонента
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;  // Переменная для хранения карты

  // Массив друзей с координатами
  friends = [
    { name: 'Иван', lat: 55.751244, lng: 37.618423 },
    { name: 'Анна', lat: 55.760244, lng: 37.625423 }
  ];

  // Массив событий с координатами и описанием
  events = [
    { title: 'Концерт', lat: 55.761244, lng: 37.620423, description: 'Концерт в парке' }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Инициализация карты после того, как компонент загружен
  ngAfterViewInit(): void {
    this.initMap();
  }

  // Метод для инициализации карты Leaflet
  private initMap(): void {
    // Создаем карту с центром в Москве и масштабом 12
    this.map = L.map('map', {
      center: [55.751244, 37.618423],
      zoom: 12
    });

    // Добавляем слой с картой OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Добавляем маркеры для друзей
    this.friends.forEach(friend => {
      const marker = L.marker([friend.lat, friend.lng]).addTo(this.map);  // Создаем маркер для каждого друга
      marker.bindPopup(`<b>${friend.name}</b>`);  // Всплывающее окно с именем друга
    });

    // Добавляем маркеры для событий
    this.events.forEach(event => {
      const marker = L.marker([event.lat, event.lng], {
        icon: L.icon({
          iconUrl: 'https://example.com/event-icon.png',  // Иконка события
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })
      }).addTo(this.map);  // Создаем маркер для каждого события
      marker.bindPopup(`<b>${event.title}</b><br>${event.description}`);  // Всплывающее окно с названием и описанием события
    });
  }
}
