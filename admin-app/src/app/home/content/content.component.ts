import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TabClass } from '../service/tab-class';
import { TabService } from '../service/tab.service';
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content_height: number;
  tabs: TabClass[];
  tabs2: string[];

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public tabService: TabService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void {
    this.tabs = this.tabService.getTabs();
  }

  ngAfterViewInit() {

        this.content_height =  $(window).height() - 101;
        //拉升content的高度，解决login界面到home界面出现的min-height bug
        //872px
        $('.content-wrapper').css({'height': this.content_height});
      }
}
