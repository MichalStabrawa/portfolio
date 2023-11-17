export default class AddClass {
  constructor(element, value) {
    this.element = element;
    this.value = value;
  }
  addNewClass() {
    this.element.classList.add(this.value);
  }
  removeClass() {
    this.element.classList.remove(this.value);
  }
  checkClass() {
    if (this.element.classList.contains(this.value)) {
      this.removeClass();
    } else {
      this.addNewClass();
    }
  }
}
