(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jPt2:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var b=u("pMnS"),c=u("8rEH"),r=u("zQui"),a=u("Mr+X"),o=u("Gi4r"),i=u("SVse"),s=u("iInd"),f=u("pIm3"),m=u("IP0z"),d=u("/HVE");class h{constructor(){this.offersStudy=[],this.offersOther=[],this.displayedColumns=["job","company","category","date","province","municipe","subscribe","editar"],this.displayedColumnsOther=["job","company","category","date","province","municipe"]}ngOnChanges(l){l.user&&l.offers&&this.selectOffers()}selectOffers(){const l=this.user.studies,n=this.user.offers;this.offersStudy=this.offers.filter(n=>l.some(l=>l.uid===n.category.uid)).map(l=>{const u=!!n.find(n=>n.id===l.id);return Object.assign({},l,{subscribe:u})}),this.offersOther=this.offers.filter(n=>l.every(l=>l.uid!==n.category.uid))}}var p=e.sb({encapsulation:0,styles:[[".campo[_ngcontent-%COMP%]{width:100%;font-size:20px}mat-cell[_ngcontent-%COMP%]{padding:2px}table[_ngcontent-%COMP%]{width:100%;margin-bottom:30px}"]],data:{}});function N(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Puesto "]))],null,null)}function E(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.job.name)}))}function O(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Empresa "]))],null,null)}function j(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.company.name)}))}function L(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Familia "]))],null,null)}function K(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.category.name)}))}function g(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Fecha "]))],null,null)}function _(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.date)}))}function k(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Provincia "]))],null,null)}function P(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.province.name)}))}function C(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Municipio "]))],null,null)}function y(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.municipe.name)}))}function v(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Inscrito "]))],null,null)}function D(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"mat-icon",[["aria-hidden","false"],["aria-label","Example home icon"],["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),e.tb(1,9158656,null,0,o.b,[e.k,o.d,[8,"false"],[2,o.a],[2,e.l]],null,null),(l()(),e.Nb(-1,0,["check"]))],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,e.Gb(n,1).inline,"primary"!==e.Gb(n,1).color&&"accent"!==e.Gb(n,1).color&&"warn"!==e.Gb(n,1).color)}))}function M(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"mat-icon",[["aria-hidden","false"],["aria-label","Example home icon"],["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),e.tb(1,9158656,null,0,o.b,[e.k,o.d,[8,"false"],[2,o.a],[2,e.l]],null,null),(l()(),e.Nb(-1,0,["cancel"]))],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,e.Gb(n,1).inline,"primary"!==e.Gb(n,1).color&&"accent"!==e.Gb(n,1).color&&"warn"!==e.Gb(n,1).color)}))}function w(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,5,"td",[["class","icono mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.jb(16777216,null,null,1,null,D)),e.tb(3,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,M)),e.tb(5,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.subscribe),l(n,5,0,!n.context.$implicit.subscribe)}),null)}function $(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null)],null,null)}function R(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,6,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.ub(2,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Gb(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.tb(3,671744,null,0,s.q,[s.o,s.a,i.i],{routerLink:[0,"routerLink"]},null),(l()(),e.ub(4,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["color","black"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),e.tb(5,9158656,null,0,o.b,[e.k,o.d,[8,null],[2,o.a],[2,e.l]],{color:[0,"color"]},null),(l()(),e.Nb(-1,0,["list_alt"]))],(function(l,n){l(n,3,0,e.yb(1,"",n.context.$implicit.id,"")),l(n,5,0,"black")}),(function(l,n){l(n,2,0,e.Gb(n,3).target,e.Gb(n,3).href),l(n,4,0,e.Gb(n,5).inline,"primary"!==e.Gb(n,5).color&&"accent"!==e.Gb(n,5).color&&"warn"!==e.Gb(n,5).color)}))}function A(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,f.d,f.a)),e.Kb(6144,null,r.k,null,[c.g]),e.tb(2,49152,null,0,c.g,[],null,null)],null,null)}function x(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,f.e,f.b)),e.Kb(6144,null,r.m,null,[c.i]),e.tb(2,49152,null,0,c.i,[],null,null)],null,null)}function T(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Puesto "]))],null,null)}function F(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.job.name)}))}function S(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Empresa "]))],null,null)}function I(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.company.name)}))}function G(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Familia "]))],null,null)}function H(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.category.name)}))}function U(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Fecha "]))],null,null)}function Q(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.date)}))}function q(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Provincia "]))],null,null)}function z(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.province.name)}))}function J(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.e,[r.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Municipio "]))],null,null)}function V(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.tb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.municipe.name)}))}function W(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,f.d,f.a)),e.Kb(6144,null,r.k,null,[c.g]),e.tb(2,49152,null,0,c.g,[],null,null)],null,null)}function X(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,f.e,f.b)),e.Kb(6144,null,r.m,null,[c.i]),e.tb(2,49152,null,0,c.i,[],null,null)],null,null)}function Z(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Cumple con la Titulaci\xf3n (Familia)"])),(l()(),e.ub(2,0,null,null,116,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""]],null,null,null,f.f,f.c)),e.Kb(6144,null,r.o,null,[c.k]),e.tb(4,2342912,null,4,c.k,[e.s,e.h,e.k,[8,null],[2,m.b],i.d,d.a],{dataSource:[0,"dataSource"]},null),e.Lb(603979776,1,{_contentColumnDefs:1}),e.Lb(603979776,2,{_contentRowDefs:1}),e.Lb(603979776,3,{_contentHeaderRowDefs:1}),e.Lb(603979776,4,{_contentFooterRowDefs:1}),(l()(),e.ub(9,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(11,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,5,{cell:0}),e.Lb(603979776,6,{headerCell:0}),e.Lb(603979776,7,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,N)),e.tb(17,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[6,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,E)),e.tb(20,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[5,4]],r.b,null,[c.b]),(l()(),e.ub(22,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(24,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,8,{cell:0}),e.Lb(603979776,9,{headerCell:0}),e.Lb(603979776,10,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,O)),e.tb(30,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[9,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,j)),e.tb(33,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[8,4]],r.b,null,[c.b]),(l()(),e.ub(35,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(37,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,11,{cell:0}),e.Lb(603979776,12,{headerCell:0}),e.Lb(603979776,13,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,L)),e.tb(43,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[12,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,K)),e.tb(46,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[11,4]],r.b,null,[c.b]),(l()(),e.ub(48,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(50,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,14,{cell:0}),e.Lb(603979776,15,{headerCell:0}),e.Lb(603979776,16,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,g)),e.tb(56,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[15,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,_)),e.tb(59,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[14,4]],r.b,null,[c.b]),(l()(),e.ub(61,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(63,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,17,{cell:0}),e.Lb(603979776,18,{headerCell:0}),e.Lb(603979776,19,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,k)),e.tb(69,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[18,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,P)),e.tb(72,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[17,4]],r.b,null,[c.b]),(l()(),e.ub(74,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(76,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,20,{cell:0}),e.Lb(603979776,21,{headerCell:0}),e.Lb(603979776,22,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,C)),e.tb(82,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[21,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,y)),e.tb(85,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[20,4]],r.b,null,[c.b]),(l()(),e.ub(87,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(89,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,23,{cell:0}),e.Lb(603979776,24,{headerCell:0}),e.Lb(603979776,25,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,v)),e.tb(95,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[24,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,w)),e.tb(98,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[23,4]],r.b,null,[c.b]),(l()(),e.ub(100,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(102,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,26,{cell:0}),e.Lb(603979776,27,{headerCell:0}),e.Lb(603979776,28,{footerCell:0}),e.Kb(2048,[[1,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,$)),e.tb(108,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[27,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,R)),e.tb(111,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[26,4]],r.b,null,[c.b]),(l()(),e.jb(0,null,null,2,null,A)),e.tb(114,540672,null,0,c.h,[e.N,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[3,4]],r.l,null,[c.h]),(l()(),e.jb(0,null,null,2,null,x)),e.tb(117,540672,null,0,c.j,[e.N,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[2,4]],r.n,null,[c.j]),(l()(),e.ub(119,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Otras Ofertas"])),(l()(),e.ub(121,0,null,null,90,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""]],null,null,null,f.f,f.c)),e.Kb(6144,null,r.o,null,[c.k]),e.tb(123,2342912,null,4,c.k,[e.s,e.h,e.k,[8,null],[2,m.b],i.d,d.a],{dataSource:[0,"dataSource"]},null),e.Lb(603979776,29,{_contentColumnDefs:1}),e.Lb(603979776,30,{_contentRowDefs:1}),e.Lb(603979776,31,{_contentHeaderRowDefs:1}),e.Lb(603979776,32,{_contentFooterRowDefs:1}),(l()(),e.ub(128,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(130,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,33,{cell:0}),e.Lb(603979776,34,{headerCell:0}),e.Lb(603979776,35,{footerCell:0}),e.Kb(2048,[[29,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,T)),e.tb(136,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[34,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,F)),e.tb(139,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[33,4]],r.b,null,[c.b]),(l()(),e.ub(141,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(143,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,36,{cell:0}),e.Lb(603979776,37,{headerCell:0}),e.Lb(603979776,38,{footerCell:0}),e.Kb(2048,[[29,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,S)),e.tb(149,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[37,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,I)),e.tb(152,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[36,4]],r.b,null,[c.b]),(l()(),e.ub(154,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(156,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,39,{cell:0}),e.Lb(603979776,40,{headerCell:0}),e.Lb(603979776,41,{footerCell:0}),e.Kb(2048,[[29,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,G)),e.tb(162,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[40,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,H)),e.tb(165,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[39,4]],r.b,null,[c.b]),(l()(),e.ub(167,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(169,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,42,{cell:0}),e.Lb(603979776,43,{headerCell:0}),e.Lb(603979776,44,{footerCell:0}),e.Kb(2048,[[29,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,U)),e.tb(175,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[43,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,Q)),e.tb(178,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[42,4]],r.b,null,[c.b]),(l()(),e.ub(180,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(182,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,45,{cell:0}),e.Lb(603979776,46,{headerCell:0}),e.Lb(603979776,47,{footerCell:0}),e.Kb(2048,[[29,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,q)),e.tb(188,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[46,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,z)),e.tb(191,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[45,4]],r.b,null,[c.b]),(l()(),e.ub(193,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.tb(195,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,48,{cell:0}),e.Lb(603979776,49,{headerCell:0}),e.Lb(603979776,50,{footerCell:0}),e.Kb(2048,[[29,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,J)),e.tb(201,16384,null,0,c.f,[e.N],null,null),e.Kb(2048,[[49,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,V)),e.tb(204,16384,null,0,c.b,[e.N],null,null),e.Kb(2048,[[48,4]],r.b,null,[c.b]),(l()(),e.jb(0,null,null,2,null,W)),e.tb(207,540672,null,0,c.h,[e.N,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[31,4]],r.l,null,[c.h]),(l()(),e.jb(0,null,null,2,null,X)),e.tb(210,540672,null,0,c.j,[e.N,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[30,4]],r.n,null,[c.j])],(function(l,n){var u=n.component;l(n,4,0,u.offers),l(n,11,0,"job"),l(n,24,0,"company"),l(n,37,0,"category"),l(n,50,0,"date"),l(n,63,0,"province"),l(n,76,0,"municipe"),l(n,89,0,"subscribe"),l(n,102,0,"editar"),l(n,114,0,u.displayedColumns),l(n,117,0,u.displayedColumns),l(n,123,0,u.offersOther),l(n,130,0,"job"),l(n,143,0,"company"),l(n,156,0,"category"),l(n,169,0,"date"),l(n,182,0,"province"),l(n,195,0,"municipe"),l(n,207,0,u.displayedColumnsOther),l(n,210,0,u.displayedColumnsOther)}),null)}class B{constructor(){this.offers=[]}ngOnChanges(){this.offers=this.user.offers}}var Y=e.sb({encapsulation:2,styles:[],data:{}});function ll(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(2,null,["",""])),(l()(),e.ub(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(4,null,["",""])),(l()(),e.ub(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(6,null,["",""])),(l()(),e.ub(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(8,null,["",""])),(l()(),e.ub(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(10,null,["",""])),(l()(),e.ub(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(12,null,["",""])),(l()(),e.ub(13,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.ub(14,0,null,null,3,"a",[["style","cursor:pointer"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Gb(l,15).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.tb(15,671744,null,0,s.q,[s.o,s.a,i.i],{routerLink:[0,"routerLink"]},null),e.Hb(16,2),(l()(),e.Nb(-1,null,["Ver Detalle"]))],(function(l,n){var u=l(n,16,0,"/admin/offers/",n.context.$implicit.id);l(n,15,0,u)}),(function(l,n){l(n,2,0,n.context.$implicit.job.name),l(n,4,0,n.context.$implicit.company.name),l(n,6,0,n.context.$implicit.category.name),l(n,8,0,n.context.$implicit.date),l(n,10,0,n.context.$implicit.province.name),l(n,12,0,n.context.$implicit.municipe.name),l(n,14,0,e.Gb(n,15).target,e.Gb(n,15).href)}))}function nl(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Mis Ofertas"])),(l()(),e.ub(2,0,null,null,19,"table",[["class","table table-bordered table-striped"]],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,15,"thead",[["class","thead-light"]],null,null,null,null,null)),(l()(),e.ub(4,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Puesto"])),(l()(),e.ub(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Empresa"])),(l()(),e.ub(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Familia"])),(l()(),e.ub(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Fecha"])),(l()(),e.ub(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Provincia"])),(l()(),e.ub(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Municipio"])),(l()(),e.ub(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Acciones"])),(l()(),e.ub(19,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,ll)),e.tb(21,278528,null,0,i.k,[e.Q,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,21,0,n.component.offers)}),null)}var ul=u("dnXt");u("Deqt"),u("hAnb"),u("wlfC");var el=u("DQLy");const tl=Object(el.v)("offers");class bl{constructor(l,n){this.route=l,this.store$=n,this.isOffersList=!0,this.route.data.subscribe(l=>this.isOffersList=!l.my_offers),this.user$=this.store$.select(ul.b),this.offers$=this.store$.select(tl)}ngOnInit(){}}var cl=e.sb({encapsulation:0,styles:[[""]],data:{}});function rl(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,3,"app-offers-list",[],null,null,null,Z,p)),e.tb(1,573440,null,0,h,[],{user:[0,"user"],offers:[1,"offers"]},null),e.Ib(131072,i.b,[e.h]),e.Ib(131072,i.b,[e.h])],(function(l,n){var u=n.component;l(n,1,0,e.Ob(n,1,0,e.Gb(n,2).transform(u.user$)),e.Ob(n,1,1,e.Gb(n,3).transform(u.offers$)))}),null)}function al(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,2,"app-offers-profile",[],null,null,null,nl,Y)),e.tb(1,573440,null,0,B,[],{user:[0,"user"]},null),e.Ib(131072,i.b,[e.h])],(function(l,n){var u=n.component;l(n,1,0,e.Ob(n,1,0,e.Gb(n,2).transform(u.user$)))}),null)}function ol(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" Offers\n"])),(l()(),e.jb(16777216,null,null,1,null,rl)),e.tb(3,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,al)),e.tb(5,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,u.isOffersList),l(n,5,0,!u.isOffersList)}),null)}function il(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"app-offers",[],null,null,null,ol,cl)),e.tb(1,114688,null,0,bl,[s.a,el.m],null,null)],(function(l,n){l(n,1,0)}),null)}var sl=e.qb("app-offers",bl,il,{},{},[]);class fl{constructor(){this.subscribeOffer=new e.m,this.unsubscribeOffer=new e.m}subscribe(){const l=[...this.user.offers,this.offer],n=Object.assign({},this.user,{offers:l});this.subscribeOffer.emit(n)}unsubscribe(){const l=this.user.offers.filter(l=>l.id!==this.offer.id),n=Object.assign({},this.user,{offers:l});this.unsubscribeOffer.emit(n)}isSubscribe(){return!(!this.user||!this.user.offers.find(l=>this.offer.id===l.id))}}var ml=e.sb({encapsulation:0,styles:[[""]],data:{}});function dl(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.subscribe()&&e),e}),null,null)),(l()(),e.Nb(-1,null,[" Inscribirse\n"]))],null,null)}function hl(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.unsubscribe()&&e),e}),null,null)),(l()(),e.Nb(-1,null,[" Eliminar oferta\n"]))],null,null)}function pl(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" Offers Detail\n"])),(l()(),e.ub(2,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Nb(3,null,[""," "])),e.Ib(0,i.f,[]),(l()(),e.jb(16777216,null,null,1,null,dl)),e.tb(6,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,hl)),e.tb(8,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,6,0,!u.isSubscribe()),l(n,8,0,u.isSubscribe())}),(function(l,n){var u=n.component;l(n,3,0,e.Ob(n,3,0,e.Gb(n,4).transform(u.offer)))}))}var Nl=u("lJxs"),El=u("eIep"),Ol=u("dS7W");class jl{constructor(l,n){this.store$=l,this.route=n,this.user$=this.store$.select(ul.b),this.offer$=this.route.params.pipe(Object(Nl.a)(({id:l})=>Number.parseInt(l)),Object(El.a)(l=>this.store$.select(function(l){return Object(el.x)(tl,n=>n.find(n=>n.id===l))}(l))))}onSubscribeOffer(l){this.store$.dispatch(new Ol.l(l))}onUnsubscribeOffer(l){this.store$.dispatch(new Ol.l(l))}}var Ll=e.sb({encapsulation:2,styles:[],data:{}});function Kl(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,3,"app-offers-detail",[],null,[[null,"subscribeOffer"],[null,"unsubscribeOffer"]],(function(l,n,u){var e=!0,t=l.component;return"subscribeOffer"===n&&(e=!1!==t.onSubscribeOffer(u)&&e),"unsubscribeOffer"===n&&(e=!1!==t.onUnsubscribeOffer(u)&&e),e}),pl,ml)),e.tb(1,49152,null,0,fl,[],{offer:[0,"offer"],user:[1,"user"]},{subscribeOffer:"subscribeOffer",unsubscribeOffer:"unsubscribeOffer"}),e.Ib(131072,i.b,[e.h]),e.Ib(131072,i.b,[e.h])],(function(l,n){var u=n.component;l(n,1,0,e.Ob(n,1,0,e.Gb(n,2).transform(u.offer$)),e.Ob(n,1,1,e.Gb(n,3).transform(u.user$)))}),null)}function gl(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"app-offers-detail-wrapper",[],null,null,null,Kl,Ll)),e.tb(1,49152,null,0,jl,[el.m,s.a],null,null)],null,null)}var _l=e.qb("app-offers-detail-wrapper",jl,gl,{},{},[]),kl=u("NcP4"),Pl=u("xYTU"),Cl=u("t68o"),yl=u("POq0"),vl=u("Xd0L"),Dl=u("QQfA"),Ml=u("Mz6y"),wl=u("cUpR"),$l=u("JjoW"),Rl=u("gavF"),Al=u("s6ns");const xl={my_offers:!0};class Tl{}var Fl=u("Fwaw"),Sl=u("HsOI"),Il=u("oapL"),Gl=u("ZwOa"),Hl=u("igqZ"),Ul=u("BzsH"),Ql=u("hOhj"),ql=u("BV1i"),zl=u("02hT"),Jl=u("Q+lL"),Vl=u("5GAg"),Wl=u("zMNK"),Xl=u("dFDH"),Zl=u("FVPZ"),Bl=u("elxJ"),Yl=u("r0V8"),ln=u("W5yJ"),nn=u("5dmV");u.d(n,"OffersModuleNgFactory",(function(){return un}));var un=e.rb(t,[],(function(l){return e.Db([e.Eb(512,e.j,e.cb,[[8,[b.a,sl,_l,kl.a,Pl.a,Pl.b,Cl.a]],[3,e.j],e.y]),e.Eb(4608,i.n,i.m,[e.u,[2,i.z]]),e.Eb(4608,yl.c,yl.c,[]),e.Eb(4608,vl.b,vl.b,[]),e.Eb(4608,Dl.c,Dl.c,[Dl.i,Dl.e,e.j,Dl.h,Dl.f,e.r,e.A,i.d,m.b,[2,i.h]]),e.Eb(5120,Dl.j,Dl.k,[Dl.c]),e.Eb(5120,Ml.a,Ml.b,[Dl.c]),e.Eb(4608,wl.e,vl.c,[[2,vl.g],[2,vl.l]]),e.Eb(5120,$l.a,$l.b,[Dl.c]),e.Eb(5120,Rl.a,Rl.d,[Dl.c]),e.Eb(5120,Al.b,Al.c,[Dl.c]),e.Eb(135680,Al.d,Al.d,[Dl.c,e.r,[2,i.h],[2,Al.a],Al.b,[3,Al.d],Dl.e]),e.Eb(1073742336,i.c,i.c,[]),e.Eb(1073742336,s.r,s.r,[[2,s.x],[2,s.o]]),e.Eb(1073742336,Tl,Tl,[]),e.Eb(1073742336,m.a,m.a,[]),e.Eb(1073742336,vl.l,vl.l,[[2,vl.d],[2,wl.f]]),e.Eb(1073742336,d.b,d.b,[]),e.Eb(1073742336,vl.u,vl.u,[]),e.Eb(1073742336,Fl.c,Fl.c,[]),e.Eb(1073742336,yl.d,yl.d,[]),e.Eb(1073742336,Sl.d,Sl.d,[]),e.Eb(1073742336,Il.c,Il.c,[]),e.Eb(1073742336,Gl.b,Gl.b,[]),e.Eb(1073742336,Hl.c,Hl.c,[]),e.Eb(1073742336,Ul.b,Ul.b,[]),e.Eb(1073742336,Ql.c,Ql.c,[]),e.Eb(1073742336,ql.a,ql.a,[]),e.Eb(1073742336,vl.m,vl.m,[]),e.Eb(1073742336,vl.s,vl.s,[]),e.Eb(1073742336,zl.a,zl.a,[]),e.Eb(1073742336,Jl.c,Jl.c,[]),e.Eb(1073742336,Vl.a,Vl.a,[]),e.Eb(1073742336,Wl.f,Wl.f,[]),e.Eb(1073742336,Dl.g,Dl.g,[]),e.Eb(1073742336,Ml.c,Ml.c,[]),e.Eb(1073742336,vl.q,vl.q,[]),e.Eb(1073742336,$l.d,$l.d,[]),e.Eb(1073742336,Rl.c,Rl.c,[]),e.Eb(1073742336,Rl.b,Rl.b,[]),e.Eb(1073742336,Xl.d,Xl.d,[]),e.Eb(1073742336,Zl.a,Zl.a,[]),e.Eb(1073742336,o.c,o.c,[]),e.Eb(1073742336,Bl.a,Bl.a,[]),e.Eb(1073742336,Yl.d,Yl.d,[]),e.Eb(1073742336,Yl.c,Yl.c,[]),e.Eb(1073742336,ln.a,ln.a,[]),e.Eb(1073742336,Al.i,Al.i,[]),e.Eb(1073742336,r.p,r.p,[]),e.Eb(1073742336,c.l,c.l,[]),e.Eb(1073742336,nn.a,nn.a,[]),e.Eb(1073742336,t,t,[]),e.Eb(1024,s.m,(function(){return[[{path:"",component:bl},{path:"my-offers",component:bl,data:xl},{path:":id",component:jl}]]}),[])])}))}}]);