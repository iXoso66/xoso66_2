
var urlList = ['xoso6600.com','xoso6611.com', 'xoso6622.com', 'xoso6633.com',
	'xoso6644.com',
	'xoso6655.com' 
];

function urlli() {
	for (i = 0; i <= 5; i++) {
		$('.ulList li').eq(i).find('a').attr("href", 'https://www.'+urlList[i]);
		// $('.ulList li').eq(i).find('span.url').html(urlList[i]);
		$('.ulList li').eq(i).find('a.url').find('span').html(urlList[i]);
	}
}
urlli()
setTimeout(function() {
	$('#lineMs0').html(Math.ceil(Math.random() * 50) + 'ms')
}, 300)
setTimeout(function() {
	$('#lineMs1').html(Math.ceil(Math.random() * 60) + 'ms')
}, 400)
setTimeout(function() {
	$('#lineMs2').html(Math.ceil(Math.random() * 50) + 'ms')
}, 200)
setTimeout(function() {
	$('#lineMs3').html(Math.ceil(Math.random() * 100) + 'ms')
}, 400)
setTimeout(function() {
	$('#lineMs4').html(Math.ceil(Math.random() * 80) + 'ms')
}, 500)
setTimeout(function() {
	$('#lineMs5').html(Math.ceil(Math.random() * 70) + 'ms')
}, 600)

