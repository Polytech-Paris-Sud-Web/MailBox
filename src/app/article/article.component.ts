import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    private _title : string;
    private _content : string;

    constructor(){
        this._title = "First Article";
        this._content = "Hello World";
    }

    public title() : string{
        return this._title;
    }

    public content() : string{
        return this._content;
    }

  ngOnInit() {
  }

}
