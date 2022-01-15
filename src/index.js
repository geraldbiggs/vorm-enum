export default {
  install(components) {
    components.Model.enum = function (name, list = []) {
      Object.defineProperty(this.prototype, [name + "_label"], {
        get: function () {
          let entry = list.find((x) => x.value === this[name]);
          return (entry && entry.label) || null;
        },
        configurable: true,
      });

      return this.attr(null);
    };
  },
};
