uagent = window.navigator.userAgent.toLowerCase();IEB=(uagent.indexOf('msie') != -1)?true:false;OPB=(uagent.indexOf('opera') != -1)?true:false;CRB=(uagent.indexOf('chrome') != -1)?true:false;SFB=(uagent.indexOf('safari') != -1)?true:false;var scompat = document.compatMode;var Slidesactss=null;var Slidesactsdescgoster=0;var Slidesactsthumbgoster=0;var Slidesactscwidth=0;var Slidesactscheight=0;var Slidesactscalc=0;var Slidesactstam=0;var Slidesactskalan=0;var Slidesactskalany=0;var Slidesactsts="";var Slidesactsds="";var Slidesactsjbtype=0;var Slidesactsrealcurrent=0;var Slidesactstimeo=null;Slidesactsthumbs_obj=null;Slidesactsmoving_obj=null;SlidesactsTotalThumbWidth=0;SlidesactsTotalThumbHeight=0;SlidesactsMoveIcWidth=0;var TBW=0;var CursorStr="default";var SlidesactsDescCalcWidth=0;var SlidesactsDescCalcHeight=0;var SlidesactsDescCalcIcWidth=0;var SlidesactsDescCalcIcHeight=0;var MoveWidth=0;var ThumbAreaWidth=340;var ThumbAreaHeight=340;Slidesactsimgarr=new Array();Slidesactsthumbimgstr=new Array();Slidesactsimgstr=new Array();Slidesactslinkstr=new Array();Slidesactsclslinkstr=new Array();Slidesactstitarr=new Array();Slidesactsdesarr=new Array();Slidesactsimgarr[0]=new Image();Slidesactsimgarr[0].c=0;Slidesactsimgarr[0].onload = Slidesactssecondcomplate;Slidesactsimgarr[0].src=Slidesactsfoldername+'ballenas1.jpg';Slidesactsimgstr[0]=Slidesactsfoldername+'ballenas1.jpg';Slidesactsthumbimgstr[0]=Slidesactsfoldername+'ballenas1.jpg';Slidesactslinkstr[0]='';Slidesactsclslinkstr[0]='';Slidesactstitarr[0]="";Slidesactsdesarr[0]="";Slidesactsimgarr[1]=new Image();Slidesactsimgarr[1].c=0;Slidesactsimgarr[1].onload = Slidesactssecondcomplate;Slidesactsimgarr[1].src=Slidesactsfoldername+'ballenas2.jpg';Slidesactsimgstr[1]=Slidesactsfoldername+'ballenas2.jpg';Slidesactsthumbimgstr[1]=Slidesactsfoldername+'ballenas2.jpg';Slidesactslinkstr[1]='';Slidesactsclslinkstr[1]='';Slidesactstitarr[1]="";Slidesactsdesarr[1]="";Slidesactsimgarr[2]=new Image();Slidesactsimgarr[2].c=0;Slidesactsimgarr[2].onload = Slidesactssecondcomplate;Slidesactsimgarr[2].src=Slidesactsfoldername+'ballenas3.jpg';Slidesactsimgstr[2]=Slidesactsfoldername+'ballenas3.jpg';Slidesactsthumbimgstr[2]=Slidesactsfoldername+'ballenas3.jpg';Slidesactslinkstr[2]='';Slidesactsclslinkstr[2]='';Slidesactstitarr[2]="";Slidesactsdesarr[2]="";if((IEB==true)&&(scompat == "BackCompat" )){    Slidesactscwidth=175;    Slidesactscheight=175;}else{    Slidesactscwidth=175-2*(0);    Slidesactscheight=175-2*(0);}var Slidesactsicwidth=175-2*(0);var Slidesactsicheight=175-2*(0);SlidesactsDescCalcWidth=260;SlidesactsDescCalcHeight=80;if((IEB==true)&&(scompat == "BackCompat" )){	SlidesactsDescCalcIcWidth=SlidesactsDescCalcWidth;	SlidesactsDescCalcIcHeight=SlidesactsDescCalcHeight;}else{    SlidesactsDescCalcIcWidth=SlidesactsDescCalcWidth-2*(2)-2*(3);    SlidesactsDescCalcIcHeight=SlidesactsDescCalcHeight-2*(2)-2*(3);}document.write('<div style="position:relative;width:'+Slidesactscwidth+'px;height:'+Slidesactscheight+'px;overflow:hidden;border-style:'+'solid'+';border-width:'+0+'px;border-color:#'+'CCCCCC'+';'+''+''+'">');document.write('<div id="Slidesactsdv" style="position:relative;width:'+Slidesactsicwidth+'px;height:'+Slidesactsicheight+'px;overflow:hidden;padding:0px;margin:0px;z-index:1;'+'FILTER: progid:DXImageTransform.Microsoft.Fade(Overlap=1.00,duration=2,enabled=false);'+'"'+' onfilterchange=SlidesactsFadeBitti()'+'></div>');for(i=0;i<3;i++){	if(0==0){Slidesactsds=Slidesactsds+Slidesactslinkstr[i];if(Slidesactslinkstr[i].length>2){CursorStr="pointer";}else{CursorStr="default";}}	Slidesactsds=Slidesactsds+'<div id="Slidesactsdesc'+i+'" style="position:absolute;top:'+120+'px;left:'+10+'px;width:'+SlidesactsDescCalcWidth+'px;height:'+SlidesactsDescCalcHeight+'px;visibility:hidden;overflow:hidden;cursor:'+CursorStr+';z-index:20;">';	Slidesactsds=Slidesactsds+'<div style="position:absolute;left:0px;top:0px;width:'+SlidesactsDescCalcWidth+'px;height:'+SlidesactsDescCalcHeight+'px;border-style:solid;border-width:0px;border-color:#000000;background-color:#'+'000000'+';opacity: '+'0.50'+';filter:alpha(opacity='+'50'+');-moz-opacity:'+'0.50'+';"></div>';	Slidesactsds=Slidesactsds+'<div style="position:relative;left:0px;top:0px;width:'+SlidesactsDescCalcIcWidth+'px;height:'+SlidesactsDescCalcIcHeight+'px;overflow:hidden;padding:'+3+'px;text-align:'+'left'+';border-style:'+'solid'+';border-width:'+2+'px;border-color:#'+'990000'+';color:#'+'FFFFFF'+';font-family:'+'arial'+';font-style:'+'normal'+';font-size: '+'13px'+';font-weight:'+'normal'+';text-decoration:'+'none'+';opacity: 1.0;filter:alpha(opacity=100);-moz-opacity:1.0;">';	Slidesactsds=Slidesactsds+'<span style="color:#'+'FECE3F'+';font-family:'+'arial'+';font-style:'+'normal'+';font-size: '+'14px'+';font-weight:'+'bold'+';text-decoration:'+'none'+';">'+Slidesactstitarr[i]+'</span><br />'+Slidesactsdesarr[i];	Slidesactsds=Slidesactsds+'</div>';	Slidesactsds=Slidesactsds+'</div>';	if(0==0){Slidesactsds=Slidesactsds+Slidesactsclslinkstr[i];}	}document.write(''+Slidesactsds);function SlidesactsShowCurrentDesc(){	if((Slidesactsdescgoster==1)&&( (Slidesactstitarr[Slidesactsrealcurrent].length>0) || (Slidesactsdesarr[Slidesactsrealcurrent].length>0)  ))	{		after_des=document.getElementById('Slidesactsdesc'+Slidesactsrealcurrent);		after_des.style.visibility="visible";		}}function SlidesactsHideCurrentDesc(){	before_des=document.getElementById('Slidesactsdesc'+Slidesactsvcurr);	before_des.style.visibility="hidden";}function SlidesactsHighlightCurrTumb(){	if((0==1)&&(0==0))	{		Slidesactsbeforethumb=document.getElementById('Slidesactsthumb'+Slidesactsvcurr);		Slidesactsafterthumb=document.getElementById('Slidesactsthumb'+Slidesactsrealcurrent);		Slidesactsbeforethumb.style.borderColor='999999';		Slidesactsafterthumb.style.borderColor='990000';	}}document.write('</div>');function Slidesactszindx(){	Slidesactsobjn.style.visibility="visible";	Slidesactsobjc.style.zIndex=2;	Slidesactsobjn.style.zIndex=3;    }function SlidesactsThumbOut(tobj,nm){	if((Slidesactsvcurr==nm)&&(0==0))	{}	else	{		tobj.style.borderColor='999999';	}}function SlidesactsThumbOver(tobj,nm){	tobj.style.borderColor='990000';}function SlidesactsSonrakiClick(c,n){	Slidesactsvcurr=c;	Slidesactsvnext=n;			Slidesactsobjc=document.getElementById('Slidesactsd'+Slidesactsvcurr);	Slidesactsobjn=document.getElementById('Slidesactsd'+Slidesactsvnext);		if(Slidesactsfademi!=1)	{		Slidesactsobjc.style.visibility="visible";			Slidesactsobjn.style.visibility="visible";		}		}function SlidesactsSonraki(){	Slidesactsvcurr=Slidesactsvnext;	Slidesactsvnext=Slidesactsvnext+1;		if(Slidesactsvnext>=3)	{		Slidesactsvnext=0;		Slidesactstam=1;	}		Slidesactsobjc=document.getElementById('Slidesactsd'+Slidesactsvcurr);	Slidesactsobjn=document.getElementById('Slidesactsd'+Slidesactsvnext);		      }function Slidesactssecondcomplate(){	this.c=1;}function Slidesactsdevam(fm,pt){	if((Slidesactsimgarr[Slidesactsvnext].c==1)&&(Slidesactsimgarr[Slidesactsvcurr].c==1))	{		Slidesactstimeo=setTimeout(fm+'()',pt);	}	else	{		setTimeout('Slidesactsdevam("'+fm+'")',500);	}	var Slidesactscagain=1;	for(i=0;i<3;i++)	{		if(Slidesactsimgarr[i].c==1){}		else{Slidesactscagain=0;}	}	if(Slidesactscagain==1){Slidesactstam=1;}}function ThumbClick(clicked_img,tobj){	if(Slidesactsjbtype==1){return;}	clearTimeout(Slidesactstimeo);	SlidesactsSonrakiClick(Slidesactsrealcurrent,clicked_img);	if(Slidesactsfademi==1)        {            if(IEB==true)            {		if(Slidesactstam==0)		{	    		Slidesactsdevam("Slidesactsdotrans",4000);		}		else		{			Slidesactsdotrans();		}            }            else            {		if(Slidesactstam==0)		{    			Slidesactsdevam("Slidesactsbeftrans",4000);		}		else		{			Slidesactsbeftrans();		}            }        }	else if(Slidesactsfademi==2)	{		if(Slidesactstam==0)		{ 			Slidesactsdevam("SlidesactsDoSlide",4000);		}		else		{			SlidesactsDoSlide();		}	}	else if(Slidesactsfademi==3)	{		if(Slidesactstam==0)		{ 			Slidesactsdevam("SlidesactsDoScrollUp",4000);		}		else		{			SlidesactsDoScrollUp();		}	}	else if(Slidesactsfademi==4)	{		if(Slidesactstam==0)		{ 			Slidesactsdevam("SlidesactsDoBlindX",4000);		}		else		{			SlidesactsDoBlindX();		}	}	else if(Slidesactsfademi==5)	{		if(Slidesactstam==0)		{ 			Slidesactsdevam("SlidesactsDoBlindY",4000);		}		else		{			SlidesactsDoBlindY();		}	}	}function Slidesactssl(){Slidesactsfademi=1;Slidesactsvcurr=0;Slidesactsvnext=0;Slidesactsvssdiv=null;stepc=20*(2);Slidesactsdif=0.00;Slidesactsop=1.00;Slidesactsdif=(1.00/stepc);dstr1='<div id="';dstr2='" style="position:absolute;visibility:hidden;'+'left:0px;top:0px;'+'padding:0px;margin:0px;overflow:hidden;">';dstr23='<table cellspacing="0" cellpadding="0" style="position:relative;left:0px;top:0px;padding:0px;margin:0px;"><tr><td style="width:'+Slidesactsicwidth+'px;height:'+Slidesactsicheight+'px;left:0px;top:0px;padding:0px;margin:0px;text-align:'+'center'+';vertical-align:'+'middle'+';">';dstr3='<img id="Slidesactsimg';dstr4='" src="';dstr5='"  border="0" style="position:relative;border-style:'+'solid'+';border-width:'+'0'+'px;border-color:'+'#CCCCCC'+';'+""+'" alt=""></img>';dstr56='</td></tr></table>';dstr6='</div>';this.Slidesactsdotrans=Slidesactsdotrans;this.Slidesactsinitte=Slidesactsinitte;this.Slidesactsinitte2=Slidesactsinitte2;this.Slidesactsbeftrans=Slidesactsbeftrans;this.Slidesactsdotransff=Slidesactsdotransff;}function SlidesactsFadeBitti(){	Slidesactsjbtype=0;	SlidesactsShowCurrentDesc();	}function Slidesactsdotrans(){	Slidesactsjbtype=1;	SlidesactsHideCurrentDesc();	if(IEB==true){Slidesactsvssdiv.filters[0].apply();}	Slidesactsobjc.style.visibility="hidden";	Slidesactsobjn.style.visibility="visible";	if(IEB==true){Slidesactsvssdiv.filters[0].play();}	Slidesactsrealcurrent=Slidesactsvnext;	SlidesactsHighlightCurrTumb();	SlidesactsSonraki();			if(Slidesactstam==0){Slidesactsdevam("Slidesactsdotrans",((1000*2)+4000));}	else	{		Slidesactstimeo=setTimeout('Slidesactsdotrans()',((1000*2)+4000));	} 	}function Slidesactsdotransff(){	Slidesactsop=Slidesactsop-Slidesactsdif;		if(Slidesactsop<(0.00)){Slidesactsop=0.00;}	Slidesactsobjc.style.opacity = Slidesactsop;	Slidesactsobjn.style.opacity = 1.00-Slidesactsop;	if(Slidesactsop>(0.00))	{		setTimeout('Slidesactsdotransff()',50);	}	else	{		Slidesactsobjc.style.zIndex=2;		Slidesactsobjn.style.zIndex=3;		Slidesactsrealcurrent=Slidesactsvnext;		SlidesactsShowCurrentDesc();		SlidesactsHighlightCurrTumb();				SlidesactsSonraki();			        if(Slidesactstam==0){Slidesactsdevam("Slidesactsbeftrans",4000);}        	else {Slidesactstimeo=setTimeout('Slidesactsbeftrans()',4000);}		Slidesactsjbtype=0;  					}}function Slidesactsbeftrans(){	Slidesactsjbtype=1;	SlidesactsHideCurrentDesc();    	Slidesactsop=1.00;	Slidesactsobjc.style.visibility="visible";	Slidesactsobjn.style.visibility="visible";		Slidesactsobjc.style.zIndex=3;	Slidesactsobjn.style.zIndex=2;		Slidesactsobjc.style.opacity = 1.00;		Slidesactsobjn.style.opacity = 1.00;			Slidesactsdotransff();	}function SlidesactsDoSlide(){	Slidesactsjbtype=1;	SlidesactsHideCurrentDesc();	Slidesactskalan=Slidesactskalan-Math.ceil(Slidesactskalan/2);	Slidesactsobjc.style.left=""+(Slidesactskalan-Slidesactsicwidth)+"px";	Slidesactsobjn.style.left=""+Slidesactskalan+"px";		if(Slidesactskalan<=0)	{		Slidesactsrealcurrent=Slidesactsvnext;		SlidesactsShowCurrentDesc();		SlidesactsHighlightCurrTumb();    		SlidesactsSonraki();		Slidesactskalan=Slidesactsicwidth;		Slidesactsobjn.style.left=""+Slidesactskalan+"px";	        		Slidesactszindx();          		Slidesactsjbtype=0;        		if(Slidesactstam==0){Slidesactsdevam("SlidesactsDoSlide",4000);}		else {Slidesactstimeo=setTimeout('SlidesactsDoSlide()',4000);}	}	else	{		setTimeout('SlidesactsDoSlide()',50);    	} }function SlidesactsDoScrollUp(){	Slidesactsjbtype=1;	SlidesactsHideCurrentDesc();	Slidesactskalan=Slidesactskalan-Math.ceil(Slidesactskalan/2);	Slidesactsobjc.style.top=""+(Slidesactskalan-Slidesactsicheight)+"px";	Slidesactsobjn.style.top=""+Slidesactskalan+"px";	    if(Slidesactskalan<=0)    {	Slidesactsrealcurrent=Slidesactsvnext;	SlidesactsShowCurrentDesc();	SlidesactsHighlightCurrTumb();        SlidesactsSonraki();        Slidesactskalan=Slidesactsicheight;	Slidesactsobjn.style.top=""+Slidesactskalan+"px";	        Slidesactszindx();                 	Slidesactsjbtype=0;        if(Slidesactstam==0){Slidesactsdevam('SlidesactsDoScrollUp',4000);}        else{Slidesactstimeo=setTimeout('SlidesactsDoScrollUp()',4000);}        }    else    {        setTimeout('SlidesactsDoScrollUp()',50);        }}function SlidesactsDoBlindX(){	Slidesactsjbtype=1;	SlidesactsHideCurrentDesc();   	Slidesactskalan=Slidesactskalan-Math.ceil(Slidesactskalan/2);	Slidesactsobjc.style.left=""+(Slidesactsicwidth-Slidesactskalan)+"px";	Slidesactsobjn.style.left=""+Slidesactskalan+"px";	    if(Slidesactskalan<=0)    {		Slidesactsrealcurrent=Slidesactsvnext;		SlidesactsShowCurrentDesc();	SlidesactsHighlightCurrTumb();            SlidesactsSonraki();        Slidesactskalan=Slidesactsicwidth;	Slidesactsobjn.style.left=""+Slidesactskalan+"px";		    	        Slidesactszindx();	Slidesactsjbtype=0;                  if(Slidesactstam==0){Slidesactsdevam("SlidesactsDoBlindX",4000);}        else{Slidesactstimeo=setTimeout('SlidesactsDoBlindX()',4000);}    }    else    {        setTimeout('SlidesactsDoBlindX()',50);        }}function SlidesactsDoBlindY(){	Slidesactsjbtype=1;	SlidesactsHideCurrentDesc();  	Slidesactskalan=Slidesactskalan-Math.ceil(Slidesactskalan/2);	Slidesactsobjc.style.top=""+(Slidesactsicheight-Slidesactskalan)+"px";	Slidesactsobjn.style.top=""+Slidesactskalan+"px";	    if(Slidesactskalan<=0)    {		Slidesactsrealcurrent=Slidesactsvnext;		SlidesactsShowCurrentDesc();SlidesactsHighlightCurrTumb();        SlidesactsSonraki();        Slidesactskalan=Slidesactsicheight;	    Slidesactsobjn.style.top=""+Slidesactskalan+"px";                Slidesactszindx();                 	Slidesactsjbtype=0;        if(Slidesactstam==0){Slidesactsdevam("SlidesactsDoBlindY",4000);}        else{Slidesactstimeo=setTimeout('SlidesactsDoBlindY()',4000);}        }    else    {        setTimeout('SlidesactsDoBlindY()',50);        } }function Slidesactsinitte2(){	Slidesactsthumbs_obj=document.getElementById('Slidesactsthumbsid');	Slidesactsmoving_obj=document.getElementById('Slidesactsmovingdiv');	Slidesactsvssdiv=document.getElementById("Slidesactsdv");	if(3>0)	{		Slidesactsobjc=document.getElementById('Slidesactsd'+0);			Slidesactsobjc.style.visibility="visible";		}	if(3>1)	{		Slidesactsvcurr=0;		Slidesactsvnext=0;		Slidesactsrealcurrent=0;        if(Slidesactsfademi==0)        {			Slidesactsvcurr=0;			Slidesactsvnext=1;			Slidesactsrealcurrent=0;			setTimeout('Slidesactsdotrans()',4000);                }        else if(Slidesactsfademi==1)        {            if(IEB==true)            {	    		SlidesactsSonraki();			SlidesactsShowCurrentDesc();			SlidesactsHighlightCurrTumb();	    		Slidesactsdevam("Slidesactsdotrans",4000);                       }            else            {	    		SlidesactsSonraki();			SlidesactsShowCurrentDesc();			SlidesactsHighlightCurrTumb();	    		Slidesactsdevam("Slidesactsbeftrans",4000);                        }        }         else if(Slidesactsfademi==2)        {		Slidesactskalan=Slidesactsicwidth;     		SlidesactsSonraki();		Slidesactsrealcurrent=0;		SlidesactsShowCurrentDesc();		SlidesactsHighlightCurrTumb();		Slidesactsobjn.style.left=""+Slidesactskalan+"px";          			Slidesactszindx();            		Slidesactsdevam("SlidesactsDoSlide",4000);		   	                }        else if(Slidesactsfademi==3)        {		Slidesactskalan=Slidesactsicheight;            		SlidesactsSonraki();		Slidesactsrealcurrent=0;		SlidesactsShowCurrentDesc();		SlidesactsHighlightCurrTumb();		Slidesactsobjn.style.top=""+Slidesactskalan+"px";            			Slidesactszindx();                        		Slidesactsdevam("SlidesactsDoScrollUp",4000);               }                  else if(Slidesactsfademi==4)        {                        Slidesactskalan=Slidesactsicwidth;                        SlidesactsSonraki();		Slidesactsrealcurrent=0;		SlidesactsShowCurrentDesc();SlidesactsHighlightCurrTumb();        	Slidesactsobjn.style.left=""+Slidesactskalan+"px";	            	            Slidesactszindx();                                   Slidesactsdevam("SlidesactsDoBlindX",4000);                 }            else if(Slidesactsfademi==5)        {                        Slidesactskalan=Slidesactsicheight;                        SlidesactsSonraki();		Slidesactsrealcurrent=0;		SlidesactsShowCurrentDesc();SlidesactsHighlightCurrTumb();        	Slidesactsobjn.style.top=""+Slidesactskalan+"px";            	            Slidesactszindx();                                  Slidesactsdevam("SlidesactsDoBlindY",4000);                 }												}}function Slidesactsinitte(){	i=0;	innertxt="";	for(i=0;i<3;i++)	{		innertxt=innertxt+dstr1+"Slidesactsd"+i+dstr2+dstr23+Slidesactslinkstr[i]+dstr3+i+dstr4+Slidesactsimgstr[i]+dstr5+Slidesactsclslinkstr[i]+dstr56+dstr6;	}	spage=document.getElementById('Slidesactsdv');	spage.innerHTML=""+innertxt;    setTimeout('Slidesactsinitte2()',100);}function SlidesactsBas(){        Slidesactss=new Slidesactssl();        Slidesactss.Slidesactsinitte();}setTimeout('SlidesactsBas()',100);