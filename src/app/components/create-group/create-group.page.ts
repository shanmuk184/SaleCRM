import { GroupService } from './../../services/group.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss']
})
export class CreateGroupPage implements OnInit {
  group: FormGroup;
  pageHeaderText: string;
  groupTypes: object;
  defaultGroupType: string;
  constructor(
    private formBuilder: FormBuilder,
    private groupService: GroupService,
    private toastController: ToastController
  ) {
    this.group = this.formBuilder.group({
      groupName: ['', Validators.required],
      groupType: ['', Validators.required]
    });
    this.pageHeaderText = 'Create Group';
    this.groupTypes = [
      {
        name: 'Pharma Company',
        value: 'pharmaComapany'
      }
    ];
    this.defaultGroupType = 'pharmaCompany';
  }

  ngOnInit() {}
  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async onSubmit(form: FormGroup) {
    console.log(form.value);
    this.groupService.createGroup(form.value).subscribe(async res => {
      console.log(res);
      await this.presentToast('group created');
    });
  }
}
