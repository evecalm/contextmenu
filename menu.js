jQuery.fn.extend({
	menu: function  (items) {
		var menu,len,i,menuItems;
		this.on('contextmenu',function  (event) {
			return false;
		});
		function getMenuPos(e)
		{
			e = e || window.event;
			var D = document.documentElement,
				pos;
			if (e.pageX || e.pageY) pos = {x: e.pageX, y: e.pageY};
			else pos = {
				x: e.clientX + D.scrollLeft - D.clientLeft,
				y: e.clientY + D.scrollTop - D.clientTop
			};
			pos.y -= 14;
			if ((pos.x + menu.width()) > $(window).width()) {
				if (pos.x > menu.width()) {
					pos.x -= menu.width();
				}
			}
			if ((pos.y + menu.height()) > $(window).height()) {
				if (pos.y > menu.height()) {
					pos.y -= menu.height();
				}
			}
			return pos;
		}
		if (items && ('push' in items)) {
			menu = $('<ul></ul>');
			menu.addClass('si-menu');
			len = items.length;
			for (i = 0; i < len; ++i) {
				var li;
				if (!(items[i] instanceof Object)) {
					continue;
				}
				li = $('<li></li>');
				if(items[i].item){
					li.addClass('si-item');
					li.text(items[i].item);
					if (items[i].callback instanceof Function) {
						li.on('mouseup',items[i].callback);
					}
					menu.append(li);
					continue;
				} else if (items[i]['separator']) {
					li.addClass('si-sep');
					menu.append(li);
					continue;
				}
				li = null;
			}
			menu.on('contextmenu',function  () {
				return false;
			});
			menu.on('hover','si-item',function  () {
				$(this).addClass('si-hover');
			});
			menu.on('blur','si-item',function  () {
				$(this).removeClass('si-hover');
			});
			menu.on('mouseup',function  (event) {
				menu.hide();
				return false;
			});
			menu.on('mousedown',function  (event) {
				return false;
			});
			menu.appendTo($(document.body));
			this.on('mouseup',function  (event) {
				var pos;
				if (event.which === 3) {
					if (event.stopPropagation) {
						event.stopPropagation();
					} else {
						event.cancelBubble  = true;
					}
					pos = getMenuPos(event);
					menu.css({'top':pos.y + 'px','left': pos.x + 'px', 'display': 'block'});
				}
			});
			$(document).on('mousedown',function  (event) {
				menu.hide();
			});
		}
	}
});

// [{item:'save',callback:function  () {}},{separator:true}]