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
        <img [src]="heroImageUrl">
            * isUnchanged-组件属性, hidden-模板标签属性
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
        (click)="deleteHero()"
        <button on-click="onSave()">On Save</button>
            * Some people prefer the on- prefix alternative, known as the canonical form(规范形式)
        <div (myClick)="clickMessage=$event" clickable>click with myClick</div>
            * `myClick` is an event on the custom `ClickDirective`

    two-way binding
        [(target)]="expression"


    Statement context
        $event
        #heroForm




## Forms
## Bootstrapping
## NgModules
## Dependency Injection
## HttpClient
## Routing & Navigation
## Testing
## Cheat Sheet


# Angular Study (From http://book-angular.mydoc.io)

