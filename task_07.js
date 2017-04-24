var table_th = document.getElementsByTagName('th');
var table_tr = document.getElementsByTagName('tr');
var table_td = document.getElementsByTagName('td');
var tbody = document.getElementsByTagName('tbody')[0];
function sortScore(i){	
	table_th[i].onclick = function(){
		var score_arr = [];//存当前选择科目的成绩
		var temp_arr = [];//存个人各科成绩的数组
		for (var j = 0; j < table_tr.length - 1; j++) {
			score_arr[j] = table_td[i+j*5].innerHTML;
			temp_arr.push(table_tr[j+1].cloneNode(true));
		}
		for(var j = 0;j < temp_arr.length ; j++){//移除原有序列
			tbody.removeChild(tbody.getElementsByTagName('tr')[0]);
		}
		console.log(temp_arr[0].innerHTML);
		score_arr.sort(function(a,b){return a-b});
		for (var j = 0; j < score_arr.length; j++) {
			for(var k = 0;k< temp_arr.length; k++){
				if(score_arr[j]==temp_arr[k].children[i].innerHTML){//使当前选择科目与原个人成绩对应
					tbody.appendChild(temp_arr[k]);
					console.log(temp_arr[k].innerHTML);
				}
			}
		}		
	}
}
for (var i = 0; i <= table_tr.length; i++) {
	sortScore(i);
}