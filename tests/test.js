const bloxy = require("../");
const prompts = require("prompts");

/**
 * @type {Client}
 */
const client = new bloxy.Client({
	setup: {
		debugging: false
	},
	callbacks: {
		onCaptcha: async function onCaptcha (client, info) {
			return "ok"
		}
	}
});

(async () => {
	
})();
