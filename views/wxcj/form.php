<?php require_once('tpl/header.php');?>
<link rel="stylesheet" href="/static/wxcj/css/form.css">

<!-- contain -->
<section class="contain">
	<div class="formBox">
		<h1>恭喜你中奖！</br>奖品为<?=$award;?></h1>
		<p>请正确填写手机号码，活动结束后十个工作日内为您本次填写的手机号码充值，请耐心等待！</p>
		<form action="">
			<p class="cf">
				<label for="">联系人姓名</label>
				<input class="fr" type="text" name="name">
			</p>
			<p class="cf">
				<label for="">联系人手机</label>
				<input class="fr" type="text" name="mobile">
			</p>
			<p><input id="submitBtn" type="submit" value="提交"></p>
		</form>
	</div>
</section>
	
<?php require_once('tpl/footer.php');?>

<script src="/static/wxcj/js/form.js"></script>
