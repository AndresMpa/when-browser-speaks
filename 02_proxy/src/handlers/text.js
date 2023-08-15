const textHandler = {
  set(obj, prop, value) {
    const stringValue = value.split(" ");
    const keys = Object.keys(obj);

    stringValue.forEach((element) => {
      if (keys.includes(element)) {
        obj[element]();
      }
    });

    return true;
  },
};

export default textHandler;
