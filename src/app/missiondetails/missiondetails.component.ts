import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission?:Mission;
  constructor(private missonService:SpacexapiService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params=>
      this.getMission(params['id'])
    );
  }

  ngOnInit(): void {
  }
  getMission(id:number){
    this.missonService.getMission(id).subscribe(data=>{
      this.mission = data;
    });
  }
}
