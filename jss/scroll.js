window.addEventListener("scroll",function(e){
					// div 滚动了
					var h=document.documentElement.scrollTop||document.body.scrollTop;
					//console.log(h);
					var nowli = document.getElementById('nav_and_search_bar');
					var nowa = document.getElementById('nav_and_search_bar_1');
					if(h >= 0 && h<750) {
						if(nowa.style.opacity =='1'){
						nowa.style.opacity = '0';
						//console.log(" nowa->0");
						}
					}
					else if(h > 750) {
						if(nowa.style.opacity =='0'){
						nowa.style.opacity = '1';
						//console.log(" nowa->1");
						}
					}
				});