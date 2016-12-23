import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';

/*
 @NgModule装饰器将AppModule标记为 Angular 模块类（也叫NgModule类）。 @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用。

 imports — BrowserModule，这个和每个在浏览器中运行应用都需要它。
 declarations — 应用的唯一组件，它同时也是...
 bootstrap — 根组件，Angular 创建它并插入index.html宿主页面

 NgModule是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：

 declarations - 声明本模块中拥有的视图类。 Angular 有三种视图类：组件、指令和管道。
 exports - declarations 的子集，可用于其它模块的组件模板。
 imports - 本模块声明的组件模板需要的类所在的其它模块。
 providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
 bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
 */
@NgModule({
  imports: [
    BrowserModule,   //他为浏览器ng模块。
    FormsModule,     //ng模块为活性形式。
    HttpModule,      //模块,包括http的提供者
    InMemoryWebApiModule.forRoot(InMemoryDataService),//与类实现InMemoryDbService和创建一个内存中的数据库。
    AppRoutingModule //路由器模块
  ],
  declarations: [  //声明本模块中拥有的视图类。 Angular 有三种视图类：组件、指令和管道
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ], //服务的创建者，并加入到全局服务列表中，可用于应用任何部分
  bootstrap: [ AppComponent ] //指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
})
export class AppModule { }
