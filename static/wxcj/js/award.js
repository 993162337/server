/* 填写中奖信息表单 */
$(function(){
var form  = {
	// 表单验证
	formValid: function() {
		if (!$("[name='name']").val()) {
			alert("请输入联系人姓名！");
			return false;
		}
		if (!$("[name='mobile']").val()) {
			alert("请输入联系人手机号！");
			return false;
		}
	},

	formSubmit: function(){
		if (!this.formValid()) return;
		$("form").submit();
	}

}

form.init = function(){
	$('#submitBtn').on("click", function(e){
		e.preventDefault();
		this.formSubmit();
		// $.post('/index.php/wxcj/aa', function(res){
		// 	console.log(res);
		// });
		// $.post('/index.php/wxcj/bb', {title:123,text:456}, function(res){
		// 	console.log(res);
		// });
	});
}();
});