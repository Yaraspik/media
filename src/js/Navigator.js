export default class Navigator {
  static getNavigation() {
    if (!navigator.geolocation) {
      throw new Error('Your browser can`t check location');
    }

    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          res(data.coords);
        },
        (err) => {
          rej(err);
        },
        { enableHighAccuracy: true },
      );
    });
  }
}
