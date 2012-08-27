/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.charting.Chart2D"],["require","dojox.gfx"],["require","dojox.lang.functional"],["require","dojox.lang.functional.fold"],["require","dojox.lang.functional.reversed"],["require","dojox.charting.Theme"],["require","dojox.charting.Series"],["require","dojox.charting.axis2d.Default"],["require","dojox.charting.plot2d.Default"],["require","dojox.charting.plot2d.Lines"],["require","dojox.charting.plot2d.Areas"],["require","dojox.charting.plot2d.Markers"],["require","dojox.charting.plot2d.MarkersOnly"],["require","dojox.charting.plot2d.Scatter"],["require","dojox.charting.plot2d.Stacked"],["require","dojox.charting.plot2d.StackedLines"],["require","dojox.charting.plot2d.StackedAreas"],["require","dojox.charting.plot2d.Columns"],["require","dojox.charting.plot2d.StackedColumns"],["require","dojox.charting.plot2d.ClusteredColumns"],["require","dojox.charting.plot2d.Bars"],["require","dojox.charting.plot2d.StackedBars"],["require","dojox.charting.plot2d.ClusteredBars"],["require","dojox.charting.plot2d.Grid"],["require","dojox.charting.plot2d.Pie"],["require","dojox.charting.plot2d.Bubble"],["require","dojox.charting.plot2d.Candlesticks"],["require","dojox.charting.plot2d.OHLC"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.charting.Chart2D"]){_4._hasResource["dojox.charting.Chart2D"]=true;_4.provide("dojox.charting.Chart2D");_4.require("dojox.gfx");_4.require("dojox.lang.functional");_4.require("dojox.lang.functional.fold");_4.require("dojox.lang.functional.reversed");_4.require("dojox.charting.Theme");_4.require("dojox.charting.Series");_4.require("dojox.charting.axis2d.Default");_4.require("dojox.charting.plot2d.Default");_4.require("dojox.charting.plot2d.Lines");_4.require("dojox.charting.plot2d.Areas");_4.require("dojox.charting.plot2d.Markers");_4.require("dojox.charting.plot2d.MarkersOnly");_4.require("dojox.charting.plot2d.Scatter");_4.require("dojox.charting.plot2d.Stacked");_4.require("dojox.charting.plot2d.StackedLines");_4.require("dojox.charting.plot2d.StackedAreas");_4.require("dojox.charting.plot2d.Columns");_4.require("dojox.charting.plot2d.StackedColumns");_4.require("dojox.charting.plot2d.ClusteredColumns");_4.require("dojox.charting.plot2d.Bars");_4.require("dojox.charting.plot2d.StackedBars");_4.require("dojox.charting.plot2d.ClusteredBars");_4.require("dojox.charting.plot2d.Grid");_4.require("dojox.charting.plot2d.Pie");_4.require("dojox.charting.plot2d.Bubble");_4.require("dojox.charting.plot2d.Candlesticks");_4.require("dojox.charting.plot2d.OHLC");(function(){var df=_6.lang.functional,dc=_6.charting,_7=df.lambda("item.clear()"),_8=df.lambda("item.purgeGroup()"),_9=df.lambda("item.destroy()"),_a=df.lambda("item.dirty = false"),_b=df.lambda("item.dirty = true");_4.declare("dojox.charting.Chart2D",null,{constructor:function(_c,_d){if(!_d){_d={};}this.margins=_d.margins?_d.margins:{l:10,t:10,r:10,b:10};this.stroke=_d.stroke;this.fill=_d.fill;this.theme=null;this.axes={};this.stack=[];this.plots={};this.series=[];this.runs={};this.dirty=true;this.coords=null;this.node=_4.byId(_c);var _e=_4.marginBox(_c);this.surface=_6.gfx.createSurface(this.node,_e.w,_e.h);},destroy:function(){_4.forEach(this.series,_9);_4.forEach(this.stack,_9);df.forIn(this.axes,_9);this.surface.destroy();},getCoords:function(){if(!this.coords){this.coords=_4.coords(this.node,true);}return this.coords;},setTheme:function(_f){this.theme=_f._clone();this.dirty=true;return this;},addAxis:function(_10,_11){var _12;if(!_11||!("type" in _11)){_12=new dc.axis2d.Default(this,_11);}else{_12=typeof _11.type=="string"?new dc.axis2d[_11.type](this,_11):new _11.type(this,_11);}_12.name=_10;_12.dirty=true;if(_10 in this.axes){this.axes[_10].destroy();}this.axes[_10]=_12;this.dirty=true;return this;},getAxis:function(_13){return this.axes[_13];},removeAxis:function(_14){if(_14 in this.axes){this.axes[_14].destroy();delete this.axes[_14];this.dirty=true;}return this;},addPlot:function(_15,_16){var _17;if(!_16||!("type" in _16)){_17=new dc.plot2d.Default(this,_16);}else{_17=typeof _16.type=="string"?new dc.plot2d[_16.type](this,_16):new _16.type(this,_16);}_17.name=_15;_17.dirty=true;if(_15 in this.plots){this.stack[this.plots[_15]].destroy();this.stack[this.plots[_15]]=_17;}else{this.plots[_15]=this.stack.length;this.stack.push(_17);}this.dirty=true;return this;},removePlot:function(_18){if(_18 in this.plots){var _19=this.plots[_18];delete this.plots[_18];this.stack[_19].destroy();this.stack.splice(_19,1);df.forIn(this.plots,function(idx,_1a,_1b){if(idx>_19){_1b[_1a]=idx-1;}});this.dirty=true;}return this;},addSeries:function(_1c,_1d,_1e){var run=new dc.Series(this,_1d,_1e);if(_1c in this.runs){this.series[this.runs[_1c]].destroy();this.series[this.runs[_1c]]=run;}else{this.runs[_1c]=this.series.length;this.series.push(run);}run.name=_1c;this.dirty=true;if(!("ymin" in run)&&"min" in run){run.ymin=run.min;}if(!("ymax" in run)&&"max" in run){run.ymax=run.max;}return this;},removeSeries:function(_1f){if(_1f in this.runs){var _20=this.runs[_1f],_21=this.series[_20].plot;delete this.runs[_1f];this.series[_20].destroy();this.series.splice(_20,1);df.forIn(this.runs,function(idx,_22,_23){if(idx>_20){_23[_22]=idx-1;}});this.dirty=true;}return this;},updateSeries:function(_24,_25){if(_24 in this.runs){var run=this.series[this.runs[_24]];run.data=_25;run.dirty=true;this._invalidateDependentPlots(run.plot,false);this._invalidateDependentPlots(run.plot,true);}return this;},resize:function(_26,_27){var box;switch(arguments.length){case 0:box=_4.marginBox(this.node);break;case 1:box=_26;break;default:box={w:_26,h:_27};break;}_4.marginBox(this.node,box);this.surface.setDimensions(box.w,box.h);this.dirty=true;this.coords=null;return this.render();},getGeometry:function(){var ret={};df.forIn(this.axes,function(_28){if(_28.initialized()){ret[_28.name]={name:_28.name,vertical:_28.vertical,scaler:_28.scaler,ticks:_28.ticks};}});return ret;},setAxisWindow:function(_29,_2a,_2b){var _2c=this.axes[_29];if(_2c){_2c.setWindow(_2a,_2b);}return this;},setWindow:function(sx,sy,dx,dy){if(!("plotArea" in this)){this.calculateGeometry();}df.forIn(this.axes,function(_2d){var _2e,_2f,_30=_2d.getScaler().bounds,s=_30.span/(_30.upper-_30.lower);if(_2d.vertical){_2e=sy;_2f=dy/s/_2e;}else{_2e=sx;_2f=dx/s/_2e;}_2d.setWindow(_2e,_2f);});return this;},calculateGeometry:function(){if(this.dirty){return this.fullGeometry();}_4.forEach(this.stack,function(_31){if(_31.dirty||(_31.hAxis&&this.axes[_31.hAxis].dirty)||(_31.vAxis&&this.axes[_31.vAxis].dirty)){_31.calculateAxes(this.plotArea);}},this);return this;},fullGeometry:function(){this._makeDirty();_4.forEach(this.stack,_7);if(!this.theme){this.setTheme(new _6.charting.Theme(_6.charting._def));}_4.forEach(this.series,function(run){if(!(run.plot in this.plots)){var _32=new dc.plot2d.Default(this,{});_32.name=run.plot;this.plots[run.plot]=this.stack.length;this.stack.push(_32);}this.stack[this.plots[run.plot]].addSeries(run);},this);_4.forEach(this.stack,function(_33){if(_33.hAxis){_33.setAxis(this.axes[_33.hAxis]);}if(_33.vAxis){_33.setAxis(this.axes[_33.vAxis]);}},this);var dim=this.dim=this.surface.getDimensions();dim.width=_6.gfx.normalizedLength(dim.width);dim.height=_6.gfx.normalizedLength(dim.height);df.forIn(this.axes,_7);_4.forEach(this.stack,function(p){p.calculateAxes(dim);});var _34=this.offsets={l:0,r:0,t:0,b:0};df.forIn(this.axes,function(_35){df.forIn(_35.getOffsets(),function(o,i){_34[i]+=o;});});df.forIn(this.margins,function(o,i){_34[i]+=o;});this.plotArea={width:dim.width-_34.l-_34.r,height:dim.height-_34.t-_34.b};df.forIn(this.axes,_7);_4.forEach(this.stack,function(_36){_36.calculateAxes(this.plotArea);},this);return this;},render:function(){if(this.theme){this.theme.clear();}if(this.dirty){return this.fullRender();}this.calculateGeometry();df.forEachRev(this.stack,function(_37){_37.render(this.dim,this.offsets);},this);df.forIn(this.axes,function(_38){_38.render(this.dim,this.offsets);},this);this._makeClean();if(this.surface.render){this.surface.render();}return this;},fullRender:function(){this.fullGeometry();var _39=this.offsets,dim=this.dim;var _3a=df.foldl(this.stack,"z + plot.getRequiredColors()",0);this.theme.defineColors({num:_3a,cache:false});_4.forEach(this.series,_8);df.forIn(this.axes,_8);_4.forEach(this.stack,_8);this.surface.clear();var t=this.theme,_3b=t.plotarea&&t.plotarea.fill,_3c=t.plotarea&&t.plotarea.stroke;if(_3b){this.surface.createRect({x:_39.l,y:_39.t,width:dim.width-_39.l-_39.r,height:dim.height-_39.t-_39.b}).setFill(_3b);}if(_3c){this.surface.createRect({x:_39.l,y:_39.t,width:dim.width-_39.l-_39.r-1,height:dim.height-_39.t-_39.b-1}).setStroke(_3c);}df.foldr(this.stack,function(z,_3d){return _3d.render(dim,_39),0;},0);_3b=this.fill?this.fill:(t.chart&&t.chart.fill);_3c=this.stroke?this.stroke:(t.chart&&t.chart.stroke);if(_3b=="inherit"){var _3e=this.node,_3b=new _4.Color(_4.style(_3e,"backgroundColor"));while(_3b.a==0&&_3e!=document.documentElement){_3b=new _4.Color(_4.style(_3e,"backgroundColor"));_3e=_3e.parentNode;}}if(_3b){if(_39.l){this.surface.createRect({width:_39.l,height:dim.height+1}).setFill(_3b);}if(_39.r){this.surface.createRect({x:dim.width-_39.r,width:_39.r+1,height:dim.height+1}).setFill(_3b);}if(_39.t){this.surface.createRect({width:dim.width+1,height:_39.t}).setFill(_3b);}if(_39.b){this.surface.createRect({y:dim.height-_39.b,width:dim.width+1,height:_39.b+2}).setFill(_3b);}}if(_3c){this.surface.createRect({width:dim.width-1,height:dim.height-1}).setStroke(_3c);}df.forIn(this.axes,function(_3f){_3f.render(dim,_39);});this._makeClean();if(this.surface.render){this.surface.render();}return this;},connectToPlot:function(_40,_41,_42){return _40 in this.plots?this.stack[this.plots[_40]].connect(_41,_42):null;},_makeClean:function(){_4.forEach(this.axes,_a);_4.forEach(this.stack,_a);_4.forEach(this.series,_a);this.dirty=false;},_makeDirty:function(){_4.forEach(this.axes,_b);_4.forEach(this.stack,_b);_4.forEach(this.series,_b);this.dirty=true;},_invalidateDependentPlots:function(_43,_44){if(_43 in this.plots){var _45=this.stack[this.plots[_43]],_46,_47=_44?"vAxis":"hAxis";if(_45[_47]){_46=this.axes[_45[_47]];if(_46&&_46.dependOnData()){_46.dirty=true;_4.forEach(this.stack,function(p){if(p[_47]&&p[_47]==_45[_47]){p.dirty=true;}});}}else{_45.dirty=true;}}}});})();}}};});