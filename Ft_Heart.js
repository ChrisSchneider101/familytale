Heart = function(par) {
	this.heart_size = 24;
	this.col_size = 20;
	
	this.div = document.createElement("div");
	this.img = document.createElement("img");
	this.img.setAttribute("src", "heart.png");
	this.img.style.height = this.heart_size;
	this.img.style.width = this.heart_size;
	this.div.appendChild(this.img);
	this.div.style.backgroundColor = "blue";
	this.div.style.position = "relative";
	this.div.style.textAlign = "left";
	this.div.style.width = this.col_size;
	this.div.style.height = this.col_size;
	this.img.style.position = "absolute";
	this.img.style.left = (this.col_size - this.heart_size) / 2;
	this.img.style.top = (this.col_size - this.heart_size) / 2;
	
	// intersection of top_x and left_y is position
	this.top_x;
	this.bottom_x;
	this.left_y;
	this.right_y;
	
	// no validation, relies on movebox
	this.setPos = function(x, y) {
		this.div.style.left = x;
		this.div.style.top = y;
		this.top_x = x;
		this.bottom_x = x + this.col_size;
		this.left_y = y;
		this.right_y = y + this.col_size;
	}
	
	this.move = function(x_os, y_os) {
		this.setPos(this.top_x + x_os, this.left_y + y_os);
	}
	
	//console.log("hit");
	par.appendChild(this.div);
	return this;
}

MoveBox = function(par) {
	this.div = document.createElement("div");
	this.div.style.width = 350;
	this.div.style.height = 200;
	this.div.style.border = "6px solid white";
	this.div.style.overflow = "hidden";
	//this.div.style.position = "relative";
	this.div.style.display = "inline-block";
	
	this.heart = new Heart(this.div);
	this.heart.setPos(0, 0);
	
	this.boundHeart = function() {
		let top_wall = 0;
		let bottom_wall = parseInt(this.div.style.height);
		let left_wall = 0;
		let right_wall = parseInt(this.div.style.width);
		/*if (heart.top_x < this.div) {
			this.heart.setPos();
		}*/
	}
	
	this.resize = function(width, height) {
		this.div.style.width = width;
		this.div.style.height = height;
	}
	
	par.appendChild(this.div);
	return this;
}

MenuButton = function(par, image) {
	this.div = document.createElement("div");
	this.img = document.createElement("img");
	this.ref = image;
	this.img.setAttribute("src", this.ref + ".png");
	this.div.style.display = "inline-block";
	//this.img.style.height
	this.div.appendChild(this.img);
	
	this.highlight = function() {
		this.img.setAttribute("src", this.ref + "_h.png");
	}
	
	this.unhighlight = function() {
		this.img.setAttribute("src", this.ref + ".png");
	}
	
	par.appendChild(this.div);
	return this;
}