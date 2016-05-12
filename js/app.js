/*

A.S.
WEBSITE APP 0.1
Author: Denny Backhaus

*/

(function($, Backbone) {



/* BASICS  -------------------------------------------------- */

var currentView, currentDiv, previousDiv, div, homeOff, is_ipad, is_iphone;
App = new Object();
App.Cache = new Object();

is_ipad = navigator.userAgent.match(/iPad/i) != null;
is_iphone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
if (is_ipad) is_iphone = false;


/* TRANSITIONS  -------------------------------------------------- */

function showView(view) {


	// Do everything after 0.4 ms
	
	


	setTimeout(function(){
	
	    if (div) {
		    $(div).empty();
	    }
	 
		div = currentDiv;
	    if (currentDiv == '#content_1') {
	    	currentDiv = '#content_2';
	    } else {
		    currentDiv = '#content_1';
	    };
	 
	 
			
			
			
		if (currentView) {
		    switch (currentView.name) {
		    
			    default:
					
					/* PAGE TRANSITION - WITHOUT FADE */
					$(currentDiv).hide();
					$(div).hide().empty();
					
					setTimeout(function(){
						$(window).scrollTop(0);
						$(currentDiv).css({opacity: 1}).show();
					    
						
						currentView = view;
					    currentView.render();
					    
					    $(currentDiv).html(currentView.el);
					    res();
					},100);
	
					
					
					/* PAGE TRANSITION - WITH FADE */
					/*
					$(currentDiv).hide();
			    	$(div).css({ opacity: 1 }).transition({ opacity: 0 });
					setTimeout(function(){
						$(window).scrollTop(0);
						$(div).hide().empty();
						$(currentDiv).css({ opacity: 0 }).show().transition({ opacity: 1 });
						
					},1000);
					
				    currentView = view;
				    currentView.render();
				    
				    $(currentDiv).html(currentView.el);
				    res();
	
					*/
					
					
			    	break;
			    
		    }	  
		    
	    } else {
			    
		 
		    currentView = view;
		    currentView.render();
		 
		    
		    
		    
		    $(currentDiv).html(currentView.el);
		    res();
	    }
		
	 
	    
		res();

	
	},400);

 
}










/* MODELS & COLLECTIONS  -------------------------------------------------- */





var Product_old = Backbone.Model.extend({
	defaults: {
		title: 		"Not specified",		// BLACK & WHITE BRUSH STROKE JERSEY JACQUARD TANK
		slug:		"",						// URL name
		code: 		"Not specified", 		// Code 23Y135324.09BW
		category: 	"Not specified", 		// Category, e.g. "Tote Bag"
		
		collection: "Not specified", 		// Fall 2014
		type: 		"Not specified", 		// RTW, Bags, Shoes, Accessories, Eyewear
		
		number: 	"Not specified"
		}
	});






var Product = Backbone.Model.extend({});

var Products = Backbone.Collection.extend({
	model: 		Product,
	url: './json/products.json'
});



var CCollection = Backbone.Model.extend({});

var CCollections = Backbone.Collection.extend({
	model: 		CCollection,
	url: './json/collections.json'
});


var Store = Backbone.Model.extend({});

var Stores = Backbone.Collection.extend({
	model: 		Store,
	url: './json/stores.json'
});

var StoresFilter = Backbone.Collection.extend({
	model: 		Store
});

















/* VIEWS  -------------------------------------------------- */




StartView = Backbone.View.extend({
	name: 'startView',
    template: Handlebars.compile($('#template_start').html() ),
    attributes: {
    },
    render: function() {
    
        /* MAIN */
        this.$el.html( this.template( this.attributes ) );
        
		
        /* SUBVIEWS */
        
        // Home
        App.Cache.homeView = new HomeView({ el: this.$("#subcontent_home") });
        
        
        /* CUSTOM JS */
        
        /*
		setTimeout(function(){
			stick();
		},200);
		*/
        
    },
    initialize: function(){
      //this.render();
      //this.collection.fetch({ cache: true });
      //this.listenTo( this.collection, 'sync reset', this.render );
    },
    
    
    events: {
        "click .toggle_credits": "toggle_credits"
    },
    toggle_credits: function(ev) {
    
    	el = $(ev.target).closest('.credits-container');
    	if (el.hasClass('on')) {
	    	el.removeClass('on');
    		} else {
    		$(el).closest('.tools-container').find('.on').removeClass('on');
	    	el.addClass('on');
    		}
    	
    	

        return false;
    }
});










HomeView = Backbone.View.extend({
	name: 'homeView',
    template: Handlebars.compile($('#template_home').html() ),
    attributes: {
    },
    render: function() {
    
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
        
        /* SUBVIEWS */
        // Notices List
        /* Notices are out for now
        if (!App.Cache.noticesPosts) {
		  App.Cache.noticesPosts = new NoticesPosts([], {
		    url: 'http://thegentlewoman.co.uk/?json=get_recent_posts&count=12&include=title,content,date&date_format=d.m.Y'
		  });
        }
        App.Cache.homeNoticeslistSubView = new NoticesListSubView({ el: this.$("#subcontent_notices"), collection: App.Cache.noticesPosts });
        */
        
        
		setTimeout(function(){
			stick();
				
			
			$('#acne_video_ascii').abc({invert: true}).get(0).play();
			
			//$('#acne_video_ascii').abc({invert: false}).get(0).play();
		},1);
        
        /*
		if (!is_ipad && !is_iphone) {
			setTimeout(function(){
		        $('video.video-js').each(function(){
			        eval('setup = ' + $(this).attr('data-setup') + ';');
			        videojs(this, setup, function() {
			        });
		        });
		        res();
			},200);
			setTimeout(function(){
				//player = $('#video-home').find('.video-js').attr('id');
				player = $('#video-home').find('.video-js').attr('id');
				player = videojs(player);
				player.play();
				
			},1000);
		} else {
			setTimeout(function(){
		        $('#video-home').remove();
		        $('video.video-js').remove();
			},200);
		};
		*/
		
		
	    
	    
        
    },
    initialize: function(){
      this.render();
    },
    
    
    events: {
        "mouseenter .highlight" : "highlight_navigation",
        "mouseleave .highlight" : "highlight_navigation_off"
    },
    highlight_navigation: function(ev) {
		//$($(ev.target).hash.slice(2)).addClass('hover');
		//console.log($(ev.target));
		//if ($(ev.target).attr('data-highlight')) $($(ev.target).attr('data-highlight')).addClass('hover');
        return false;
    },
    highlight_navigation_off: function(ev) {
		//$('#topnav .center .link-' + $(ev.target).hash.slice(2) + '').removeClass('hover');
        return false;
    }
});











    /*template: _.template($('#template_collections').html() ),*/



CollectionsView = Backbone.View.extend({
    name: 'collectionsView',
    template: Handlebars.compile($('#template_collections').html()),
    attributes: {
	    subheadline: "",
	    subsubheadline: ""
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
        
        
        if (!App.Cache.collectionsPosts) {
        	App.Cache.collectionsPosts = new CCollections();
        }
        
        
        var filters = {};
        if (this.attributes.category) {
        	filters.slug = this.attributes.category;
        	}
        	
        	
        current = App.router.current();
		
		
        attributes = {
        	filters: filters,
	        url: '#/'+current.fragment+'/'
        };
        
        
        App.Cache.collectionsListSubView = new CollectionsListSubView({ el: this.$("#subcontent_collections"), collection: App.Cache.collectionsPosts, attributes: attributes });
        
    },
    
    initialize: function(){
      this.render();
    }
});




/* template: _.template($('#template_collections_list').html() ), */

CollectionsListSubView = Backbone.View.extend({
	name: 'collectionsListSubView',
    template: Handlebars.compile( $('#template_collections_list').html() ),
    render: function() {
        
        /* MAIN */
        
        var thefiltered = new FilteredCollection(this.collection);
        
        thefiltered.filterBy(this.attributes.filters);
        
        
        //this.attributes.loop = this.collection.toJSON();
        
        this.attributes.loop = thefiltered.toJSON();
        this.attributes.loop = this.attributes.loop[0];
        this.$el.html( this.template( this.attributes ) );
		
		/* ADDITIONAL SCRIPTS */
		res();
        $( '.cycle-images' ).cycle();
        
		
        $('video.video-js').each(function(){
	        eval('setup = ' + $(this).attr('data-setup') + ';');
	        videojs(this, setup, function() {
	        });
	        
        });
        
		
		setTimeout(r,1000);
		
		
		if (App.router.current().fragments[2]=='show') {
			setTimeout(function(){
				player = $('.screen-show').find('.video-js').attr('id');
				player = videojs(player);
				player.play();
				
				$('.screen-look').removeClass('on fullheight').transition({height: 0});
			},1000);
		};
		
		
    },
    initialize: function(){
      this.collection.fetch({ cache: false });
      this.listenTo( this.collection, 'sync reset', this.render );
    },
    
    
    events: {
        "click .scrub_look": "scrub_look",
        "click .vjs-looks.vjs-control": "show_look_details",
        "click .toggle_credits": "toggle_credits",
        "click .toggle_options": "toggle_options",
        "click .toggle_details": "toggle_details",
        "mousemove": "hovernavigation",
        "mouseover .hovernavigation span.scrub_look": "hovernavigation_over",
        "mouseleave .hovernavigation span.scrub_look": "hovernavigation_leave",
        "click .do_nothing": "do_nothing"
    },
    scrub_look: function(ev) {
    
    	time = $(ev.target).attr('data-time');
    	
    	player = $(ev.target).closest('.screen').find('.video-js').attr('id');
    	player = videojs(player);
    	player.currentTime(time).play();
    	
        return false;
    },
    show_look_details: function(ev) {
    
    
    	player = $(ev.target).closest('.screen').find('.video-js').attr('id');
    	player = videojs(player);
    	player.pause();
    	time = player.currentTime();
    	
    	look_slug = this.attributes.loop.screens[0].video.looks[0].slug;
        this.attributes.loop.screens[0].video.looks.forEach(function(look){
	        if (time>=look.time) look_slug = look.slug;
        });
        
        current = App.router.current();
        url = current.fragments[0]+"/look/"+look_slug;
        if(url==current.fragment) {
	        $('body,html').animate({scrollTop:$(".screen-look").offset().top}, 500);
        } else {
        	App.router.navigate("/"+url, {trigger: true});
        };

        return false;
    },
    toggle_credits: function(ev) {
    
    	el = $(ev.target).closest('.credits-container');
    	if (el.hasClass('on')) {
	    	el.removeClass('on');
    		} else {
    		$(el).closest('.tools-container').find('.on').removeClass('on');
	    	el.addClass('on');
    		}
    	
    	

        return false;
    },
    toggle_options: function(ev) {
    
    	el = $(ev.target).closest('.options-container');
    	if (el.hasClass('on')) {
	    	el.removeClass('on');
    		} else {
    		$(el).closest('.tools-container').find('.on').removeClass('on');
	    	el.addClass('on');
    		}

        return false;
    },
    toggle_details: function(ev) {

    	el = $(ev.target).closest('.details-container');
    	if (el.hasClass('on')) {
	    	el.removeClass('on');
	    	el.closest('.screen').height($(window).height());
	    	$('body,html').animate({scrollTop:el.closest(".screen").offset().top}, 500);
    		} else {
    		$(el).closest('.tools-container').find('.on').removeClass('on');
	    	el.addClass('on');
	    	el.closest('.screen').height($(window).height()*1.5);
	    	$('body,html').animate({scrollTop:el.closest(".screen").offset().top+el.closest(".screen").height()*0.05}, 500);
    		}

        return false;
    },
    hovernavigation: function(ev) {
    
    	//el = $(ev.target).closest('.hovernavigation');
    	el = $('.hovernavigation');
    	inner = el.find('.hovernavigation-inner');
    	
    	factor = (inner.width()-el.width())/el.width();
    	
    	
    	//$(el).css('border','5px solid #f00');
		//$(document).mousemove(function(e){
			var x = ev.pageX - el.offset().left;
			var y = ev.pageY - el.offset().top;
			
			if (x>=0&&x<=el.width()  &&  y>=0&&y<=el.height() && factor>=0) {
				pos = -(x*factor);
				inner.css({x: pos});
				
			}
		//});

        return false;
    },
    hovernavigation_over: function(ev) {
    	
    	el = $(ev.target);
    	outer = el.closest('.hovernavigation-outer');
    	thumb = $('#video-looksnav-thumb');
    	thumbsrc = el.attr('data-thumb');
    	
    	thumb.attr('src',thumbsrc);
    	thumb.css({x: el.offset().left-outer.offset().left-45});
    	thumb.show();
    	
    	return false;
    },
    hovernavigation_leave: function(ev) {
    	
    	thumb = $('#video-looksnav-thumb');
    	thumb.hide();
    	
    	return false;
    },
    do_nothing: function(ev) {

        return false;
    }
});
















ProductsView = Backbone.View.extend({
    name: 'productsView',
    template: Handlebars.compile($('#template_products').html() ),
    attributes: {
	    subheadline: "Thirty-five profiles of fabulous gentlewomen,<br />as featured in issues 1 to 8",
	    subsubheadline: "Each month, we will add more articles to the library until the full archive is available."
    },
    render: function() {
    
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
        
        /* SUBVIEWS */
        // Products List
        
        if (!App.Cache.productsPosts) {
        	App.Cache.productsPosts = new Products();
        }
        
        
        var filters = {};
        
        if (this.attributes.category) {
        	filters.category = this.attributes.category;
        	}
        if (this.attributes.season) {
        	filters.collection = this.attributes.season;
        	}
        
        
        current = App.router.current();
		
		//url = '#/'+current.fragment+'/';
	
	
	
		if (App.router.current().fragments[0]=='collections') {
			url = App.router.current().fragments;
			url = "#/" + url[0] + "/" + url[1] + "/";
		} else {
			url = App.router.current().fragments;
			url = "#/" + url[0] + "/" + url[1] + "/";
		}
		
		
		
		
        attributes = {
        	filters: filters,
	        url: url
        };
        console.log(filters);
      
        App.Cache.productsProfileslistSubView = new ProductsListSubView({ el: this.$("#subcontent_products"), collection: App.Cache.productsPosts, attributes: attributes });
        
    },
    
    initialize: function(){
      this.render();
    },
    events: {
        
    }
});





ProductsListSubView = Backbone.View.extend({
	name: 'productsListSubView',
    template:Handlebars.compile($('#template_products_list').html() ),
    render: function() {
        
        /* MAIN */
        
        var filtered = new FilteredCollection(this.collection);
        
        filtered.filterBy(this.attributes.filters);
        
        
        this.attributes.loop = filtered.toJSON();
        
        this.attributes.season = App.router.current().fragments[0];
        this.attributes.category = App.router.current().fragments[1];
        
        
        
        this.$el.html( this.template( this.attributes ) );
        
        
        setTimeout(function(){
	        res();
	        scrolling();
        },1000);
        
        
    },
    initialize: function(){
      this.collection.fetch({ cache: false });
      this.listenTo( this.collection, 'sync reset', this.render );
    },
    events: {
        "mouseover .productdetail" : "enter_productdetail",
        "mouseleave .productdetail" : "leave_productdetail"
    },
    enter_productdetail: function(ev) {
		if ($('.productgrid').hasClass('open')) 
			$('.productgrid').addClass('th_hidden');
        return false;
    },
    leave_productdetail: function(ev) {
		if ($('.productgrid').hasClass('open')) 
			$('.productgrid').removeClass('th_hidden');
        return false;
    }
});





ProductsDetailSubView = Backbone.View.extend({
	name: 'productsDetailSubView',
    template: Handlebars.compile($('#template_products_detail').html() ),
    attributes: {
    },
    render: function() {
        //console.log(this.model);
        
        if (this.model) {
            //var productdetail_model = App.Cache.productsPosts.findWhere({'slug': item});
			//App.Cache.productsView.productsDetailSubView = new ProductsDetailSubView({ el: el, model: productdetail_model });     
        
        
        
			if (this.model.attributes.chooser) {
			 	
		        var new_filtered = new FilteredCollection(App.Cache.productsPosts);
		        
		        var items = this.model.attributes.items;
		        
		        new_filtered.filterBy('id', function(model) {
			        return _.contains(items,model.get('id'));
		        });
		        
		        
		        
		        
		        this.model.attributes.links = new_filtered.toJSON();
		        
		        
			}
			
			if ((App.router.current().fragments[4]
				&& App.router.current().fragments[0]=='products')
				||
				(App.router.current().fragments[3]
				&& (App.router.current().fragments[0]=='summer-2014'||App.router.current().fragments[0]=='fall-2014'))
				) {
				this.model.attributes.subitem = true;
				//this.model.attributes.backurl = '#/'+App.router.current().fragments.pop().join("/")+'/';
				backurl = App.router.current().fragments;
				backurl.pop();
				this.model.attributes.backurl = '#/'+backurl.join('/');
			} else {
				this.model.attributes.subitem = false;
			}
			
			//if (App.router.current().fragments[0]=='summer-2014'||App.router.current().fragments[0]=='fall-2014') {
			if ((App.router.previous2.fragments[1]=='campaign' || App.router.previous2.fragments[1]=='show' || App.router.previous2.fragments[1]=='inspiration') && App.router.current().fragments[1]!='look') {
				this.model.attributes.collections = false;
				this.model.attributes.fromcampaign = true;
				closeurl = App.router.current().fragments;
				closeurl = "#/" + closeurl[0] + "/campaign";
				this.model.attributes.closeurl = closeurl; 
				
				
			} else if (App.router.current().fragments[1]=='look') {
				this.model.attributes.collections = true;
				this.model.attributes.fromcampaign = false;
				closeurl = App.router.current().fragments;
				closeurl = "#/" + closeurl[0] + "/show";
				this.model.attributes.closeurl = closeurl;
				
			} else {
				this.model.attributes.collections = false;
				this.model.attributes.fromcampaign = false;
				closeurl = App.router.current().fragments;
				closeurl = "#/" + closeurl[0] + "/" + closeurl[1];
				this.model.attributes.closeurl = closeurl;
				//this.model.attributes.url = closeurl;
			}
			
			this.model.attributes.url = '#/'+App.router.current().fragment+'/';
			
        	
        	this.$el.html( this.template( this.model.attributes ) );
        	res();
        }
        
        
    },
    initialize: function(){
      this.render();
    },
    events: {
        "click .toggle_options": "toggle_options",
        "click .toggle_color": "toggle_color",
        "click .toggle_material": "toggle_material",
        "click .toggle_thumbs": "toggle_thumbs",
        "click .do_nothing": "do_nothing",
        "click .change_state": "change_state",
        
        "click .toggle_currency": "toggle_currency",
        "click .change_currency": "change_currency"
    },

    toggle_options: function(ev) {
    
    	$('.price .dropdown').removeClass('on');
    
    	el = $(ev.target).closest('.options-container');
    	if (el.hasClass('on')) {
	    	el.removeClass('on');
    		} else {
    		$(el).closest('.tools-container').find('.on').removeClass('on');
	    	el.addClass('on');
	    	if (!$(el).closest('.text').hasClass('no_overflow')) $($(el).closest('.text')).animate({scrollTop:$(el).offset().top}, 500);
    		}

        return false;
    },
    toggle_thumbs: function(ev) {
    
    	$('.price .dropdown').removeClass('on');
    	
    	
    	el = $(ev.target).closest('.text');
    	el_thumbs = el.find('.thumbs');
    	
    	if (!el_thumbs.hasClass('on')) {
		    	
	    	el_thumbs.toggleClass('on');
	    	
	    	el_material = el_thumbs.find('.materials').first().children('a').first();
	    	el_material.addClass('on');
	    	
	    	el_colors = el_thumbs.find('.colors').first();
	    	el_colors.addClass('on');
	    	el_colors.children('a').first().addClass('on');
	    	
	    	src = el_material.attr('data-src');
	    	el.closest('.drilldown-item').find('.images').removeClass('length-2').html('<img src="'+src+'" />');
	    	

    	}
        return false;
    },
    toggle_material: function(ev) {
    
    
    	$('.price .dropdown').removeClass('on');
    	
    	el = $(ev.target);
    	$('.item.materials a.on').removeClass('on');
    	el.addClass('on');
    	
    	el_col = $('.colors-'+ev.target.hash.substring(1));
    	$('.colors.on').removeClass('on');
    	el_col.addClass('on');
    	
    	el_col.find('a.on').removeClass('on');
    	el_col.children().first().addClass('on');
    	src = el.attr('data-src');
    	el.closest('.drilldown-item').find('.images').removeClass('length-2').html('<img src="'+src+'" />');

        return false;
    },
    toggle_color: function(ev) {
    
    	$('.price .dropdown').removeClass('on');
    	
    	el = $(ev.target).parent();
    	
    	src = el.attr('href');
    	if (src==undefined) src = el.parent().attr('href');
    	
    	
    	//$('.productgrid .productdetail .images').removeClass('length-2').html('<img src="'+src+'" style="width:'+ow+'; height:'+oh+';" />');
    	el.closest('.drilldown-item').find('.images').removeClass('length-2').html('<img src="'+src+'" />');
    	hd = el.attr('data-hd');
    	sku = el.attr('data-sku');
    	el.closest('.drilldown-item').find('.hd').text(hd);
    	el.closest('.drilldown-item').find('.sku').text(sku);
    	
    	el.parent().find('.on').removeClass('on');
    	el.addClass('on');

        return false;
    },
    toggle_currency: function(ev) {
    
    	
    	el = $(ev.target).closest('.price');
    	
    	el.find('.dropdown').toggleClass('on');

        return false;
    },
    change_currency: function(ev) {
    
    	
    	
    	el = $(ev.target).closest('.dropdown');
    	
    	
    	
    	el.find('a.on').removeClass('on');
		$(ev.target).addClass('on');
		
		setTimeout(function(){
			el.removeClass('on');
		},500);
		
        return false;
    },
    change_state: function(ev) {
    
    	el = $(ev.target).closest('.states');
		tostate = $(ev.target).attr('data-tostate');
		
		
		if (tostate==3) {
			el.removeClass('state-0').addClass('state-1');
			setTimeout(function(){el.removeClass('state-1').addClass('state-3');},1500);
			};
		
		if (tostate==0) {
			el.removeClass('state-3').addClass('state-2');
			setTimeout(function(){el.removeClass('state-2').addClass('state-0');},1500);
			};
			
			
		
        return false;
    },
    do_nothing: function(ev) {

        return false;
    }
});





StorelocatorView = Backbone.View.extend({
    name: 'storelocatorView',
    template: Handlebars.compile($('#template_storelocator').html() ),
    attributes: {
	    subheadline: "",
	    subsubheadline: ""
    },
    render: function() {
    
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
        
        /* SUBVIEWS */
        
        if (!App.Cache.storesPosts) {
        	App.Cache.storesPosts = new Stores();
        }
        
        
        var actions = null;
        
        
        if (this.attributes.actions) {
        	actions = this.attributes.actions;
        	}
        
        current = App.router.current();
		
        attributes = {
        	actions: actions,
	        url: '#/'+current.fragment+'/'
        };
        
        
        //filters = 'FILTERS';
        
        //App.Cache.productsProfileslistSubView = new ProductsListSubView({ el: this.$("#subcontent_products"), collection: App.Cache.productsPosts });
        App.Cache.storesListSubView = new StoresListSubView({ el: this.$("#subcontent_storelist"), collection: App.Cache.storesPosts, attributes: attributes });
        
    },
    
    initialize: function(){
      this.render();
    },
    events: {
        "click .switch_view" : "switch_view"
    },
    switch_view: function(ev) {
		$('.productgrid').toggleClass('stream').toggleClass('grid');
		$(ev.target).parent().toggleClass('alt');
        return false;
    }
});





StoresListSubView = Backbone.View.extend({
	name: 'storesListSubView',
    template: Handlebars.compile($('#template_stores_list').html() ),
    render: function() {
        
        
        this.$el.html( this.template( this.attributes ) );
        
        
        //this.$('.drilldown-item').toggleClass('active');
        this_el = this.$('.drilldown-item.active .subcontent_storelist_content');
        
        App.Cache.storesListContentSubView = new StoresListContentSubView({ el: this_el, collection: this.collection, attributes: this.attributes });
        
        
        //App.Cache.storesListSubView = new StoresListSubView({ el: this.$("#subcontent_storelist"), collection: App.Cache.storesPosts, attributes: attributes });

        
        
    },
    initialize: function(){
      //this.collection.fetch({ cache: false });
      //this.listenTo( this.collection, 'sync reset', this.render );
      this.render();
    }
});






StoresListContentSubView = Backbone.View.extend({
	name: 'storesListContentSubView',
    template: Handlebars.compile($('#template_stores_list_content').html() ),
    render: function() {
                
                
                
                
                
        /* MAIN */
        
        var filtered = new FilteredCollection(this.collection);
        
        
        
        
        fil = filtered;
		filColl = filtered;
		fil_store = false;

		url = '#/storelocator';
		backurl = '#/storelocator';

        if (this.attributes.actions!=null) {
	        
        	a = this.attributes.actions.split('/');
        	
			maxlength = 4;
			length = a.length;
			//if (length==maxlength) length=maxlength-1;
        	
        	
	        
	        
        	for (i=0;i<length;i++) {
        		
        		//if (i==0) maxlength = filColl.get('length');
	        	if (i==maxlength-1) {
	        	
		        	fil_store = filColl.findWhere({slug: a[i]});
		        		        	
	        	} else {
			        	
		        	fil = filColl.findWhere({slug: a[i]});
		        	filColl = new StoresFilter(fil.get('items'));
		        	
					url += '/'+ fil.get('slug');
					if (i<length-1&&i<maxlength-2) backurl += '/'+ fil.get('slug');
	        	}
	        	
        		if (i==0) maxlength = fil.get('length');
	        	
	        	
        	}
        };
        
        
        
        
        this.attributes.loop = fil.toJSON();
        if (this.attributes.loop.items) {} else {this.attributes.loop = {"items": this.attributes.loop};};
        
        if (fil_store) {
        		this.attributes.store = fil_store.toJSON();
        	} else {
	        	this.attributes.store = {'id': 'XXX'};
        	}
        	
        this.attributes.url = url;
        this.attributes.backurl = backurl;

        
        //if (this.attributes.actions!=null&&a.length==3) this.attributes.store.id = this.attributes.loop.items[0].id;
        if (this.attributes.actions!=null) {
        	if (a.length==maxlength-1) this.attributes.store.id = this.attributes.loop.items[0].id;
        	};
        
        this.$el.html( this.template( this.attributes ) );
        
        
	    store_el = $('#subcontent_store');
	    
	    if (this.attributes.actions!=null) {
		    if (a.length>maxlength-1) {
		        
			    App.Cache.storesStoreSubView = new StoresStoreSubView({ el: store_el, collection: this.collection, attributes: this.attributes });
			    $('#storelocator').addClass('show_store');
		        
	        } else if (a.length>maxlength-2) {
		        
		        this.attributes.store = this.attributes.loop.items[0];
		        App.Cache.storesStoreSubView = new StoresStoreSubView({ el: store_el, collection: this.collection, attributes: this.attributes });
			    $('#storelocator').removeClass('show_store');
		        
	        } else {
	        	App.Cache.storesStoreDefaultSubView = new StoresStoreDefaultSubView({ el: store_el, collection: this.collection, attributes: this.attributes });
			    $('#storelocator').removeClass('show_store');
	        }
	    } else {
		    
	        App.Cache.storesStoreDefaultSubView = new StoresStoreDefaultSubView({ el: store_el, collection: this.collection, attributes: this.attributes });
			    $('#storelocator').removeClass('show_store');
	    };
        
        
        
       // this.$el.html( this.template( this.attributes ) );
        
        
        
    },
    initialize: function(){
      this.collection.fetch({ cache: false });
      this.listenTo( this.collection, 'sync reset', this.render );
    }
});








StoresStoreSubView = Backbone.View.extend({
	name: 'storesStoreSubView',
    template: Handlebars.compile($('#template_stores_store').html() ),
    render: function() {
        
        //alert(App.router.current().fragment);
        
        curr = App.router.current().fragment;
        this.attributes.backurl = '#/'+ curr.substring(0, curr.lastIndexOf("/"));
        
        //this.attributes.backurl = App.router.current().fragment;
        
        this.$el.html( this.template( this.attributes ) );
        
        
    },
    initialize: function(){
      //this.collection.fetch({ cache: false });
      //this.listenTo( this.collection, 'sync reset', this.render );
      this.render();
    },
    events: {
        "click a.toggle_map" : "toggle_map"
    },
    toggle_map: function(ev) {
    	
		$(ev.target).addClass('on');
		$(ev.target).closest('.storelocator-right').find('img.store').removeClass('on');
		
        return false;
    }
});



StoresStoreDefaultSubView = Backbone.View.extend({
	name: 'storesStoreSubView',
    template: Handlebars.compile($('#template_stores_store_default').html() ),
    render: function() {
        
        
        this.$el.html( this.template( this.attributes ) );
        
        
    },
    initialize: function(){
      //this.collection.fetch({ cache: false });
      //this.listenTo( this.collection, 'sync reset', this.render );
      this.render();
    }
});










ProductsEmptyView = Backbone.View.extend({
    name: 'productsEmptyView',
    template:Handlebars.compile($('#template_products_empty').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});







BrandView = Backbone.View.extend({
    name: 'brandView',
    template: Handlebars.compile($('#template_brand').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
    
    
});



ManifestoView = Backbone.View.extend({
    name: 'manifestoView',
    template: Handlebars.compile($('#template_manifesto').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});


PhoebeView = Backbone.View.extend({
    name: 'phoebeView',
    template: Handlebars.compile($('#template_phoebe').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});

SpecialprojectView = Backbone.View.extend({
    name: 'specialprojectView',
    template: Handlebars.compile($('#template_specialproject').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});











LegaltermsView = Backbone.View.extend({
    name: 'legaltermsView',
    template: Handlebars.compile($('#template_legalterms').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});












InformationView = Backbone.View.extend({
    name: 'informationView',
    template: Handlebars.compile($('#template_information').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});




ErrorView = Backbone.View.extend({
    name: 'errorView',
    template: Handlebars.compile($('#template_error').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});





/* ACNE STUFF */

WomenView = Backbone.View.extend({
    name: 'womenView',
    template: Handlebars.compile($('#template_women').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
        
        
		setTimeout(function(){
			stick();
				
			
			$('#acne_video_ascii').abc({invert: false}).get(0).play();
			
			//$('#acne_video_ascii').abc({invert: false}).get(0).play();
		},1);
    },
    
    initialize: function(){
      this.render();
    }
});


WomenFw16View = Backbone.View.extend({
    name: 'womenFw16View',
    template: Handlebars.compile($('#template_women_fw16').html() ),
    attributes: {
	    
    },
    render: function() {
    
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});



WomenCoatsView = Backbone.View.extend({
    name: 'womenCoatsView',
    template: Handlebars.compile($('#template_women_coats').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});


MenView = Backbone.View.extend({
    name: 'menView',
    template: Handlebars.compile($('#template_men').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
    },
    
    initialize: function(){
      this.render();
    }
});







PDPView = Backbone.View.extend({
    name: 'pdpView',
    template: Handlebars.compile($('#template_pdp').html() ),
    attributes: {
	    
    },
    render: function() {
    	/* MAIN */
        this.$el.html( this.template( this.attributes ) );
        
        
		setTimeout(function(){
			stick();
		},1);
        
        
        
    },
    
    initialize: function(){
      this.render();
    }
});





































  
var AppRouter = Backbone.Router.extend({
    routes: {
        "" : 'loadStart',
        "home" : 'loadStart',
        
        
        "women" : 'loadWomen',
        "men" : 'loadMen',
        
        
        "women/coats" : 'loadWomenCoats',
        "women/fw16" : 'loadWomenFw16',
        
        
        "pdp" : 'loadPDP',
        "women/pdp" : 'loadPDP',
        "women/coats/pdp" : 'loadPDP',
        "men/pdp" : 'loadPDP',
        
        
        "fall-2014" : 'loadCollections',
        "fall-2014/inspiration" : 'loadCollections',
        "fall-2014/show" : 'loadCollections',
        "fall-2014/campaign" : 'loadCollections',
        
        "fall-2014/look/:item" : 'loadCollectionsLook',
        "fall-2014/look/:item/:subitem" : 'loadCollectionsLook',
        
        "fall-2014/:category" : 'loadProducts',
        "fall-2014/:category/:item" : 'loadProducts',
        "fall-2014/:category/:item/:subitem" : 'loadProducts',
        
        
        
        "summer-2014" : 'loadCollections',
        "summer-2014/inspiration" : 'loadCollections',
        "summer-2014/show" : 'loadCollections',
        "summer-2014/campaign" : 'loadCollections',
        
        "summer-2014/look/:item" : 'loadCollectionsLook',
        "summer-2014/look/:item/:subitem" : 'loadCollectionsLook',
        
        "summer-2014/:category" : 'loadProducts',
        "summer-2014/:category/:item" : 'loadProducts',
        "summer-2014/:category/:item/:subitem" : 'loadProducts',
        
        
        
        "products" : 'loadProducts',
        "products/:category/:season" : 'loadProducts',
        "products/:category/:season/:item" : 'loadProducts',
        "products/:category/:season/:item/:subitem" : 'loadProducts',
        
        "celine" : 'loadCeline',
        "celine/brand" : 'loadBrand',
        "celine/manifesto" : 'loadManifesto',
        "celine/phoebe-philo" : 'loadPhoebe',
        "celine/special-project" : 'loadSpecialproject',
                
        
        "celine/:id" : 'loadCeline',
        
        
                
        "storelocator" : 'loadStorelocator',
        "storelocator/*actions" : 'loadStorelocator',
        /*
        "storelocator/:area" : 'loadStorelocator',
        "storelocator/:area/:country" : 'loadStorelocator',
        "storelocator/:area/:country/:city" : 'loadStorelocator',
        "storelocator/:area/:country/:city/:store" : 'loadStorelocator',
        */
        
        
        "information" : 'loadInformation',
        "information/legal-terms" : 'loadLegalterms',
        "information/:category" : 'loadInformation',
        
        
        "error" : 'loadError',
        
        
    },
    current : function() {
	    
	    var Router = this,
	        fragment = Backbone.history.fragment,
	        fragments = Backbone.history.fragment.split('/'),
	        routes = _.pairs(Router.routes),
	        route = null, params = null, matched;
	        
	
	    matched = _.find(routes, function(handler) {
	        route = _.isRegExp(handler[0]) ? handler[0] : Router._routeToRegExp(handler[0]);
	        return route.test(fragment);
	    });
	
	    if(matched) {
	        // NEW: Extracts the params using the internal
	        // function _extractParameters 
	        params = Router._extractParameters(route, fragment);
	        route = matched[1];
	    }
	
		returning = {
	        route : route,
	        fragment : fragment,
	        fragments : fragments,
	        params : params
	    };
	    //this.previous = returning;
	    
	
	    return returning;
	},
	previous : {
		route: false,
		fragment: false,
		fragments: [0,1,2,3],
		routes: false
	},
	previous2 : {
		route: false,
		fragment: false,
		fragments: [0,1,2,3],
		routes: false
	}
});


// Instantiate the router
App.router = new AppRouter;




function update_nav() {
	
	//console.log(self);
	
	current = App.router.current();
	path = current.fragments;
	id = '';
	

	for (i=0;i<path.length;i++) {
		id = id + '-' + path[i];
		
		if (!$('#navigation #nav-li'+id).hasClass('on')) {
			$('#navigation #nav-li'+id).closest('.nav').find('.on').removeClass('on');
			$('#navigation #nav-li'+id).closest('.nav').find('.open').removeClass('open');
			
			$('#navigation #nav-li'+id).closest('.nav').addClass('inactive');
			
				
			$('#navigation #nav-li'+id).addClass('on');
			$('#navigation #nav'+id).addClass('open');
			};
			
	}
	
	
	if (path[0] == '') {
		$('#navigation #nav .open').removeClass('open');
		$('#navigation #nav .on').removeClass('on');
		$('#navigation .inactive').removeClass('inactive');
	}
	
	/*
	if (path.length==1||path[0] == 'information') {
		$('#navigation #nav .open').removeClass('open');
		$('#navigation #nav .on').removeClass('on');
		$('#navigation .inactive').removeClass('inactive');
	}
	*/
	

	return false;
}



/* DO BASIC STUFF ON ALL ROUTE CHANGES */
App.router.on("all",function(route, router) {
    
    if (App.router.current().fragment!=App.router.previous.fragment) App.router.previous2 = App.router.previous;
    App.router.previous = App.router.current();
    
    $('#nav_overlay').removeClass('on');
    
	update_nav();
	
	
});






App.router.on('route:loadStart', function () {
    // Open View here
    
    //document.body.className = 'home';
    document.body.className = $('body').hasClass('loggedin') ? 'home loggedin' : 'home';
    if (!App.router.previous.fragment) $('body').addClass('nav-firstview');
    showView(new StartView());
});



/* ACNE PAGES */

App.router.on('route:loadWomen', function () {
    document.body.className = 'women nav-transparent';
    showView(new WomenView());
});

App.router.on('route:loadWomenFw16', function () {
    document.body.className = 'women-fw16';
    showView(new WomenFw16View());
});

App.router.on('route:loadWomenCoats', function () {
    document.body.className = 'women-coats';
    showView(new WomenCoatsView());
});


App.router.on('route:loadMen', function () {
    document.body.className = 'men';
    showView(new MenView());
});




App.router.on('route:loadPDP', function () {
    document.body.className = 'pdp nav-transparent';
    showView(new PDPView());
});









/* FROM CELINE */

App.router.on('route:loadCollections', function () {
	
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin collections' : 'collections';
	
    if (!App.Cache.collectionsPosts) {
    	App.Cache.collectionsPosts = new CCollections();
    }
    
    
    category = App.router.current().fragments[0];
    item = App.router.current().fragments[1];
	
	
	attributes = {category: category};
	
	
	if (App.router.current().fragments[0] 
		&& App.router.current().fragments[0]==App.router.previous.fragments[0] 
		&& (App.router.previous.fragments[1]=='inspiration'
			|| App.router.previous.fragments[1]=='show'
			|| App.router.previous.fragments[1]=='campaign'
			|| App.router.previous.fragments[1]=='look'
		)) {
	
		/* ALREADY ON PAGE */
	
        /* SCROLL TO POSITION */
        $('body,html').animate({scrollTop:$('.screen-'+item).offset().top}, 500);
        
		if (item=='show') {
			setTimeout(function(){
				player = $('.screen-show').find('.video-js').attr('id');
				player = videojs(player);
				player.play();
				
				$('.screen-look').removeClass('on fullheight').transition({height: 0});
			},10);
		};
		
	} else {
		
		/* COMING FROM NEW PAGE */
		
	    App.Cache.collectionsView = new CollectionsView({ attributes: attributes });
	    showView(App.Cache.collectionsView);
	    
	}
	
	
    
    
});




App.router.on('route:loadCollectionsLook', function (item, subitem) {
	
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin collections' : 'collections';
    category = App.router.current().fragments[0];
    
	// get category, etc
	attributes = {category: category};
	if (item) attributes.item = item;
	if (subitem) attributes.subitem = subitem;
 
    if (!App.Cache.productsPosts) {
    	App.Cache.productsPosts = new Products();
    	App.Cache.productsPosts.fetch({ cache: true });
    }
	
	if (App.router.current().fragments[2] && App.router.current().fragments[2]==App.router.previous.fragments[2]) {
		
		if (App.router.current().fragments[3]) {
				
			// FORWARD	
			
			$('.productdetail .drilldown-item-0').transition({x:'-100%'});
			
	        /* LOAD DATA */
	        setTimeout(function(){
		        var productdetail_subitem_model = App.Cache.productsPosts.findWhere({'slug': subitem});
		        el = App.Cache.collectionsView.collectionsLookDetailSubView.$(".drilldown-item-1");
		        App.Cache.collectionsView.collectionsLookDetailSubView.collectionsLookDetailSubSubView = new ProductsDetailSubView({ el: el, model: productdetail_subitem_model });
		        
	        },10);
			
			$('.productdetail .drilldown-item-1').transition({x:'0'});
			
		} else {
			
			// BACKWARD
			
			$('.productdetail .drilldown-item-0').transition({x:'0'});
			$('.productdetail .drilldown-item-1').transition({x:'100%'});
		}
		
		
		
		
	} else if (App.router.current().fragments[0] && App.router.current().fragments[0]==App.router.previous.fragments[0]) {
		
		
		/* CREATE / SHOW / HIDE PRODUCT DETAIL HTML WRAPPER */
		
		
		speed = 500;
		
		/*
		$('.productgrid li.productdetail').addClass('remove').css({height: $('.productgrid li.productdetail').height()}).transition({ height: 0 },speed);
		setTimeout(function(){$('.productgrid li.productdetail.remove').remove();},speed);
		*/
        
        el = App.Cache.collectionsView.$(".subcontent_looks");
        
        
        /* LOAD DATA */
        //var productdetail_model = App.Cache.productsPosts.findWhere({'slug': item});
        setTimeout(function(){
		    
		    el.html('<div class="productdetail productdetail-slug-'+item+'"></div>');
	        var productdetail_model = App.Cache.productsPosts.findWhere({'slug': item});
	        App.Cache.collectionsView.collectionsLookDetailSubView = new ProductsDetailSubView({ el: el, model: productdetail_model });
	        res();
        },10);
        
        
        setTimeout(function(){
        	res();
        },1000);
        
        setTimeout(function(){
        	res();
        },1500);
        setTimeout(function(){
        	res();
        },2000);
        
        setTimeout(function(){
        	res();
        },2500);
        
        setTimeout(function(){
        	res();
        },3000);
        /* SCROLL TO POSITION */
        
        /* THIS SHOULD BE RETHOUGHT, AS CANT BE REOPENED NOW */
        
        //oh = el.height();
        $('body,html').animate({scrollTop:App.Cache.collectionsView.$(".screen-look").offset().top}, speed);
        $('.screen-look').addClass('on fullheight').transition({height: $(window).height()+200});
		//el.css({height: 0}).transition({ height: oh },speed);
		
	} else {
		
		//NAVIGATE TO  COLLETIONS PAGE FIRST, ETC
	};

	
	
	
    
    
});









App.router.on('route:loadProducts', function (category, item, subitem) {
    
	
	season = App.router.current().fragments[0];
	
	document.body.className = $('body').hasClass('loggedin') ? 'loggedin products' : 'products';	
    
    
	// get category, etc
	attributes = {};
	if (category) attributes.category = category;
	if (season) attributes.season = season;
	if (item) attributes.item = item;
	if (subitem) attributes.subitem = subitem;
	
    if (!App.Cache.productsPosts) {
    	App.Cache.productsPosts = new Products();
    }
	
	
    $('body').addClass(season);
    $('body').addClass(category);
	
	
	/* NO SCROLL TO SEASON, BUT OPEN/CREATE PAGE */
	
	
    f=1;
	if (App.router.current().fragments[f+1] && App.router.current().fragments[f+1]==App.router.previous.fragments[f+1]) {
	
		
		if (App.router.current().fragments[f+2]) {
			
			// FORWARD	
			
			$('.productgrid li.productdetail .drilldown-item-0').transition({x:'-100%'});
			
	        /* LOAD DATA */
	        var productdetail_subitem_model = App.Cache.productsPosts.findWhere({'slug': attributes.subitem});
	        el = App.Cache.productsView.productsDetailSubView.$(".drilldown-item-1");
	        App.Cache.productsView.productsDetailSubView.productsDetailSubSubView = new ProductsDetailSubView({ el: el, model: productdetail_subitem_model });
			
			$('.productgrid li.productdetail .drilldown-item-1').transition({x:'0'});
			
		} else {
			
			// BACKWARD
			
			$('.productgrid li.productdetail .drilldown-item-0').transition({x:'0'});
			$('.productgrid li.productdetail .drilldown-item-1').transition({x:'100%'});
		}
		
		
		
		
		
	} else if (
		App.router.current().fragments[1] 
		/*&& App.router.current().fragments[1]==App.router.previous.fragments[1]*/
		) {
	
		aattributes = attributes;
		
		
		
		if (App.router.current().fragments[1]!=App.router.previous.fragments[1]) {
				
		    App.Cache.productsView = new ProductsView({ attributes: attributes });
		    showView(App.Cache.productsView);
		}
		
		
		
		/* CREATE / SHOW / HIDE PRODUCT DETAIL HTML WRAPPER */
		
		speed = 500;
		
		
		// OLD ROW HIDE
		old_el = $('.productgrid li.productdetail');
		if (old_el.length>0) {
		
			$('.productgrid').removeClass('open');
		
			old_top = $('.productgrid li.productdetail').offset().top;
			old_height = old_el.height();
			old_el.addClass('remove').transition({ height: 0 },speed);
	        $('.productgrid li.on').removeClass('on');
			setTimeout(function(){$('.productgrid li.productdetail.remove').remove();},speed);
		}
	    
	    
		// NEW ROW INSERT
		
		timeout = (App.router.current().fragments[1]==App.router.previous.fragments[1]) ? 0 : 1000;
		
		if(aattributes.item!=undefined) {
			setTimeout(function() {
				
				
					
				$('.productgrid').addClass('open');
				
				// INSERT DETAIL HTML WRAPPER
							
				el_target = $('.productgrid li.slug-'+aattributes.item);
				el_target_insert = el_target;
				
				
				// GET INSERT POSITION
				pos = false;
				
				
				while(pos==false) {
					//if (el_target_insert.next().length>0 && el_target_insert.offset().top==el_target_insert.next().offset().top) {
					if (el_target_insert.next().length>0 
						&& (el_target_insert.offset().top-parseInt(el_target_insert.css('margin-top')))
						==(el_target_insert.next().offset().top-parseInt(el_target_insert.next().css('margin-top')))) {
						
						el_target_insert = el_target_insert.next();
					} else {
						pos=true;
					}
				};
				
				el_target_insert.after('<li class="productdetail productdetail-slug-'+aattributes.item+'" data-slug="slug-'+aattributes.item+'"></li>');
				
		        el = App.Cache.productsView.$(".productdetail-slug-"+aattributes.item);
		        
				
		
		        /* LOAD DATA */
		        var productdetail_model = App.Cache.productsPosts.findWhere({'slug': aattributes.item});
		        App.Cache.productsView.productsDetailSubView = new ProductsDetailSubView({ el: el, model: productdetail_model });
			        
			        
			        
		        // TARGET ON
		        el_target.addClass('on');
		        
		        
		        // SIZE CALCULATE
		        
		        if ($(window).width()>420) {
				        
			        h = el.height();
			        w = el.width();
			        
			        ow = el_target.attr('data-width');
			        oh = el_target.attr('data-height');
			        ofactor = ow/oh;
			        xfactor = (ow*(1/0.46))/oh;
			        //xfactor = ofactor*(1/0.46);
			        
			        nh = w/(xfactor);
			        
					h = nh;
		        } else {
			        				        
			        h = el.height();
			        
			        ow = el_target.attr('data-width');
			        oh = el_target.attr('data-height');
			        ofactor = ow/oh;
			        xfactor = ow/(oh*2);
			        
			        //xfactor = ofactor*(1/0.46);
			        
			        nh = el.width()/(xfactor);
			        //alert(nh);
			        
			        
			        h = nh;

		        }
		        
		        
		        // APPLY SIZE
		        //el.children('.drilldown').css({height: h});
		        //el.children('.drilldown-item').css({height: h});
		        
		        
		        
				
		        // SCROLL TO POSITION
		        new_top = el.offset().top;
		        //alert(new_top);
		        //el.css('border','10px solid #ff0');
		        if (old_el.length>0 && new_top > old_top) {
		        	new_top = new_top-old_height;
		        }
		        new_top_center = new_top-($(window).height()-h)/2;
		        if (new_top_center>new_top) new_top_center = new_top;
		        $('body,html').animate({scrollTop:new_top_center}, speed);
		        
		        //console.log('new_top: '+new_top+' / old_top: ');
		        
		        // OPEN ROW ANIMATION
				el.css({height: 0}).transition({ height: h },speed);
				
			
				
			},timeout);
		}
	        
	    		
		
		
		
		
		
	} else {
	
		
		//document.body.className = 'products';
	    //if (!App.Cache.productsView) App.Cache.productsView = new ProductsView({ attributes: attributes });
	    App.Cache.productsView = new ProductsView({ attributes: attributes });
	    showView(App.Cache.productsView);
	    
	}
	
	
	
    
    
});







App.router.on('route:loadStorelocator', function (actions) {

    document.body.className = $('body').hasClass('loggedin') ? 'loggedin storelocator' : 'storelocator';
    
	attributes = {actions: actions};
 
    if (!App.Cache.storesPosts) {
    	App.Cache.storesPosts = new Stores();
    }
    
    
    
    if (App.router.previous.fragments[0] == App.router.current().fragments[0]) {
	    
	    /* ALREADY IN VIEW */
	    curr = App.router.current().fragments;
	    prev = App.router.previous.fragments;
	    
	    if ( (curr.length==5&&prev.length>=4) || (curr.length==4 && curr[1]=='japan') ) {
	    
	    	/* ITS A STORE (show without ani) */
		    
		    this_el = $('#storelocator .drilldown-item.active .subcontent_storelist_content');
		    App.Cache.storesListContentSubView = new StoresListContentSubView({ el: this_el, collection: App.Cache.storesPosts, attributes: attributes });

	    } else {
	    
	    	/* ITS AN AREA (show with ani) */
			
	        $('#storelocator .drilldown-item').toggleClass('active');
	        this_el = $('#storelocator .drilldown-item.active .subcontent_storelist_content');
	        
	        
	        App.Cache.storesListContentSubView = new StoresListContentSubView({ el: this_el, collection: App.Cache.storesPosts, attributes: attributes });
	        
	        
	        next = (App.router.previous.fragments.length < App.router.current().fragments.length) ? false : true;
	        $('#storelocator .drilldown-item:not(.active)').css({x:0}).transition({x: next ? '100%' : '-100%'});
	        $('#storelocator .drilldown-item.active').css({x: next ? '-100%' : '100%'}).transition({x: 0});
	        
	        
	        
	    }
	    
	    
    } else {
    
    	/* BUILD NEW VIEW */
	    
    	showView(new StorelocatorView({ attributes: attributes }));
    };
    
    
});






App.router.on('route:loadProductsEmpty', function () {

    document.body.className = $('body').hasClass('loggedin') ? 'loggedin' : '';
    //document.body.className = '';
    showView(new ProductsEmptyView());
});







App.router.on('route:loadCeline', function () {

    document.body.className = $('body').hasClass('loggedin') ? 'loggedin about' : 'about';
    //document.body.className = '';
    showView(new CelineView());
});

App.router.on('route:loadBrand', function () {
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin about' : 'about';
    showView(new BrandView());
});

App.router.on('route:loadManifesto', function () {
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin about' : 'about';
    showView(new ManifestoView());
});

App.router.on('route:loadPhoebe', function () {
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin about' : 'about';
    showView(new PhoebeView());
});

App.router.on('route:loadSpecialproject', function () {
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin about' : 'about';
    showView(new SpecialprojectView());
});













App.router.on('route:loadInformation', function () {

    document.body.className = $('body').hasClass('loggedin') ? 'loggedin information' : 'information';
    //document.body.className = '';
    showView(new InformationView());
});








App.router.on('route:loadLegalterms', function () {
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin legalterms' : 'legalterms';
    showView(new LegaltermsView());
});






App.router.on('route:loadError', function () {
    document.body.className = $('body').hasClass('loggedin') ? 'loggedin error' : 'error';
    showView(new ErrorView());
});
















/* START HISTORY */
Backbone.history.start();







/* STICKY */
function stick() {
	$(".page-top-sticky").each(function( index ) {
		/* OLD STICKY.JS */
	    //$(this).sticky({ topSpacing: 1 });
	    
	    /* NEW STICKY-KIT */
	    //$(this).stick_in_parent({ parent: $() });
	    options = {};
	    
	    //options.test = 'testing';
	    //alert(options.test);
	    
	    if ($(this).attr('data-parent')) options.parent = $(this).attr('data-parent');
	    if ($(this).attr('data-offset')) options.gap = $(this).attr('data-offset');

		options.gap = 32;
	    
	    //alert(options.parent);
	    
		//$(this).stick_in_parent(options);        
		
		$(this).fixer(options);
	});
}





/* RESIZING FUNCTIONS */

function res() {
	self = this;
	wh = $(window).height();
	ww = $(window).width();
	
	
	/* AS / New */
	
	$('.r-height').each(function(){
		//alert($(this).height());
		var navh = $('body').hasClass('nav-transparent') ? 0 : 32;
		
		h = 1;
		r = false;
		if ($(this).attr('data-height')) h = $(this).attr('data-height');
		if ($(this).attr('data-ref')) {
			r = $(this).attr('data-ref');
			rh = $(this).closest(r).height();
			if ($(this).closest(r).hasClass('padding-v-medium')) rh = rh-100;
			if ($(this).closest(r).hasClass('padding-v-large')) rh = rh-200;
			/*
			maxrh = 0;
			$(this).closest(r).find('.item').each(function() {
				th = $(this).height();
				if (maxrh<th) maxrh = th;
			});
			rh = maxrh;
			*/
		}
		rh = r ? rh : wh;
		nh = ((rh-navh)*h);
		$(this).height(nh);
	});
	
	$('.r-same-height-as-huge-acne').each(function(){
		$(this).height($(this).parent().find('.huge-acne').height());	
	});
	
	/* OLD STUFF - C */
	
	$('.fullheight').each(function(){
		var nheight = $(this).attr('data-size') ? wh*$(this).attr('data-size') : $(this).attr('data-margin') ? wh-$(this).attr('data-margin') : wh;
		$(this).css('height',nheight);
		
		/* Try this with new plugin: http://desandro.github.io/imagesloaded/ */
		
		if ($(this).find('img.refimg')) {
			refImg = $(this).find('img.refimg');
			img = $(this);
			//$(refImg,true).imagesLoaded(function(){
			
				// works very well, but only with images that are already in the cache
				//if ($(refImg).height()<nheight) $(img).css('height',$(refImg).height());
			
			//});
		};
		
	});
	$('.scaletype').each(function(){
		if (wh <= ww) {
			wref = wh;
		} else {
			wref = $(window).width();
		}
		//wref = (wh <= ww) ? wh : ww;
		var nsize = $(this).attr('data-size') ? wref*$(this).attr('data-size') : wref;
		//if ($(window).width()<='768') nsize='50';
		$(this).css('font-size',nsize).css('line-height','1em');
	});
	$('.parentcenter').each(function(){
		var offset = ($(this).parent().height()/$(this).height() < 2) ? '1' : '1.2';
		$(this).css('margin-top',($(this).parent().height()-$(this).height()*offset)/2);
	});
	
	$('.sized').each(function(){
		w = $(this).attr('data-width'); h = $(this).attr('data-height');
		s = $(this).attr('data-size');
		ww = $(window).width();
		
		if (w==undefined) w = $(this).children('video').attr('data-width');
		if (h==undefined) h = $(this).children('video').attr('data-height');
		if (s==undefined) s = $(this).children('video').attr('data-size');
		
		var sf;
		switch (s) {
			case 'regular_wide': sf = 0.75; break;
			case 'large': sf = 0.75; break;
			case 'regular': sf = 0.6; break;
			case 'default': sf = 0.6; break;
		};
		
		if (ww<420) sf = 0.85;
		
		minw = 1000000;
		if (ww>768) minw = ww-(170*2);
		
		
		
		factor = h/w;
		nw = ww*sf;
		if (nw>minw) nw=minw;
		nh = nw*factor;
		
		nnh = wh*sf*1.05;
		if (nnh<nh) {
			nh = nnh;
			nw = nh/factor;
		}
		
		
		
		
		
		$(this).width(nw).height(nh);
		$(this).children('video').width(nw).height(nh);
		
	});
	
	$('.refwidth').each(function(){
		$(this).width($('#'+$(this).attr('data-refwidth')).width());
	});
	
	
	
	$('.productdetail:not(.remove)').each(function(){
		if ($(window).width()>420) {
			h = $(this).find('.images').height();
		} else {
			h = $(this).find('.images').height()*2;
		}
		//alert(h);
		$(this).height(h);
	});
	
	
	
	
	
	
	//$('#video-home:not(.border)').each(function(){
	$('.r-video-cover').each(function(){
		//ww = $(window).width(); wh = $(window).height();
		ww = $(this).parent().width(); wh = $(this).parent().height();
		w = $(this).attr('data-width'); h = $(this).attr('data-height');
		
		if (w==undefined) w = $(this).attr('data-width');
		if (h==undefined) h = $(this).attr('data-height');
		
		nw = w;
		nh = h;
		
		f=w/h;
		wf=ww/wh;
		
		
		if (wf>f) {
			nw = ww;
			nh = nw/f;
			
			nmt = (wh-nh)/2;
			nml = 0;
			
		} else {
			nh = wh;
			nw = nh*f;
			
			nmt = 0;
			nml = (ww-nw)/2;
			
		}
			
		$(this).css({'width':nw,'height':nh});
		$(this).children('video').css({'width':nw,'height':nh,'margin-top':nmt,'margin-left':nml});
		
	});
	
	
	
	
	$('#video-home.border').each(function(){
		ww = $(window).width(); wh = $(window).height();
		w = $(this).attr('data-width'); h = $(this).attr('data-height');
		s = 0.55;
		
		if (w==undefined) w = $(this).children('video').attr('data-width');
		if (h==undefined) h = $(this).children('video').attr('data-height');
		
		nw = w;
		nh = h;
		
		f=w/h;
		wf=ww/wh;
		
		
		if (wf>f) {
			nw = ww*s;
			nh = nw/f;
			
			nmt = (wh-nh)/2;
			nml = (ww-nw)/2;
			
		} else {
			nh = wh*s;
			nw = nh*f;
			
			nmt = (wh-nh)/2;
			nml = (ww-nw)/2;
		}
			
		$(this).css({'width':nw,'height':nh});
		$(this).children('video').css({'width':nw,'height':nh,'margin-top':nmt,'margin-left':nml});
		
	});
	
	$('.minheight').each(function(){
		xoel = $(this);
		xoel_parent = xoel.closest('.text');
		xomargin = xoel.attr('data-minus');
		xonh = xoel_parent.height()-xomargin;
		xoel.css('min-height',xonh);
		
		if (xonh<xoel.height()) {
			xoel_parent.removeClass('no_overflow');
		} else {
			xoel_parent.addClass('no_overflow');	
		};
	});
	
}

res();
$(window).bind('resize', res);




function scrolling() {
    scrollpos = $(window).scrollTop();
	
	
	/* COLLECTIONS SCROLLING */
	
	if (App.router.current().fragments[0]=='fall-2014'||App.router.current().fragments[0]=='summer-2014') {
		
		li = '#nav-li-'+App.router.current().fragments[0]+'-';		
		
		screens = [];
		$('#subcontent_collections .collection .screen').each(function(){
			screens.push({"slug":$(this).attr('id'),"top":$(this).offset().top});
			
		});
		screens.push({"slug":false,"top":1000000000});
		offset = $(window).height()/2;
		
		for (i=0;i<screens.length; i++) {
		
			if (scrollpos>screens[i].top-offset && scrollpos<screens[i+1].top-offset) {
				$(li+screens[i].slug).addClass('on');
				mycss='';
				if ($('body').hasClass('loggedin')) mycss = 'loggedin ';
				$('body').attr('class',mycss+'screen-'+screens[i].slug);
			} else {
				$(li+screens[i].slug).removeClass('on');
				
			}
		}
		
	}
	
	
	
	/* PRODUCTS SCROLLING NEW */
	
	
	if (App.router.current().fragments[0]=='products') {
		
		
		li = '#nav-li-products-';		
		
		screens = [];
		$('.productgrid li.hd-true').each(function(){
			screens.push({"slug":$(this).attr('data-slug'),"top":$(this).offset().top});
		
			
		});
		screens.push({"slug":false,"top":1000000000});
		offset = $(window).height()/2;
		
		for (i=0;i<screens.length; i++) {
		
		
			if (scrollpos>screens[i].top-offset && scrollpos<screens[i+1].top-offset) {
				$(li+screens[i].slug).addClass('scrollon');
			} else {
				$(li+screens[i].slug).removeClass('scrollon');
				
			}
		}
		
	}
	
	
	
    return false;
}
$(window).bind('scroll', scrolling);

	
	
	


function store_select(ev) {
	
	$(ev.target).closest('.storelocator_widget').find('.on').removeClass('on');
	$(ev.target).addClass('on');
	
    return false;
}
$('.store_select').bind('click', store_select);



function go_drilldown(ev) {

	
	if (ev==undefined) ev = this;

	id = $(ev.target).attr('data-drilldown');
	direction = $(ev.target).attr('data-drilldown-direction');

	switch(direction) {
		case 'up': trans = {y : '-100%'}; css = {y: '100%', x:0}; end = {y: 0}; break;
		case 'down': trans = {y : '100%'}; css = {y: '-100%', x:0}; end = {y: 0}; break;
		
		case 'back': trans = {x : '100%'}; css = {x: '-100%', y:0}; end = {x: 0}; break;
		default: trans = {x : '-100%'}; css = {x: '100%', y:0}; end = {x: 0}; break;
	};

    if ($(ev.target).attr('data-drilldown')) {
	    $(ev.target).closest('.drilldown-item').transition(trans);
	    $(ev.target).closest('.drilldown').find('.drilldown-item-'+id).first().css(css).transition(end);
    };
	
    return false;
}
$('.go_drilldown').bind('click', go_drilldown);









function scrolltoseason(ev) {

    /* SCROLL TO POSITION */
    new_top = $('li.slug-'+$(ev.target).attr('data-target')).next().offset().top;
    $('body,html').animate({scrollTop:new_top}, 500);
	
    return false;
}
$('.scrolltoseason').bind('click', scrolltoseason);



function toggle_navigation(ev) {

    $('#navigation_bar').toggleClass('on');
	
    return false;
}
$('#button-navigation .toggle_navigation').bind('click', toggle_navigation);






/* AS TOP MENU */

function navigation_bar_click(ev) {
	self = this;

	$('#navigation_bar').removeClass('on');
		
    //return false;
}
$('#navigation_bar ul > li > a').bind('click', navigation_bar_click);

function navigation_bar_subnav_click(ev) {
	self = this;

	$(this).addClass('clicked');
	
	setTimeout(function(){
		$('#navigation_bar').removeClass('on');
		$('#navigation_bar').addClass('all_closed');
		$(self).removeClass('clicked');
		
		setTimeout(function(){
			$('#navigation_bar').removeClass('all_closed');
		},400);
	},400);
	
    //return false;
}
$('#navigation_bar ul.subnav li a').bind('click', navigation_bar_subnav_click);


function navigation_bar_stores_hover(ev) {
	self = this;

	$('#nav-stores-search-input').focus();
	
    //return false;
}
$('#navigation_bar li.nav-stores').bind('mouseenter', navigation_bar_stores_hover);



$('input#tags').keypress(function() {

    $('#formcont').fadeIn('slow');
    $('#next').hide('slow');
    $(this).focus();
});


function navigation_bar_stores_search_activate(ev) {
	self = this;
	
	//alert($(self).val());
	
	if ($(self).val()=='') {
					
		$('#navigation_bar li.nav-stores').removeClass('search-active');

	} else {
			
		$('#navigation_bar li.nav-stores').addClass('search-active');
	}

	
    //return false;
}
$('#navigation_bar #nav-stores-search-input').bind('keyup', navigation_bar_stores_search_activate);





function navigation_bar_bag_toggle(ev) {	
	$('body').toggleClass('bag-active');
    return false;
}
$('#navigation_bar .toggle_bag').bind('click', navigation_bar_bag_toggle);


function navigation_bar_bag_peek(ev) {	
	$('body').addClass('bag-peek');
    return false;
}
$('#navigation_bar .toggle_bag').bind('mouseenter', navigation_bar_bag_peek);

function navigation_bar_bag_unpeek(ev) {	
	$('body').removeClass('bag-peek');
    return false;
}
$('#navigation_bar .toggle_bag').bind('mouseleave', navigation_bar_bag_unpeek);






function navigation_bar_search_toggle(ev) {
	$('body').removeClass('bag-active').addClass('search-active');
	$('#global_search_field').val('').focus();
    return false;
}
$('#navigation_bar .toggle_search').bind('click', navigation_bar_search_toggle);


function navigation_bar_search_close(ev) {	
	$('body').removeClass('search-active');
	$('#global_search_field').blur();
    return false;
}
$('#navigation_bar .close_search').bind('click', navigation_bar_search_close);






})(jQuery, Backbone);
