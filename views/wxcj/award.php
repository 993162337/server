<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?=$title?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="stylesheet" href="/static/wxcj/css/animate.min.css">
	<link rel="stylesheet" href="/static/wxcj/css/style.css">
	<link rel="stylesheet" href="/static/wxcj/css/award.css">
</head>
<body>
	<!-- header -->
	<header>
		<img src="/static/wxcj/i/bg_awardTop.png" alt="">
	</header>

<!-- contain -->
<section class="contain">
	<div class="formBox">
		<h1 class="animated tada">恭喜你中奖！</br>奖品为<?=$award;?></h1>
		<p class="animated fadeIn">请正确填写手机号码，活动结束后十个工作日内为您本次填写的手机号码充值，请耐心等待！</p>
		<form action="" class="animated  fadeIn">
			<p class="cf">
				<label for="">联系人姓名</label>
				<input class="fr" type="text" name="name">
			</p>
			<p class="cf">
				<label for="">联系人手机</label>
				<input class="fr" type="text" name="mobile">
			</p>
			<?php if($isAddress) {?>
			<p class="cf">
				<label for="">联系人地址</label>
				<input class="fr" type="text" name="address">
			</p>
			<?php };?>
			<p><input id="submitBtn" type="submit" value="提交"></p>
		</form>
	</div>
</section>
	
<?php require_once('tpl/footer.php');?>

<script src="/static/wxcj/js/award.js"></script>