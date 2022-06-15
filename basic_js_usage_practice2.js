variants = [
	{c:123, s:'S', stock: 1},
	{c:123, s:'M', stock: 2},
	{c:123, s:'L', stock: 3},
	{c:234, s:'L', stock: 3},
]


function parseVariant1(variants) {
	

}
/*
{
	123: [{s:'S', stock:1}, {s:'M', stock:2}, {'L', stock:3}],
	234: [{s:'L', stock:3}]
}
*/

function parseVariant2(variants) {


}
/*
{
	123: {
		'S': 1,
		'M': 2,
		'L': 3
	},
	234: {
		L: 3
	}
}
*/



