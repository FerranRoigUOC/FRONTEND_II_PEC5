import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: Image[] = [];
  view: string = 'card';
  loading: boolean = true;

  constructor(private imagesService: ImagesService) { }

  toggleView(view: string) {
    this.view = view;
  }

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => {
        setTimeout(()=>{                           
          this.loading = false;
          this.images = images;
      }, 3000);
      });
  }
}
