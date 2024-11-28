
const profile = {
  username: "Jacob",
  playTime: 300,

  // Метод для зміни імені профілю
  changeUsername(newName) {
    this.username = newName; // змінюємо ім'я користувача
  },

  // Метод для оновлення кількості годин у грі
  updatePlayTime(hours) {
    this.playTime += hours; // додаємо нові години до існуючих
  },

  // Метод для отримання інформації про профіль
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`; // повертаємо рядок з інформацією
  }
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"