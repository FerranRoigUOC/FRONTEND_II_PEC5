import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image?: Image;
  showAllDetails: boolean = false;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    if(identifier != null){
      console.log('Identifier -->', identifier);

      this.imagesService.getImagesById(identifier).subscribe((image) => {
        if(!image){
          return this.router.navigateByUrl('/');
        }
        this.image = image;
        console.log("Image -->", this.image);
        return image;
      });
    }
  }

}
