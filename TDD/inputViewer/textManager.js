class TextManager {
    constructor() {
        this.value = { data: "Hello Lions!" };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value.data = newValue;
    }
}