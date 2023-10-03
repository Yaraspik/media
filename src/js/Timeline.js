import VisualConstructor from './VisualConstructor';
import Navigator from './Navigator';
import Validator from './Validator';

export default class Timeline {
  constructor(container) {
    this.container = container;
    this.controls = this.container.querySelector('.controls');
    this.timelineForm = this.container.querySelector('.text-input__form');

    this.popup = document.querySelector('.coords-popup');
    this.popupForm = this.popup.querySelector('.coords-form');
  }

  init() {
    this.timelineForm.addEventListener('submit', (e) => this.addCardToTimeline(e));
  }

  async addCardToTimeline(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get('content').trim();

    try {
      const coords = await Navigator.getNavigation();
      this.latitude = coords.latitude;
      this.longitude = coords.longitude;
    } catch (err) {
      if (err.code === 1) {
        this.popup.showModal();
        await this.responseUserCoords();
        this.popup.close();
      }
    }

    const newCard = VisualConstructor.createCard(text);
    newCard.geo.textContent = `${this.latitude}, ${this.longitude}`;
    this.container.prepend(newCard.container);
    e.target.reset();
  }

  getUserCoords(e, res) {
    e.preventDefault();

    const valid = Validator.formValidate(e.target);
    if (!valid) return;

    const formData = new FormData(e.target);
    this.latitude = formData.get('latitude');
    this.longitude = formData.get('longitude');

    this.popupForm.removeEventListener('submit', this.getUserCoords);
    res();
  }

  async responseUserCoords() {
    return new Promise((res) => {
      this.popupForm.addEventListener('submit', (e) => this.getUserCoords(e, res));
    });
  }
}
