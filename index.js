// const cashfree = Cashfree({
//     mode: "production",
// });

// let cl = cashfree.create('cardlessEMI', {
// 	values:{
// 		provider: 'flexmoney',
// 		phone: '94140905',
// 		buttonText: 'Flexmoney',
// 		buttonIcon: true
// 	}
// });

// component.mount("#mount-here");
// cl.on('ready', function(d){
//     console.log(d.value) 
// })


let cashfree = Cashfree({
    mode:"production"
});

let netbanking = cashfree.create('netbanking', {
    values:{
        netbankingBankName: 'HDFCR',
        buttonText: 'HDFC Bank',
        buttonIcon: true
    }
});
netbanking.on('loaderror', function(data){
    console.log(data.error)
})
netbanking.mount("#netbanking");
netbanking.on('ready', function(d){
    console.log(netbanking.data().value);
})


let var1;
document.getElementById("netbanking").addEventListener("click", function(){
    var1=netbanking;
    console.log(var1)
})

document.getElementById("pay").addEventListener("click", function(){
    console.log("hi")
	let paymentPromise = cashfree.pay({
		paymentMethod: netbanking,
		paymentSessionId: "session_puE-FF-z06FwOckfqUYfeKCdBNvsdBbkqqKXvPeiy3TFgntGNcoINFj9x7QB587QbDp_DjazyWKgUJ3KTafchkiUGDCX68arbcnUqzxg6LtF",
        returnUrl: "https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}"
	});
	paymentPromise.then(function(result){
		console.log(result);
	})
})