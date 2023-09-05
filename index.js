let cashfree = Cashfree({
    mode: "sandbox"
});

let cl = cashfree.create('cardlessEMI', {
	values:{
		provider: 'flexmoney',
		phone: '9414090598',
		buttonText: 'Flexmoney',
		buttonIcon: true
	}
});
cl.on('loaderror', function(data){
	console.log(data.error)
})
cl.mount("#mount-here");
cl.on('ready', function(d){
    console.log(d.value) 
})

document.getElementById("pay").addEventListener("click", function(){
    console.log("hi")
	let paymentPromise = cashfree.pay({
		paymentMethod: cl,
		paymentSessionId: "session_mr4-ZGWPhbJG0YWl-0PphxjfrEJsLPgf5zw5pH71Oske3DrY0a7WK0MQw_-9PJYzH_1YeD4vBcoArhwhCDBAc27rASh4HaOJCkJKRP1eazWv",
        returnUrl: "https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}"
	});
	paymentPromise.then(function(result){
		console.log(result);
	})
})