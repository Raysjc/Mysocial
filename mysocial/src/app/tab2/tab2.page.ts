import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../services/data.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model = new Post();

  constructor(private data: DataService, private shared : SharedService) {}

  sendPost(){
    // validation
    if(!this.model.message && !this.model.imageUrl) return;

    this.model.createdOn = new Date();
    this.model.from = this.shared.userName;
    console.log("Saving Post", this.model)

    // save the obj
    this.data.savePost(this.model);

    // create new model (clear form)
    this.model = new Post();
  }

}
