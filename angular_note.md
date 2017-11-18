# MarkDown Grammar
## List
### order list:
    1. first order
    2. second order
    3. third order
    4. forth roder
### unorder list1
    * list1
    * list2
    * list3
### unorder list2
    - list1
    - list2
    - list3

## Reference
> Here`s the reference text  

Here`s not the reference text

## Image & Link
### Image
This is from Angular.io
![Angular icon](https://angular.io/assets/images/logos/angular/logo-nav@2x.png)
### Link
[Angular.io](https://angular.io/)

## Bold & Italic
### bold
This is a **bold** wording
### italic
This is a *italic* wording

## Table
>|:---------| left align </br>
|:--------:| center align </br>
|-----------:| right align </br>

|OrderID|ProductName|ProductId|ProductPrice|
|-------|:---------|:--------:|-----------:|
|1       |Book      |231      |$54         |
|2       |Noodle    |412      |$26         |
|3       |Pure Water|164      |$30         |

## Code
Here`s some java code:

`System.out.println("Hello World");`

## Seperate Line
***
***

# Angular Prperation 
## Environment Setup
1. npm install -g @angular/cli
2. ng new my-app
3. cd my-app, ng serve --open
4. ng generate component component-name

# Angular Study (From http://angular.io)
## Architecture
![Angualr Architecture](https://angular.io/generated/images/guide/architecture/overview2.png)

## Template & Data binding
### Displaying Data
    templateUrl: './app.component.html'
    styleUrls: ['./app.component.css']
    {{myHero}} 
    *ngFor
    *ngIf
### Template Syntax
    Interpolation 插值表达式
        <img src="{{heroImageUrl}}" style="height:30px">
        <h3>{{title}}</h3>
        <h3>{{1 + 1 + getVal()}}</h3>
            * 可以放在标签的文本中，也可以放在标签的属性中

    property binding 
        [property]="expression"
            * expression-模板表达式， property-目标属性(not attribute)
        [hidden]="isUnchanged"
            * isUnchanged-组件属性, hidden-模板标签属性
        <img [src]="heroImageUrl">
        <img bind-src="heroImageUrl">
            * Some people prefer the bind- prefix alternative, known as the canonical form(规范形式)
        <app-hero-detail [hero]="currentHero"></app-hero-detail>
            * hero-子组件属性, currentHero父组件属性（这是父子组件之间通讯的重要途径）
    
    插值表达式 VS 属性绑定 ?
        下列这几对绑定做的事情完全相同
        ----
        <p><img src="{{heroImageUrl}}"> is the <i>interpolated</i> image.</p>
        <p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>
        ----
        <p><span>"{{title}}" is the <i>interpolated</i> title.</span></p>
        <p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>

    attribute binding(vs property binding)
        [attr.attribute_name]="表达式"
            * 考虑 ARIA， SVG 和 table 中的 colspan/rowspan 等 attribute。 它们是纯粹的 attribute，没有对应的属性可供绑定
        <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
            * Only for those only with attribute without property

    class binding
        [class.class-name]="表达式"
            * 由class前缀，一个点 (.)和 CSS 类的名字组成， 其中后两部分是可选的
        <div class="bad curly special" [class]="badCurly">Bad curly</div>
            * 当 badCurly 有值时 class 这个 attribute 设置的内容会被完全覆盖
        <!-- toggle the "special" class on/off with a property -->
        <div [class.special]="isSpecial">The class binding is special</div>
        <!-- binding to `class.special` trumps the class attribute -->
        <div class="special" [class.special]="!isSpecial">This one is not so special</div>
            * 虽然这是切换单一类名的好办法，但我们通常更喜欢使用 NgClass指令 来同时管理多个类名。
            
    Style binding
        [style.style-property]="表达式"
        <button [style.color]="isSpecial ? 'red': 'green'">Red</button>
        <button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>
        <button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
        <button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>
            * 虽然这是设置单一样式的好办法，但我们通常更喜欢使用 NgStyle指令 来同时设置多个内联样式。

    event binding
        (event)="statement"
            * statement-模板语句
        <button (click)="onSave()">Save</button>
        <button on-click="onSave()">On Save</button>
            * Some people prefer the on- prefix alternative, known as the canonical form(规范形式)
        <div (myClick)="clickMessage=$event" clickable>click with myClick</div>
            * `myClick` is an event on the custom `ClickDirective`
        $event 和事件处理语句
            <input [value]="currentHero.name" (input)="currentHero.name=$event.target.value" >
        使用 EventEmitter 实现自定义事件
            子template
                <button (click)="delete()">Delete</button>
            子component
                deleteRequest = new EventEmitter<Hero>();
                delete() {this.deleteRequest.emit(this.hero);}
            父template
                <app-hero-detail (deleteRequest)="deleteHero($event)" [hero]="currentHero"></app-hero-detail>
                * deleteRequest-子, hero-子, deleteHero-父, currentHero-父

    two-way binding
        [(target)]="expression"
            * target-子properties, expression-父表达式
        <app-sizer [(size)]="fontSizePx"></app-sizer> <div [style.font-size.px]="fontSizePx">Resizable Text</div>
            * size-子 fontSizePx-父 fontSizePx-父
        <app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
            * same as two-way binding
        
    Built-in directives 内置指令
        attribute directives 属性型指令
            NgClass - 添加或移除一组CSS类
            NgStyle - 添加或移除一组CSS样式
            NgModel - 双向绑定到HTML表单元素

        structural directives 结构性指令
            NgIf
                <div *ngIf="currentHero">Hello, {{currentHero.name}}</div>
                <div *ngIf="nullHero">Hello, {{nullHero.name}}</div>
                    * 防范空指针错误, currentHero&nullHero -> 父
            NgFor
                <div *ngFor="let hero of heroes">{{hero.name}}</div>
                <div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>
                    * 带索引的ngFor
                带trackBy的*ngFor
                    app.component.ts
                     trackByHeroes(index: number, hero: Hero): number { return hero.id; }
                    app.component.html
                     <div *ngFor="let hero of heroes; trackBy: trackByHeroes">({{hero.id}}) {{hero.name}}</div>
            NgSwitch
                <div [ngSwitch]="currentHero.emotion">
                    <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
                    <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
                    <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
                    <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
                </div>
                    * 本例子中的emotion是个字符串，但实际上这个候选值可以是任意类型。
                    * 绑定到[ngSwitch]。如果试图用*ngSwitch的形式使用它就会报错，这是因为NgSwitch是一个属性型指令，而不是结构型指令。 它要修改的是所在元素的行为，而不会直接接触DOM结构。


    Statement context
        $event
        #heroForm




## Forms
## Bootstrapping
## NgModules
## Dependency Injection
## HttpClient
## Routing & Navigation
### 基础知识 
1. <base href>元素(index.html)
`
<base href="/">
`
* 在`<head>` 里面加

2. 从路由库中导入(app.module.ts)
`
import {RouterModule, Routes} from '@angualr/router';
`

3. 配置(app.module.ts)
`
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
`
* path不能以斜杠（/）开头
* 路由器使用先匹配者优先的策略来匹配路由

4. 路由出口(HeroListComponent.html)
`
<router-outlet></router-outlet>
<!-- Routed views go here -->
`

5. 路由器链接(app.component.ts)
`
  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`

6. 路由器状态

|OrderID|ProductName|ProductId|ProductPrice|
|-------|:---------|:--------:|-----------:|
|1       |Book      |231      |$54         |
|2       |Noodle    |412      |$26         |
|3       |Pure Water|164      |$30         |

7. 激活的路由 ActivativedRoute
|Property 属性|Description 描述|
|:------------|:---------------|
|url|路由路径的Observable对象，是一个由路由路径中的各个部分组成的字符串数组。|
|data|一个Observable，其中包含提供给路由的data对象。也包含由解析守卫（resolve guard）解析而来的值。|
|paramMap|一个Observable，其中包含一个由当前路由的必要参数和可选参数组成的map对象。用这个map可以获取来自同名参数的单一值或多重值。|
|queryParamMap|一个Observable，其中包含一个对所有路由都有效的查询参数组成的map对象。 用这个map可以获取来自查询参数的单一值或多重值。|
|fragment|An Observable of the URL fragment available to all routes.|
|outlet|要把该路由渲染到的RouterOutlet的名字。对于无名路由，它的路由名是primary，而不是空串。|
|routeConfig|用于该路由的路由配置信息，其中包含原始路径。|
|parent|当该路由是一个子路由时，表示该路由的父级ActivatedRoute。|
|firstChild|包含该路由的子路由列表中的第一个ActivatedRoute。|
|children|包含当前路由下所有已激活的子路由。|

8. 路由事件 Router.events
|Router Event 路由器事件|Description 描述|
|:------------|:---------------|
|NavigationStart|本事件会在导航开始时触发。|
|RoutesRecognized|本事件会在路由器解析完URL，并识别出了相应的路由时触发|
|RouteConfigLoadStart|本事件会在Router对一个路由配置进行惰性加载之前触发。|
|RouteConfigLoadEnd|本事件会在路由被惰性加载之后触发。|
|NavigationEnd|本事件会在导航成功结束之后触发。|
|NavigationCancel|本事件会在导航被取消之后触发。 这可能是因为在导航期间某个路由守卫返回了false。|
|NavigationError|这个事件会在导航由于意料之外的错误而失败时触发。|

9. 路由器中的关键词汇及其含义
|路由器部件|含义|
|:------------|:---------------|
|Router（路由器）|为激活的URL显示应用组件。管理从一个组件到另一个组件的导航|
|RouterModule（路由器模块）|一个独立的Angular模块，用于提供所需的服务提供商，以及用来在应用视图之间进行导航的指令。|
|Routes（路由数组）|定义了一个路由数组，每一个都会把一个URL路径映射到一个组件。|
|Route（路由）|定义路由器该如何根据URL模式（pattern）来导航到组件。大多数路由都由路径和组件类构成。|
|RouterOutlet（路由出口）|该指令（<router-outlet>）用来标记出路由器该在哪里显示视图。|
|RouterLink（路由链接）|该指令用来把一个可点击的HTML元素绑定到路由。点击带有绑定到字符串或链接参数数组的routerLink指令的元素就会触发一次导航。|
|RouterLinkActive（活动路由链接）|当HTML元素上或元素内的routerLink变为激活或非激活状态时，该指令为这个HTML元素添加或移除CSS类。|
|ActivatedRoute（激活的路由）|为每个路由组件提供提供的一个服务，它包含特定于路由的信息，比如路由参数、静态数据、解析数据、全局查询参数和全局碎片（fragment）。|
|RouterState（路由器状态）|路由器的当前状态包含了一棵由程序中激活的路由构成的树。它包含一些用于遍历路由树的快捷方法。|
|链接参数数组(Link parameters array)|这个数组会被路由器解释成一个路由操作指南。我们可以把一个RouterLink绑定到该数组，或者把它作为参数传给Router.navigate方法。|
|路由组件(Routing component)|一个带有RouterOutlet的Angular组件，它根据路由器的导航来显示相应的视图。|

10. 模块化路由配置
	--> router example
	AppModule(
		imports HeroesModule(
			imports HeroRoutingModule(forChild), 
			declarations HeroListComponent, 
			declarations HeroDetailComponent
		),
		imports AppRoutingModule(forRoot)
	)
	
	--> admin-app
	AppModule(
		imports UsersModule(
			imports HeroRoutingModule(forChild), 
			declarations HeroListComponent, 
			declarations HeroDetailComponent
		),
		imports AppRoutingModule(forRoot)
	)
					
	
## Testing
## Cheat Sheet


# Angular Study (From http://book-angular.mydoc.io)

