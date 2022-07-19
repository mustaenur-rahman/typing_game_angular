import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'type';
  randomSentence:string = faker.lorem.sentence();
  inputtedText = '';
  sentenceArray = this.randomSentence.split('');
  inputtedTextArray: string[] = [];
  onChangeText(value: string){
    this.inputtedText = value;
    this.inputtedTextArray = this.inputtedText.split(''); 
  }

  checkResult(){
    if(this.inputtedText === this.randomSentence){
      return true;
    }else{
      return false;
    }
  }
  
}
