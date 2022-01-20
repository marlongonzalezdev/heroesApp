import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css'],
})
export class AddHeroeComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  hero: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(private service: HeroesService, private activatedRoute: ActivatedRoute, private router: Router,
    private snackBar: MatSnackBar, private dialog: MatDialog ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edit'))
    {
      return;
    }  
    this.activatedRoute.params.pipe(switchMap(({id})=> this.service.getHeroeById(id))) 
    .subscribe(hero=>this.hero = hero); 
  }

  save() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    if (this.hero.id) {
      //update
      this.service.updateHero(this.hero).subscribe((resp) => {
        this.showNotification('Hero updated successfully');
      });
    } //add
    else {
      this.service.addHero(this.hero).subscribe((resp) => {
        this.showNotification('Hero added successfully');
        this.router.navigate(['/heroes/edit', resp.id]);
      });
    }
  }

  delete() {

    const dialog = this.dialog.open(ConfirmationComponent, {
      width: '250px',
      data: {...this.hero}
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if(result)
        {
            this.service.deleteHero(this.hero.id!).subscribe(() => {
                this.router.navigate(['heroes/list']);
              });
        }
      }
    );  
  }

  showNotification(message: string )
  {
    this.snackBar.open(message, 'ok!', {
      duration: 2500
    });
  }
}
