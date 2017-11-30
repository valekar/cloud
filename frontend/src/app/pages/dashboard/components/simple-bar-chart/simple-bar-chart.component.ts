import { Component, OnInit } from '@angular/core';
import { BarService } from '../../services/bar.service';
import { OpenSourceCode, Sentence,Azure,Watson,Google } from '../../../models/sentiment';

@Component({
  selector: 'simple-bar-chart',
  templateUrl: './simple-bar-chart.component.html',
  styleUrls: ['./simple-bar-chart.component.scss'],
  providers: [BarService]
})
export class SimpleBarChartComponent implements OnInit {
  data: any;
  openSourceScore: OpenSourceCode;
  humanPositiveScore: number = 0;
  humanNegativeScore: number = 0;
  azureData:Azure;
  azurePositiveScore=0;
  azureNegativeScore = 0;
  watsonData:Watson;
  watsonPositiveScore=0;
  watsonNegativeScore=0;
  watsonNeutralScore = 0;
  googleData:Google;
  googlePositiveScore:number = 0;
  googleNegativeScore:number = 0;
  googleNeutralScore:number = 0;
  constructor(private barService: BarService) { }

  ngOnInit() {
    this.callServices();
  }


  callServices() {
    this.barService.getRandomSentence().subscribe((res: any) => {
      //console.log(res);
      if (res.score == 0) {
        this.humanNegativeScore = 1;
      }
      else {
        this.humanPositiveScore = 1;
      }
      this.data = res;
      let sentence: Sentence = new Sentence();
      sentence.sentence = this.data.sentence;
      //NLTK response
      this.barService.getNLTKScore(sentence).subscribe((res: OpenSourceCode) => {
        //console.log(res.data);
        this.openSourceScore = res;
        //azure request
        this.barService.getAzureScore(sentence).subscribe((res: Azure) => {
          console.log(res.data);
          this.azureData = res;
          if(this.azureData.data.documents[0].score <0.5){
            this.azureNegativeScore = 1;
          }
          else{
            this.azurePositiveScore = 1
          }
          //watson
          this.barService.getWatsonScore(sentence).subscribe((res:Watson)=> {
            this.watsonData = res;
            console.log(this.watsonData);
            if(this.watsonData.data.sentiment.document.label == "positive"){
             // this.watsonPositiveScore = this.watsonData.data.sentiment.document.score;
              this.watsonPositiveScore = 1;
            }
            else if(this.watsonData.data.sentiment.document.label == "neutral"){
              //this.watsonNeutralScore = this.watsonData.data.sentiment.document.score;
              this.watsonNeutralScore = 1;
            }
            else if(this.watsonData.data.sentiment.document.label == "negative"){
              //this.watsonNegativeScore = this.watsonData.data.sentiment.document.score;
              this.watsonNegativeScore = 1;
            }

            //google
            this.barService.getGoogleScore(sentence).subscribe((res:Google)=>{
              this.googleData = res;
              if(this.googleData.data.entities[0].sentiment.score < -0.25){
                this.googleNegativeScore = 1;
              }
              else  if(this.googleData.data.entities[0].sentiment.score > 0.25){
                this.googlePositiveScore = 1;
              }
              else {
                this.googleNeutralScore = 1;
              }
            })  

          });
          // end of watson

        });
        //end of Azure response
      });
      // end of NLTK response
    });
  }

}
