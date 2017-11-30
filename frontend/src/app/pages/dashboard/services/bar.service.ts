import { Injectable } from '@angular/core';
import {CommonService} from '../../services/common.service';
import {URLS} from '../../models/URLS';
import 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import {Sentence} from '../../models/sentiment';
@Injectable()
export class BarService {

  constructor(private commonService:CommonService,private http:Http) { }

  getRandomSentence(){
    return this.http.get(URLS.RANDOM_SENTENCE_URL,this.commonService.getHeaderOptions())
    .map((res:Response)=>{ return res.json()})
    .catch((err:Response)=> {return Observable.throw(err.json())});
  }

  getNLTKScore(str:Sentence){
    return this.http.post(URLS.GET_NLTK_SCORE_URL,str,this.commonService.getHeaderOptions())
    .map((res:Response)=>{return res.json()})
    .catch((err:Response)=> {return Observable.throw(err.json())});
  }

  getAzureScore(str:Sentence){
    return this.http.post(URLS.GET_AZURE_SCORE_URL,str,this.commonService.getHeaderOptions())
    .map((res:Response)=> {return  res.json()})
    .catch((err:Response)=> {return Observable.throw(err.json())})
  }


  getWatsonScore(str:Sentence){
    return this.http.post(URLS.GET_WATSON_SCORE_URL,str,this.commonService.getHeaderOptions())
    .map((res:Response)=> {return  res.json()})
    .catch((err:Response)=> {return Observable.throw(err.json())})
  }


  getGoogleScore(str:Sentence){
    return this.http.post(URLS.GET_GOOGLE_SCORE_URL,str,this.commonService.getHeaderOptions())
    .map((res:Response)=> {return  res.json()})
    .catch((err:Response)=> {return Observable.throw(err.json())})
  }


}
