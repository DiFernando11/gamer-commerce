const { Game } = require('../../db')

const createId = async () => {
    const ids = await Game.findAll({
        attributes: ['id']
    })
	const numbers = ids.map( e => e.id).sort(function(a, b) {
		return b - a;
	  })
	  const id = numbers[0] + 1
      return id
}

module.exports = { createId }