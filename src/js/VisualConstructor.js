export default class VisualConstructor {
  static createDate() {
    const date = new Date();

    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateDay = date.getDate();
    let dateMonth = date.getMonth() + 1;

    dateHours = (dateHours < 10) ? `0${dateHours}` : dateHours;
    dateMinutes = (dateMinutes < 10) ? `0${dateMinutes}` : dateMinutes;
    dateDay = (dateDay < 10) ? `0${dateDay}` : dateDay;
    dateMonth = (dateMonth < 10) ? `0${dateMonth}` : dateMonth;

    return `${dateHours}:${dateMinutes} ${dateDay}.${dateMonth}.${date.getFullYear()}`;
  }

  static createCard(item) {
    const container = document.createElement('div');
    container.classList.add('container', 'right');

    const content = document.createElement('div');
    content.classList.add('content');

    const title = document.createElement('p');
    title.textContent = `${item}`;

    const geo = document.createElement('p');

    const date = VisualConstructor.createDate();

    const dateEl = document.createElement('div');
    dateEl.classList.add('date');
    dateEl.textContent = date;

    content.append(dateEl, title, geo);
    container.append(content);
    return { container, geo };
  }
}
