import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute) { }
  form!: FormGroup;
  memberGlobal!: Member;
  type!:String ;

  ngOnInit(): void {
    this.checkMemberType()
    const idcourant = this.activatedRoute.snapshot.params["id"];
    if (!!idcourant) {
      this.MS.getMemberByid(idcourant).subscribe((item) => {
        this.memberGlobal = item
        this.updateForm(item)
      })
    }
    else {
      this.initForm()
    }
  }
  checkMemberType(): void {
    const url = window.location.href;
    this.type = url.includes('teacher') ? 'teacher' : 'student';
  }
  initForm() {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      dateNaissance: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required , Validators.email]),
      password: new FormControl("********", [Validators.required]),
      sujet: new FormControl(null, [Validators.required]),
      dateInscription: new FormControl(null, [Validators.required]),
      diplome:  new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      etablissement: new FormControl(null, [Validators.required]),
    });
  }
  updateForm(item: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(item.cin, [Validators.required]),
      nom: new FormControl(item.nom, [Validators.required]),
      prenom: new FormControl(item.prenom, [Validators.required]),
      dateNaissance: new FormControl(item.dateNaissance, [Validators.required]),
      cv: new FormControl(item.cv, [Validators.required]),
      email: new FormControl(item.email, [Validators.required]),
      password: new FormControl("********", [Validators.required]),
      sujet: new FormControl(item.sujet, [Validators.required]),
      dateInscription: new FormControl(item.dateInscription, [Validators.required]),
      diplome:  new FormControl(item.diplome, [Validators.required]),
      grade: new FormControl(item.grade, [Validators.required]),
      etablissement: new FormControl(item.etablissement, [Validators.required]),
    });
  }
  OnSubmit() {

    console.log(this.form.value)
    const member1 = {
      ...this.memberGlobal,
      ...this.form.value,

    }
    const member2 = {
      ...member1,
      createdDate: member1.createdDate ?? new Date().toISOString().toString()
    }
    this.type== 'teacher' ? this.MS.SaveEnseignant(member1).subscribe(() => { this.router.navigate(['/teacher']) }) : this.MS.SaveEtudiant(member1).subscribe(() => { this.router.navigate(['/student']) });
  }
}
