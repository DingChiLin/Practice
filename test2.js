let obj = null

module.exports = {
	init: () => {
		obj = {"a": 1}
  },
  get: () => {
    return obj;
  }
}

