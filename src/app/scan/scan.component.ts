import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Article} from '../article/article.class';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  @Output('articleCreated')
  createArticle: EventEmitter<Article> = new EventEmitter<Article>();
  product_name = '';
  brands = '';
  nutriscore_grade = '';
  countries = '';
  labels = '';
  image_front_url = '';
  categories = '';
  stores = '';

  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder) {
    this.articleForm = this.fb.group({
    Code: ['', Validators.nullValidator ],
    product_name: ['', Validators.required],
    brands: ['', Validators.required],
    countries:['', Validators.required],
    labels:['', Validators.required],
    nutriscore_grade:['',Validators.required],
    categories:['',Validators.required],
    stores:['',Validators.required],

  });
  }

  articleForm: FormGroup;
  value: string;
  isError = false;

  ngOnInit(): void {
  }

  onError(error) {
    console.error(error);
    this.isError = true;
  }

  create() {
    this.articleService.addArticle(this.articleForm.value).subscribe(
      (value) => {
        console.log('article created, ', value);
        this.createArticle.emit(value)
      },
      (error) => console.error('error while creating article', error)
    );
  }

  onValueChange(codebar: string) {
    this.articleService.getData(codebar).subscribe(
      (result: any) => {
        console.log('result:', result);
        this.articleForm.patchValue({
          Code: codebar
        });
        if (result.product.product_name) {
          //this.product_name = result.product.product_name;
           this.articleForm.patchValue({
            product_name: result.product.product_name
         });
        }
        else if (result.product.product_name_fr){
         // this.product_name = result.product.product_name_fr;
         this.articleForm.patchValue({
          product_name: result.product.product_name_fr
       });
        }
        else if (result.product.product_name_en){
      //    this.product_name = result.product.product_name_en;
        this.articleForm.patchValue({
        product_name: result.product.product_name_en
         });
        }
        if (result.product.brands) {
        //  this.brands = result.product.brands;
        this.articleForm.patchValue({
          brands: result.product.brands
           });
        }
        if (result.product.categories) {
       //   this.categories = result.product.categories;
         this.articleForm.patchValue({
          categories: result.product.categories
         });
        }
        if (result.product.stores) {
        //   this.stores = result.product.stores;
          this.articleForm.patchValue({
            stores: result.product.stores
          });
        }
        if (result.product.countries) {
    //      this.countries = result.product.countries;
          this.articleForm.patchValue({
            countries: result.product.countries
          });
        }
        if (result.product.image_front_url) {
            this.image_front_url = result.product.image_front_url;
        }
        if (result.product.labels) {
       //   this.labels = result.product.labels;
          this.articleForm.patchValue({
            labels: result.product.labels
          });
        }
        if (result.product.nutriscore_grade) {
        //  this.nutriscore_grade = result.product.nutriscore_grade; 
            this.articleForm.patchValue({
              nutriscore_grade: result.product.nutriscore_grade
            });
        }
      }, (err) => {
        console.log(err);
      }
    )
  }
}

