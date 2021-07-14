const { default: axios } = require('axios')
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.get('/api/states', async (req, res) => {
	try {
		const response = await axios.get(
			'https://disease.sh/v3/covid-19/states',
		)
		const newData = response.data.map((state) => ({
			name: state.state,
			positiveCases: state.cases,
			totalTestResults: state.tests,
			notes: {
				casesPerOneMillion: state.casesPerOneMillion,
				testsPerOneMillion: state.testsPerOneMillion,
			},
		}))
		return res.json(newData)
	} catch (e) {
		return res.json({ error: e })
	}
})

app.get('/api/country', async (req, res) => {
	try {
		const response = await axios.get(
			'https://disease.sh/v3/covid-19/countries/usa',
		)
		return res.json(response.data)
	} catch (e) {
		return res.json({ error: e })
	}
})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
