System.config({
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "immutable": "npm:immutable@3.6.2",
    "mori": "npm:mori@0.3.2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:mori@0.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

