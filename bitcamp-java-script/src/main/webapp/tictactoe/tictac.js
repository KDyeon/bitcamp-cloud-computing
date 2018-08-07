var gamer ='X';
var comp = 'O';
var cells = $('.cell');
	

$('.cell').click((e) => {
	console.log($(e.target).attr('data-pos'));
	$(e.target).text(gamer);
	//타이머 가동하여 1sec후 컴퓨터가 표시되게 함.
	setTimeout(() => {
		console.log('com');
		var no = Math.floor(Math.random() * 9);
		console.log(no, $.(`.cell:nth-child()`).text());
		
	},1000);
	
});

$('#new-game').click((e) => {
	console.log('NEW GAME!!!');
});

