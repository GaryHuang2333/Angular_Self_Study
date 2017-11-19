// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { CrisisRoutingModule } from './crisis-routing.module';

import { CrisisListComponent } from './crisis/crisis-list.component';

@NgModule({
  declarations: [CrisisListComponent ],
  // imports: [BrowserModule, CrisisRoutingModule ],
  imports: [CrisisRoutingModule ],
})
export class CrisisModule {}

// 在其它任何模块中都不要导入BrowserModule。 特性模块和惰性加载模块应该改成导入CommonModule。 它们需要通用的指令。它们不需要重新初始化全应用级的提供商。
// 如果你在惰性加载模块中导入BrowserModule，Angular就会抛出一个错误。
// 特性模块中导入CommonModule可以让它能用在任何目标平台上，不仅是浏览器。那些跨平台库的作者应该喜欢这种方式的。
