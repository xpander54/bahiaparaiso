uagent = window.navigator.userAgent.toLowerCase();IEB=(uagent.indexOf('msie') != -1)?true:false;OPB=(uagent.indexOf('opera') != -1)?true:false;CRB=(uagent.indexOf('chrome') != -1)?true:false;SFB=(uagent.indexOf('safari') != -1)?true:false;var scompat = document.compatMode;var pescass=null;var pescasdescgoster=0;var pescasthumbgoster=0;var pescascwidth=0;var pescascheight=0;var pescascalc=0;var pescastam=0;var pescaskalan=0;var pescaskalany=0;var pescasts="";var pescasds="";var pescasjbtype=0;var pescasrealcurrent=0;var pescastimeo=null;pescasthumbs_obj=null;pescasmoving_obj=null;pescasTotalThumbWidth=0;pescasTotalThumbHeight=0;pescasMoveIcWidth=0;var TBW=0;var CursorStr="default";var pescasDescCalcWidth=0;var pescasDescCalcHeight=0;var pescasDescCalcIcWidth=0;var pescasDescCalcIcHeight=0;var MoveWidth=0;var ThumbAreaWidth=340;var ThumbAreaHeight=340;pescasimgarr=new Array();pescasthumbimgstr=new Array();pescasimgstr=new Array();pescaslinkstr=new Array();pescasclslinkstr=new Array();pescastitarr=new Array();pescasdesarr=new Array();pescasimgarr[0]=new Image();pescasimgarr[0].c=0;pescasimgarr[0].onload = pescassecondcomplate;pescasimgarr[0].src=pescasfoldername+'pesca1.jpg';pescasimgstr[0]=pescasfoldername+'pesca1.jpg';pescasthumbimgstr[0]=pescasfoldername+'pesca1.jpg';pescaslinkstr[0]='';pescasclslinkstr[0]='';pescastitarr[0]="";pescasdesarr[0]="";pescasimgarr[1]=new Image();pescasimgarr[1].c=0;pescasimgarr[1].onload = pescassecondcomplate;pescasimgarr[1].src=pescasfoldername+'pesca2.jpg';pescasimgstr[1]=pescasfoldername+'pesca2.jpg';pescasthumbimgstr[1]=pescasfoldername+'pesca2.jpg';pescaslinkstr[1]='';pescasclslinkstr[1]='';pescastitarr[1]="";pescasdesarr[1]="";pescasimgarr[2]=new Image();pescasimgarr[2].c=0;pescasimgarr[2].onload = pescassecondcomplate;pescasimgarr[2].src=pescasfoldername+'pesca3.jpg';pescasimgstr[2]=pescasfoldername+'pesca3.jpg';pescasthumbimgstr[2]=pescasfoldername+'pesca3.jpg';pescaslinkstr[2]='';pescasclslinkstr[2]='';pescastitarr[2]="";pescasdesarr[2]="";pescasimgarr[3]=new Image();pescasimgarr[3].c=0;pescasimgarr[3].onload = pescassecondcomplate;pescasimgarr[3].src=pescasfoldername+'pesca4.jpg';pescasimgstr[3]=pescasfoldername+'pesca4.jpg';pescasthumbimgstr[3]=pescasfoldername+'pesca4.jpg';pescaslinkstr[3]='';pescasclslinkstr[3]='';pescastitarr[3]="";pescasdesarr[3]="";if((IEB==true)&&(scompat == "BackCompat" )){    pescascwidth=175;    pescascheight=175;}else{    pescascwidth=175-2*(0);    pescascheight=175-2*(0);}var pescasicwidth=175-2*(0);var pescasicheight=175-2*(0);pescasDescCalcWidth=260;pescasDescCalcHeight=80;if((IEB==true)&&(scompat == "BackCompat" )){	pescasDescCalcIcWidth=pescasDescCalcWidth;	pescasDescCalcIcHeight=pescasDescCalcHeight;}else{    pescasDescCalcIcWidth=pescasDescCalcWidth-2*(2)-2*(3);    pescasDescCalcIcHeight=pescasDescCalcHeight-2*(2)-2*(3);}document.write('<div style="position:relative;width:'+pescascwidth+'px;height:'+pescascheight+'px;overflow:hidden;border-style:'+'solid'+';border-width:'+0+'px;border-color:#'+'CCCCCC'+';'+''+''+'">');document.write('<div id="pescasdv" style="position:relative;width:'+pescasicwidth+'px;height:'+pescasicheight+'px;overflow:hidden;padding:0px;margin:0px;z-index:1;'+'FILTER: progid:DXImageTransform.Microsoft.Fade(Overlap=1.00,duration=2,enabled=false);'+'"'+' onfilterchange=pescasFadeBitti()'+'></div>');for(i=0;i<4;i++){	if(0==0){pescasds=pescasds+pescaslinkstr[i];if(pescaslinkstr[i].length>2){CursorStr="pointer";}else{CursorStr="default";}}	pescasds=pescasds+'<div id="pescasdesc'+i+'" style="position:absolute;top:'+120+'px;left:'+10+'px;width:'+pescasDescCalcWidth+'px;height:'+pescasDescCalcHeight+'px;visibility:hidden;overflow:hidden;cursor:'+CursorStr+';z-index:20;">';	pescasds=pescasds+'<div style="position:absolute;left:0px;top:0px;width:'+pescasDescCalcWidth+'px;height:'+pescasDescCalcHeight+'px;border-style:solid;border-width:0px;border-color:#000000;background-color:#'+'000000'+';opacity: '+'0.50'+';filter:alpha(opacity='+'50'+');-moz-opacity:'+'0.50'+';"></div>';	pescasds=pescasds+'<div style="position:relative;left:0px;top:0px;width:'+pescasDescCalcIcWidth+'px;height:'+pescasDescCalcIcHeight+'px;overflow:hidden;padding:'+3+'px;text-align:'+'left'+';border-style:'+'solid'+';border-width:'+2+'px;border-color:#'+'990000'+';color:#'+'FFFFFF'+';font-family:'+'arial'+';font-style:'+'normal'+';font-size: '+'13px'+';font-weight:'+'normal'+';text-decoration:'+'none'+';opacity: 1.0;filter:alpha(opacity=100);-moz-opacity:1.0;">';	pescasds=pescasds+'<span style="color:#'+'FECE3F'+';font-family:'+'arial'+';font-style:'+'normal'+';font-size: '+'14px'+';font-weight:'+'bold'+';text-decoration:'+'none'+';">'+pescastitarr[i]+'</span><br />'+pescasdesarr[i];	pescasds=pescasds+'</div>';	pescasds=pescasds+'</div>';	if(0==0){pescasds=pescasds+pescasclslinkstr[i];}	}document.write(''+pescasds);function pescasShowCurrentDesc(){	if((pescasdescgoster==1)&&( (pescastitarr[pescasrealcurrent].length>0) || (pescasdesarr[pescasrealcurrent].length>0)  ))	{		after_des=document.getElementById('pescasdesc'+pescasrealcurrent);		after_des.style.visibility="visible";		}}function pescasHideCurrentDesc(){	before_des=document.getElementById('pescasdesc'+pescasvcurr);	before_des.style.visibility="hidden";}function pescasHighlightCurrTumb(){	if((0==1)&&(0==0))	{		pescasbeforethumb=document.getElementById('pescasthumb'+pescasvcurr);		pescasafterthumb=document.getElementById('pescasthumb'+pescasrealcurrent);		pescasbeforethumb.style.borderColor='999999';		pescasafterthumb.style.borderColor='990000';	}}document.write('</div>');function pescaszindx(){	pescasobjn.style.visibility="visible";	pescasobjc.style.zIndex=2;	pescasobjn.style.zIndex=3;    }function pescasThumbOut(tobj,nm){	if((pescasvcurr==nm)&&(0==0))	{}	else	{		tobj.style.borderColor='999999';	}}function pescasThumbOver(tobj,nm){	tobj.style.borderColor='990000';}function pescasSonrakiClick(c,n){	pescasvcurr=c;	pescasvnext=n;			pescasobjc=document.getElementById('pescasd'+pescasvcurr);	pescasobjn=document.getElementById('pescasd'+pescasvnext);		if(pescasfademi!=1)	{		pescasobjc.style.visibility="visible";			pescasobjn.style.visibility="visible";		}		}function pescasSonraki(){	pescasvcurr=pescasvnext;	pescasvnext=pescasvnext+1;		if(pescasvnext>=4)	{		pescasvnext=0;		pescastam=1;	}		pescasobjc=document.getElementById('pescasd'+pescasvcurr);	pescasobjn=document.getElementById('pescasd'+pescasvnext);		      }function pescassecondcomplate(){	this.c=1;}function pescasdevam(fm,pt){	if((pescasimgarr[pescasvnext].c==1)&&(pescasimgarr[pescasvcurr].c==1))	{		pescastimeo=setTimeout(fm+'()',pt);	}	else	{		setTimeout('pescasdevam("'+fm+'")',500);	}	var pescascagain=1;	for(i=0;i<4;i++)	{		if(pescasimgarr[i].c==1){}		else{pescascagain=0;}	}	if(pescascagain==1){pescastam=1;}}function ThumbClick(clicked_img,tobj){	if(pescasjbtype==1){return;}	clearTimeout(pescastimeo);	pescasSonrakiClick(pescasrealcurrent,clicked_img);	if(pescasfademi==1)        {            if(IEB==true)            {		if(pescastam==0)		{	    		pescasdevam("pescasdotrans",4000);		}		else		{			pescasdotrans();		}            }            else            {		if(pescastam==0)		{    			pescasdevam("pescasbeftrans",4000);		}		else		{			pescasbeftrans();		}            }        }	else if(pescasfademi==2)	{		if(pescastam==0)		{ 			pescasdevam("pescasDoSlide",4000);		}		else		{			pescasDoSlide();		}	}	else if(pescasfademi==3)	{		if(pescastam==0)		{ 			pescasdevam("pescasDoScrollUp",4000);		}		else		{			pescasDoScrollUp();		}	}	else if(pescasfademi==4)	{		if(pescastam==0)		{ 			pescasdevam("pescasDoBlindX",4000);		}		else		{			pescasDoBlindX();		}	}	else if(pescasfademi==5)	{		if(pescastam==0)		{ 			pescasdevam("pescasDoBlindY",4000);		}		else		{			pescasDoBlindY();		}	}	}function pescassl(){pescasfademi=1;pescasvcurr=0;pescasvnext=0;pescasvssdiv=null;stepc=20*(2);pescasdif=0.00;pescasop=1.00;pescasdif=(1.00/stepc);dstr1='<div id="';dstr2='" style="position:absolute;visibility:hidden;'+'left:0px;top:0px;'+'padding:0px;margin:0px;overflow:hidden;">';dstr23='<table cellspacing="0" cellpadding="0" style="position:relative;left:0px;top:0px;padding:0px;margin:0px;"><tr><td style="width:'+pescasicwidth+'px;height:'+pescasicheight+'px;left:0px;top:0px;padding:0px;margin:0px;text-align:'+'center'+';vertical-align:'+'middle'+';">';dstr3='<img id="pescasimg';dstr4='" src="';dstr5='"  border="0" style="position:relative;border-style:'+'solid'+';border-width:'+'0'+'px;border-color:'+'#CCCCCC'+';'+""+'" alt=""></img>';dstr56='</td></tr></table>';dstr6='</div>';this.pescasdotrans=pescasdotrans;this.pescasinitte=pescasinitte;this.pescasinitte2=pescasinitte2;this.pescasbeftrans=pescasbeftrans;this.pescasdotransff=pescasdotransff;}function pescasFadeBitti(){	pescasjbtype=0;	pescasShowCurrentDesc();	}function pescasdotrans(){	pescasjbtype=1;	pescasHideCurrentDesc();	if(IEB==true){pescasvssdiv.filters[0].apply();}	pescasobjc.style.visibility="hidden";	pescasobjn.style.visibility="visible";	if(IEB==true){pescasvssdiv.filters[0].play();}	pescasrealcurrent=pescasvnext;	pescasHighlightCurrTumb();	pescasSonraki();			if(pescastam==0){pescasdevam("pescasdotrans",((1000*2)+4000));}	else	{		pescastimeo=setTimeout('pescasdotrans()',((1000*2)+4000));	} 	}function pescasdotransff(){	pescasop=pescasop-pescasdif;		if(pescasop<(0.00)){pescasop=0.00;}	pescasobjc.style.opacity = pescasop;	pescasobjn.style.opacity = 1.00-pescasop;	if(pescasop>(0.00))	{		setTimeout('pescasdotransff()',50);	}	else	{		pescasobjc.style.zIndex=2;		pescasobjn.style.zIndex=3;		pescasrealcurrent=pescasvnext;		pescasShowCurrentDesc();		pescasHighlightCurrTumb();				pescasSonraki();			        if(pescastam==0){pescasdevam("pescasbeftrans",4000);}        	else {pescastimeo=setTimeout('pescasbeftrans()',4000);}		pescasjbtype=0;  					}}function pescasbeftrans(){	pescasjbtype=1;	pescasHideCurrentDesc();    	pescasop=1.00;	pescasobjc.style.visibility="visible";	pescasobjn.style.visibility="visible";		pescasobjc.style.zIndex=3;	pescasobjn.style.zIndex=2;		pescasobjc.style.opacity = 1.00;		pescasobjn.style.opacity = 1.00;			pescasdotransff();	}function pescasDoSlide(){	pescasjbtype=1;	pescasHideCurrentDesc();	pescaskalan=pescaskalan-Math.ceil(pescaskalan/2);	pescasobjc.style.left=""+(pescaskalan-pescasicwidth)+"px";	pescasobjn.style.left=""+pescaskalan+"px";		if(pescaskalan<=0)	{		pescasrealcurrent=pescasvnext;		pescasShowCurrentDesc();		pescasHighlightCurrTumb();    		pescasSonraki();		pescaskalan=pescasicwidth;		pescasobjn.style.left=""+pescaskalan+"px";	        		pescaszindx();          		pescasjbtype=0;        		if(pescastam==0){pescasdevam("pescasDoSlide",4000);}		else {pescastimeo=setTimeout('pescasDoSlide()',4000);}	}	else	{		setTimeout('pescasDoSlide()',50);    	} }function pescasDoScrollUp(){	pescasjbtype=1;	pescasHideCurrentDesc();	pescaskalan=pescaskalan-Math.ceil(pescaskalan/2);	pescasobjc.style.top=""+(pescaskalan-pescasicheight)+"px";	pescasobjn.style.top=""+pescaskalan+"px";	    if(pescaskalan<=0)    {	pescasrealcurrent=pescasvnext;	pescasShowCurrentDesc();	pescasHighlightCurrTumb();        pescasSonraki();        pescaskalan=pescasicheight;	pescasobjn.style.top=""+pescaskalan+"px";	        pescaszindx();                 	pescasjbtype=0;        if(pescastam==0){pescasdevam('pescasDoScrollUp',4000);}        else{pescastimeo=setTimeout('pescasDoScrollUp()',4000);}        }    else    {        setTimeout('pescasDoScrollUp()',50);        }}function pescasDoBlindX(){	pescasjbtype=1;	pescasHideCurrentDesc();   	pescaskalan=pescaskalan-Math.ceil(pescaskalan/2);	pescasobjc.style.left=""+(pescasicwidth-pescaskalan)+"px";	pescasobjn.style.left=""+pescaskalan+"px";	    if(pescaskalan<=0)    {		pescasrealcurrent=pescasvnext;		pescasShowCurrentDesc();	pescasHighlightCurrTumb();            pescasSonraki();        pescaskalan=pescasicwidth;	pescasobjn.style.left=""+pescaskalan+"px";		    	        pescaszindx();	pescasjbtype=0;                  if(pescastam==0){pescasdevam("pescasDoBlindX",4000);}        else{pescastimeo=setTimeout('pescasDoBlindX()',4000);}    }    else    {        setTimeout('pescasDoBlindX()',50);        }}function pescasDoBlindY(){	pescasjbtype=1;	pescasHideCurrentDesc();  	pescaskalan=pescaskalan-Math.ceil(pescaskalan/2);	pescasobjc.style.top=""+(pescasicheight-pescaskalan)+"px";	pescasobjn.style.top=""+pescaskalan+"px";	    if(pescaskalan<=0)    {		pescasrealcurrent=pescasvnext;		pescasShowCurrentDesc();pescasHighlightCurrTumb();        pescasSonraki();        pescaskalan=pescasicheight;	    pescasobjn.style.top=""+pescaskalan+"px";                pescaszindx();                 	pescasjbtype=0;        if(pescastam==0){pescasdevam("pescasDoBlindY",4000);}        else{pescastimeo=setTimeout('pescasDoBlindY()',4000);}        }    else    {        setTimeout('pescasDoBlindY()',50);        } }function pescasinitte2(){	pescasthumbs_obj=document.getElementById('pescasthumbsid');	pescasmoving_obj=document.getElementById('pescasmovingdiv');	pescasvssdiv=document.getElementById("pescasdv");	if(4>0)	{		pescasobjc=document.getElementById('pescasd'+0);			pescasobjc.style.visibility="visible";		}	if(4>1)	{		pescasvcurr=0;		pescasvnext=0;		pescasrealcurrent=0;        if(pescasfademi==0)        {			pescasvcurr=0;			pescasvnext=1;			pescasrealcurrent=0;			setTimeout('pescasdotrans()',4000);                }        else if(pescasfademi==1)        {            if(IEB==true)            {	    		pescasSonraki();			pescasShowCurrentDesc();			pescasHighlightCurrTumb();	    		pescasdevam("pescasdotrans",4000);                       }            else            {	    		pescasSonraki();			pescasShowCurrentDesc();			pescasHighlightCurrTumb();	    		pescasdevam("pescasbeftrans",4000);                        }        }         else if(pescasfademi==2)        {		pescaskalan=pescasicwidth;     		pescasSonraki();		pescasrealcurrent=0;		pescasShowCurrentDesc();		pescasHighlightCurrTumb();		pescasobjn.style.left=""+pescaskalan+"px";          			pescaszindx();            		pescasdevam("pescasDoSlide",4000);		   	                }        else if(pescasfademi==3)        {		pescaskalan=pescasicheight;            		pescasSonraki();		pescasrealcurrent=0;		pescasShowCurrentDesc();		pescasHighlightCurrTumb();		pescasobjn.style.top=""+pescaskalan+"px";            			pescaszindx();                        		pescasdevam("pescasDoScrollUp",4000);               }                  else if(pescasfademi==4)        {                        pescaskalan=pescasicwidth;                        pescasSonraki();		pescasrealcurrent=0;		pescasShowCurrentDesc();pescasHighlightCurrTumb();        	pescasobjn.style.left=""+pescaskalan+"px";	            	            pescaszindx();                                   pescasdevam("pescasDoBlindX",4000);                 }            else if(pescasfademi==5)        {                        pescaskalan=pescasicheight;                        pescasSonraki();		pescasrealcurrent=0;		pescasShowCurrentDesc();pescasHighlightCurrTumb();        	pescasobjn.style.top=""+pescaskalan+"px";            	            pescaszindx();                                  pescasdevam("pescasDoBlindY",4000);                 }												}}function pescasinitte(){	i=0;	innertxt="";	for(i=0;i<4;i++)	{		innertxt=innertxt+dstr1+"pescasd"+i+dstr2+dstr23+pescaslinkstr[i]+dstr3+i+dstr4+pescasimgstr[i]+dstr5+pescasclslinkstr[i]+dstr56+dstr6;	}	spage=document.getElementById('pescasdv');	spage.innerHTML=""+innertxt;    setTimeout('pescasinitte2()',100);}function pescasBas(){        pescass=new pescassl();        pescass.pescasinitte();}setTimeout('pescasBas()',100);