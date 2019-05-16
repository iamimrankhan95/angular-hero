import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Hero } from '../hero';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  hero: Student = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Student[];
  constructor(private studentService: StudentService) { }//way of injecting services,When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.studentService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.studentService.deleteHero(hero).subscribe();
  }
}