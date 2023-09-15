const express = require('express')
const cors = require('cors');
const axios = require('axios')

const app = express()
const port = 4000

app.use(cors());

app.get("/fetchGallery", async (req, res) => {
	try {
		const response = await axios({
			url: req.query.url,
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

app.listen(port, () => {
    console.log(`Api listening on port ${port}`)
})