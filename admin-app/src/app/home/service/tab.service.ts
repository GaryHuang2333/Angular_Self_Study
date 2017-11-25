import { Injectable } from '@angular/core';
import { TabClass } from './tab-class';
import { TABS } from './mock-tabs';

@Injectable()
export class TabService {
  getTabs(): TabClass[] {
    return TABS;
  }

  addTabView(header: string, content: string, closable: boolean): void {
    TABS.push({id: 0, header: header, content: content, closable: closable});
  }
}
