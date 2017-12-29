export default class Persistence {
    getItem(key) {
        let val = localStorage.getItem(key);
        if (val) {
            val = JSON.parse(val);
        }
        return val;
    }

    setItem(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }

}