// [IMPORT] //
const validator = require('validator')

// [IMPORT] Personal //
const products = require('../s-default/products')


// [READ-ALL] Sort //
const c_getProduct = async (product_id) => {
	try {
		// [VALIDATE] product_id //
		if (!validator.isAscii(product_id)) {
			return {
				executed: true,
				status: false,
				location: 'productsCollection',
				message: 'Invalid product_id',
			}
		}

		// [INIT] //
		let product = null

		// [GET-PRODUCT] //
		products.services.permanentMakeup.forEach(p => {
			if (product_id == p.id) {
				product = p
				return
			}
		})

		if (product == null) {
			products.services.bestSellers.forEach(bestSeller => {
				bestSeller.types.forEach(p => {
					if (product_id == p.id) {
						product = p
						return
					}
				})
			})
		}

		if (product == null) {
			products.services.spa.forEach(p => {
				if (product_id == p.id) {
					product = p
					return
				}
			})
		}

		return {
			executed: true,
			status: true,
			product: product,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			location: 'productsCollection',
			message: `Error --> ${err}`,
		}
	}
}

module.exports = {
	c_getProduct
}