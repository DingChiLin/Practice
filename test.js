let data = []

// smarter way?
for (let i = 0; i < datesArr.length; i++) {
	data.push({date: null, details: []})
}

for (let i = 0; i < dates.length; i++) {
	let idx = datesArr.findIndex(...)
	data[idx].date = dates[i]
	data[idx].details.push({
		splitId: splitIds[i]
		detail: details[i]
	})
}



