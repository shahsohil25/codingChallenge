//Random javascript practice: Summarize amount by type and frequency within type and giving its grand total.

var data = [
	{"product":"ESPN", "type":"subscription", "frequency":"monthly", "amount":"15"},
	{"product":"ESPN", "type":"contract", "frequency":"perpetual", "amount":"15"},
	{"product":"SportsIllustrated", "type":"subscription", "frequency":"monthly", "amount":"10"},
	{"product":"GolfDigest", "type":"subscription", "frequency":"yearly", "amount":"30"},
	{"product":"AlarmSystem", "type":"contract", "frequency":"monthly", "amount":"14"},
	{"product":"EquipmentFee", "type":"fee", "frequency":"onetime", "amount":"10"},
	{"product":"Installation", "type":"fee", "frequency":"onetime", "amount":"25"},
	{"product":"Installation", "type":"fee", "frequency":"annual", "amount":"25"}
];


function arrayFromObject(obj) {
    var arr = [];
    for (var i in obj) {
        arr.push(obj[i]);
    }
    return arr;
}

function groupByBasedOnTypeAndFrequency(list, fn) {
    var groups = {};
    for (var i = 0; i < list.length; i++) {
    	var group = JSON.stringify([list[i].type, list[i].frequency]);
    	if (group in groups) {
            groups[group].push(list[i]);
        } else {
            groups[group] = [list[i]];
        }
    }
//    	console.log('groups', gr);
    return arrayFromObject(groups);
}

var result = groupByBasedOnTypeAndFrequency(data);

function returnToalSum(arr) {
	let amount = 0;
	arr.forEach((item, index) => {
		amount += parseInt(arr[index].amount);
	});
	return amount;
}

var finalResult = [];
result.forEach((item, index) => {
	finalResult.push({
		type: item[0].type,
		frequency: item[0].frequency,
		amount: returnToalSum(item)
	});
});

console.log('Final Result::', finalResult);