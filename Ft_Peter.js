//full size peter (too big)
/*Peter = function(par) {
	
	
	this.head_div = document.createElement("div");
	this.head_img = document.createElement("img");
	this.head_img.setAttribute("src", "peter_head.png");
	this.head_div.appendChild(this.head_img);
	this.head_div.style.position = "absolute";
	//this.head_div.style.width = parseInt(this.peter_div.style.width);
	//this.head_div.style.textAlign = "center";
	this.head_div.style.zIndex = 1;
	
	this.body_div = document.createElement("div");
	this.body_img = document.createElement("img");
	this.body_img.setAttribute("src", "peter_body.png");
	this.body_div.appendChild(this.body_img);
	this.body_div.style.position = "absolute";
	this.body_div.style.zIndex = 2;
	
	this.legs_div = document.createElement("div");
	this.legs_img = document.createElement("img");
	this.legs_img.setAttribute("src", "peter_legs.png");
	this.legs_div.appendChild(this.legs_img);
	this.legs_div.style.position = "absolute";
	this.legs_div.style.zIndex = 0;
	
	this.peter_div = document.createElement("div");
	this.peter_div.style.position = "relative";
	this.peter_div.style.display = "inline-block";
	//this.peter_div.style.height = 600;
	this.peter_div.style.height = -175 + parseInt(this.head_img.height) + parseInt(this.body_img.height) + parseInt(this.legs_img.height);
	this.peter_div.style.width = parseInt(this.body_img.width);
	this.peter_div.style.backgroundColor = "red";
	
	this.peter_div.appendChild(this.head_div);
	this.peter_div.appendChild(this.body_div);
	this.peter_div.appendChild(this.legs_div);
	
	//legs horizontally centered
	this.legs_div.style.left = (parseInt(this.peter_div.style.width) - parseInt(this.legs_img.width)) / 2;
	
	//body horizontally centered
	this.body_div.style.left = (parseInt(this.peter_div.style.width) - parseInt(this.body_img.width)) / 2;
	
	//head horizontally centered
	this.head_div.style.left = (parseInt(this.peter_div.style.width) - parseInt(this.head_img.width)) / 2;
	
	//legs at bottom of peter_div
	this.legs_div.style.top = parseInt(this.peter_div.style.height) - parseInt(this.legs_img.height);
	
	//body set just above the legs
	this.body_div.style.top = parseInt(this.legs_div.style.top) - parseInt(this.body_img.height) + 75;
	
	//head set just above the body
	this.head_div.style.top = parseInt(this.body_div.style.top) - parseInt(this.head_img.height) + 100;
	
	
	par.appendChild(this.peter_div);
	return this;
}*/

