uagent = window.navigator.userAgent.toLowerCase();IEB=(uagent.indexOf('msie') != -1)?true:false;OPB=(uagent.indexOf('opera') != -1)?true:false;CRB=(uagent.indexOf('chrome') != -1)?true:false;SFB=(uagent.indexOf('safari') != -1)?true:false;var scompat = document.compatMode;var avess=null;var avesdescgoster=0;var avesthumbgoster=0;var avescwidth=0;var avescheight=0;var avescalc=0;var avestam=0;var aveskalan=0;var aveskalany=0;var avests="";var avesds="";var avesjbtype=0;var avesrealcurrent=0;var avestimeo=null;avesthumbs_obj=null;avesmoving_obj=null;avesTotalThumbWidth=0;avesTotalThumbHeight=0;avesMoveIcWidth=0;var TBW=0;var CursorStr="default";var avesDescCalcWidth=0;var avesDescCalcHeight=0;var avesDescCalcIcWidth=0;var avesDescCalcIcHeight=0;var MoveWidth=0;var ThumbAreaWidth=340;var ThumbAreaHeight=340;avesimgarr=new Array();avesthumbimgstr=new Array();avesimgstr=new Array();aveslinkstr=new Array();avesclslinkstr=new Array();avestitarr=new Array();avesdesarr=new Array();avesimgarr[0]=new Image();avesimgarr[0].c=0;avesimgarr[0].onload = avessecondcomplate;avesimgarr[0].src=avesfoldername+'ave1.jpg';avesimgstr[0]=avesfoldername+'ave1.jpg';avesthumbimgstr[0]=avesfoldername+'ave1.jpg';aveslinkstr[0]='';avesclslinkstr[0]='';avestitarr[0]="";avesdesarr[0]="";avesimgarr[1]=new Image();avesimgarr[1].c=0;avesimgarr[1].onload = avessecondcomplate;avesimgarr[1].src=avesfoldername+'ave2.jpg';avesimgstr[1]=avesfoldername+'ave2.jpg';avesthumbimgstr[1]=avesfoldername+'ave2.jpg';aveslinkstr[1]='';avesclslinkstr[1]='';avestitarr[1]="";avesdesarr[1]="";avesimgarr[2]=new Image();avesimgarr[2].c=0;avesimgarr[2].onload = avessecondcomplate;avesimgarr[2].src=avesfoldername+'ave3.jpg';avesimgstr[2]=avesfoldername+'ave3.jpg';avesthumbimgstr[2]=avesfoldername+'ave3.jpg';aveslinkstr[2]='';avesclslinkstr[2]='';avestitarr[2]="";avesdesarr[2]="";avesimgarr[3]=new Image();avesimgarr[3].c=0;avesimgarr[3].onload = avessecondcomplate;avesimgarr[3].src=avesfoldername+'ave4.jpg';avesimgstr[3]=avesfoldername+'ave4.jpg';avesthumbimgstr[3]=avesfoldername+'ave4.jpg';aveslinkstr[3]='';avesclslinkstr[3]='';avestitarr[3]="";avesdesarr[3]="";avesimgarr[4]=new Image();avesimgarr[4].c=0;avesimgarr[4].onload = avessecondcomplate;avesimgarr[4].src=avesfoldername+'ave6.jpg';avesimgstr[4]=avesfoldername+'ave6.jpg';avesthumbimgstr[4]=avesfoldername+'ave6.jpg';aveslinkstr[4]='';avesclslinkstr[4]='';avestitarr[4]="";avesdesarr[4]="";avesimgarr[5]=new Image();avesimgarr[5].c=0;avesimgarr[5].onload = avessecondcomplate;avesimgarr[5].src=avesfoldername+'ave7.jpg';avesimgstr[5]=avesfoldername+'ave7.jpg';avesthumbimgstr[5]=avesfoldername+'ave7.jpg';aveslinkstr[5]='';avesclslinkstr[5]='';avestitarr[5]="";avesdesarr[5]="";avesimgarr[6]=new Image();avesimgarr[6].c=0;avesimgarr[6].onload = avessecondcomplate;avesimgarr[6].src=avesfoldername+'ave8.jpg';avesimgstr[6]=avesfoldername+'ave8.jpg';avesthumbimgstr[6]=avesfoldername+'ave8.jpg';aveslinkstr[6]='';avesclslinkstr[6]='';avestitarr[6]="";avesdesarr[6]="";avesimgarr[7]=new Image();avesimgarr[7].c=0;avesimgarr[7].onload = avessecondcomplate;avesimgarr[7].src=avesfoldername+'ave9.jpg';avesimgstr[7]=avesfoldername+'ave9.jpg';avesthumbimgstr[7]=avesfoldername+'ave9.jpg';aveslinkstr[7]='';avesclslinkstr[7]='';avestitarr[7]="";avesdesarr[7]="";avesimgarr[8]=new Image();avesimgarr[8].c=0;avesimgarr[8].onload = avessecondcomplate;avesimgarr[8].src=avesfoldername+'ave10.jpg';avesimgstr[8]=avesfoldername+'ave10.jpg';avesthumbimgstr[8]=avesfoldername+'ave10.jpg';aveslinkstr[8]='';avesclslinkstr[8]='';avestitarr[8]="";avesdesarr[8]="";if((IEB==true)&&(scompat == "BackCompat" )){    avescwidth=175;    avescheight=175;}else{    avescwidth=175-2*(0);    avescheight=175-2*(0);}var avesicwidth=175-2*(0);var avesicheight=175-2*(0);avesDescCalcWidth=260;avesDescCalcHeight=80;if((IEB==true)&&(scompat == "BackCompat" )){	avesDescCalcIcWidth=avesDescCalcWidth;	avesDescCalcIcHeight=avesDescCalcHeight;}else{    avesDescCalcIcWidth=avesDescCalcWidth-2*(2)-2*(3);    avesDescCalcIcHeight=avesDescCalcHeight-2*(2)-2*(3);}document.write('<div style="position:relative;width:'+avescwidth+'px;height:'+avescheight+'px;overflow:hidden;border-style:'+'solid'+';border-width:'+0+'px;border-color:#'+'CCCCCC'+';'+''+''+'">');document.write('<div id="avesdv" style="position:relative;width:'+avesicwidth+'px;height:'+avesicheight+'px;overflow:hidden;padding:0px;margin:0px;z-index:1;'+'FILTER: progid:DXImageTransform.Microsoft.Fade(Overlap=1.00,duration=2,enabled=false);'+'"'+' onfilterchange=avesFadeBitti()'+'></div>');for(i=0;i<9;i++){	if(0==0){avesds=avesds+aveslinkstr[i];if(aveslinkstr[i].length>2){CursorStr="pointer";}else{CursorStr="default";}}	avesds=avesds+'<div id="avesdesc'+i+'" style="position:absolute;top:'+120+'px;left:'+10+'px;width:'+avesDescCalcWidth+'px;height:'+avesDescCalcHeight+'px;visibility:hidden;overflow:hidden;cursor:'+CursorStr+';z-index:20;">';	avesds=avesds+'<div style="position:absolute;left:0px;top:0px;width:'+avesDescCalcWidth+'px;height:'+avesDescCalcHeight+'px;border-style:solid;border-width:0px;border-color:#000000;background-color:#'+'000000'+';opacity: '+'0.50'+';filter:alpha(opacity='+'50'+');-moz-opacity:'+'0.50'+';"></div>';	avesds=avesds+'<div style="position:relative;left:0px;top:0px;width:'+avesDescCalcIcWidth+'px;height:'+avesDescCalcIcHeight+'px;overflow:hidden;padding:'+3+'px;text-align:'+'left'+';border-style:'+'solid'+';border-width:'+2+'px;border-color:#'+'990000'+';color:#'+'FFFFFF'+';font-family:'+'arial'+';font-style:'+'normal'+';font-size: '+'13px'+';font-weight:'+'normal'+';text-decoration:'+'none'+';opacity: 1.0;filter:alpha(opacity=100);-moz-opacity:1.0;">';	avesds=avesds+'<span style="color:#'+'FECE3F'+';font-family:'+'arial'+';font-style:'+'normal'+';font-size: '+'14px'+';font-weight:'+'bold'+';text-decoration:'+'none'+';">'+avestitarr[i]+'</span><br />'+avesdesarr[i];	avesds=avesds+'</div>';	avesds=avesds+'</div>';	if(0==0){avesds=avesds+avesclslinkstr[i];}	}document.write(''+avesds);function avesShowCurrentDesc(){	if((avesdescgoster==1)&&( (avestitarr[avesrealcurrent].length>0) || (avesdesarr[avesrealcurrent].length>0)  ))	{		after_des=document.getElementById('avesdesc'+avesrealcurrent);		after_des.style.visibility="visible";		}}function avesHideCurrentDesc(){	before_des=document.getElementById('avesdesc'+avesvcurr);	before_des.style.visibility="hidden";}function avesHighlightCurrTumb(){	if((0==1)&&(0==0))	{		avesbeforethumb=document.getElementById('avesthumb'+avesvcurr);		avesafterthumb=document.getElementById('avesthumb'+avesrealcurrent);		avesbeforethumb.style.borderColor='999999';		avesafterthumb.style.borderColor='990000';	}}document.write('</div>');function aveszindx(){	avesobjn.style.visibility="visible";	avesobjc.style.zIndex=2;	avesobjn.style.zIndex=3;    }function avesThumbOut(tobj,nm){	if((avesvcurr==nm)&&(0==0))	{}	else	{		tobj.style.borderColor='999999';	}}function avesThumbOver(tobj,nm){	tobj.style.borderColor='990000';}function avesSonrakiClick(c,n){	avesvcurr=c;	avesvnext=n;			avesobjc=document.getElementById('avesd'+avesvcurr);	avesobjn=document.getElementById('avesd'+avesvnext);		if(avesfademi!=1)	{		avesobjc.style.visibility="visible";			avesobjn.style.visibility="visible";		}		}function avesSonraki(){	avesvcurr=avesvnext;	avesvnext=avesvnext+1;		if(avesvnext>=9)	{		avesvnext=0;		avestam=1;	}		avesobjc=document.getElementById('avesd'+avesvcurr);	avesobjn=document.getElementById('avesd'+avesvnext);		      }function avessecondcomplate(){	this.c=1;}function avesdevam(fm,pt){	if((avesimgarr[avesvnext].c==1)&&(avesimgarr[avesvcurr].c==1))	{		avestimeo=setTimeout(fm+'()',pt);	}	else	{		setTimeout('avesdevam("'+fm+'")',500);	}	var avescagain=1;	for(i=0;i<9;i++)	{		if(avesimgarr[i].c==1){}		else{avescagain=0;}	}	if(avescagain==1){avestam=1;}}function ThumbClick(clicked_img,tobj){	if(avesjbtype==1){return;}	clearTimeout(avestimeo);	avesSonrakiClick(avesrealcurrent,clicked_img);	if(avesfademi==1)        {            if(IEB==true)            {		if(avestam==0)		{	    		avesdevam("avesdotrans",4000);		}		else		{			avesdotrans();		}            }            else            {		if(avestam==0)		{    			avesdevam("avesbeftrans",4000);		}		else		{			avesbeftrans();		}            }        }	else if(avesfademi==2)	{		if(avestam==0)		{ 			avesdevam("avesDoSlide",4000);		}		else		{			avesDoSlide();		}	}	else if(avesfademi==3)	{		if(avestam==0)		{ 			avesdevam("avesDoScrollUp",4000);		}		else		{			avesDoScrollUp();		}	}	else if(avesfademi==4)	{		if(avestam==0)		{ 			avesdevam("avesDoBlindX",4000);		}		else		{			avesDoBlindX();		}	}	else if(avesfademi==5)	{		if(avestam==0)		{ 			avesdevam("avesDoBlindY",4000);		}		else		{			avesDoBlindY();		}	}	}function avessl(){avesfademi=1;avesvcurr=0;avesvnext=0;avesvssdiv=null;stepc=20*(2);avesdif=0.00;avesop=1.00;avesdif=(1.00/stepc);dstr1='<div id="';dstr2='" style="position:absolute;visibility:hidden;'+'left:0px;top:0px;'+'padding:0px;margin:0px;overflow:hidden;">';dstr23='<table cellspacing="0" cellpadding="0" style="position:relative;left:0px;top:0px;padding:0px;margin:0px;"><tr><td style="width:'+avesicwidth+'px;height:'+avesicheight+'px;left:0px;top:0px;padding:0px;margin:0px;text-align:'+'center'+';vertical-align:'+'middle'+';">';dstr3='<img id="avesimg';dstr4='" src="';dstr5='"  border="0" style="position:relative;border-style:'+'solid'+';border-width:'+'0'+'px;border-color:'+'#CCCCCC'+';'+""+'" alt=""></img>';dstr56='</td></tr></table>';dstr6='</div>';this.avesdotrans=avesdotrans;this.avesinitte=avesinitte;this.avesinitte2=avesinitte2;this.avesbeftrans=avesbeftrans;this.avesdotransff=avesdotransff;}function avesFadeBitti(){	avesjbtype=0;	avesShowCurrentDesc();	}function avesdotrans(){	avesjbtype=1;	avesHideCurrentDesc();	if(IEB==true){avesvssdiv.filters[0].apply();}	avesobjc.style.visibility="hidden";	avesobjn.style.visibility="visible";	if(IEB==true){avesvssdiv.filters[0].play();}	avesrealcurrent=avesvnext;	avesHighlightCurrTumb();	avesSonraki();			if(avestam==0){avesdevam("avesdotrans",((1000*2)+4000));}	else	{		avestimeo=setTimeout('avesdotrans()',((1000*2)+4000));	} 	}function avesdotransff(){	avesop=avesop-avesdif;		if(avesop<(0.00)){avesop=0.00;}	avesobjc.style.opacity = avesop;	avesobjn.style.opacity = 1.00-avesop;	if(avesop>(0.00))	{		setTimeout('avesdotransff()',50);	}	else	{		avesobjc.style.zIndex=2;		avesobjn.style.zIndex=3;		avesrealcurrent=avesvnext;		avesShowCurrentDesc();		avesHighlightCurrTumb();				avesSonraki();			        if(avestam==0){avesdevam("avesbeftrans",4000);}        	else {avestimeo=setTimeout('avesbeftrans()',4000);}		avesjbtype=0;  					}}function avesbeftrans(){	avesjbtype=1;	avesHideCurrentDesc();    	avesop=1.00;	avesobjc.style.visibility="visible";	avesobjn.style.visibility="visible";		avesobjc.style.zIndex=3;	avesobjn.style.zIndex=2;		avesobjc.style.opacity = 1.00;		avesobjn.style.opacity = 1.00;			avesdotransff();	}function avesDoSlide(){	avesjbtype=1;	avesHideCurrentDesc();	aveskalan=aveskalan-Math.ceil(aveskalan/2);	avesobjc.style.left=""+(aveskalan-avesicwidth)+"px";	avesobjn.style.left=""+aveskalan+"px";		if(aveskalan<=0)	{		avesrealcurrent=avesvnext;		avesShowCurrentDesc();		avesHighlightCurrTumb();    		avesSonraki();		aveskalan=avesicwidth;		avesobjn.style.left=""+aveskalan+"px";	        		aveszindx();          		avesjbtype=0;        		if(avestam==0){avesdevam("avesDoSlide",4000);}		else {avestimeo=setTimeout('avesDoSlide()',4000);}	}	else	{		setTimeout('avesDoSlide()',50);    	} }function avesDoScrollUp(){	avesjbtype=1;	avesHideCurrentDesc();	aveskalan=aveskalan-Math.ceil(aveskalan/2);	avesobjc.style.top=""+(aveskalan-avesicheight)+"px";	avesobjn.style.top=""+aveskalan+"px";	    if(aveskalan<=0)    {	avesrealcurrent=avesvnext;	avesShowCurrentDesc();	avesHighlightCurrTumb();        avesSonraki();        aveskalan=avesicheight;	avesobjn.style.top=""+aveskalan+"px";	        aveszindx();                 	avesjbtype=0;        if(avestam==0){avesdevam('avesDoScrollUp',4000);}        else{avestimeo=setTimeout('avesDoScrollUp()',4000);}        }    else    {        setTimeout('avesDoScrollUp()',50);        }}function avesDoBlindX(){	avesjbtype=1;	avesHideCurrentDesc();   	aveskalan=aveskalan-Math.ceil(aveskalan/2);	avesobjc.style.left=""+(avesicwidth-aveskalan)+"px";	avesobjn.style.left=""+aveskalan+"px";	    if(aveskalan<=0)    {		avesrealcurrent=avesvnext;		avesShowCurrentDesc();	avesHighlightCurrTumb();            avesSonraki();        aveskalan=avesicwidth;	avesobjn.style.left=""+aveskalan+"px";		    	        aveszindx();	avesjbtype=0;                  if(avestam==0){avesdevam("avesDoBlindX",4000);}        else{avestimeo=setTimeout('avesDoBlindX()',4000);}    }    else    {        setTimeout('avesDoBlindX()',50);        }}function avesDoBlindY(){	avesjbtype=1;	avesHideCurrentDesc();  	aveskalan=aveskalan-Math.ceil(aveskalan/2);	avesobjc.style.top=""+(avesicheight-aveskalan)+"px";	avesobjn.style.top=""+aveskalan+"px";	    if(aveskalan<=0)    {		avesrealcurrent=avesvnext;		avesShowCurrentDesc();avesHighlightCurrTumb();        avesSonraki();        aveskalan=avesicheight;	    avesobjn.style.top=""+aveskalan+"px";                aveszindx();                 	avesjbtype=0;        if(avestam==0){avesdevam("avesDoBlindY",4000);}        else{avestimeo=setTimeout('avesDoBlindY()',4000);}        }    else    {        setTimeout('avesDoBlindY()',50);        } }function avesinitte2(){	avesthumbs_obj=document.getElementById('avesthumbsid');	avesmoving_obj=document.getElementById('avesmovingdiv');	avesvssdiv=document.getElementById("avesdv");	if(9>0)	{		avesobjc=document.getElementById('avesd'+0);			avesobjc.style.visibility="visible";		}	if(9>1)	{		avesvcurr=0;		avesvnext=0;		avesrealcurrent=0;        if(avesfademi==0)        {			avesvcurr=0;			avesvnext=1;			avesrealcurrent=0;			setTimeout('avesdotrans()',4000);                }        else if(avesfademi==1)        {            if(IEB==true)            {	    		avesSonraki();			avesShowCurrentDesc();			avesHighlightCurrTumb();	    		avesdevam("avesdotrans",4000);                       }            else            {	    		avesSonraki();			avesShowCurrentDesc();			avesHighlightCurrTumb();	    		avesdevam("avesbeftrans",4000);                        }        }         else if(avesfademi==2)        {		aveskalan=avesicwidth;     		avesSonraki();		avesrealcurrent=0;		avesShowCurrentDesc();		avesHighlightCurrTumb();		avesobjn.style.left=""+aveskalan+"px";          			aveszindx();            		avesdevam("avesDoSlide",4000);		   	                }        else if(avesfademi==3)        {		aveskalan=avesicheight;            		avesSonraki();		avesrealcurrent=0;		avesShowCurrentDesc();		avesHighlightCurrTumb();		avesobjn.style.top=""+aveskalan+"px";            			aveszindx();                        		avesdevam("avesDoScrollUp",4000);               }                  else if(avesfademi==4)        {                        aveskalan=avesicwidth;                        avesSonraki();		avesrealcurrent=0;		avesShowCurrentDesc();avesHighlightCurrTumb();        	avesobjn.style.left=""+aveskalan+"px";	            	            aveszindx();                                   avesdevam("avesDoBlindX",4000);                 }            else if(avesfademi==5)        {                        aveskalan=avesicheight;                        avesSonraki();		avesrealcurrent=0;		avesShowCurrentDesc();avesHighlightCurrTumb();        	avesobjn.style.top=""+aveskalan+"px";            	            aveszindx();                                  avesdevam("avesDoBlindY",4000);                 }												}}function avesinitte(){	i=0;	innertxt="";	for(i=0;i<9;i++)	{		innertxt=innertxt+dstr1+"avesd"+i+dstr2+dstr23+aveslinkstr[i]+dstr3+i+dstr4+avesimgstr[i]+dstr5+avesclslinkstr[i]+dstr56+dstr6;	}	spage=document.getElementById('avesdv');	spage.innerHTML=""+innertxt;    setTimeout('avesinitte2()',100);}function avesBas(){        avess=new avessl();        avess.avesinitte();}setTimeout('avesBas()',100);