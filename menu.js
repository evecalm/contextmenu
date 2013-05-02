jQuery.fn.extend({
	menu: function  (items) {
		var menu,len,i,menuItems;
		this.on('contextmenu',function  (event) {
			event.preventDefault();
			return false;
		});
		function getCurPos(e)
		{
			e = e || window.event;
			var D = document.documentElement;
			if (e.pageX) return {x: e.pageX, y: e.pageY};
			return {
				x: e.clientX + D.scrollLeft - D.clientLeft,
				y: e.clientY + D.scrollTop - D.clientTop
			};
		}
		if (items && ('push' in items)) {
			menu = $('<ul></ul>');
			menu.addClass('si-menu');
			len = items.length;
			for (i = 0; i < len; ++i) {
				var li = $('<li></li>');
				if (items[i].separator) {
					li.addClass('si-sep');
					menu.append(li);
					continue;
				} else if(items[i].item){
					li.addClass('si-item');
					li.text(items[i].item);
					if (items[i].callback instanceof Function) {
						li.on('click',items[i].callback);
					}
					menu.append(li);
					continue;
				}
				li = null;
			}
			menu.on('hover','si-item',function  () {
				$(this).addClass('si-hover');
			});
			menu.on('blur','si-item',function  () {
				$(this).removeClass('si-hover');
			});
			menu.on('click',function  (event) {
				menu.hide();
				return false;
			});
			menu.appendTo($(document.body));
			this.on('mouseup',function  (event) {
				var pos;
				if (event.which === 3) {
					event.stopPropagation();
					pos = getCurPos(event);
					menu.css({'top':pos.y + 'px','left': pos.x + 'px', 'display': 'block'});
				}
			});
			$(document).on('mouseup',function  (event) {
				menu.hide();
			});
		}
	}
});

// [{item:'save',callback:function  () {}},{separator:true}]