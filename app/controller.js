

function Controller(){
	this.model = null;
	this.view = null;
	this.initialize = function(){
		this.model = new Model(this);
		this.view = new View(this);
	}
}