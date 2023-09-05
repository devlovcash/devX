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
    mode: "sandbox"
});

let netbanking = cashfree.create('netbanking', {
    values:{
        netbankingBankName: 'ICICR',
        buttonText: 'ICICI Bank',
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


document.getElementById("pay").addEventListener("click", function(){
    console.log("hi")
	let paymentPromise = cashfree.pay({
		paymentMethod: netbanking,
		paymentSessionId: "session_R4g5B84VEw_RuCOix4YSvw1xfy6-R0QzmL3IDrV_i3qmipIVqE7Sthx0kleCrw98Op9lHRhoCaa06c7IMUXeAkmQhyizi0vsq_m2sAXAu3xD",
        returnUrl: "https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}"
	});
	paymentPromise.then(function(result){
		console.log(result);
	})
})