import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions:Mission[] = [];

  constructor(private missonService:SpacexapiService) {
    this.getMissionList();
  }

  ngOnInit(): void {
  }

  getMissionList(){
    this.missonService.getMissionList().subscribe(data=>{
      this.missions = data;
    });
  }
}