Peter = function(par) {
	//by default, img object's width/height attributes are set, NOT their style.~ (which overrides att and css)
	
	// head div/img
	this.head_div = document.createElement("div");
	this.head_img = document.createElement("img");
	this.head_img.setAttribute("src", "peter_head.png");
	this.head_img.style.width = this.head_img.width / 2;
	this.head_img.style.height = this.head_img.height / 2;
	this.head_div.appendChild(this.head_img);
	this.head_div.style.position = "absolute";
	this.head_div.style.zIndex = 1;
	
	// body div/img
	this.body_div = document.createElement("div");
	this.body_img = document.createElement("img");
	this.body_img.setAttribute("src", "peter_body.png");
	this.body_img.style.width = this.body_img.width / 2;
	this.body_img.style.height = this.body_img.height / 2;
	this.body_div.appendChild(this.body_img);
	this.body_div.style.position = "absolute";
	this.body_div.style.zIndex = 2;
	
	// legs div/img
	this.legs_div = document.createElement("div");
	this.legs_img = document.createElement("img");
	this.legs_img.setAttribute("src", "peter_legs.png");
	this.legs_img.style.width = this.legs_img.width / 2;
	this.legs_img.style.height = this.legs_img.height / 2;
	this.legs_div.appendChild(this.legs_img);
	this.legs_div.style.position = "absolute";
	this.legs_div.style.zIndex = 0;
	
	this.legs_div.style.transformOrigin = "center " + parseInt(this.legs_img.style.height) + "px";
	this.legs_div.style.transform = 0;
	
	// peter container div
	this.peter_div = document.createElement("div");
	this.peter_div.style.position = "relative";
	this.peter_div.style.display = "inline-block";
	this.peter_div.style.height = -97 + parseInt(this.head_img.style.height) + parseInt(this.body_img.style.height) + parseInt(this.legs_img.style.height);
	this.peter_div.style.width = parseInt(this.body_img.style.width);
	this.peter_div.style.backgroundColor = "red";
	//this.peter_div.style.top = 25;
	this.peter_div.appendChild(this.head_div);
	this.peter_div.appendChild(this.body_div);
	this.peter_div.appendChild(this.legs_div);
	
	this.changeDivX = function(div, os) { div.style.left = parseInt(div.style.left) + os; }
	this.changeDivY = function(div, os) { div.style.top = parseInt(div.style.top) + os; }
	
	// save the offsets for default nonanimated stance, do not change
	// legs horizontally centered
	this.legs_div_def_left = (parseInt(this.peter_div.style.width) - parseInt(this.legs_img.style.width)) / 2;
	// body horizontally centered
	this.body_div_def_left = (parseInt(this.peter_div.style.width) - parseInt(this.body_img.style.width)) / 2;
	// head horizontally centered
	this.head_div_def_left = 2 + (parseInt(this.peter_div.style.width) - parseInt(this.head_img.style.width)) / 2;
	// legs at bottom of peter_div
	this.legs_div_def_top = parseInt(this.peter_div.style.height) - parseInt(this.legs_img.style.height);
	// body set just above the legs
	this.body_div_def_top = parseInt(this.legs_div_def_top) - parseInt(this.body_img.style.height) + 37;
	// head set just above the body
	this.head_div_def_top = parseInt(this.body_div_def_top) - parseInt(this.head_img.style.height) + 60;
	
	// reset standing (nonanimated) offsets
	this.resetStance = function() {
		//this.legs_div.style.left = (parseInt(this.peter_div.style.width) - parseInt(this.legs_img.style.width)) / 2;
		this.legs_div.style.left = this.legs_div_def_left;
		//this.body_div.style.left = (parseInt(this.peter_div.style.width) - parseInt(this.body_img.style.width)) / 2;
		this.body_div.style.left = this.body_div_def_left;
		//this.head_div.style.left = 2 + (parseInt(this.peter_div.style.width) - parseInt(this.head_img.style.width)) / 2;
		this.head_div.style.left = this.head_div_def_left;
		//this.legs_div.style.top = parseInt(this.peter_div.style.height) - parseInt(this.legs_img.style.height);
		this.legs_div.style.top = this.legs_div_def_top;
		//this.body_div.style.top = parseInt(this.legs_div.style.top) - parseInt(this.body_img.style.height) + 37;
		this.body_div.style.top = this.body_div_def_top;
		//this.head_div.style.top = parseInt(this.body_div.style.top) - parseInt(this.head_img.style.height) + 60;
		this.head_div.style.top = this.head_div_def_top;
	}
	
	// note: animations need to calc/store their own offsets independent of current position
	
	// head animation
	this.head_ani_y_max = 3;		// static; 5
	this.head_ani_y_increment = 1;	// static; 2
	this.head_ani_frame_ms = 75;	// static; 50
	this.head_ani_y_rising;			// dynamic
	this.head_ani_y;				// dynamic
	this.head_ani_inter;			// dynamic
	
	this.headAniFrame = function() {
		// executed repeatedly, starts at 0 offset
		// these values are ONLY for comparing, not assigning
		let rising = this.head_ani_y_rising; 				// y_offset should be negative if true
		let y_offset = this.head_ani_y;						// track where y is in the animation
		let y_current = parseInt(this.head_div.style.top);	// actual y of head
		let y_bottom = this.head_ani_y_max;					// positive extreme y_offset
		let y_top = this.head_ani_y_max * -1;				// negative extreme y_offset
		let inc = this.head_ani_y_increment;				// increment per frame
		
		if (rising) {
			// head needs to move upward (negative offset)
			if (y_offset - 2 >= y_top) {
				// move up normally
				//console.log("normal up");
				this.head_ani_y -= inc;
				//this.head_div.style.top -= inc;
				this.changeDivY(this.head_div, -1 * inc);
				if (y_offset == y_top) this.head_ani_y_rising = false;
			}
			else {
				// wouldve passed top y max (negative)
				//console.log("shortened up");
				let dif = y_top - y_offset;		// will be negative
				this.head_ani_y = y_top;
				//this.head_div.style.top -= dif;
				this.changeDivY(this.head_div, dif);
				this.head_ani_y_rising = false;
			}
		}
		else {
			// head needs to move downward (positive offset)
			if (y_offset + 2 <= y_bottom) {
				// move down normally
				//console.log("normal down");
				this.head_ani_y += inc;
				//this.head_div.style.top += inc;
				this.changeDivY(this.head_div, inc);
				if (y_offset == y_bottom) this.head_ani_y_rising = true;
			}
			else {
				// wouldve passed bottom y max (negative offset)
				//console.log("shortened down");
				let dif = y_bottom - y_offset;		// will be positive
				this.head_ani_y = y_bottom;
				//this.head_div.style.top -= dif;
				this.changeDivY(this.head_div, dif);
				this.head_ani_y_rising = true;
			}
		}
		
	}
	
	this.startHeadAni = function() {
		this.head_ani_y = 0;
		this.head_ani_y_rising = true;
		this.head_ani_interval = setInterval(this.headAniFrame.bind(this), this.head_ani_frame_ms)
	}
	
	this.stopHeadAni = function() {
		clearInterval(this.head_ani_interval);
	}
	
	// body animation (also moves head)
	this.body_ani_frame_ms = 75;	//50
	this.body_ani_max_y_offset = 5;	//3
	this.body_ani_y_accel_inc = 1;	//1
	this.body_ani_cur_y_accel;
	this.body_ani_cur_y_offset;
	this.body_ani_rising;
	this.body_ani_inter;
	
	this.bodyAniFrame = function() {
		let top_y_offset = this.body_ani_max_y_offset * -1;
		let bottom_y_offset = this.body_ani_max_y_offset;
		if (this.body_ani_rising && this.body_ani_cur_y_offset < 0) {
			// in top half while moving up, slow accel (positive inc)
			this.body_ani_cur_y_accel += this.body_ani_y_accel_inc;
			this.body_ani_cur_y_offset += this.body_ani_cur_y_accel;
			this.body_div.style.top = parseInt(this.body_div.style.top) + this.body_ani_cur_y_accel;
			this.head_div.style.top = parseInt(this.head_div.style.top) + this.body_ani_cur_y_accel;
			if (this.body_ani_cur_y_offset <= top_y_offset || this.body_ani_cur_y_accel >= 0) {
				this.body_ani_cur_y_accel = 0;
				//this.body_ani_cur_y_offset = top_y_offset;
				this.body_ani_rising = false;
				// note: not changing actual position
			}
		}
		else if (this.body_ani_rising && this.body_ani_cur_y_offset >= 0) {
			// in bottom/mid half while moving up, speed up accel (negative inc)
			this.body_ani_cur_y_accel -= this.body_ani_y_accel_inc;
			this.body_ani_cur_y_offset += this.body_ani_cur_y_accel;
			this.body_div.style.top = parseInt(this.body_div.style.top) + this.body_ani_cur_y_accel;
			this.head_div.style.top = parseInt(this.head_div.style.top) + this.body_ani_cur_y_accel;
		}
		else if (!this.body_ani_rising && this.body_ani_cur_y_offset < 0) {
			// in top half while moving down, speed up accel (positive inc)
			this.body_ani_cur_y_accel += this.body_ani_y_accel_inc;
			this.body_ani_cur_y_offset += this.body_ani_cur_y_accel;
			this.body_div.style.top = parseInt(this.body_div.style.top) + this.body_ani_cur_y_accel;
			this.head_div.style.top = parseInt(this.head_div.style.top) + this.body_ani_cur_y_accel;
		}
		else if (!this.body_ani_rising && this.body_ani_cur_y_offset >= 0) {
			// in bottom/mid half while moving down, slow accel (negative inc)
			this.body_ani_cur_y_accel -= this.body_ani_y_accel_inc;
			this.body_ani_cur_y_offset += this.body_ani_cur_y_accel;
			this.body_div.style.top = parseInt(this.body_div.style.top) + this.body_ani_cur_y_accel;
			this.head_div.style.top = parseInt(this.head_div.style.top) + this.body_ani_cur_y_accel;
			if (this.body_ani_cur_y_offset >= bottom_y_offset || this.body_ani_cur_y_accel <= 0) {
				this.body_ani_cur_y_accel = 0;
				//this.body_ani_cur_y_offset = bottom_y_offset;
				this.body_ani_rising = true;
				// note: not changing actual position
			}
		}
		//console.log("os=" + this.body_ani_cur_y_offset + " | accel=" + this.body_ani_cur_y_accel);
		//console.log(this.body_ani_rising);
	}
	
	this.startBodyAni = function() {
		this.body_div.style.top = parseInt(this.body_div.style.top) + 4; //lower to cover blankspace
		this.body_ani_cur_y_offset = 0; //0
		this.body_ani_cur_y_accel = -2; //-3; initially should match direction of rising
		this.body_ani_rising = true;
		this.body_ani_inter = setInterval(this.bodyAniFrame.bind(this), this.body_ani_frame_ms)
	}
	
	this.stopBodyAni = function() {
		peter.body_div.style.top = parseInt(peter.body_div.style.top) - 4; //raise back offset
		clearInterval(this.body_ani_inter);
	}
	
	// leg animation (also moves body and head)
	this.legs_ani_max_skew = 5;		// static; 5
	this.legs_ani_skew_inc = 1;		// static; 1
	this.legs_ani_max_accel = 2;	// static; 1
	this.legs_ani_frame_ms = 100;	// static; 50
	this.legs_ani_cur_skew;			// dynamic
	this.legs_ani_cur_accel;		// dynamic
	this.legs_ani_right;			// dynamic
	this.legs_ani_inter;			// dynamic
	
	this.legsAniFrame = function() {
		let left_skew_offset = this.legs_ani_max_skew;			// left is positive
		let right_skew_offset = this.legs_ani_max_skew * -1;	// right is negative
		let left_accel_max = this.legs_ani_max_accel;
		let right_accel_max = this.legs_ani_max_accel * -1;
		var skewString = function() { return "skewX(" + this.legs_ani_cur_skew + "deg)"; }
		var updateBodyHead = function() {
			this.body_div.style.left = parseInt(this.body_div.style.left) + this.legs_ani_cur_accel * -2;
			this.head_div.style.left = parseInt(this.head_div.style.left) + this.legs_ani_cur_accel * -2;
		}
		//console.log("cur:" + this.legs_ani_cur_skew + " right:" + this.legs_ani_right + " accel:" + this.legs_ani_cur_accel);
		if (this.legs_ani_right && this.legs_ani_cur_skew < 0) {
			// on right side, moving right, slow accel (positive inc)
			this.legs_ani_cur_accel += this.legs_ani_skew_inc;
			this.legs_ani_cur_skew += this.legs_ani_cur_accel;
			this.legs_div.style.transform = skewString.call(this);
			updateBodyHead.call(this);
			if (this.legs_ani_cur_skew <= right_skew_offset || this.legs_ani_cur_accel <= 0) {
				this.legs_ani_cur_accel = 0;
				this.legs_ani_right = false;
			}
		}
		else if (this.legs_ani_right && this.legs_ani_cur_skew >= 0) {
			// on left/mid side, moving right, speed up accel (negative inc)
			this.legs_ani_cur_accel -= this.legs_ani_skew_inc;
			if (this.legs_ani_cur_accel < right_accel_max) this.legs_ani_cur_accel = right_accel_max;
			this.legs_ani_cur_skew += this.legs_ani_cur_accel;
			this.legs_div.style.transform = skewString.call(this);
			updateBodyHead.call(this);
		}
		else if (!this.legs_ani_right && this.legs_ani_cur_skew < 0) {
			// on right side, moving left, speed up accel (positive inc)
			this.legs_ani_cur_accel += this.legs_ani_skew_inc;
			if (this.legs_ani_cur_accel > left_accel_max) this.legs_ani_cur_accel = left_accel_max;
			this.legs_ani_cur_skew += this.legs_ani_cur_accel;
			this.legs_div.style.transform = skewString.call(this);
			updateBodyHead.call(this);
		}
		else if (!this.legs_ani_right && this.legs_ani_cur_skew >= 0) {
			// on left/mid side, moving left, slow accel (negative inc)
			this.legs_ani_cur_accel -= this.legs_ani_skew_inc;
			this.legs_ani_cur_skew += this.legs_ani_cur_accel;
			this.legs_div.style.transform = skewString.call(this);
			updateBodyHead.call(this);
			if (this.legs_ani_cur_skew >= left_skew_offset || this.legs_ani_cur_accel >= 0) {
				this.legs_ani_cur_accel = 0;
				this.legs_ani_right = true;
			}
		}
	}
	
	this.startLegsAni = function() {
		this.legs_ani_cur_skew = -1; // -1
		this.legs_ani_cur_accel = 2; // 2
		this.legs_ani_right = false;
		this.legs_ani_inter = setInterval(this.legsAniFrame.bind(this), this.legs_ani_frame_ms);
	}
	
	this.stopLegsAni = function() {
		clearInterval(this.legs_ani_inter);
	}
	
	
	
	this.startStandAni = function() {
		this.startHeadAni();
		this.startBodyAni();
		this.startLegsAni();
	}
	
	this.stopStandAni = function() {
		this.stopHeadAni();
		this.stopBodyAni();
		this.stopLegsAni();
		this.resetStance();
	}
	
	this.imgPointRight = function() {
		this.body_img.setAttribute("src", "peter_body_right.png");
	}
	
	this.resetStance();
	par.appendChild(this.peter_div);
	return this;
}

function testEye() {
	//console.log("hit");
	peter.head_img.setAttribute("src", "peter_head_sideeye.png");
	peter.imgPointRight();
}

function testBody() {
	
}

//var peter = new Peter(document.body);
//var peter = new Peter(document.getElementById("game_space"));

//peter.startHeadAni();
//peter.stopHeadAni();

//peter.startBodyAni();
//peter.stopBodyAni();

//peter.startLegsAni();
//peter.stopLegsAni();

//peter.legs_div.style.transform = "skewX(-5deg)";					//5; -5
//console.log(peter.legs_div.style.transform);
//console.log(peter.legs_div.style.transform.skewX);
//console.log(window.getComputedStyle(peter.legs_div).transform);
//console.log(window.getComputedStyle(peter.legs_div).transform.match(/\d+/g)[3]);


//peter.body_div.style.left = parseInt(peter.body_div.style.left) + 10;	//-10; 10
//peter.body_div.style.top = parseInt(peter.body_div.style.top) + 5;

//peter.head_div.style.top = 60;
//peter.head_div.style.top = parseInt(peter.head_div.style.top) - 60;
//peter.changeDivY(peter.head_div, -60);