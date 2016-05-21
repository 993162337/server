/* 微笑摇奖 */

var index = {
	/*注册H5摇动事件*/
	addDevicemotion: function(){
		var self = this;
		if (window.DeviceMotionEvent) {
			window.addEventListener('devicemotion', self.deviceMotionHandler, false);
		} else {
			alert('亲，您的手机老掉牙了，换个手机试试吧！');
		}
	},

	/*摇一摇*/
	yyy: function(eventData){
		var self = this;

		var SHAKE_THRESHOLD = 3000;
		var last_update = 0;
		var x = y = z = last_x = last_y = last_z = 0;

		self.deviceMotionHandler = function(eventData) {
			var acceleration = eventData.accelerationIncludingGravity;
			var curTime = new Date().getTime();
			if ((curTime - last_update) > 50) {
				var diffTime = curTime - last_update;
				last_update = curTime;
				x = acceleration.x;
				y = acceleration.y;
				z = acceleration.z;
				var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
				if (speed > SHAKE_THRESHOLD) {
					$(".modal").show().addClass('active');
					document.getElementById('audioBtn').play();
					setTimeout(function(){
						location.href='/index.php/wxcj/open';
					}, 1000);
				}
				last_x = x;
				last_y = y;
				last_z = z;
			}
		}
	}

}

$("body")[0].onload = function(){
	index.yyy();
	index.addDevicemotion();
}