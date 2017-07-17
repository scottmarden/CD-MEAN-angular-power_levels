import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Power Up!';
	powerLevel: number = 0
	hold: number = 0
	range: Array<number> = [];
	fillRange(){
	  for (let i = 0; i <= 100; i++){
		  this.range.push(i);
	  }
	}

	setLevel(value){
		console.log(value)
		this.hold = value;
		console.log("holding: ", this.hold)
	}

	powerUp(val){
		event.preventDefault();
		this.powerLevel=val;
		console.log("Power up: ", this.powerLevel)
	}




	run = this.fillRange();


}
